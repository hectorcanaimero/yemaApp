import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { UserService } from '../../../shared/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  form: FormGroup;
  avatar = '';

  constructor(
    private fb: FormBuilder,
    private useService: UserService,
    private router: Router,
    private toastCtrl: ToastController,
    private nav: NavController,
    private modalCtrl: ModalController
  ) {

  }

  ngOnInit() {
    this.loadform();
  }


  async register() {
    if (this.form.invalid ) { return; }
    const data = {
      name: this.form.value.name,
      age: this.form.value.age,
      sex: this.form.value.sex,
      avatar: this.avatar
    };
    this.useService.add(data).then((res) => {
      this.showToast(`Bienvenido ${ data.name }`);
      localStorage.setItem('yemaApp', JSON.stringify(data));
      this.form.reset();
      this.modalCtrl.dismiss();
      this.nav.navigateRoot('/main/tabs/home', { animated: true });
    }, err => {
      this.showToast('Fue mal :(, no pudimos registrar el usuario');
    });
  }

  loadform() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      avatar: ['']
    });
  }

  showToast(msg: string) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}
