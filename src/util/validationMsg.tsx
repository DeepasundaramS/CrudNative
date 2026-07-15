export const regexValidation = {
    regex: {
        invalidPasswordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{6,}$/,
        invalidEmailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        nameRegex: /[^a-zA-Z\s]/,
        invalidPhoneNumberRegex: /^[6-9]\d{9}$/,
    }
}

export const validationErrors = {
    name: {
        required: "UserName is required",
        InvalidName: "Enter a valid UserName",
        FullNameValidation: "Enter a valid Full Name"
    },
    email: {
        required: "Email is required",
        validEmail: "Enter a valid email address",
        Exists: "Email is alreay exists"
    },
    username: {
        required: "Username is required",
        Exists: "Username is alreay exists"
    },
    password: {
        required: "Password is required",
        InvalidPassword: "Your password must have at least 6 characters, including 1 uppercase letter, 1 number, and 1 special character."
    },
    confirmpassword: {
        required: "Confirm Password is required",
        matchPassword: "password and confirm password must be same"
    },
    common: {
        Mismatch: "Email & Password are incorrect, please try again"
    },
    role: {
        required: "Role is required"
    },
    profile_img: {
        required: "Profile Image is Required"
    },
    phone_number: {
        required: "Phone Number is Required",
        InvalidPhonenumber: 'Enter a valid phone number'
    },
    status: {
        required: "Status in Required"
    }
}