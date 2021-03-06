import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Photos({ photos, toggleExpanded }) {
  var [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (photos.length > 0) {
      setMainImage(photos[0].url);
    }
  }, [photos]);

  if (photos.length === 0) {
    return (
      <div id="image-gallery">
        no photos
      </div>
    );
  }

  return (
    <div id="image-gallery">
      <div id="thumbnails">
        {photos.map(photo => (
          <div
            key={photo.url}
            onClick={() => setMainImage(photo.url)}
            aria-hidden="true"
            className={photo.url === mainImage ? 'selected' : undefined}
          >
            <img src={photo.thumbnail_url} alt="" className="thumbnail" />
          </div>
        ))}
      </div>
      <img src={mainImage} alt="" className="photo" onClick={() => toggleExpanded()} aria-hidden="true" />
      <div id="photo-zoom" style={{ backgroundImage: `url(${mainImage})` }}></div>
    </div>
  );
}

Photos.propTypes = {
  photos: PropTypes.array,
  toggleExpanded: PropTypes.func.isRequired
};

Photos.defaultProps = {
  photos: []
};

