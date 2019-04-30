import { mergeResolvers } from 'merge-graphql-schemas';

import User from './User/';
import Contact from './Contact/';

const resolvers = [User, Contact];

export default mergeResolvers(resolvers);
