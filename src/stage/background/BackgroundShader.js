import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

const BackgroundMaterial = shaderMaterial(
  {
    u_time: 0.0,
    u_resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),

    // 🎨 Degradê frio
    u_color_start: new THREE.Color('#535456'), // (base)
    u_color_end: new THREE.Color('#AEB0B4'), // (topo)
  },

  /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  /* glsl */`
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec3 u_color_start;
    uniform vec3 u_color_end;
    varying vec2 vUv;

    float noise(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {
      vec3 color = mix(u_color_start, u_color_end, vUv.y);

      float time_factor = u_time * 0.1;
      vec2 noise_coord = vUv * 5.0 + time_factor;
      float noise_val = noise(noise_coord);
      color += noise_val * 0.09;

      // vinehta
      float vignette = smoothstep(0.9, 0.4, length(vUv - 0.5));
      color *= vignette;
    
      gl_FragColor = vec4(color, 1.0);
    }
  `,
);
// Estende o three.js para que possamos usar a tag JSX <backgroundMaterial>
extend({ BackgroundMaterial });
