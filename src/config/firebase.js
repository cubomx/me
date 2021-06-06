import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import 'firebase/firebase-storage';
// config 
import { firebaseConfig } from './settings';

firebase.initializeApp( firebaseConfig );

const Firestore = firebase.firestore( );
const Auth = firebase.auth( );
const Storage = firebase.storage( );

export { Firestore, Auth, Storage };