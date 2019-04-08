import React from 'react';
import { List, Datagrid, TextField, EmailField, DateField, ShowButton, EditButton, ReferenceField } from 'react-admin';

export const BookList = (props) => {
    const getField = fieldName => {
        const {options: {resource: {fields}}} = props;

        return fields.find(resourceField => resourceField.name === fieldName) || null;
    };

    const displayField = fieldName => {
        const {options: {api, fieldFactory, resource}} = props;

        const field = getField(fieldName);

        if (field === null) {
            return;
        }

        return fieldFactory(field, {api, resource});
    };

    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" label="ID"/>
                <TextField source="isbn" label="Isbn"/>
                <TextField source="title" label="Titles"/>
                {displayField('author')}
                <ShowButton/>
                <EditButton/>
            </Datagrid>
        </List>
    );
};