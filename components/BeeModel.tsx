'use client';

/**
 * BeeModel.tsx v23
 * - Fixed isDragging reference error (now passed as prop)
 * - All features retained
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// ── Camera ───────────────────────────────────────────────────────────────────
const CAM_Y   = 0.5;
const CAM_Z   = 8.0;
const FOV_DEG = 48;
const VIS_H   = 2 * Math.tan(FOV_DEG * 0.5 * (Math.PI / 180)) * CAM_Z; // ≈7.12

function visW() { return VIS_H * (window.innerWidth / window.innerHeight); }

const WORLD_T = CAM_Y + VIS_H * 0.44;
const WORLD_B = CAM_Y - VIS_H * 0.44;

/** screen pixel → world coordinate, clamped to visible frustum */
function px2w(px: number, py: number) {
  const vW = window.innerWidth, vH = window.innerHeight;
  const wx = (px / vW - 0.5) * visW();
  const wy = Math.max(WORLD_B, Math.min(WORLD_T, CAM_Y + (0.5 - py / vH) * VIS_H));
  return { x: wx, y: wy };
}

// ── Section map ───────────────────────────────────────────────────────────────
const SECS = [
  { id: 'hero',        right: false },
  { id: 'what',        right: true  },
  { id: 'account',     right: false },
  { id: 'apikeys',     right: true  },
  { id: 'setup',       right: false },
  { id: 'profile',     right: true  },
  { id: 'scanning',    right: false },
  { id: 'rules',       right: true  },
  { id: 'results',     right: false },
  { id: 'methods',     right: true  },
  { id: 'plans',       right: false },
  { id: 'history',     right: true  },
  { id: 'badges',      right: false },
  { id: 'rep',         right: true  },
  { id: 'leaderboard', right: false },
  { id: 'conduct',     right: true  },
  { id: 'faq',         right: false },
  { id: 'download',    right: true  },
] as const;

interface Target { x: number; y: number }

function getFirstLineRect(el: HTMLElement): DOMRect {
  try {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const firstText = walker.nextNode() as Text | null;
    if (firstText && firstText.textContent) {
      const range = document.createRange();
      range.setStart(firstText, 0);
      range.setEnd(firstText, firstText.textContent.length);
      const rects = Array.from(range.getClientRects());
      if (rects.length > 0) return rects[0];
    }
  } catch (_) {}
  return el.getBoundingClientRect();
}

function calcTarget(idx: number): Target {
  const { id, right } = SECS[idx];
  const vW = window.innerWidth, vH = window.innerHeight;

  let targetEl: HTMLElement | null = null;

  if (right) {
    const contentDiv = document.querySelector(`#${id} .content`);
    if (contentDiv) {
      const lead = contentDiv.querySelector('p.sec-lead') as HTMLElement | null;
      targetEl = lead || contentDiv.querySelector('p:first-of-type') as HTMLElement | null;
    }
    if (!targetEl) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        const edgePx = Math.min(rect.right, vW - 20);
        const midY = rect.top + rect.height * 0.5;
        const pos = px2w(edgePx, midY);
        pos.x = Math.max(-visW() * 0.40, Math.min(visW() * 0.40, pos.x));
        pos.y = Math.max(WORLD_B + 0.12, Math.min(WORLD_T - 0.12, pos.y));
        return pos;
      }
    }
  } else {
    targetEl = document.querySelector(id === 'hero' ? '#hero h1' : `#${id} h2`);
  }

  if (targetEl) {
    const lineRect = getFirstLineRect(targetEl);
    const edgePx = Math.min(lineRect.right + 2, vW - 20);
    const midY   = lineRect.top + lineRect.height * 0.5;
    const pos    = px2w(edgePx, midY);
    pos.x = Math.max(-visW() * 0.40, Math.min(visW() * 0.40, pos.x));
    pos.y = Math.max(WORLD_B + 0.12,  Math.min(WORLD_T - 0.12, pos.y));
    return pos;
  }

  const frac = idx / Math.max(SECS.length - 1, 1);
  return {
    x: right ? visW() * 0.33 : visW() * 0.1,
    y: WORLD_T * 0.5 - frac * (WORLD_T * 0.5 - WORLD_B * 0.5),
  };
}

