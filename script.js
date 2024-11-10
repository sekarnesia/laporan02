
function toggleMode() {
    document.body.classList.toggle("berantakan");
}

function toggleContent(id) {
    const content = document.getElementById(id);
    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
    } else {
        const confirmHide = confirm("Apakah Anda ingin menyembunyikan konten dari bagian ini?");
        if (confirmHide) {
            content.classList.add("hidden");
        }
    }
}
