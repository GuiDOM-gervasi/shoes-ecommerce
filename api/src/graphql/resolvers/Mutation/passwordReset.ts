import User from "../../../db/models/users";
import { UserAttributes } from "../../../db/models/types";
import * as bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

const jwt = require('jwt-simple');
const passwordReset = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  if (args.email !== undefined) {
    var emailAddress = args.email;
    const user = await User.findOne({
      where: {
        email: emailAddress,
      },
    });
    var payload = {
      id: user.id,
      email: emailAddress,
    };

    // var secret = user.password + user.createdAt.getTime();
    var secret = 'fe1a1915a379f3be5394b64d14794932-1506868106675';

    var token = jwt.encode(payload, secret);

    var url = "/resetpassword/" + token
    return url
    // TODO: Send email containing link to reset password.
    // In our case, will just return a link to click.
    // res.send(
    //   '<a href="/resetpassword/' +
    //     payload.id +
    //     "/" +
    //     token +
    //     '">Reset password</a>'
    // );
  } else {
    return "Email address is missing.";
  }
};

export default passwordReset;
