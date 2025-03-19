import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, User } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, Firestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private app = initializeApp(environment);
  private auth = getAuth(this.app);
  private db: Firestore = getFirestore(this.app);

  // Registro de usuario
  async registerUser(email: string, password: string): Promise<User> {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    return userCredential.user;
  }

  // Login de usuario
  async loginUser(email: string, password: string): Promise<User> {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    return userCredential.user;
  }

  // Logout de usuario
  async logoutUser(): Promise<void> {
    await signOut(this.auth);
  }

  // Enviar correo para resetear contraseña
  async resetPassword(email: string): Promise<string> {
    await sendPasswordResetEmail(this.auth, email);
    return 'Correo de recuperación enviado';
  }

  // Agregar receta
  async addReceta(receta: any): Promise<string> {
    const docRef = await addDoc(collection(this.db, 'recetas'), receta);
    return docRef.id;
  }

  // Obtener todas las recetas
  async getRecetas(): Promise<any[]> {
    const querySnapshot = await getDocs(collection(this.db, 'recetas'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  // Editar receta
  async updateReceta(id: string, data: any): Promise<void> {
    await updateDoc(doc(this.db, 'recetas', id), data);
  }

  // Eliminar receta
  async deleteReceta(id: string): Promise<void> {
    await deleteDoc(doc(this.db, 'recetas', id));
  }
}

// Nota: Si ves advertencias de que ciertos componentes de Ionic no se usan en las plantillas,
// revisa los archivos .html de esas páginas y elimina los imports innecesarios en los módulos
// o añade los componentes que realmente vas a usar para evitar estos warnings.
