import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import defaultQuillContainerStyleProps from './styles/defaultQuillContainerStyleProps';
import mergeStyles from '../../../helpers/mergeStyles';
import { LegacyDiv } from '../../index';

const modules = {
  toolbar: ['bold', 'italic', 'underline', 'link', { color: [] }],
};
const formats = ['bold', 'italic', 'underline', 'link', 'color'];

export default (props) => {
  const { quillContainerStyleProps = {}, onChange, value } = props;
  const [content, setContent] = useState(value);
  const mergedContainerStyle = mergeStyles(
    defaultQuillContainerStyleProps,
    quillContainerStyleProps,
  );

  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const delta = quill.clipboard.convert(content);
      quill.setContents(delta);
    }
  }, [value]);

  const handleChange = (value) => {
    setContent(value);
    onChange(value);
  };

  return (
    <LegacyDiv styleProps={mergedContainerStyle}>
      <ReactQuill
        ref={quillRef}
        modules={modules}
        formats={formats}
        value={content}
        onChange={handleChange}
        theme="snow"
      />
    </LegacyDiv>
  );
};
