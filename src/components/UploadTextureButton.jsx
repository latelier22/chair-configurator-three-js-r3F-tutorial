import React from "react";

function UploadTextureButton({ onTextureChange }) {
  const handleTextureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onTextureChange(URL.createObjectURL(file));
    }
  };

  return <input type="file" accept=".jpg, .jpeg, .png" onChange={handleTextureChange} />;
}

export default UploadTextureButton;
