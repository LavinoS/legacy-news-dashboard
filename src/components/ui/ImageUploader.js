import React, { useEffect, useState } from 'react';
import { LegacyDiv, LegacyParagraph } from '../index';
import { FaCloudUploadAlt } from 'react-icons/fa';

export default (props) => {
  const { hidden, onChange, resetField } = props;
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileSelect = (e) => {
    e.preventDefault();

    const [file] = e.target.files;

    setImageUrl(URL.createObjectURL(file));
    onChange(file);
  };

  useEffect(() => {
    if (resetField) {
      setImageUrl(null);
    }
  }, [resetField]);

  return (
    <LegacyDiv
      styleProps={{
        ALL_DEVICES: {
          width: '100%',
          height: '320px',
          border: '2px dashed #d2d6da',
          cursor: 'pointer',
          flexDirection: 'column',
          padding: 12,
        },
      }}
      onClick={() => document.querySelector('.file-uploader').click()}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="uploaded"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      ) : (
        <>
          <FaCloudUploadAlt size="100px" color="#42424a" />
          <LegacyParagraph
            text="Click to upload your image"
            styleProps={{
              ALL_DEVICES: {
                color: '#7b809a',
                fontSize: '14px',
              },
            }}
          />
        </>
      )}
      <input
        className="file-uploader"
        type="file"
        onChange={(e) => handleFileSelect(e)}
        hidden={hidden}
      />
    </LegacyDiv>
  );
};
