import React from 'react';

const withLoader = EnhancedComponent => (
  function withLoader(props) {
    return (
      props.isLoading
        ? <div>Идет загрузка...</div>
        : <EnhancedComponent {...props} />
    );
  }
)
export default withLoader;
