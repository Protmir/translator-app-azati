import React from 'react';
import {routes} from '../../constants/routePath';
import {Link} from 'react-router-dom';


export const NotFoundPage = () => {
  return (
    <>
      <h2>Sorry, this page not found</h2>
      <Link to={routes.root} >
        <button>
          Go to main page
        </button>
      </Link>
    </>
  );
};
