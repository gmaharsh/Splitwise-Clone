import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react';

function Testform() {
  const [settleUpValues, setSettleUpValues] = useState({
    amount: "50",
    postId:"602af74427c710359c0a4e81"
  })
  
  // const [addSettleUpBill, {data} ] = useMutation(SETTLE_UP)
  const sendForm = () => {
    console.log("I am clicked")
    // setSettleUpValues({
    //   amount: "50",
    //   postId: "602af74427c710359c0a4e81"
    // })
    console.log(settleUpValues)
    addtoDatabase()
  }

  // const addtoDatabase = () => {
  //   console.log(settleUpValues)
  // }

  const [addtoDatabase] = useMutation(SETTLE_UP, {
        update() {
            // setComment('');
            // commentInputRef.current.blur();
        },
        variables:settleUpValues
    });

  return (
    <div>
      <h1>Test</h1>
      <Button onClick={sendForm}>Click</Button>
    </div>
  )
}

// const SETTLE_UP = gql`
// mutation settleUpAmount(
//     $amount:String!, 
//     $postID:String!
//   ) {
//     addAmount(amount:$amount, postID:$postID){
//         user1
//         user2
//         user1OweCount
//         user2OweCount
//         createdAt
//     }
//   }
// `;

const SETTLE_UP = gql`
  mutation($postId: String!, $amount: String!) {
    settleUpAmount(postId: $postId, amount: $amount) {
      user1
      user2
      user1OweCount
      user2OweCount
      createdAt
    }
  }
`;


export default Testform
