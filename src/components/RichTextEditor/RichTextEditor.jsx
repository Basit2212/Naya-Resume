import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const RichTextEditor = ({ value, onChange }) => {
  return (
    <div className="editor-container">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        placeholder="Write your resume summary here..."
      />
    </div>
  );
};

export default RichTextEditor;
