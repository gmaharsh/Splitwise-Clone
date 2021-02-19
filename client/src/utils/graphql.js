import gql from 'graphql-tag';

export const FETCH_USERS_QUERY = gql`
{
    getUsers{
        username
        email
        createdAt
    }
}`;

export const SETTLE_UP = gql`
mutation settleUpAmount(
    $amount:String!, 
    $postID:String!
  ) {
    addAmount(amount:$amount, postID:$postID){
        user1
        user2
        user1OweCount
        user2OweCount
        createdAt
    }
  }
`;

export const FETCH_POSTS_QUERY = gql`
    query($username: String!){
        getAccountDetails(username:$username){
            _id
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