import React, { useState } from 'react';

const FileUpload = ({onFileSelect}) => {
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            if (reader.error) {
                console.error('Error reading file:', reader.error);
                return;
            }
            const imageDataURL = reader.result;
            onFileSelect(imageDataURL);
        };

        reader.readAsDataURL(file);
    }

  return (
    <div className="fileUpload">
        <input className='rounded-lg border pr-3' type='file' onChange={handleFileSelect} accept='image/*'/>
    </div>
  );
};

export default FileUpload;