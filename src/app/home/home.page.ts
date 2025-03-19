import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class HomePage {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logoutUser().then(() => {
      this.router.navigate(['/login']);
    });
  }

  goToNewReceta() {
    this.router.navigate(['/nueva-receta']); // Ajusta la ruta si es diferente
  }

  goToRecetas() {
    this.router.navigate(['/recetas']);
  }
}
