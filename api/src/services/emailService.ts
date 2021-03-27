const Mailgun = require("mailgun-js");

export async function emailService(email: Array<string>, subject: string, textToSend: string){

  let mg = undefined;
  try {
    mg = Mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
  } catch (error) {
    console.log('ACORDARSE DE CONFIGURAR EL .ENV!!!')
  }
  
  const data = {
    from: 'Grupo 1 - Ecommerce <ecommerce@gmail.com>',
    to: email.join(","),
    subject,
    html: textToSend
  };

  mg && await mg.messages().send(data, function (error, body) {
    if(error){
      console.log('Error: ',error)
    }console.log('Body: ',body);
    return
  });
}