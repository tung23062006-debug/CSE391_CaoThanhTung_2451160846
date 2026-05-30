const form = document.getElementById("registerForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");
const submitBtn = document.getElementById("submitBtn");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const successModal = document.getElementById("successModal");
const modalData = document.getElementById("modalData");
const closeModalBtn = document.getElementById("closeModalBtn");

const formState = {
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false
};

function setStatus(inputEl, isValid, errorMsg = "") {
    const group = inputEl.closest(".form-group");
    const icon = group.querySelector(".status-icon");
    const errorDisplay = group.querySelector(".error-msg");

    if (isValid) {
        inputEl.style.borderColor = "var(--color-valid)";
        if (icon) icon.textContent = "✅";
        if (errorDisplay) errorDisplay.textContent = "";
    } else {
        inputEl.style.borderColor = "var(--color-invalid)";
        if (icon) icon.textContent = "❌";
        if (errorDisplay && errorMsg) errorDisplay.textContent = errorMsg;
    }
}

function checkFormValidity() {
    const isFormValid = Object.values(formState).every(state => state === true);
    submitBtn.disabled = !isFormValid;
}

usernameInput.addEventListener("input", () => {
    const value = usernameInput.value.trim();
    if (value.length >= 2 && value.length <= 50) {
        setStatus(usernameInput, true);
        formState.username = true;
    } else {
        setStatus(usernameInput, false, "Tên phải dài từ 2 đến 50 ký tự.");
        formState.username = false;
    }
    checkFormValidity();
});

emailInput.addEventListener("input", () => {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(value)) {
        setStatus(emailInput, true);
        formState.email = true;
    } else {
        setStatus(emailInput, false, "Định dạng Email không hợp lệ (Ví dụ: abc@gmail.com).");
        formState.email = false;
    }
    checkFormValidity();
});

passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;
    let strength = 0;
    let msg = "";
    let color = "";

    if (value.length >= 8) {
        const hasAlphaNum = /[a-zA-Z]/.test(value) && /[0-9]/.test(value);
        const hasFullSpecs = /[A-Z]/.test(value) && /[a-z]/.test(value) && /[0-9]/.test(value) && /[^A-Za-z0-9]/.test(value);

        if (hasFullSpecs) {
            strength = 3; 
            msg = "Độ mạnh: Mạnh 🔥";
            color = "var(--color-valid)";
        } else if (hasAlphaNum) {
            strength = 2; 
            msg = "Độ mạnh: Trung bình ⚠️";
            color = "var(--color-warning)";
        } else {
            strength = 1; 
            msg = "Độ mạnh: Yếu (Nên phối hợp thêm chữ & số) 🛑";
            color = "var(--color-invalid)";
        }
    } else if (value.length > 0) {
        strength = 1; 
        msg = "Độ mạnh: Quá ngắn (Yêu cầu ≥ 8 ký tự) 🛑";
        color = "var(--color-invalid)";
    }

    strengthBar.style.width = (strength * 33.33) + "%";
    strengthBar.style.backgroundColor = color;
    strengthText.textContent = msg;
    strengthText.style.color = color;

    if (strength >= 2) {
        setStatus(passwordInput, true);
        formState.password = true;
    } else {
        setStatus(passwordInput, false);
        formState.password = false;
    }

    validateConfirmPassword();
    checkFormValidity();
});


function validateConfirmPassword() {
    const pass = passwordInput.value;
    const confirmPass = confirmPasswordInput.value;

    if (!confirmPass) {
        setStatus(confirmPasswordInput, false, "Vui lòng xác nhận lại mật khẩu.");
        formState.confirmPassword = false;
    } else if (pass === confirmPass) {
        setStatus(confirmPasswordInput, true);
        formState.confirmPassword = true;
    } else {
        setStatus(confirmPasswordInput, false, "Mật khẩu xác nhận không trùng khớp.");
        formState.confirmPassword = false;
    }
}
confirmPasswordInput.addEventListener("input", () => {
    validateConfirmPassword();
    checkFormValidity();
});

phoneInput.addEventListener("input", (e) => {
    let rawValue = e.target.value.replace(/\D/g, "");

    if (rawValue.length > 10) {
        rawValue = rawValue.substring(0, 10);
    }

    let formattedValue = "";
    if (rawValue.length > 0) {
        if (rawValue.length <= 4) {
            formattedValue = rawValue;
        } else if (rawValue.length <= 7) {
            formattedValue = `${rawValue.slice(0, 4)}-${rawValue.slice(4)}`;
        } else {
            formattedValue = `${rawValue.slice(0, 4)}-${rawValue.slice(4, 7)}-${rawValue.slice(7)}`;
        }
    }

    e.target.value = formattedValue;

    if (rawValue.length === 10) {
        setStatus(phoneInput, true);
        formState.phone = true;
    } else {
        setStatus(phoneInput, false, "Số điện thoại phải bao gồm đầy đủ 10 chữ số.");
        formState.phone = false;
    }
    checkFormValidity();
});


form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    modalData.innerHTML = `
        👤 <b>Họ tên:</b> ${usernameInput.value.trim()}<br>
        📧 <b>Email:</b> ${emailInput.value.trim()}<br>
        📞 <b>Số điện thoại:</b> ${phoneInput.value}
    `;

    successModal.classList.remove("hidden"); 
});

closeModalBtn.addEventListener("click", () => {
    successModal.classList.add("hidden");
    form.reset();

    document.querySelectorAll("input").forEach(input => {
        input.style.borderColor = "var(--border-color)";
    });
    document.querySelectorAll(".status-icon").forEach(icon => icon.textContent = "");
    strengthBar.style.width = "0%";
    strengthText.textContent = "";

    Object.keys(formState).forEach(key => formState[key] = false);
    submitBtn.disabled = true;
});