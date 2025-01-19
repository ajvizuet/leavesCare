import { Firestore, collection, query, collectionData, addDoc, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Injectable, inject } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  firestoreService = inject(Firestore);

  constructor() {}

  createDocument(collectionName: string, data: any): Promise<any> {
    const colRef = collection(this.firestoreService, collectionName); // Crear referencia a la colección
    return addDoc(colRef, data);
  }

  readCollection(collectionName: string): Observable<any[]> {
    const colRef = collection(this.firestoreService, collectionName);
    return collectionData(colRef, { idField: 'id' });
  }

  async updateFeedback(collectionName: string, documentID: string, user_input: string){
    const docRef = doc(this.firestoreService, `${collectionName}/${documentID}`)
    const docSnapshot = await getDoc(docRef);
    
    if (docSnapshot) {
      console.log(docSnapshot.data())

      let element = docSnapshot.data()?.[user_input];
      if (element !== undefined){
        element = element + 1;
        // creo un objeto parcial
        const aux_obj = {[user_input]: element}
        console.log(user_input)
        
        this.updateDocument(collectionName, documentID, aux_obj)
      }

    }else{
      throw new Error("HTTP_404_NOT_FOUND");
    }
  }
  async updateDocument(collectionName: string, documentId: string, data: any): Promise<void> {
    const docRef = doc(this.firestoreService, `${collectionName}/${documentId}`); // Referencia al documento
    try {
      await updateDoc(docRef, data); // Actualizar los campos
      console.log('Documento actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el documento:', error);
    }
  }

  async getData(collectionName: string, documentID: string){
    const inf_ref = doc(this.firestoreService, `${collectionName}/${documentID}`)
    const inf = await getDoc(inf_ref)
    return inf.data()
  }



}