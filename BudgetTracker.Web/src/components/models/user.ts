export type User = {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    country: string,
    dateOfBirth: Date
};

export const defaultUser: User = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    country: "",
    dateOfBirth: new Date()
}