export default `
type Contact {
    id: String!
    name: String!
    lastName: String!
    phoneNumber: String!
    email: String
    userId: String
}

type Query {
    contact(id: String!): Contact
    contacts: [Contact]
}

type Mutation {
    addContact(id: String!, name: String!, lastName: String!, phoneNumber: String!, email: String, userId: String!): Contact
    editContact(id: String, name: String!, lastName: String!, phoneNumber: String!, email: String): Contact
    deleteContact(id: String): Contact
}
`;
