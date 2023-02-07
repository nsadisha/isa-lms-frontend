
class LocalStorageService {
    #TOKEN_KEY = 'token';
    #EMAIL_KEY = 'email';
    #ROLE_KEY = 'role';

    setToken(token) {
        localStorage.setItem(this.#TOKEN_KEY, token);
    }
    getToken() {
        return localStorage.getItem(this.#TOKEN_KEY) || null;
    }
    clearAll() {
        localStorage.removeItem(this.#TOKEN_KEY);
        // localStorage.removeItem(this.#EMAIL_KEY);
        localStorage.removeItem(this.#ROLE_KEY);
    }

    isSigned() {
        return this.getToken() != null;
    }

    setEmail(email) {
        localStorage.setItem(this.#EMAIL_KEY, email);
    }
    getEmail() {
        return localStorage.getItem(this.#EMAIL_KEY) || null;
    }

    setRole(role) {
        localStorage.setItem(this.#ROLE_KEY, role);
    }
    getRole() {
        return localStorage.getItem(this.#ROLE_KEY) || null;
    }




}

let localStorageService = new LocalStorageService();
export default localStorageService;