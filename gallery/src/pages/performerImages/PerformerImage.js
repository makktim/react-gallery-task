import React from 'react';
import '../performersList/gallery.css';

export default (props) => {

    const {performerImage: {previewImageUrl}} = props;

    return (
        <div className="gallery-image">
            <div className="img-box">
                <img src={previewImageUrl} alt=""/>
                <div className="transparent-box">
                    <div className="caption">
                    </div>
                </div>
            </div>
        </div>
    )

};