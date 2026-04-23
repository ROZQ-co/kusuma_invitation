// Inisialisasi Animasi AOS
AOS.init({ duration: 1200, once: true });

// Ambil Nama Tamu dari URL
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');
const guestDisplay = document.getElementById('guest-name');
const guestOverlay = document.getElementById('guest-name-overlay');

if (namaTamu) {
    const name = namaTamu.replace(/\+/g, ' ');
    guestDisplay.innerText = name;
    guestOverlay.innerText = name;
}

// Fungsi Buka Undangan
function mulaiUndangan() {
    // Putar Musik
    const audio = document.getElementById("weddingAudio");
    audio.play().catch(error => console.log("Autoplay dicegah oleh browser"));

    // Transisi Slide Up Overlay
    const overlay = document.getElementById("overlayer");
    overlay.style.transform = "translateY(-100%)";
    
    setTimeout(() => {
        overlay.style.display = "none";
    }, 1000);
}