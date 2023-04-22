import React, { useState, useEffect, ChangeEvent } from "react";
import "./App.css";

function App() {
  const [imageFiles, setImageFiles] = useState([] as File[]);
  const imageFileNames = imageFiles.map((file) => file.name).join(", ");
  const handleFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageFiles = Array.from(files).filter((file: File) =>
        file.type.startsWith("image/")
      );
      setImageFiles(imageFiles);
    }
  };
  console.log(imageFiles);
  return (
    <div id="select-folder-container">
      <input
        type="file"
        id="images"
        name="images"
        onChange={handleFilesChange}
        accept="image/png"
        /* @ts-expect-error */
        directory=""
        webkitdirectory=""
      ></input>
      {imageFiles && <div>選択されたイメージ: {imageFileNames}</div>}
    </div>
  );
}

export default App;
