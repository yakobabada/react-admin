import React from 'react';
import { UrlField } from 'react-admin';

const title = props => (
    <UrlField {...props} />
);

const books = {
    name: 'books',
    fields: [
        {
            name: 'title',
            field: title,
        },
    ],
};

export default [
    books,
];