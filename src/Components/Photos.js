import React, { useState, useEffect } from 'react';

import './Photo.css';
import Photo from "./Photo";
import axios from 'axios';

function Photos() {
    useEffect(() => {
        (async () => {
            const urls = await axios.get('https://boiling-refuge-66454.herokuapp.com/images');
            setUrls(urls.data);
        })();
    }, []);

    const [urls, setUrls] = useState([]);

    return (
        <div className="Photos">
            {urls.map((imageData) => {
                return (<Photo url={imageData.url} id={imageData.id} />)
            })}
        </div>
    );
}

export default Photos;
