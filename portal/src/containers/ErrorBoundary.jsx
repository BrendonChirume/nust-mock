import React, { Component } from 'react';
import CrashPage from '../pages/CrashPage';

export default class ErrorBoundary extends Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false };
   }

   static getDerivedStateFromError() {
      // Update state to show the fallback UI during the next render phase
      return { hasError: true };
   }

   componentDidCatch(error, info) {
      // logging the error details
      // eslint-disable-next-line no-console
      console.log(`Cause: ${error}.\nStackTrace: ${info.componentStack}`);
   }

   render() {
      const { hasError } = this.state;
      // eslint-disable-next-line react/prop-types
      const { children } = this.props;
      if (hasError) {
         // Return the fallback UI
         return <CrashPage />;
      }

      return children;
   }
}
