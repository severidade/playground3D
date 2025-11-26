### ✔ Organização das pastas

- **Scenes** → contém cenas completas que combinam fundo + objeto 3D  
- **Notebook** → encapsula o `<Canvas>` e tudo que pertence à mini-cena do MacBook  
- **Objects** → contém modelos 3D e lógica vinculada a eles  
- **Lights** → centraliza toda a iluminação (reaproveitável)  
- **Background** → shaders e Canvas independente do restante  
- **Animations** → lógica GSAP separada  
- **Shaders** → organizados e isolados  

---

### ✔ Sobre os arquivos 3D (GLB)

Os arquivos GLB precisam ficar dentro da pasta **`public/`** porque o React (Vite/CRA) só consegue servir modelos 3D através de caminhos estáticos. O loader (`useGLTF`) acessa o arquivo por URL, e apenas o que está em `public/` é exposto diretamente pelo servidor.  
Por isso, arquivos 3D **não podem ficar dentro de `src/`**, pois não são processados nem incluídos no bundle final.

Exemplo de path correto:  
`/macbook/notebook.glb`