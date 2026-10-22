let checkbox_toggle = document.getElementById('light-dark');
let statusText = document.getElementById('status');

checkbox_toggle.addEventListener('change', function () {
    if (checkbox_toggle.checked) {
        document.body.classList.add('dark');
        statusText.textContent = "Đây là giao diện ở chế độ TỐI (đang bật).";
    } 
    else {
        document.body.classList.remove('dark');
        statusText.textContent = "Đây là giao diện ở chế độ SÁNG (đang bật).";
    }
});