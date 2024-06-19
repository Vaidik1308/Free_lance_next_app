import React, { forwardRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = React.forwardRef<ReactQuill, ReactQuill.ReactQuillProps>((props, ref) => {
  return <ReactQuill ref={ref} {...props} />;
});

Editor.displayName = 'Editor';

export default Editor;
