import React, { Component } from 'react'
import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from './error-boundary.styles'

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error) {


    return {
      hasError: true
    }
  }
  componentDidCatch(error, info) {

  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl= {"https://i.imgur.com/Q2BAOd2.png"}/>
          <ErrorImageText>Sorry This Page is Not on the Map</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children;
  }
}
export default ErrorBoundary
