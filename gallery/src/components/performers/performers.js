import React , {Component} from 'react';

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
                <h2>performers</h2>

                <div>
                    {this.state.performers.map(function (item, index) {
                        return (
                            {/*<src key={index}>{item.profilePictureUrl}</src>*/},
                            <img key={index} src={item.profilePictureUrl} alt="text" />
                        )
                    })}
                </div>
            </div>
        );
    }

}

export default Performers;