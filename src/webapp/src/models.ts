/* Do not change, this code is generated from Golang structs */


export interface User {
    id: string;
    email: string;
    displayName: string;
}
export interface UsersList {
    items: User[];
}
export interface SubAccount {
    id: string;
    displayName: string;
}
export interface Account {
    id: string;
    userId: string;
    subAccounts: SubAccount[];
}
export interface AccountsList {
    items: Account[];
}
export interface BookImageLink {
    id: string;
    uri: string;
    order: number;
}
export interface BookTranslation {
    id: string;
    locale: string;
    title: string;
    content: BookImageLink[];
}
export interface Book {
    id: string;
    translations: BookTranslation[];
}
export interface BooksList {
    items: Book[];
}