import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import schema from "./graphql/";

const app = express();
const PORT = process.env.PORT || '4000';
/* const db =
  'mongodb://administrador:administrador@contactmongo-mrx2o.mongodb.net/graphql-mongodb-server'; */
// Connect to MongoDB with Mongoose.
const db = 'mongodb://localhost:27017/contacts';
mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressGraphQL({
    graphiql: true,
    schema,
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
