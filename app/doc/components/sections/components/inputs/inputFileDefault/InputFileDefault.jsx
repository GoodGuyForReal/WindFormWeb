import React, { useState } from 'react'
import { CameraIcon } from '@heroicons/react/24/solid';

const InputFileDefault = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className='file_input_container w-full h-full border border-gray-300 rounded-lg hover:bg-blue-50 duration-200'>
            <label
                htmlFor="file-input"
                className="cursor-pointer w-full h-full rounded-lg flex flex-col items-center gap-3 p-5"
            >
                <div className='cameraIcon_container flex justify-center items-center h-10 w-10 rounded-full bg-blue-100'>
                    <CameraIcon className='h-5 w-5 text-blue-600' />
                </div>
                <div className='text-center'>
                    <p className='text-gray-500 text-sm font-medium'><span className='text-blue-600'>Click to upload</span> or drag and drop</p>
                    <p className='text-gray-500 text-xs font-medium'>SVG, PNG, JPG or GIF(max. 10MB)</p>
                </div>
                <input
                    id="file-input"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
                {selectedFile && (
                    <p className="mt-2 text-sm text-center text-blue-600 bg-blue-50 border border-blue-600 rounded-md py-1 px-3">
                        {selectedFile.name}
                    </p>
                )}
            </label>
        </div>
    );
}

export default InputFileDefault