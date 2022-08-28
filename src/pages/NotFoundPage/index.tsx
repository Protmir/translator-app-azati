import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../constants/routePath';

export const NotFoundPage = () => (
    <>
        <h2>Sorry, this page not found</h2>
        <Link to={routes.root}>
            <button type="button">
                Go to main page
            </button>
        </Link>
    </>
);
