import React from 'react';

const withLoader = EnhancedComponent => props => (
  props.isLoading
    ? <div>Идет загрузка...</div>
    : <EnhancedComponent {...props} />
);

export default withLoader;
