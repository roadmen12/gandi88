// Ganti dengan nomor WhatsApp tujuan (pakai kode negara, tanpa +)
const phoneNumber = "6285883341620"; // contoh: 62 untuk Indonesia
const correctNumber = Math.floor(Math.random() * 10) + 1;

function checkNumber() {
    const userGuess = document.getElementById("guess").value;
    const message = document.getElementById("message");

    if (userGuess == correctNumber) {
        message.innerHTML = "🎉 Benar! Mengalihkan ke WhatsApp...";
        
        const text = encodeURIComponent("aku sayang kamu");
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${text}`;

        setTimeout(() => {
            window.location.href = whatsappLink;
        }, 1500);

    } else {
        message.innerHTML = "❌ Salah, coba lagi!";
    }
}
