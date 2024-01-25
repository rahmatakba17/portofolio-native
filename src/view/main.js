
const myFunction = () => {
    console.log('Button clicked!');
    // Tambahkan logika untuk mengganti tema di sini
};

const main = (images) => {
    // Lakukan inisialisasi atau manipulasi DOM yang diperlukan di sini

    // Contoh: Tambahkan gambar ke dalam dokumen
    const imageContainer = document.getElementById('image-container');
    if (imageContainer) {
        images.forEach((imagePath) => {
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imageContainer.appendChild(imgElement);
        });
    }
};

export default main;
export { myFunction };

