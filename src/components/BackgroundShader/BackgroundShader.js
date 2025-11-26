import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

// Definição do material do shader
const BackgroundMaterial = shaderMaterial(
  // Uniforms (variáveis JS que o shader pode usar)
  {
    u_time: 0.0,
    u_resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
    u_color_start: new THREE.Color('#030c1a'), // Cor inicial (roxo escuro)
    u_color_end: new THREE.Color('#ffffffb3'), // Cor final (roxo claro)
  },
  // Vertex Shader (simplificado para um plano de tela cheia)
  /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader (criação do efeito de gradiente/ruído animado)
  /* glsl */`
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec3 u_color_start;
    uniform vec3 u_color_end;
    varying vec2 vUv;

    // Função de ruído simples (existem funções melhores, mas esta é básica)
    float noise(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {
      // Gradiente suave baseado na posição vertical (vUv.y)
      vec3 color = mix(u_color_start, u_color_end, vUv.y);

      // Adiciona ruído animado para um efeito mais orgânico
      float time_factor = u_time * 0.1;
      vec2 noise_coord = vUv * 5.0 + time_factor;
      float noise_val = noise(noise_coord);
      color += noise_val * 0.1; // Adiciona um pouco de variação de cor

      gl_FragColor = vec4(color, 1.0);
    }
  `,
);

// Estende o three.js para que possamos usar a tag JSX <backgroundMaterial>
extend({ BackgroundMaterial });
