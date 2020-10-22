export const SignIn = () => {
    console.log('Sesión iniciada');
    localStorage.setItem('token', '123');
}

export const isLoggedIn = () => {
    const result = localStorage.getItem('token');
    if (result != null) {
        return true
    } else {
        return false
    }
}

export const SignOut = () => {
    console.log('Sesión finalizada');
    localStorage.removeItem('token');
}
