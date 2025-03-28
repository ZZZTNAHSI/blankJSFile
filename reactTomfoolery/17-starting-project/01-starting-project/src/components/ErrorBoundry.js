import { Component,  } from "react";

class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {hasError: false};
    }


    componentDidCatch(error) {
        console.log(error);
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>
        } else {
            return this.props.children;
        }

    }
}

export default ErrorBoundry;