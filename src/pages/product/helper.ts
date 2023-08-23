import { COLLECTIONS } from './../../../types.d';
import { db } from '../../firebase-settings';
import { doc, getDoc } from 'firebase/firestore';
import { Products } from '../../../types';

export const getProduct = async (id: string): Promise<[Products|null, unknown|null]> => {
  try {
    const docRef = doc(db, COLLECTIONS['PRODUCTS'], id);
    const docSnap = await getDoc(docRef);
    const product = { ...docSnap.data(), id: docSnap.id } as Products;
    return [product, null];
  } catch (error) {
    return [null, error];
  }
};