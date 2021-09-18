import React, { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import './UploadForm.css';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    /*valid types allowed */
    const types = ['image/jpeg', 'image/png', 'image/jpg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        /* onsole.log(selected); */

        //check if selected is allowed
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }
        //wrong selection
        else {
            setFile(null);
            setError('Please select png or jpeg file');
        }
    }
    return (
        <div className="upload-form">
            <form>
                <h4>Add an image</h4>
                <label className="label-upload">
                    <input type="file" onChange={changeHandler} />
                    <span>+</span>
                </label>
                <div className="output">
                    {/* if error exist in file upload */}
                    {error && <div className="error">{error}</div>}
                    {/* if uploaded correctly */}
                    {file && <div>{file.name} is uploading right now!!</div>}

                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
            </form>
        </div>
    );
}

export default UploadForm;