export function isEmailValid(email) {
    // eslint-disable-next-line
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/
    return regEx.test(email)
}
export function isPasswordValid(password) {
    return password.length > 7;
}
export function isConfirmPasswordValid(password, cPassword) {
    return cPassword === password
}