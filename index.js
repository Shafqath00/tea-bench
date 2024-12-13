import express from "express"
import { MailtrapClient } from "mailtrap"
import Nodemailer from "nodemailer"
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
const TOKEN = "3f5517d4d15601a03f6541a010128a79";
const SENDER_EMAIL = "hello@demomailtrap.com";
const RECIPIENT_EMAIL = "newbiemill72@gmail.com";
const client = new MailtrapClient({ token: TOKEN });
const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("index.html");
})
app.post("/submit", (req, res) => {
    const n = req.body.name;
    const email = req.body.email;
    const num = req.body.num;
    const sub = req.body.tex;
    const message = req.body.mess;
    console.log(n, email, num, sub, message);




    client.send({
        from: sender,
        to: [{ email: RECIPIENT_EMAIL }],
        template_uuid: "3251dbbf-5eb4-4b88-8734-7fa70e570cd0",
        template_variables: {
            "name": n,
            "email": email,
            "number": num,
            "subject": sub,
            "message": message
        }
        // subject: "Tea Bench",
        // text: "Name: "+n + " Email: "+email +" num: "+num +" Subject: "+sub +" Message: "+message,
    })
        .then(console.log)
        .catch(console.error);


    res.redirect("/")
})
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})
