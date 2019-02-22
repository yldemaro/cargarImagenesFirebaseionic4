import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  email: string;
  password: string;
  cpassword: string;

  constructor(public afr: AngularFireAuth,
    public rout: Router, public alertController: AlertController) { }

  async register() {

    const { email, password, cpassword } = this;

    if (password !== cpassword) {
      this.errorpassIguales();
      this.rout.navigateByUrl('/register');
    } else {
      try {
        const res = this.afr.auth.createUserWithEmailAndPassword(email, password);
        this.presentAlert(email);
        console.log(res);
        this.rout.navigateByUrl('/');
      } catch (error) {
        console.log(error);
      }
    }
  }

  async registerGmail() {

    try {
      const res = await this.afr.auth.signInWithPopup(new auth.GoogleAuthProvider());
      this.presentAlert(this.email);
      console.log(res);
      this.rout.navigateByUrl('/');
    } catch (error) {
      console.log(error);
    }


  }
  goLogin() {
    this.rout.navigateByUrl('/login');
  }

  async presentAlert(username) {
    const alert = await this.alertController.create({
      header: 'Registrado como: ',
      message: `${username}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  async errorpassIguales() {
    const alert = await this.alertController.create({
      message: 'Lo siento sus contraseñas son diferentes',
      buttons: ['OK']
    });

    await alert.present();
  }
}
