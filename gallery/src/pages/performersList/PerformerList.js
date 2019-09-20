import React, {useEffect, useReducer} from 'react';
import axios from 'axios';
import Performer from "./Performer";
import PerformerListReducer, {SET_LIST} from './PerformerListReducer';


// const Gallery = styled.div`
//     width: 100%;
//     display: flex;
//     flex-wrap: wrap-reverse;
//     justify-content: center;
// `;
//
// const Image = styled.img`
//     flex: 25%;
//     overflow: hidden;
//     cursor: pointer;
//     background-color: burlywood;
//     padding-top: 5px;
//     width: 100%;
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
//
// const GalleryContent = styled.div`
//
//
//      @media screen and ${Device.mobileS} {
//          flex: 100%;
//          margin: 2px;
//      }
//
//      @media screen and ${Device.mobileM} {
//          flex: 100%;
//      }
//
//       @media screen and ${Device.mobileL} {
//          flex: 100%;
//      }
//
//     @media screen and ${Device.tablet} {
//         flex: 49%;
//         margin: 2px;
//     }
//
//     @media screen and ${Device.laptop}{
//         flex: 33%;
//         margin: 2px;
//     }
//
//     @media screen and ${Device.laptopL}{
//         flex: 24%;
//         margin: 2px;
//     }
//
//     @media screen and ${Device.desktop}{
//         flex: 24%;
//         margin: 2px;
//     }
// `;

export default () => {
    const [performerList, dispatch] = useReducer(PerformerListReducer, []);

    const getList = async () => {
        const {data} = await axios.get('/en/list-page-ajax/show-more-json/0/')
        console.log(data)
        dispatch({
            type: SET_LIST,
            list: data.data.content.performers
        });
    }

    useEffect(() => {
        getList();

    }, []);

    const renderPerformer = (performer, index) => {
        return(
            <Performer key={index} performer={performer} />
        )
    };

    return (
            <div>
                {performerList.length > 0 && performerList.map(renderPerformer)}
            </div>
    )


};
