import React from 'react';

const withLoader = EnhancedComponent => (
  function withLoader(props) {
    return (
      props.isLoading
        ? <div className="ml-4">Идет загрузка...</div>
        : <EnhancedComponent {...props} />
    );
  }
);
export default withLoader;
