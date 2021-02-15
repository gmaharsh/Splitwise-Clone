import gql from 'graphql-tag';

export const FETCH_USERS_QUERY = gql`
{
    getUsers{
        username
        email
        createdAt
    }
}


`;