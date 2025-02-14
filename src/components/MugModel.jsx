import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";
import * as THREE from "three";

function MugModel(props) {
  const { nodes, materials } = useGLTF("./models/MugModel.gltf");
  const { material, legs, chairColor, cushionColor, mugTexture } = useCustomization(); // Ajoutez mugTexture


// Couleur de la tasse

// Modifiez le matériau d'origine pour appliquer la couleur personnalisée.
materials["color-material"].color.set(chairColor.color);

  // Supposons que vous ayez le chemin d'accès à la nouvelle image dans `newTextureImagePath`.


  // Chargez la nouvelle texture.
  const newTexture = new THREE.TextureLoader().load(mugTexture);

  newTexture.flipY = false; // Vous pouvez essayer true si nécessaire.

  // Appliquez la nouvelle texture à la zone d'impression du matériau.
  materials["map-material"].map = newTexture;






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
    </group>
  );
}

export default MugModel;
