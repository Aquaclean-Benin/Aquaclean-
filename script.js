// Ce JS est minimal, mais tu pourras l’étendre selon tes besoins

// WhatsApp float button (optionnel) : cacher si déjà sur WhatsApp ou sur desktop
document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth > 1024) {
        document.querySelector('.whatsapp-float').style.display = "block";
    }
});