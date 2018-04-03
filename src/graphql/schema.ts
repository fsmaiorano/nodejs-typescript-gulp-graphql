import { makeExecutableSchema } from 'graphql-tools';

//Mock
const users: any[] = [
    {
        id: 1,
        name: 'Fabio',
        email: 'fabio@email.com'
    },
    {
        id: 2,
        name: 'Naty',
        email: 'naty@email.com'
    }
];
//---------------------

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }
`;

const resolvers = {
    Query: {
        allUsers: () => users
    }
};

export default makeExecutableSchema({ typeDefs, resolvers });