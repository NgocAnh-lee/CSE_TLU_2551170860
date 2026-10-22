const radios = document.querySelectorAll('.toolbar input[type="radio"]');
const image = document.querySelector('.effect');

const buttonColors = {
    "Gray": "#0d6efd",
    "Xray": "#0d6efd",
    "Invert": "#0d6efd",
    "FlipH": "#0d6efd",
    "FlipV": "#0d6efd",
    "Glow": "#0d6efd",
    "Shadow": "#0d6efd",
    "Bold Shadow": "#0d6efd",
    "DropShadow": "#0d6efd",
    "Blur": "#0d6efd",
    "Wave": "#0d6efd", 
    "Mask": "#0d6efd",
    "Alpha": "#0d6efd"
};


const effectFilters = {
    "Gray": "grayscale(1)",
    "Xray": "invert(1) grayscale(1) contrast(1.5)",
    "Invert": "invert(1)",
    //xu ly lat ngang transform
    "FlipH": "grayscale(0) drop-shadow(0 0 0 transparent)",
    "FlipV": "grayscale(0) drop-shadow(0 0 0 transparent)",
    "Glow": "drop-shadow(0 0 10px #ffc107)",
    "Shadow": "drop-shadow(5px 5px 5px rgba(0,0,0,0.8))",
    "Bold Shadow": "drop-shadow(10px 10px 0px #000)",
    "DropShadow": "drop-shadow(4px 4px 10px rgba(0,0,0,0.5))",
    "Blur": "blur(3px)",
    "Wave": "hue-rotate(90deg)",
    "Mask": "contrast(200%)",
    "Alpha": "opacity(0.5)"
};

radios.forEach(radio => {
    radio.addEventListener('change', function() {
        //reset lai mau va bo active cua nut
        document.querySelectorAll('.btn').forEach(btn => {
            btn.classList.remove('active');
            btn.style.backgroundColor = ''; // Trở về màu mặc định trong CSS
        });

        //lay label cua radio duoc chon
        const parentLabel = this.closest('.btn');
        parentLabel.classList.add('active');

        const btnText = parentLabel.textContent.trim();

        //thay doi hieu ung tuong ung
        if (btnText === "FlipH") {
            image.style.transform = "scaleX(-1)";
            image.style.filter = "none";
        } 
        else if (btnText === "FlipV") {
            image.style.transform = "scaleY(-1)";
            image.style.filter = "none";
        } 
        else {
            image.style.transform = "none";
            if (effectFilters[btnText]) {
                image.style.filter = effectFilters[btnText];
            }
        }
    });
});

//chay lai hieu ung
window.addEventListener('DOMContentLoaded', () => {
    const checkedRadio = document.querySelector('.toolbar input[type="radio"]:checked');
    if (checkedRadio) {
        const parentLabel = checkedRadio.closest('.btn');
        parentLabel.classList.add('active');
        const btnText = parentLabel.textContent.trim();
        if (buttonColors[btnText]) {
            parentLabel.style.backgroundColor = buttonColors[btnText];
        }
    }
});