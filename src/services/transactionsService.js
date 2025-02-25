import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../config/firebaseConfig";

// Συνάρτηση για ανάκτηση των συναλλαγών του τρέχοντος χρήστη
const getTransactions = async () => {
  try {
    const q = query(collection(db, "transactions"), where("userId", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
};

export { getTransactions };


const addTransaction = async (type, amount, category) => {
  try {
    await addDoc(collection(db, "transactions"), {
      userId: auth.currentUser.uid,
      type,
      amount,
      category,
      date: new Date().toISOString(),
    });
    return "Success";
  } catch (error) {
    console.error("Error:", error);
    return error.message;
  }
};

export { addTransaction };
