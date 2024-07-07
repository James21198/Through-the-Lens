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
    <div style={{ margin: '20px', padding: '20px', width: '50%'}}>
        <h1 style={{
          fontSize: '2.5rem',
          margin: '0.5rem 0',
          color: '#333',
        }}>
          Image Editor
        </h1>
        <h2 style={{
          fontSize: '1rem',
          marginTop: '1rem',
          marginBottom: '3rem',
          color: '#000',
        }}>
          Where you can edit all your images before you post
        </h2>
      <input
        className='btn btn-prim'
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={(e) => setFileData(e)}
        multiple={false}
      />
      <br />
      <button
        className='btn btn-prim'
        style={{ marginTop: '1rem', border: '1px solid ', padding: '5px', width : '30%', height : '40px'}}
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