const authProvider = {
    login: async ({ username, password }) => {
        const request = new Request('https://piadadb.shiruvaaa.net/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json'}),
        });

        const response = await fetch(request);
        
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
        }
        
        const data = await response.json();
        localStorage.setItem('companyId', data.companyId);
        localStorage.setItem('username', username);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('userRole', data.userRole);
        localStorage.setItem('companyRole', data.companyRole);
        
        const { token } = data;
        localStorage.setItem('token', token);

        function refreshPage() {
            window.location.reload(false);
          }

        setTimeout(() => refreshPage(), 50);
    },
    checkError: (error) => { /* ... */ },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        localStorage.clear();
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

export default authProvider;