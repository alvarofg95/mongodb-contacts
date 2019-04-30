import { mergeTypes } from 'merge-graphql-schemas';

import User from './User/';
import Contact from './Contact/';

const typeDefs = [User, Contact];

export default mergeTypes(typeDefs, { all: true });
