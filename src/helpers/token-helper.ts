//get token from session storage
export const getToken = (): string | null => {
    return sessionStorage.getItem('token') || null;
};

// remove the token from the session storage
export const removeUserSession = (): void => {
    sessionStorage.removeItem('token');
};

// set the token from the session storage
export const setUserSession = (token: string): void => {
    sessionStorage.setItem('token', token);
};
