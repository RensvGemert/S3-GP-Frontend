export default {
        login: ({ username, password }) => {
            const request = new Request('http://localhost:8080/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            });
            return fetch(request)
                .then(response => {
                    if (response.status < 200 || response.status >= 300) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then(({ token }) => {
                    localStorage.setItem('token', token);
                });
        },
        checkError: (error) => { /* ... */ },
        checkAuth: () => {
            return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
        },
        logout: () => {
            localStorage.removeItem('token');
            localStorage.removeItem('permissions');
            return Promise.resolve();
        },
        getIdentity: () => { /* ... */ },
        getPermissions: () => {
            const role = localStorage.getItem('permissions');
            return role ? Promise.resolve(role) : Promise.reject();
        }
    };