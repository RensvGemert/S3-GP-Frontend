export default {
    login: async ({ username, password }) => {
        const request = new Request('http://localhost:8080/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });

        const response = await fetch(request);
        
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
        }
        
        const data = await response.json();

        localStorage.setItem('username', username);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('userRole', data.userRole);
        localStorage.setItem('companyRole', data.companyRole);
        
        const { token } = data;
        localStorage.setItem('token', token);
    },
    checkError: (error) => { /* ... */ },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        localStorage.removeItem('role');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        localStorage.removeItem('userRole');
        localStorage.removeItem('companyRole');
        return Promise.resolve();
    },
    getIdentity: () =>
        Promise.resolve({
            id: "user",
            fullName: localStorage.getItem('username'),
        }),
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    }
};