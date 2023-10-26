const baseUrl = 'http://localhost:8080';
export const registerUrl = `${baseUrl}/users/create/`;
// export const resetDriverPassword = (email) => `${baseUrl}/driver/setup-password?email=${email}`;
export const forgotPasswordVerification = (email) => `${baseUrl}/driver/setup-password?email=${email}`;
