import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, EmailField, EditButton } from 'react-admin';

const PostTitle = ({ record }, api) => {
    console.log(record);
    console.log(api);
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};


// export default class BookShow extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log(props);
//     }
//
//     render() {
//         console.log(this.props.options);
//         return (
//             <Show  title={<PostTitle />} { ...this.props }>
//                 <SimpleShowLayout>
//                     <TextField source="id" label="ID"/>
//                     <TextField source="isbn" label="isbn" />
//                     <TextField source="title" label="title"/>
//                     <TextField source="author" label="Author"/>
//                     <EditButton />
//                 </SimpleShowLayout>
//             </Show>
//     );
//     }
// }

export const BookShow = (props) => (
    <Show  title={<PostTitle />} { ...props }>
<SimpleShowLayout>
    <TextField source="id" label="ID"/>
    <TextField source="isbn" label="isbn" />
    <TextField source="title" label="title"/>
    <TextField source="author" label="Author"/>
    <EditButton />
    </SimpleShowLayout>
    </Show>
);