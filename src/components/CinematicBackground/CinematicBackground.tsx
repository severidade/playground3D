import { useFrame, useThree, extend } from '@react-three/fiber';
import { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { ShaderMaterial } from 'three';

// ---------------- SHADER ----------------
const cinematicShader = {
  uniforms: {
    uTime: { value: 0 },
    scrollOffset: { value: 0 },
    aspect: { value: 1 },
    texture1: { value: null },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;

    uniform sampler2D texture1;
    uniform float uTime;
    uniform float scrollOffset;
    uniform float aspect;

    vec2 hash(vec2 p) {
      p = vec2(
        dot(p, vec2(127.1, 311.7)),
        dot(p, vec2(269.5, 183.3))
      );
      return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
    }

    float noise(vec2 p) {
      const float K1 = 0.366025404;
      const float K2 = 0.211324865;

      vec2 i = floor(p + (p.x + p.y) * K1);
      vec2 a = p - i + (i.x + i.y) * K2;

      float m = step(a.y, a.x);
      vec2 o = vec2(m, 1.0 - m);
      vec2 b = a - o + K2;
      vec2 c = a - 1.0 + 2.0 * K2;

      vec3 h = max(0.5 - vec3(dot(a,a), dot(b,b), dot(c,c)), 0.0);
      vec3 n = h * h * h * h * vec3(
        dot(a, hash(i + 0.0)),
        dot(b, hash(i + o)),
        dot(c, hash(i + 1.0))
      );

      return dot(n, vec3(70.0));
    }

    void main() {
      vec2 uv = vUv;
      uv.x *= aspect;

      float move = scrollOffset * 0.25 + uTime * 0.05;

      float n = noise(uv * 2.0 + move);

      vec2 tiled = fract(uv + move * 0.1);

      vec4 tex = texture2D(texture1, tiled);

      float mixAmount = 0.35;

      vec4 finalColor = mix(tex, vec4(vec3(n), 1.0), mixAmount);

      gl_FragColor = finalColor;
    }
  `,
};

// ------------- MATERIAL CLASS -------------
class CinematicMaterial extends ShaderMaterial {
  constructor() {
    super(cinematicShader);
  }
}

extend({ CinematicMaterial });

// ---------------- COMPONENTE ----------------
export default function CinematicBackground() {
  const matRef = useRef<any>();

  // Correto para Vite/React — imagem em /public
  const texture = useTexture('/texture/BarkPoplar001_REFL_2K.jpg');

  const { viewport } = useThree();

  useFrame((state) => {
    if (!matRef.current) return;

    matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    matRef.current.uniforms.scrollOffset.value = window.scrollY * 0.001;
    matRef.current.uniforms.aspect.value = viewport.aspect;
  });

  return (
    <mesh scale={[10, 10, 1]}>
      <planeGeometry args={[1, 1]} />
      <cinematicMaterial ref={matRef} texture1={texture} />
    </mesh>
  );
}
