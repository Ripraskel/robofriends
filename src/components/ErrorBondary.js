import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError){
            return <h1>Ooops. That's not suppose to happen!</h1>
        }
        else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;