import { DocumentData } from './node_modules/@firebase/firestore-types/index.d';

export const COLLECTIONS = {
  BANNER_IMAGES: 'banner_image',
  CATEGORIES: 'category',
  SMART_OFFERS: 'smart_offer',
  USERS: 'user',
  PRODUCTS: 'product',
  ORDERS: 'order'
} as const;

export type FILTER_OBJECT = {
  color: string;
  price: [number, number],
  size: string;
  category: string;
  brand: string;
}

export interface User extends DocumentData {
  fullName: string;
  phoneNumber: string;
  id: string;
}

export interface Products extends DocumentData {
  id: string;
  price: number;
  category: Pick<Categories, 'id' | 'title' | 'image'>,
  images: ProductImage[];
  thumbnail: string;
  description: string;
  additionalInfo: string;
  shippingInfo: string;
  reviews: Review[]
}

export type ProductImage = {
  image: string;
  bigImage: string;
  smallImage: string;
}

export type Review = {
  userId: string;
  user_name: string;
  stars: number;
  title: string;
  description: string;
  likes: [Pick<User, 'id'>];
  disLikes: [Pick<User, 'id'>];
}


export interface IntrosliderImage {
  url: string;
  created_at: string;
  updated_at: string;
  id: string;
}

export interface Categories {
  title: string;
  created_at: string;
  updated_at: string;
  image: string;
  icon: string
  id: string
}

export interface SmartOffers {
  id: string;
  created_at: string;
  updated_at: string;
  image: string;
}