document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const hotenInput = document.getElementById("hoten");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const checkpasswordInput = document.getElementById("checkpassword");
    const submitButton = form.querySelector("button");

    //kiểm tra lỗi
    function setError(inputElement, message) {
        const parent = inputElement.parentElement;
        //thêm
        parent.classList.add("error");
        //xóa
        parent.classList.remove("success");
        //thêm chữ vào message của small
        const msgElement = parent.querySelector(".message");
        if (msgElement) {
            msgElement.textContent = message;
        }
    }

    function setSuccess(inputElement, message = "✓ Hợp lệ") {
        const parent = inputElement.parentElement;
        parent.classList.add("success");
        parent.classList.remove("error");
        const msgElement = parent.querySelector(".message");
        if (msgElement) {
            msgElement.textContent = message;
        }
    }

    //kiểm tra lỗi hoten
    function validateHoten() {
        //loại bỏ space đầu cuối thừa
        const val = hotenInput.value.trim();
        if (val === "") {
            setError(hotenInput, "χ Họ và tên không được để trống.");
            return false;
        }
        else if (val.length < 3 && val.length > 0) {
            setError(hotenInput, "χ Họ và tên chưa chuẩn");
            return false;
        }
        else {
            setSuccess(hotenInput, "✓ Hợp lệ");
            return true;
        }
    }

    //kiểm tra lỗi email
    function validateEmail() {
        const val = emailInput.value.trim();
        //kiểm tra cấu trúc email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (val === "") {
            setError(emailInput, "χ Email không được để trống.");
            return false;
        }
        //kiểm tra đối chiếu với cấu trúc
        else if (!emailRegex.test(val)) {
            setError(emailInput, "χ Email không đúng định dạng.");
            return false;
        }
        else {
            setSuccess(emailInput, "✓ Hợp lệ");
            return true;
        }
    }

    //kiểm tra mật khẩu
    function validatePassword() {
        const val = passwordInput.value;
        if (val === "") {
            setError(passwordInput, "χ Mật khẩu không được để trống.");
            return false;
        } 
        else if (val.length < 6) {
            setError(passwordInput, "χ Mật khẩu phải có ít nhất 6 ký tự.");
            return false;
        } 
        else {
            setSuccess(passwordInput, "✓ Hợp lệ");
            return true;
        }
    }

    //kiểm tra lại mật khẩu
    function validateCheckPassword() {
        const val = checkpasswordInput.value;
        const passwordVal = passwordInput.value;
        if (val === "") {
            setError(checkpasswordInput, "χ Vui lòng xác nhận lại mật khẩu.");
            return false;
        } 
        else if (val !== passwordVal) {
            setError(checkpasswordInput, "χ Mật khẩu xác nhận không khớp.");
            return false;
        } 
        else {
            setSuccess(checkpasswordInput, "✓ Hợp lệ");
            return true;
        }
    }

    //gọi đến sự kiện
    hotenInput.addEventListener("input", validateHoten);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", () => {
        validatePassword();
        if (checkpasswordInput.value !== "") {
            validateCheckPassword();
        }
    });
    checkpasswordInput.addEventListener("input", validateCheckPassword);

    //bấm nút đăng ký
    submitButton.addEventListener("click", function (event) {
        const isHotenValid = validateHoten();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isCheckPasswordValid = validateCheckPassword();

        if (!isHotenValid || !isEmailValid || !isPasswordValid || !isCheckPasswordValid) {
            //nếu sai thì chặn các hành động của nút
            event.preventDefault();
            alert("Vui lòng điền đầy đủ và chính xác thông tin trước khi đăng ký!");
        } 
        else {
            alert("Đăng ký thành công!");
        }
    });
});