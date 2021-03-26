import User from "../../../db/models/users";
import { UserAttributes } from "../../../db/models/types";
import * as bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { emailService } from "../../../services/emailService";
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

    const token = jwt.encode(payload, process.env.PASSWORD_RESET_SECRET);
    const BASE_URL = "http://localhost:3000"
    const URL = BASE_URL +"/resetpassword/" + token;
    const subject = "Reset Password Ecommerce";
    const text = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Ecommerce reset password</title>
    <link href="styles.css" media="all" rel="stylesheet" type="text/css" />
    </head>
    <body itemscope itemtype="http://schema.org/EmailMessage">
    <table class="body-wrap">
      <tr>
        <td></td>
        <td class="container" width="600">
          <div class="content">
            <table class="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope itemtype="http://schema.org/ConfirmAction">
              <tr>
                <td class="content-wrap">
                  <meta itemprop="name" content="Confirm Email"/>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td class="content-block">
                        Please confirm your email address by clicking the link below.
                      </td>
                    </tr>
                    <tr>
                      <td class="content-block">
                        We may need to send you critical information about our service and it is important that we have an accurate email address.
                      </td>
                    </tr>
                    <tr>
                      <td class="content-block" itemprop="handler" itemscope itemtype="http://schema.org/HttpActionHandler">
                        <a href="${URL}" class="btn-primary" itemprop="url">Reset password</a>
                      </td>
                    </tr>
                    <tr>
                      <td class="content-block">
                        &mdash; The Mailgunners
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <div class="footer">
              <table width="100%">
                <tr>
                  <td class="aligncenter content-block">Follow <a href="${BASE_URL}">Ecommerce</a> on Twitter.</td>
                </tr>
              </table>
            </div></div>
        </td>
        <td></td>
      </tr>
    </table>
    
    </body>
    </html>`

    await emailService( [emailAddress], subject, text );
    
    return "Ok"
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
