/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth, db } from '../../firebase-settings';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

interface SigninParams {
  email: string;
  password: string;
}

interface SignupParams extends SigninParams {
  fullName: string;
}

export const signIn = async ({
  email,
  password,
}: SigninParams):
Promise<[User|null, string | null]> => {
  try {
    const {user} = await signInWithEmailAndPassword(auth, email.trim().toLowerCase(), password);
    return [user, null];
  } catch (error: any) {
    return [null, error.message];
  }
};

export const signup = async ({
  email,
  password,
  fullName
}: SignupParams):
Promise<[User|null, string | null]> => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', user.uid), {
      fullName
    });
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: fullName,
      });
    }
    return [user, null];
  } catch (error: any) {
    return [null, error.message];
  }
};


export const getCurrentUser = (): [User | null, string | null] => {
  const currrentUser = auth.currentUser;
  if (currrentUser) {
    return [currrentUser, null];
  } else {
    return [null, 'no current user'];
  }
};