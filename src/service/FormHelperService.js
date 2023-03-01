export function createDataObjectForm(form) {
    return {
        first_name: form.fname.value,
        last_name: form.lname.value,
        email: form.email.value,
        password: form.password.value,
        cPassword: form.cPassword.value,
        role: form.role.value
    };
}

export function filterUserProperties(user) {
    let newUser = {...user};
    delete newUser.authorities
    delete newUser.enabled
    delete newUser.accountNonExpired
    delete newUser.accountNonLocked
    delete newUser.credentialsNonExpired

    return newUser;
}