type Phase = 'FLY' | 'HOVER' | 'FOLLOW' | 'SCARED';

const _eu = new THREE.Euler(); const _q = new THREE.Quaternion();
function addLook(bone: THREE.Object3D, pitch: number, yaw: number) {
  _eu.set(pitch, yaw, 0, 'YXZ');
  _q.setFromEuler(_eu);
  bone.quaternion.multiply(_q);
}

function PollenTrail({ posRef }: { posRef: React.MutableRefObject<THREE.Vector3> }) {
  const N = 14;
  const pos = useRef(new Float32Array(N * 3));
  const vel = useRef(new Float32Array(N * 3));
  const age = useRef(new Float32Array(N));
  const geo = useRef<THREE.BufferGeometry>(null);
  const rdy = useRef(false);
  if (!rdy.current) {
    rdy.current = true;
    for (let i = 0; i < N; i++) {
      pos.current[i*3]   = (Math.random()-.5)*.2;
      pos.current[i*3+1] = (Math.random()-.5)*.2;
      pos.current[i*3+2] = (Math.random()-.5)*.08;
      vel.current[i*3]   = (Math.random()-.5)*.007;
      vel.current[i*3+1] = -.004-Math.random()*.005;
      vel.current[i*3+2] = (Math.random()-.5)*.004;
      age.current[i]     = Math.random()*1.8;
    }
  }
  useFrame((_, dt) => {
    if (!geo.current) return;
    const p=pos.current, v=vel.current, a=age.current, bp=posRef.current;
    for (let i=0; i<N; i++) {
      a[i] -= dt;
      if (a[i] < 0) {
        p[i*3]  =bp.x+(Math.random()-.5)*.14;
        p[i*3+1]=bp.y+(Math.random()-.5)*.14;
        p[i*3+2]=bp.z+(Math.random()-.5)*.06;
        v[i*3]  =(Math.random()-.5)*.007;
        v[i*3+1]=-.003-Math.random()*.006;
        v[i*3+2]=(Math.random()-.5)*.004;
        a[i]=.8+Math.random()*.9;
      }
      p[i*3]+=v[i*3]; p[i*3+1]+=v[i*3+1]; p[i*3+2]+=v[i*3+2];
    }
    geo.current.attributes.position.needsUpdate = true;
  });
  return (
    <points>
      <bufferGeometry ref={geo}>
        <bufferAttribute attach="attributes-position" args={[pos.current, 3]} />
      </bufferGeometry>
      <pointsMaterial size={.022} color="#ffe033" transparent opacity={.65} depthWrite={false} sizeAttenuation />
    </points>
  );
}

// ── User rotation state (global for simplicity) ───────────────────────────────
let userRotX = 0;
let userRotY = 0;

// ── BeeScene ──────────────────────────────────────────────────────────────────
const FLY_SPD   = 5.5;
const HOVER_DUR = 4.0;
const ARC_STRENGTH = 0.15;

const FOLLOW_ACCEL = 10.0;
const FOLLOW_DAMP = 4.0;
const MAX_SPEED = 3.5;

const SCARED_DUR = 1.0;
const SCARED_FORCE = 15.0;

interface SceneProps {
  mxRef:   React.MutableRefObject<number>;
  myRef:   React.MutableRefObject<number>;
  tgtRef:  React.MutableRefObject<Target>;
  sIdxRef: React.MutableRefObject<number>;
  phaseRef: React.MutableRefObject<Phase>;
  onHoverChange: (hovered: boolean) => void;
  onDragChange: (dragging: boolean) => void;
  dragging: boolean; // added
}

