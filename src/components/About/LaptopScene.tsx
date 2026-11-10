import { Suspense, useEffect, useLayoutEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Center, Environment, Lightformer, Loader, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

/*
 * Model 3D: "Laptop" oleh Ulyssa (https://sketchfab.com/tora2536)
 * Lisensi CC-BY-4.0 -> wajib mencantumkan kredit ini di website.
 * Sumber: https://sketchfab.com/3d-models/laptop-87b4690e7e11487795d4cbd33f945f08
 */
const MODEL_URL = '/models/laptop.glb';

/** Sudut pandang awal (derajat). Ubah untuk mengatur posisi laptop saat pertama muncul. */
const START_AZIMUTH = 38; // putar ke kanan/kiri
const START_ELEVATION = 26; // naik/turun
/** Lebar & tinggi laptop (satuan model) yang harus muat di layar, dipakai untuk hitung jarak kamera. */
const FIT_WIDTH = 7.6;
const FIT_HEIGHT = 5.0;

export interface LaptopSceneProps {
  /** gambar yang tampil di layar laptop (rasio 2:1, mis. 2048x1024) */
  screenSrc?: string;
  /** dipanggil saat user pertama kali menyentuh/menyeret model */
  onInteract?: () => void;
}

function Laptop({ screenSrc }: { screenSrc?: string }) {
  const { scene } = useGLTF(MODEL_URL);
  const invalidate = useThree(state => state.invalidate);

  // Ganti isi layar laptop dengan gambarmu sendiri.
  useEffect(() => {
    if (!screenSrc) return;
    let texture: THREE.Texture | undefined;
    let cancelled = false;
    new THREE.TextureLoader().load(screenSrc, tex => {
      if (cancelled) return tex.dispose();
      tex.flipY = false; // aturan glTF
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      texture = tex;
      scene.traverse(obj => {
        const mesh = obj as THREE.Mesh;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        mats.forEach(m => {
          const mat = m as THREE.MeshStandardMaterial;
          if (mat && mat.emissiveMap) {
            mat.emissiveMap = tex;
            mat.needsUpdate = true;
          }
        });
      });
      invalidate(); // frameloop="demand": minta render ulang setelah tekstur ganti
    });
    return () => {
      cancelled = true;
      texture?.dispose();
    };
  }, [scene, screenSrc, invalidate]);

  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

/** Atur jarak kamera supaya laptop selalu muat, di desktop maupun HP. */
function FitCamera({ controls }: { controls: React.RefObject<OrbitControlsImpl> }) {
  const { camera, size } = useThree();
  const first = useRef(true);

  useLayoutEffect(() => {
    const cam = camera as THREE.PerspectiveCamera;
    const vFov = THREE.MathUtils.degToRad(cam.fov);
    const aspect = size.width / Math.max(1, size.height);
    const byHeight = FIT_HEIGHT / (2 * Math.tan(vFov / 2));
    const byWidth = FIT_WIDTH / aspect / (2 * Math.tan(vFov / 2));
    const distance = Math.max(byHeight, byWidth);

    if (first.current) {
      first.current = false;
      const az = THREE.MathUtils.degToRad(START_AZIMUTH);
      const el = THREE.MathUtils.degToRad(START_ELEVATION);
      cam.position.set(Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az));
    }
    // pertahankan arah putaran user, hanya ubah jaraknya
    cam.position.setLength(distance);
    cam.updateProjectionMatrix();
    controls.current?.update();
  }, [camera, size.width, size.height, controls]);

  return null;
}

export default function LaptopScene({ screenSrc, onInteract }: LaptopSceneProps) {
  const controls = useRef<OrbitControlsImpl>(null);

  // Di HP: swipe vertikal tetap scroll halaman, swipe horizontal memutar laptop.
  useEffect(() => {
    const el = controls.current?.domElement as HTMLElement | undefined;
    if (el) el.style.touchAction = 'pan-y';
  }, []);

  return (
    <>
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        camera={{ fov: 30, near: 0.1, far: 100, position: [0, 2, 7] }}
        gl={{ alpha: true, antialias: true }}
        style={{ touchAction: 'pan-y' }}
      >
        <Suspense fallback={null}>
          <Laptop screenSrc={screenSrc} />

          {/* Pencahayaan lokal (tanpa file HDR dari internet) */}
          <Environment resolution={256}>
            <Lightformer form="rect" intensity={2.2} position={[0, 5, 4]} scale={[10, 4, 1]} />
            <Lightformer form="rect" intensity={1.4} position={[-6, 2, 2]} rotation-y={Math.PI / 2} scale={[8, 4, 1]} />
            <Lightformer form="rect" intensity={1.0} position={[6, 1, -2]} rotation-y={-Math.PI / 2} scale={[8, 4, 1]} />
            <Lightformer form="ring" intensity={1.2} position={[0, 3, -6]} scale={6} />
          </Environment>
          <ambientLight intensity={0.35} />
          <directionalLight position={[3, 6, 4]} intensity={1.1} />
        </Suspense>

        <OrbitControls
          ref={controls}
          makeDefault
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.8}
          minPolarAngle={Math.PI * 0.12}
          maxPolarAngle={Math.PI * 0.62}
          onStart={onInteract}
        />
        <FitCamera controls={controls} />
      </Canvas>
      <Loader
        containerStyles={{ background: 'transparent' }}
        barStyles={{ background: '#0f1115' }}
        dataStyles={{ color: '#0f1115', fontFamily: 'Inter, sans-serif', fontSize: '12px' }}
      />
    </>
  );
}

useGLTF.preload(MODEL_URL);
