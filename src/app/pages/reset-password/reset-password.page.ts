import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCardTitle } from '@ionic/angular/standalone';
import { AlertController} from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCardTitle]
})
export class ForgotPasswordPage implements OnInit {
  constructor(private alertController: AlertController, private router: Router) { }


  ngOnInit() {
  }
 
  async onSubmit() {
    const email= (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;


    if (this.validateEmail(email) && password) {
      const alert = await this.alertController.create({
        header: 'reset Success',
        message: 'You have reseted successfully!',
        buttons: ['Ok'],
      });
      await alert.present();
    }else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please complete all.',
        buttons: ['Ok'],
      });
      await alert.present();
    }
  }


  validateEmail(email: string): boolean{
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }


  onSignUp() {
    this.router.navigateByUrl("login")
  }
}
