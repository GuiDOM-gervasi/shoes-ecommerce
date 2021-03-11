import { User } from '../../../db/models';

const userResolver = () => {
  return User.findAll();
}

export default userResolver;
