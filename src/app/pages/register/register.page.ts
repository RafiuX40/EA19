import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCardTitle } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCardTitle]
})
export class RegisterPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService, 
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      if (!this.validateEmail(this.email)) {
        const alert = await this.alertController.create({
          header: 'Invalid Email',
          message: 'Please enter a valid email address.',
          buttons: ['Ok'],
        });
        await alert.present();
        return;
      }

      await this.authService.registerUser(this.email, this.password);
      const alert = await this.alertController.create({
        header: 'Signup Success',
        message: 'Your account has been created successfully!',
        buttons: ['Ok'],
      });
      await alert.present();
      this.router.navigate(['/login']);
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'An error occurred during signup.',
        buttons: ['Ok'],
      });
      await alert.present();
    }
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
}