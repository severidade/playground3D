# 🧩 Configuração do projeto React com Three.js, Fiber, Drei e GSAP

## ⚙️ 1. Pré-requisitos

Certifique-se de que já tem instalados:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

Verifique as versões:

```bash
node -v
npm -v
```

## 🪄 2. Criar o projeto

Se ainda não criou o projeto React:

npm create vite@latest meu-projeto -- --template react
cd meu-projeto
npm install


Se já possui um projeto React, pule para o próximo passo.

## 🎨 3. Instalar dependências

Rode este comando dentro da pasta do projeto:
```bash

npm install three @react-three/fiber @react-three/drei gsap
```

Essas bibliotecas são:

- three → base do Three.js
- @react-three/fiber → integra o Three.js ao React
- @react-three/drei → utilitários e componentes prontos (como OrbitControls, Environment, etc.)
- gsap → biblioteca de animações poderosas (suporta timelines, ScrollTrigger, etc.)

## 🚀 4. (Opcional) Adicionar tipos se usar TypeScript

Se o seu projeto for em TypeScript, também instale:
```bash
npm install -D @types/three
```
## 🧱 5. Testar a cena 3D

Crie um componente simples para testar o ambiente 3D.
```bash
📁 src/App.jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <OrbitControls />
    </Canvas>
  )
}
```
