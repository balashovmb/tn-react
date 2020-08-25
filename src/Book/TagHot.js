import React from 'react';

const TagHot = React.memo(({ subscribers }) => (
  <span style={styles.tagHot}> {(subscribers > 300) && '*HOT!*'}</span>
));

export default TagHot;

const styles = {
  tagHot: {
    fontWeight: 'bold'
  }
};
