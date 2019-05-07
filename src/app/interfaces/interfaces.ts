/**
 * Header Interface Model
 */
export interface HeaderSettings {
    LogoUrl: string;
    OrgName?: string;
    Menus?: MenuData[];
    User?: User;
}

/**
 * Header Menu Interface Model
 */
export interface MenuData {
    Title?: string;
    Link?: string;
}

/**
 * User Info Interface Model
 */
export interface User {
    UserName: string;
    ProfileImage?: string;
    Tags?: Tag[];
}

/**
 * User Profile tags Interface Model
 */
export interface Tag {
    Detail: string;
    Link?: string;
}

/**
 * User Info Interface Model
 */
export interface Menu {
    MenuItems?: MenuItem[];
}

/**
 * User Info Interface Model
 */
export interface MenuItem {
    Title: string;
    Link?: string;
    Icon?: string;
}

