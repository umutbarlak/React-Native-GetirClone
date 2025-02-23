export type Cat = {
  name: string;
  src: string;
  id: string;
  subCategories?: string[];
};

export type Product = {
  id: string;
  image: string;
  images: string[];
  name: string;
  miktar: string;
  fiyat: number;
  fiyatIndirimli: number;
};
