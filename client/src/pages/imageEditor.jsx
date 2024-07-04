import React, { useState } from 'react';
import { ReactPhotoEditor } from 'react-photo-editor';

export default function App() {
  const [file, setFile] = useState();
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    if (file) {
      setShowModal(true);
    }
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const handleSaveImage = (editedFile) => {
    setFile(editedFile);
    setShowModal(false);
  };

  const setFileData = (e) => {
    if (e?.target?.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div style={{ margin: '1%' }}>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={(e) => setFileData(e)}
        multiple={false}
      />
      <br />
      <button
        style={{ marginTop: '1rem', border: '1px solid ', padding: '5px' }}
        onClick={showModalHandler}
      >
        Edit Image
      </button>
      <br />
      <ReactPhotoEditor
        open={showModal}
        onClose={hideModal}
        file={file}
        onSaveImage={handleSaveImage}
        downloadOnSave={true}
      />
    </div>
  );
}