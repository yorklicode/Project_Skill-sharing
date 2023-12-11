import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export async function getSkills(userId) {
    const skillsCol = collection(db, "users", userId, "skills");
    const skillsSnapshot = await getDocs(skillsCol);
    const skillsList = skillsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return skillsList;
  }


  export async function addSkill(userId, skill) {
    const skillsCol = collection(db, "users", userId, "items");
    const docRef = await addDoc(skillsCol, skill);
    return docRef.id; // Return the new document ID
  }

  export async function deleteSkill(userId, skillId) {
    const skillDoc = doc(db, "users", userId, "skills", skillId);
    await deleteDoc(skillDoc);
  }