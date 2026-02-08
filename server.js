const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/kirim", (req, res) => {
    const { nama, email, telepon, posisi, alamat } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "EMAIL_KAMU@gmail.com",
            pass: "PASSWORD_APLIKASI_GMAIL"
        }
    });

    let mailOptions = {
        from: email,
        to: "EMAIL_KAMU@gmail.com",
        subject: "Pendaftaran Pekerja Baru - PT Petani Muda",
        text: `
Nama    : ${nama}
Email   : ${email}
Telepon : ${telepon}
Posisi  : ${posisi}
Alamat  : ${alamat}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send("Gagal mengirim data");
        } else {
            res.send("Pendaftaran berhasil dikirim!");
        }
    });
});

app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});
