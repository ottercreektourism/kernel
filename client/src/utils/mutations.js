import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, email: $email, password: $password) {
      token
      user {
          _id
          firstName
          email
          
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
          token
          user {
              _id
          }
      }
  }
`;

export const ADD_KERNEL = gql`
  mutation addKernel($input: kernelInput!) {
      addKernel(input: $input) {
        
              _id
          
      }
  }
`;