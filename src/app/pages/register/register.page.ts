import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private firebaseService: AuthService, private router: Router) {}

  async register() {
    try {
      await this.firebaseService.registerUser(this.email, this.password);
      alert('Registro exitoso');
      this.router.navigate(['/login']);
    } catch (error) {
      alert('Error en el registro: ' + (error as any).message);
    }
  }
}
