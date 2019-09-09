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
            .then(res => res.json())
            .then(performers => this.setState({performers}, () => console.log('performer list', performers.data.content.performers)));
    }

    render(){
        return (
            <div>
                <h2>performers</h2>
            </div>
        );
    }

}

export default Performers;