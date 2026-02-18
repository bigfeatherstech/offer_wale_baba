export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

export const validatePassword = (pass) => {
    // Min 6 chars, at least one letter and one number
    return pass.length >= 6 && /\d/.test(pass) && /[a-zA-Z]/.test(pass);
};

export const validateMobile = (num) => {
    return /^[6-9]\d{9}$/.test(num);
};