import { db } from '../../firebase-settings';
import {
  getDocs,
  where,
  orderBy,
  collection,
  query
} from 'firebase/firestore';
import { FILTER_OBJECT, COLLECTIONS } from '../../../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProducts = async (filter?: FILTER_OBJECT) => {
  try {
    const q = query(
      collection(db, COLLECTIONS['PRODUCTS']),
      where('is_deleted', '==', false),
      // TODO: add filter object
      orderBy('created_at', 'desc')
    );

    const querySnapshot = await getDocs(q);
    const trending = querySnapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
    return [trending, null];
  } catch (error) {
    return [null, error];
  }
};

