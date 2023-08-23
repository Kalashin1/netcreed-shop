import { db } from '../firebase-settings';
import { getDocs, query, collection, where, orderBy, Query } from 'firebase/firestore';
import { COLLECTIONS, IntrosliderImage, Categories } from '../../types';

export const getIntroSliderImages = async (): Promise<[IntrosliderImage[] | null, null | unknown]> => {
  try {
    const q = query(
      collection(db, COLLECTIONS['BANNER_IMAGES']),
      where('is_active', '==', true),
      where('is_deleted', '==', false),
      orderBy('created_at', 'desc')
    ) as Query<IntrosliderImage>;

    const querySnapshot = await getDocs(q);
    const introSliderImages = querySnapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
    return [introSliderImages, null];
  } catch (error) {
    // * return error
    return [null, error];
  }
};

export const getCategories = async () => {
  try {
    const q = query(
      collection(db, COLLECTIONS['CATEGORIES']),
      where('is_deleted', '==', false),
      orderBy('created_at', 'desc')
    ) as Query<Categories>;

    const querySnapshot = await getDocs(q);
    const categories = querySnapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
    return [categories, null];
  } catch (error) {
    return [null, error];
  }
};


export const getSmartOffers = async () => {
  try {
    const q = query(
      collection(db, COLLECTIONS['SMART_OFFERS']),
      where('is_deleted', '==', false),
      orderBy('created_at', 'desc')
    );

    const querySnapshot = await getDocs(q);
    const smartOffers = querySnapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
    return [smartOffers, null];
  } catch (error) {
    return [null, error];
  }
};


export const getNewArrivals = async () => {
  try {
    const q = query(
      collection(db, COLLECTIONS['PRODUCTS']),
      where('is_deleted', '==', false),
      // TODO: add another where clause to get new documents
      orderBy('created_at', 'desc')
    );

    const querySnapshot = await getDocs(q);
    const newArrivals = querySnapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
    return [newArrivals, null];
  } catch (error) {
    return [null, error];
  }
};

export const getDealsOfDay = async () => {
  try {
    const q = query(
      collection(db, COLLECTIONS['SMART_OFFERS']),
      where('is_deleted', '==', false),
      // TODO: add another where clause to get new documents based on date
      orderBy('created_at', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const dealsOfDay = querySnapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
    return [dealsOfDay, null];
  } catch (error) {
    return [null, error];
  }
};


export const getTrending = async () => {
  try {
    const q = query(
      collection(db, COLLECTIONS['PRODUCTS']),
      where('is_deleted', '==', false),
      // TODO: add another where clause to get new documents
      orderBy('created_at', 'desc')
    );

    const querySnapshot = await getDocs(q);
    const trending = querySnapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
    return [trending, null];
  } catch (error) {
    return [null, error];
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RecommendedProducts = async (_user_id?: string) => {
  try {
    const q = query(
      collection(db, COLLECTIONS['PRODUCTS']),
      where('is_deleted', '==', false),
      // TODO: add another where clause to get new documents
      orderBy('created_at', 'desc')
    );

    const querySnapshot = await getDocs(q);
    const Recommended = querySnapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
    return [Recommended, null];
  } catch (error) {
    return [null, error];
  }
};