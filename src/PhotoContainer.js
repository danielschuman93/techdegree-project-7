import React, {Component} from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {

    const results = props.data;
    let photos = results.map(photo =>
        <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} key={photo.id} title={photo.title} />
    );

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    );
}

export default PhotoContainer;