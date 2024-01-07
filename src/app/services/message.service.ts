import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private toastController: ToastController 
  ) { }

  async successMessage(msg?: any, position?: any){
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: position ? position : 'top',
      color: 'success'
      
    })
    await toast.present();
  }
  async errorMessage(msg?: any, position?: any){
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: position ? position : 'top',
      color: 'danger'
      
    })
    await toast.present();
  }
}
