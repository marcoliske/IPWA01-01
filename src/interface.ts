export interface IUserRegistryData {
  gender: gender;
  firstName: string;
  lastName: string;
  email: string;
  street?: string;
  streetNumber?: number;
  postalCode?: number;
  city?: string;
  isDonationDelivered: boolean;
  shippingArea: string[];
  articles: IArticle[];
  date: string;
}

export interface IArticle {
  category: articleCategory;
  amount: number;
}

export enum articleCategory {
  tshirt = "tshirt",
  pant = "hose",
  shoe = "schuhe",
}

export enum gender {
  mr = "herr",
  mrs = "frau",
}

export interface IRegistryProgress {
  step: 1 | 2 | 3;
}

export const regExAlphabetical = {
  pattern: /^[A-Za-z]+$/,
  message: "Bitte nur Buchstaben nutzen",
};
