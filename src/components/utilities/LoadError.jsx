import React from 'react';
import Alert from 'react-bootstrap/Alert'

const LoadError = ({ isLoading, isError, error}) => {
  return (
    <>
    {isError && <Alert variant="warning">Error: {error.message}</Alert>}
    {isLoading && <Alert variant="dark">Loading...</Alert>}
    </>
  );
}

export default LoadError;