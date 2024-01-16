import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
mutation  loginUser($email: String, $password: String){
    login(email: $email, password: $password) {
      token
      user {
        email
        password
      }
    }
  }
`

export const ADD_USER = gql `
mutation addUser($username: String, $email: String, $password: String) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        email
        password
        username
      }
    }
  }
`

export const SAVE_BOOK = gql `
mutation saveBook($bookId: String) {
  saveBook(bookId: $bookId) {
    _id
  }
}
`

export const Delete_BOOK = gql `
mutation deleteBook($bookId: String) {
  deleteBook(bookId: $bookId) {
    _id
    savedBooks {
      bookId
    }
  }
}
`