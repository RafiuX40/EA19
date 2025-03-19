import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule],
})
export class LoginPage {
  constructor(private authService: AuthService, private router: Router) {}

  // Función para manejar login
  async onSubmit(form: NgForm) {
    if (form.invalid) return;
    const { email, password } = form.value;
    try {
      await this.authService.loginUser(email, password);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Login failed', error);
      // Aquí podrías agregar un toast o alerta para avisar al usuario
    }
  }

  // Navegar a Register
  goToRegister() {
    this.router.navigate(['/register']);
  }

  // Navegar a Reset Password
  goToResetPassword() {
    this.router.navigate(['/reset-password']);
  }
}
