import React , {Component} from 'react';
import './performerList.css';

class PerformerList extends Component {
    constructor(){
        super();
        this.state = {
            performers:[]
        }
    }

    componentDidMount() {
        fetch('/en/list-page-ajax/show-more-json/0/')
            .then(results => results.json())
            .then(performers => this.setState({'performers': performers.data.content.performers}))
    }

    render(){
        return (
            <div>
                <h2 className="title">Gallery</h2>
            <div className="gallery-content">
                <div className="gallery">
                    {this.state.performers.map(function (item, index) {
                        return (
                            <a href="https://www.google.com">
                            <img className="image" key={index} src={item.profilePictureUrl} alt="" />
                            </a>
                        )
                    })}
                </div>
            </div>
            </div>
        );
    }

}

export default PerformerList;