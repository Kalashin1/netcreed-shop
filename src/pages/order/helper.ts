import { db } from '../../firebase-settings';
import {
  getDocs,
  where,
  orderBy,
  collection,
  query
} from 'firebase/firestore';
import { COLLECTIONS } from '../../../types';

export const getOrders = async (userId: string) => {
  try {
    const q = query(
      collection(db, COLLECTIONS['ORDERS']),
      where('is_deleted', '==', false),
      where('user_id', '==', userId),
      // TODO: add filter object
      orderBy('created_at', 'desc')
    );

    const querySnapshot = await getDocs(q);
    const orders = querySnapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
    return [orders, null];
  } catch (error) {
    return [null, error];
  }
};