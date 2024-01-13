const typeDefs = `
    type User{
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        authors: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Auth{
        token: ID
        user: User
    }
    
    type Query{
        getSingleUser: User

    }

    type Mutation{
        createUser(username: String, email: String, password: String): Auth
        login(username: String, email: String, password: String): Auth
        saveBook(authors: [], description:String, titel: String, bookId: String, image: String, link: String): User
        deleteBook(bookId: String): User
    }
`