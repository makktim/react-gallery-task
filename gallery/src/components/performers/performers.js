import React , {Component} from 'react';
import './performers.css';

class Performers extends Component {
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
            // .then(performers => this.setState({performers}, () => console.log('performer list', performers.data.content)));
    }

    render(){
        return (
            <div>
                <h2 className="title">Gallery</h2>
            <div className="gallery-content">
                <div className="gallery">
                    {this.state.performers.map(function (item, index) {
                        return (
                            {/*<src key={index}>{item.profilePictureUrl}</src>*/},
                            <img className="image" key={index} src={item.profilePictureUrl} alt="" />
                        )
                    })}
                </div>
            </div>
            </div>
        );
    }

}

export default Performers;