import React from 'react';
import Error404 from '../Error404';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <Error404/>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
