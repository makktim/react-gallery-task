import React from 'react';
import {Link} from 'react-router-dom';
import './gallery.css';


// const Image = styled.img`
//     flex: 25%;
//     overflow: hidden;
//     cursor: pointer;
//     background-color: burlywood;
//     padding-top: 5px;
//     margin: 2px;
//     width: 23%;
//     height: 100%;
//     &:hover{
//         opacity: 0.5;
//         border: darkred 1px solid;
//         box-shadow: -1px 1px 3px 3px darkred;
//
//     }
//
//
// `;


// export default (props) => {
//
//     const {performer: {profilePictureUrl, pid}} = props;
//
//     return (
//         <Link to={'/en/gallery/' + pid + '/folders'}>
//             <Image src={profilePictureUrl} alt=""/>
//         </Link>
//     )
//
//
// };

export default (props) => {

    const {performer: {profilePictureUrl, pid}} = props;

    return (
        <div className="gallery-image">
            <div className="img-box">
                <Link to={'/en/gallery/' + pid + '/folders'}>
                    <img src={profilePictureUrl} alt=""/>
                <div className="transparent-box">
                    <div className="caption">
                        <p>{pid}</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )

};