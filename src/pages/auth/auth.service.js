export const SignIn = (token, user) => {
    console.log('Sesión iniciada');
    localStorage.setItem('token', token);
    localStorage.setItem('loggedUser', user);
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
    localStorage.removeItem('loggedUser');
}
