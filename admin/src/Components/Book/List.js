import React from 'react';
import { List, Datagrid, TextField, EmailField, DateField, ShowButton, EditButton, ReferenceField } from 'react-admin';

const PostTitle = ({ record }, api) => {
        console.log(api);
        console.log(record);
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const BookList = (props) => (
    <List {...props}>
    <Datagrid>
    <TextField source="id" label="ID"/>
    <TextField source="isbn" label="Isbn" />
    <TextField source="title" label="Titles"/>
    <ShowButton />
    <EditButton />
    </Datagrid>
    </List>
);