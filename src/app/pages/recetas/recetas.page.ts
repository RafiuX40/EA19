import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule],
})
export class RecetasPage implements OnInit {
  recetas: any[] = [];

  constructor(private firebaseService: AuthService, private router: Router) {}

  async ngOnInit() {
    await this.loadRecetas();
  }

  async loadRecetas() {
    this.recetas = await this.firebaseService.getRecetas();
  }

  goToDetalle(id: string) {
    this.router.navigate(['/receta-detalle', id]);
  }

  async eliminarReceta(id: string) {
    await this.firebaseService.deleteReceta(id);
    await this.loadRecetas();
  }
}
