import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    private loadingController: LoadingController
  ) { }

  async showLoader(msg?: any){
    const loading = this.loadingController.create({
      message: msg
    })
    ;(await loading).present();
  }
  hideLoader(){
    this.loadingController.dismiss();
  }
}
