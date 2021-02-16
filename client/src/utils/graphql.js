import gql from 'graphql-tag';

export const FETCH_USERS_QUERY = gql`
{
    getUsers{
        username
        email
        createdAt
    }
}`;

export const FETCH_POSTS_QUERY = gql`
    query($username: String!){
        getAccountDetails(username:$username){
            user1
            user2
            amountOwe{
                amount
                body
                lenderName
                borrowerName
            }
            user1OweCount
            user2OweCount
            createdAt
        }
    }
`;