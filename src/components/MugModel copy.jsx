import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";
import * as THREE from "three";

function MugModel(props) {
  const { nodes, materials } = useGLTF("./models/MugModel.gltf");
  const { material, legs, chairColor, cushionColor } = useCustomization();
  const [newTextureFile, setNewTextureFile] = useState(null);

  // Gestionnaire de changement de fichier
  const handleTextureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newTexture = new THREE.TextureLoader().load(e.target.result);
        newTexture.flipY = false; // Vous pouvez essayer true si nécessaire.
        materials["map-material"].map = newTexture;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <group {...props} dispose={null}>
      <group rotation={[0, -0.412, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.Material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials["color-material"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Exterior.geometry}
        material={materials["white-material"]}
        rotation={[0, -0.412, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Impression.geometry}
        material={materials["map-material"]}
        rotation={[0, -0.412, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Interior.geometry}
        material={materials["color-material"]}
        rotation={[0, -0.412, 0]}
      />

      {/* Ajoutez un bouton pour charger un fichier de texture */}
      <input type="file" accept=".jpg, .jpeg, .png" onChange={handleTextureChange} />
    </group>
  );
}

export default MugModel;

useGLTF.preload("./models//MugModel.gltf");
