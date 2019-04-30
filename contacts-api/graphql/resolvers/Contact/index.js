// The User schema.
import Contact from '../../../models/Contact';

export default {
  Query: {
    contact: (root, args) => {
      return new Promise((resolve, reject) => {
        Contact.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    contacts: () => {
      return new Promise((resolve, reject) => {
        Contact.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addContact: (root, { id, name, lastName, phoneNumber, email, userId }) => {
      const newContact = new Contact({ id, name, lastName, phoneNumber, email, userId });
      return new Promise((resolve, reject) => {
        newContact.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editContact: (root, { id, name, lastName, phoneNumber, email }) => {
      return new Promise((resolve, reject) => {
        Contact.findOneAndUpdate({ id }, { $set: { name, lastName, phoneNumber, email } }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteContact: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Contact.findOneAndRemove({ _id: id }).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
