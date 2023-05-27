import React, { useEffect, useState } from 'react';
import { LegacyDiv, LegacyParagraph } from '../index';
import { FaCloudUploadAlt } from 'react-icons/fa';
import uploadFileToS3 from '../../providers/helpers/uploadFileToS3';
import mergeStyles from '../../helpers/mergeStyles';

const IMAGE_CONTAINER_STYLE_PROPS = {
  ALL_DEVICES: {
    width: '100%',
    height: '320px',
    border: '2px dashed #d2d6da',
    cursor: 'pointer',
    flexDirection: 'column',
    padding: 12,
  },
};

export default (props) => {
  const {
    hidden,
    onChange,
    resetField,
    value = null,
    uploadDirectly = false,
    imageUploaderContainerStyle = {},
    iconColor = '#42424a',
    uploadParagraphStyleProps = {
      ALL_DEVICES: {
        color: '#7b809a',
        fontSize: '14px',
      },
    },
  } = props;
  const [imageUrl, setImageUrl] = useState(value);

  const containerMergedStyles = mergeStyles(
    IMAGE_CONTAINER_STYLE_PROPS,
    imageUploaderContainerStyle,
  );

  const handleFileSelect = async (e) => {
    e.preventDefault();

    const [file] = e.target.files;
    setImageUrl(URL.createObjectURL(file));

    if (uploadDirectly) {
      const { Location } = await uploadFileToS3(file);
      return onChange(Location);
    }

    onChange(file);
  };

  useEffect(() => {
    if (resetField) {
      setImageUrl(null);
    }
  }, [resetField]);

  return (
    <LegacyDiv
      styleProps={containerMergedStyles}
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
          <FaCloudUploadAlt size="100px" color={iconColor} />
          <LegacyParagraph
            text="Click to upload your image"
            styleProps={uploadParagraphStyleProps}
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
