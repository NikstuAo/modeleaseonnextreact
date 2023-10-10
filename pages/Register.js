import Head from '../components/Head.js'
import styles from '../styles/Home.module.css'
import { createContext, useEffect, useState } from 'react'

export default function Register() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file != null) {
            setSelectedFile(file);
            const imageUrl = URL.createObjectURL(file);
            sessionStorage.setItem("avatar_url", imageUrl);
            sessionStorage.setItem(imageUrl, "Rodolfinho");
        }
    };

    return (
        <div>
            <div className={`container-fluid`} id='container-fluid'>
                <Head />
                <div className={`row`}>
                    <div className={`col`}>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                            <input type="file" className="form-control" id="inputGroupFile01" onChange={handleFileChange}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}