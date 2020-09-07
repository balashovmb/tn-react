import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => (
  <>
    <Helmet>
      <title>Ничего не найдено.</title>
    </Helmet>
    <h3 className="ml-4 font-bold text-2xl">Ничего не найдено.</h3>
  </>
);

export default NotFound;
