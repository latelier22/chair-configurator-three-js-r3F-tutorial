import React from "react";
import UploadTextureButton from "./UploadTextureButton";
import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const {
    chairColors,
    chairColor,
    setChairColor,
    cushionColors,
    cushionColor,
    setCushionColor,
    setMugTexture, // Ajoutez cette fonction pour mettre à jour la texture du mug
  } = useCustomization();

  const handleTextureChange = (newTexture) => {
    setMugTexture(newTexture); // Appelez la fonction pour mettre à jour la texture du mug
  };

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Chair color</div>
        <div className="configurator__section__values">
          {chairColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === chairColor.color ? "item--active" : ""
              }`}
              onClick={() => setChairColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="configurator__section">
        <div className="configurator__section__title">Upload Texture</div>
        <UploadTextureButton onTextureChange={handleTextureChange} />
      </div>
    </div>
  );
};

export default Configurator;
