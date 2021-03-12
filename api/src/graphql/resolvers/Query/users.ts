import User from '../../../db/models/users';

const userResolver = () => {
  return User.findAll();
}

export default userResolver;