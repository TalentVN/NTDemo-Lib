export interface HeaderSettings {
    LogoUrl: string;
    OrgName?: string;
    Menus?: MenuData[];
    User?: User;
}

export interface MenuData {
    title?: string;
    link?: string;
}

export interface User {
    UserName: string;
    ProfileImage: string;
}