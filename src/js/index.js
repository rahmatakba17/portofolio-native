// index.js
import '../../css/style.css';
import main, { myFunction } from '../view/main.js'; // Import myFunction juga

// Import semua gambar dari folder
function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../img/', false, /\.(png|jpe?g|svg)$/));

document.addEventListener('DOMContentLoaded', () => {
    // Gunakan array gambar yang sudah diimpor
    main(images);

    // Tambahkan event listener untuk button dark theme
    const darkButton = document.getElementById('btn-dark');
    if (darkButton) {
        darkButton.addEventListener('click', () => {
            // Panggil fungsi myFunction di sini
            myFunction();
        });
    }
});
