/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth, db } from '../../firebase-settings';
import { updateProfile } from 'firebase/auth';
import { doc, updateDoc, getDoc, } from 'firebase/firestore';
import { User } from '../../../types';

export const updateUserProfile = async (fullName: string, phoneNumber: string) => {
  try {
    if (auth.currentUser) {

      await updateProfile(auth.currentUser, {
        displayName: fullName
      });

      await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        fullName,
        phoneNumber
      });
    }
    return [true, null];
  } catch (error: any) {
    return [false, error.message];
  }
};

export const getUserProfile = async (id: string): Promise<[User|null, string|null]> => {
  try {
    const docRef = doc(db, 'users', id);
    const docSnap = await getDoc(docRef);
    const _user = { ...docSnap.data(), id: docSnap.id } as User;
    return [_user, null];
  } catch (error: any) {
    return [null, error.message];
  }
};
