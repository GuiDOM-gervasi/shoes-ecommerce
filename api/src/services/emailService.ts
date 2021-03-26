const Mailgun = require("mailgun-js");

export async function emailService(textToSend: string, subject: string, email: Array<string>){

  const mg = Mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
  
  const data = {
    from: 'postmaster@sandboxc71b9dbd1ed2436fae90b8416f853582.mailgun.org',
    to: email.join(","),
    subject,
    text: textToSend
  };

  await mg.messages().send(data, function (error, body) {
    if(error){
      console.log(error)
    }else{
      return true
    }
    return false
  });
}