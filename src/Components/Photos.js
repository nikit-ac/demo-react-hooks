import React, { useState, useEffect } from 'react';

import './Photo.css';
import Photo from "./Photo";
import apiClient from './../Helpers/ApiClient';

function Photos() {
    useEffect(() => {
        (async () => {
            const urls = await apiClient.get('/images');
            setUrls(urls.data);
        })();
    }, []);

    const [urls, setUrls] = useState([]);

    return (
        <div className="Photos">
            {urls.map((imageData) => {
                return (<Photo url={imageData.url} id={imageData.id} key={imageData.id}/>)
            })}
        </div>
    );
}

export default Photos;
