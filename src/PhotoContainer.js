import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

const PhotoContainer = (props) => {

    const results = props.data;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} key={photo.id} title={photo.title} />);
    } else {
        photos = <NoResults />
    }
   
    return (
        <div className="photo-container">
            <h2>Results</h2>
            {
            (props.loading)
            ? <h3>Loading...</h3>
            :<ul>
                {photos}
            </ul>
          }  
        </div>
    );
}

export default PhotoContainer;