export interface UserAttributes {
  id?: string;
  firstName: string;
}

export interface ProductAttributes {
  id?: string;
  name: string;
  description: string;
  price: number;
  brandId: string;
  CategoriesId: [string];
}

export interface CategoryAttributes {
  id?: string;
  name: string;
}

export interface BrandAttributes {
  id?: string;
  name: string;
}
