import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements AfterViewInit {

  profiledata = [];
  profiletrayectos = [];

  uid: string;
  uidprofile: string;
  userprofile: boolean;
  perfilT: Number;

  // Mapa variablees



  constructor(private http: HttpClient
    , private aut: AngularFireAuth, private router: Router, public active: ActivatedRoute) {

    console.log('entro a profile');
    this.userprofile = true;
    this.uid = localStorage.getItem('uid');

  }

  ionViewCanEnter() {
    if (this.uid === undefined) {
      this.router.navigateByUrl('login');
    }
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.profileload();
    }, 3000)
  }

  async profileload() {

    await this.http.get(`http://uicar.openode.io/users/` + this.uid + '/info').subscribe((data: any) => {
      this.perfilT = data.length;
      this.userprofile = false;
      this.profiledata = data;
    });

    await this.http.get(`http://uicar.openode.io/users/` + this.uid + '/trayectos').subscribe((data2: any) => {
      this.userprofile = false;
      this.profiletrayectos = data2;
    });
  }

  gotomain() {
    this.router.navigateByUrl('/');
  }
  gotoedit() {
    this.router.navigateByUrl('/edituser');
  }
  gotocreate() {
    this.router.navigateByUrl('/create');
  }

  gotowhatsapp(telf: string) {
    console.log(telf);
    const newurl = 'https://api.whatsapp.com/send?phone=' + telf;
    window.open(newurl, '_system', '_blank');

  }

}
