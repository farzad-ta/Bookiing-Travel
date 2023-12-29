import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // apiKey: "AIzaSyDfQVMCxF_ncjs5wfnZRVbZUFouIbEVPrM",
  // authDomain: "fir-test-a3490.firebaseapp.com",
  // projectId: "fir-test-a3490",
  // storageBucket: "fir-test-a3490.appspot.com",
  // messagingSenderId: "915772816446",
  // appId: "1:915772816446:web:37dd2f2333f87abcae256f",
  // measurementId: "G-MMYK5D1GS8"
  apiKey: "AIzaSyApV22bdAAwiNrtmgO0bdOtsuDJsiWEogc",
  authDomain: "bookingticketflight-2a6b2.firebaseapp.com",
  projectId: "bookingticketflight-2a6b2",
  storageBucket: "bookingticketflight-2a6b2.appspot.com",
  messagingSenderId: "615760637165",
  appId: "1:615760637165:web:281b9a4c5226fe2ddb30e4",
  measurementId: "G-5BF5DJKEWG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
