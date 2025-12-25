const gallery = [
    { src: "sunflower.png", caption: "Sunflower"},
    { src: "pink rose.png", caption: "Pink Rose" },
    { src: "tulip.jpg", caption: "Tupil" },
    { src: "daisy.png", caption: "Daisy" }
];

let index = 0;

function updateGallery() {
    document.getElementById("galleryImage").src = gallery[index].src;
    document.getElementById("caption").textContent = gallery[index].caption;
}

function nextImage() {
    index++;
    if (index >= gallery.length) {
        index = 0;
    }
    updateGallery();
}

function prevImage() {
    index--;
    if (index < 0) {
        index = gallery.length - 1;
    }
    updateGallery();
}