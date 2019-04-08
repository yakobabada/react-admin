// import React, { Component } from 'react';
// import { Admin, Resource, ReferenceField, TextField } from 'react-admin';
// import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';
// import { hydraClient, fetchHydra as baseFetchHydra  } from '@api-platform/admin';
// import { Redirect } from 'react-router-dom';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { BookShow } from './Components/Book/Show';
// import { BookEdit } from './Components/Book/Edit';
// import { BookCreate } from './Components/Book/Create';
// import { BookList } from './Components/Book/List';
//
// const theme = createMuiTheme({
//     palette: {
//         type: 'light'
//     },
// });
//
// const entrypoint = process.env.REACT_APP_API_ENTRYPOINT;
// const fetchHeaders = {'Authorization': `Bearer ${window.localStorage.getItem('token')}`};
// const fetchHydra = (url, options = {}) => baseFetchHydra(url, {
//     ...options,
//     headers: new Headers(fetchHeaders),
// });
// const dataProvider = api => hydraClient(api, fetchHydra);
// const apiDocumentationParser = entrypoint => parseHydraDocumentation(entrypoint, { headers: new Headers(fetchHeaders) })
//     .then(
//         ({ api }) => ({api}),
//         (result) => {
//             switch (result.status) {
//                 case 401:
//                     return Promise.resolve({
//                         api: result.api,
//                         customRoutes: [{
//                             props: {
//                                 path: '/',
//                                 render: () => <Redirect to={`/login`}/>,
//                     },
//             }],
//         });
//
//         default:
//             return Promise.reject(result);
//         }
//         },
//     );
//
// export default class extends Component {
//     state = { api: null };
//
//     componentDidMount() {
//         apiDocumentationParser(entrypoint).then(({ api }) => {
//             const books = api.resources.find(({ name }) => 'books' === name);
//             const author = books.fields.find(({ name }) => 'author' === name);
//
//             author.field = props => (
//                 <ReferenceField label="Author" source={author.name} reference={author.reference.name} key={author.name} {...props}>
//                     <TextField source="name" />
//                 </ReferenceField>
//             );
//             localStorage.setItem('api', api);
//             this.setState({ api });
//         }).catch((e) => {
//             console.log(e);
//         });
//     }
//
//     render() {
//         if (null === this.state.api) return <div>Loading...</div>;
//         return (
//             <Admin api={ this.state.api }
//         apiDocumentationParser={ apiDocumentationParser }
//         dataProvider= { dataProvider(this.state.api) }
//         theme={ theme }
//         // appLayout={ Layout }
//         // authProvider={ authProvider }
//             >
//             <Resource api={ this.state.api } name="books" list={ BookList } create={ BookCreate } show={ BookShow } edit={ BookEdit } title="Users"/>
//             </Admin>
//     )
//     }
// }



import React, { Component } from 'react';
import { ReferenceArrayField, SingleFieldList, ChipField, ReferenceArrayInput, SelectArrayInput, ReferenceField, TextField } from 'react-admin';
import { AdminBuilder, hydraClient } from '@api-platform/admin';
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';

const entrypoint = 'http://localhost:8080/';

export default class extends Component {
    state = { api: null }

    componentDidMount() {
        parseHydraDocumentation(entrypoint).then(({api}) => {
                const books = api.resources.find(({ name }) => 'books' === name);
                const author = books.fields.find(({ name }) => 'author' === name);

                author.field = props => (
                    <ReferenceField label="Author" source={author.name} reference={author.reference.name} key={author.name} {...props}>
                        <TextField source="name" />
                    </ReferenceField>
                );

                this.setState({ api });
            }
        )
    }

    render() {
        if (null === this.state.api) return <div>Loading...</div>;

        return <AdminBuilder api={ this.state.api } dataProvider={ hydraClient(this.state.api) }/>
    }
}