function BeeScene({ mxRef, myRef, tgtRef, sIdxRef, phaseRef, onHoverChange, onDragChange, dragging }: SceneProps) {
  const { scene, animations } = useGLTF('/assets/bee/scene.gltf');
  const { raycaster, camera } = useThree();

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load('/assets/bee/textures/material_0_diffuse.png', (diffuse) => {
      diffuse.flipY = false;
      diffuse.colorSpace = THREE.SRGBColorSpace;
      loader.load('/assets/bee/textures/material_0_normal.png', (normalMap) => {
        normalMap.flipY = false;
        loader.load('/assets/bee/textures/material_0_occlusion.png', (aoMap) => {
          aoMap.flipY = false;
          loader.load('/assets/bee/textures/material_0_specularGlossiness.png', (specMap) => {
            specMap.flipY = false;
            scene.traverse((obj) => {
              const mesh = obj as THREE.Mesh;
              if (!mesh.isMesh) return;
              const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              mats.forEach((mat: any) => {
                if (!mat) return;
                if (!mat.map)          { mat.map = diffuse; }
                if ('normalMap' in mat && !mat.normalMap) {
                  mat.normalMap   = normalMap;
                  mat.normalScale = new THREE.Vector2(0.8, 0.8);
                }
                if ('aoMap' in mat && !mat.aoMap) {
                  mat.aoMap           = aoMap;
                  mat.aoMapIntensity  = 0.6;
                }
                if ('specularMap' in mat && !mat.specularMap) {
                  mat.specularMap = specMap;
                }
                mat.needsUpdate = true;
              });
            });
          });
        });
      });
    });
  }, [scene]);

  const mixerRef  = useRef<THREE.AnimationMixer | null>(null);
  const acts      = useRef<Record<string, THREE.AnimationAction>>({});
  const curClip   = useRef('');
  const play = useCallback((name: string, loop=true, fade=.3) => {
    if (!acts.current[name] || curClip.current === name) return;
    const prev = acts.current[curClip.current];
    const next = acts.current[name];
    next.reset();
    next.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, loop ? Infinity : 1);
    next.clampWhenFinished = !loop;
    next.fadeIn(fade).play();
    if (prev) prev.fadeOut(fade);
    curClip.current = name;
  }, []);
  useEffect(() => {
    if (mixerRef.current) return;
    const mx = new THREE.AnimationMixer(scene);
    mixerRef.current = mx;
    animations.forEach(c => { acts.current[c.name] = mx.clipAction(c); });
    play('_bee_hover', true, 0);
    return () => { mx.stopAllAction(); };
  }, [scene, animations, play]);

  const headBone = useRef<THREE.Object3D|null>(null);
  const lAnt     = useRef<THREE.Object3D|null>(null);
  const rAnt     = useRef<THREE.Object3D|null>(null);
  useEffect(() => {
    scene.traverse(o => {
      if (o.name === 'head_Jnt.4_4')           headBone.current = o;
      if (o.name === 'l_antenna_jnt01.11_11')  lAnt.current     = o;
      if (o.name === 'r_antenna_jnt01.16_16')  rAnt.current     = o;
    });
  }, [scene]);

  const grp     = useRef<THREE.Group>(null);
  const beePos  = useRef(new THREE.Vector3(5.0, 1.8, 0));
  const phaseR  = useRef<Phase>('FLY');
  const phaseT  = useRef(0);
  const prevIdx = useRef(-1);
  const rotX=useRef(0), rotY=useRef(0), rotZ=useRef(0);
  const hp      = useRef(Math.random() * Math.PI * 2);
  const tHP=useRef(0), cHP=useRef(0), tHY=useRef(0), cHY=useRef(0);

  const velX = useRef(0);
  const velY = useRef(0);

  const arcPhase = useRef(Math.random() * Math.PI * 2);
  const arcFreq  = useRef(2 + Math.random() * 2);

  // Expose phase for cursor effect
  useEffect(() => {
    phaseRef.current = phaseR.current;
  }, [phaseR.current]);

  // Hover detection via raycasting each frame
  useFrame((state) => {
    if (grp.current) {
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(state.mouse, state.camera);
      const intersects = raycaster.intersectObject(grp.current, true);
      onHoverChange(intersects.length > 0);
    }
  });

  // Handle click on bee via window event (so UI remains clickable)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      const mouse = new THREE.Vector2(x, y);
      raycaster.setFromCamera(mouse, camera);
      if (grp.current) {
        const intersects = raycaster.intersectObject(grp.current, true);
        if (intersects.length > 0) {
          if (phaseR.current !== 'SCARED') {
            phaseR.current = 'SCARED';
            phaseT.current = 0;
          }
        }
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [raycaster, camera]);

  useFrame((_, dt) => {
    const mx = mixerRef.current;
    if (!mx || !grp.current) return;
    phaseT.current += dt;
    hp.current     += dt;
    const t=phaseT.current, hpv=hp.current, bp=beePos.current;
    const tgt = tgtRef.current;

    if (sIdxRef.current !== prevIdx.current) {
      prevIdx.current = sIdxRef.current;
      if (phaseR.current === 'FOLLOW' || phaseR.current === 'HOVER' || phaseR.current === 'SCARED') {
        phaseR.current = 'FLY';
        phaseT.current = 0;
        arcPhase.current = Math.random() * Math.PI * 2;
        arcFreq.current = 2 + Math.random() * 2;
      }
    }

    play('_bee_hover', true, .3);

    const vw = visW();
    const clampX = (x: number) => Math.max(-vw * 0.40, Math.min(vw * 0.40, x));
    const clampY = (y: number) => Math.max(WORLD_B + 0.08, Math.min(WORLD_T - 0.08, y));

    const getCursorWorld = () => {
      const tx = mxRef.current * (vw * 0.28);
      const ty = myRef.current * (VIS_H * 0.28) + CAM_Y;
      return { x: clampX(tx), y: clampY(ty) };
    };

    let targetRotX = rotX.current;
    let targetRotY = rotY.current;
    let targetRotZ = rotZ.current;

    switch (phaseR.current) {
      case 'FLY': {
        const dx = tgt.x - bp.x;
        const dy = tgt.y - bp.y;
        const dist = Math.sqrt(dx*dx + dy*dy) + 0.001;

        const spd = Math.min(dist * 2.2, FLY_SPD) * dt;
        const baseX = (dx / dist) * spd;
        const baseY = (dy / dist) * spd;

        const progress = 1 - Math.max(0, (dist - 0.2) / 5);
        const perpX = -dy / dist;
        const perpY =  dx / dist;
        const arcAmount = Math.sin(progress * Math.PI * arcFreq.current + arcPhase.current) * ARC_STRENGTH * spd;

        bp.x = clampX(bp.x + baseX + perpX * arcAmount + Math.sin(hpv*2.1)*.0015);
        bp.y = clampY(bp.y + baseY + perpY * arcAmount + Math.sin(hpv*3.2)*.0018);

        const velX_ = baseX + perpX * arcAmount;
        const velY_ = baseY + perpY * arcAmount;
        const velLen = Math.sqrt(velX_*velX_ + velY_*velY_) + 0.001;

        targetRotY = Math.atan2(velX_, velY_);
        targetRotX = -(velY_ / velLen) * 0.22;
        targetRotZ = -(velX_ / velLen) * 0.30;

        tHP.current = 0;
        tHY.current = 0;

        if (dist < 0.1) {
          bp.set(tgt.x, tgt.y, 0);
          phaseR.current = 'HOVER';
          phaseT.current = 0;
          velX.current = 0;
          velY.current = 0;
        }
        break;
      }

      case 'HOVER': {
        bp.set(
          clampX(tgt.x + Math.sin(hpv*1.1)*.065),
          clampY(tgt.y + Math.sin(hpv*2.2)*.048),
          0,
        );
        targetRotY = -0.55;
        targetRotX = 0.06;
        targetRotZ = 0;

        const tw = Math.sin(hpv*1.7)*.13;
        if (lAnt.current) lAnt.current.rotation.z =  tw;
        if (rAnt.current) rAnt.current.rotation.z = -tw;

        tHP.current = 0.07;
        tHY.current = -0.30;

        if (t >= HOVER_DUR) {
          phaseR.current = 'FOLLOW';
          phaseT.current = 0;
          velX.current = 0;
          velY.current = 0;
        }
        break;
      }

      case 'FOLLOW': {
        const cursor = getCursorWorld();
        const dx = cursor.x - bp.x;
        const dy = cursor.y - bp.y;

        const ax = dx * FOLLOW_ACCEL - velX.current * FOLLOW_DAMP;
        const ay = dy * FOLLOW_ACCEL - velY.current * FOLLOW_DAMP;

        velX.current += ax * dt;
        velY.current += ay * dt;

        const speed = Math.sqrt(velX.current*velX.current + velY.current*velY.current);
        if (speed > MAX_SPEED) {
          velX.current = (velX.current / speed) * MAX_SPEED;
          velY.current = (velY.current / speed) * MAX_SPEED;
        }

        bp.x = clampX(bp.x + velX.current * dt);
        bp.y = clampY(bp.y + velY.current * dt);

        const velLen = Math.sqrt(velX.current*velX.current + velY.current*velY.current) + 0.001;
        if (velLen > 0.01) {
          targetRotY = Math.atan2(velX.current, velY.current);
          targetRotX = -(velY.current / velLen) * 0.15;
          targetRotZ = -(velX.current / velLen) * 0.20;
        } else {
          targetRotY = -0.3;
          targetRotX = 0;
          targetRotZ = 0;
        }

        tHP.current = 0;
        tHY.current = 0;
        break;
      }

      case 'SCARED': {
        const cursor = getCursorWorld();
        const dx = bp.x - cursor.x;
        const dy = bp.y - cursor.y;
        const dist = Math.sqrt(dx*dx + dy*dy) + 0.001;
        const forceX = (dx / dist) * SCARED_FORCE * dt;
        const forceY = (dy / dist) * SCARED_FORCE * dt;

        velX.current += forceX;
        velY.current += forceY;

        const speed = Math.sqrt(velX.current*velX.current + velY.current*velY.current);
        if (speed > MAX_SPEED * 1.5) {
          velX.current = (velX.current / speed) * MAX_SPEED * 1.5;
          velY.current = (velY.current / speed) * MAX_SPEED * 1.5;
        }

        bp.x = clampX(bp.x + velX.current * dt);
        bp.y = clampY(bp.y + velY.current * dt);

        const velLen = Math.sqrt(velX.current*velX.current + velY.current*velY.current) + 0.001;
        targetRotY = Math.atan2(velX.current, velY.current);
        targetRotX = -(velY.current / velLen) * 0.22;
        targetRotZ = -(velX.current / velLen) * 0.30;

        tHP.current = 0;
        tHY.current = 0;

        if (t >= SCARED_DUR) {
          phaseR.current = 'FOLLOW';
          phaseT.current = 0;
        }
        break;
      }
    }

    // Apply user rotation offset if dragging (using prop)
    if (dragging) {
      // userRotX/Y accumulated in root
    } else {
      userRotX *= 0.95;
      userRotY *= 0.95;
      if (Math.abs(userRotX) < 0.001) userRotX = 0;
      if (Math.abs(userRotY) < 0.001) userRotY = 0;
    }

    rotY.current += (targetRotY + userRotY - rotY.current) * 0.1;
    rotX.current += (targetRotX + userRotX - rotX.current) * 0.1;
    rotZ.current += (targetRotZ - rotZ.current) * 0.1;

    grp.current.position.copy(bp);
    grp.current.rotation.set(rotX.current, rotY.current, rotZ.current, 'YXZ');

    mx.update(dt);
    cHP.current += (tHP.current - cHP.current) * .05;
    cHY.current += (tHY.current - cHY.current) * .05;
    if (headBone.current) addLook(headBone.current, cHP.current, cHY.current);
  });

  return (
    <>
      <PollenTrail posRef={beePos} />
      <group ref={grp} scale={0.12}>
        <primitive object={scene} />
      </group>
    </>
  );
}

