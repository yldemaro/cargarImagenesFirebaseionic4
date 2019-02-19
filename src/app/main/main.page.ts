import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { ModalTablonPage } from '../modal-tablon/modal-tablon.page';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  uid: string;
  profiledata = [];
  tablondata = [];

  ngOnInit() {
  }
  constructor(private aut: AngularFireAuth, public modalController: ModalController,
    private router: Router , public _servicie: ServicesService, private http: HttpClient) {
      this.aut.authState
      .subscribe(
        user => {
          this.uid = user.uid;
          console.log(user.uid);
        },
        () => {
         // this.rout.navigateByUrl('/login');
        }
      );
      this.profileload(this.uid);
      this.tablonload('Alcala');
      setTimeout(() => {
        this.profileload(this.uid);
      }, 2000);
      setInterval(() => {
        this.tablonload('Alcala');
      }, 7000);
    }

  async presentModal() {
    console.log('Modal 1');
    const modal = await this.modalController.create({
      component: ModalPagePage,
    });
    return await modal.present();
  }

  async presentModal2() {
    const modal2 = await this.modalController.create({
      component: ModalTablonPage,
      componentProps: { zona: 'Alcala' }
    });
    return await modal2.present();
  }
  gotoprofile() {
    this.router.navigateByUrl(`profile/` + this.uid);
  }

  async profileload(uid: string) {

    await this.http.get(`http://uicar.openode.io/users/` + uid + '/info').subscribe((data: any) => {
      this.profiledata = data;
      console.log(data);
    });
  }

  async tablonload(id: string) {

    await this.http.get(`http://uicar.openode.io/zonas/` + id + '/tablon').subscribe((data: any) => {
      this.tablondata = data;
      console.log(data);
    });
  }

}
