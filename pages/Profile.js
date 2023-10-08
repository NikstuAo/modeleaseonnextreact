import Head from '../components/Head.js'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { Avatar } from '@mui/material'

export default function Profile() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setSelectedFile(file);

            const imageUrl = URL.createObjectURL(file);
            setAvatarUrl(imageUrl);
        }
    };

    return (
        <div>
            <div className={`container-fluid`}>
                <Head />
                <div className={`row`}>
                    <div className={`col`}>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                            <input type="file" className="form-control" id="inputGroupFile01" onChange={handleFileChange}></input>
                        </div>
                        {avatarUrl && <Avatar src={avatarUrl} />}
                    </div>
                </div>
            </div>
        </div>
    )
}