function Lights() {
  const buzzRef = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    if (!buzzRef.current) return;
    buzzRef.current.intensity = .45 + Math.sin(clock.getElapsedTime()*18)*.18;
  });
  return (
    <>
      <ambientLight intensity={1.0} />
      <directionalLight position={[4, 7, 6]}  intensity={2.0} color="#fff3c4" />
      <directionalLight position={[-3, 3, 5]} intensity={1.3} color="#ffc857" />
      <directionalLight position={[0, -4, 4]} intensity={0.4} color="#c4d8ff" />
      <directionalLight position={[-2, 2,-4]} intensity={0.7} color="#ffaa33" />
      <pointLight position={[0,-.6,2.5]} color="#ff9500" intensity={1.2} distance={6} />
      <pointLight ref={buzzRef} position={[0,.3,1.2]} color="#ffe566" intensity={.45} distance={4} />
    </>
  );
}

// ── Root with drag handling and cursor effect ─────────────────────────────────
export default function BeeModel() {
  const mxRef   = useRef(0);
  const myRef   = useRef(0);
  const tgtRef  = useRef<Target>({ x: 3.0, y: .5 });
  const sIdxRef = useRef(0);
  const phaseRef = useRef<Phase>('FLY');

  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showRing, setShowRing] = useState(false);

  // Mouse move for cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mxRef.current = (e.clientX / window.innerWidth - 0.5) * 2;
      myRef.current = -(e.clientY / window.innerHeight - 0.5) * 2;
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Drag start: only if hovered
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (hovered) {
        setDragging(true);
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };
    window.addEventListener('mousedown', handleMouseDown);
    return () => window.removeEventListener('mousedown', handleMouseDown);
  }, [hovered]);

  // Drag move: accumulate user rotation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      userRotY += dx * 0.005;
      userRotX += dy * 0.005;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [dragging]);

  // Drag end
  useEffect(() => {
    const handleMouseUp = () => setDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  // Cursor style
  useEffect(() => {
    if (dragging) document.body.style.cursor = 'grabbing';
    else if (hovered) document.body.style.cursor = 'grab';
    else document.body.style.cursor = 'default';
  }, [dragging, hovered]);

  // Show ring only when following
  useEffect(() => {
    setShowRing(phaseRef.current === 'FOLLOW');
  }, [phaseRef.current]);

  useEffect(() => {
    const init = () => { tgtRef.current = calcTarget(0); };
    const tid = setTimeout(init, 450);
    window.addEventListener('resize', init);
    return () => { clearTimeout(tid); window.removeEventListener('resize', init); };
  }, []);

  useEffect(() => {
    let lastIdx = 0;
    const h = () => {
      let idx = 0;
      SECS.forEach(({ id }, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.55) idx = i;
      });
      if (idx !== lastIdx) {
        lastIdx = idx;
        sIdxRef.current = idx;
        tgtRef.current  = calcTarget(idx);
      }
    };
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      {/* Cursor attraction ring – cyan pulse */}
      {showRing && (
        <div
          style={{
            position: 'fixed',
            left: cursorPos.x - 35,
            top: cursorPos.y - 35,
            width: 70,
            height: 70,
            borderRadius: '50%',
            border: '2px solid rgba(0, 255, 255, 0.7)',
            boxShadow: '0 0 30px cyan',
            pointerEvents: 'none',
            zIndex: 20,
            animation: 'pulseCyan 1.2s infinite',
          }}
        />
      )}
      <style>{`
        @keyframes pulseCyan {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 0.9; }
          100% { transform: scale(1); opacity: 0.5; }
        }
      `}</style>

      <div style={{ position:'fixed', inset:0, zIndex:15, pointerEvents:'none' }}>
        <Canvas
          camera={{ position:[0, CAM_Y, CAM_Z], fov: FOV_DEG }}
          gl={{ alpha:true, antialias:true }}
          style={{ background:'transparent', pointerEvents: 'none' }}
        >
          <Lights />
          <BeeScene
            mxRef={mxRef}
            myRef={myRef}
            tgtRef={tgtRef}
            sIdxRef={sIdxRef}
            phaseRef={phaseRef}
            onHoverChange={setHovered}
            onDragChange={setDragging}
            dragging={dragging} // passed prop
          />
        </Canvas>
      </div>
    </>
  );
}

useGLTF.preload('/assets/bee/scene.gltf');

// Keep last mouse coordinates global for drag
let lastMouseX = 0, lastMouseY = 0;