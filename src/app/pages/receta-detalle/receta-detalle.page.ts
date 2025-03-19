import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.page.html',
  styleUrls: ['./receta-detalle.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule],
})
export class RecetaDetallePage implements OnInit {
  receta = { nombre: '', descripcion: '' };
  recetaId: string | null = null;

  constructor(private route: ActivatedRoute, private firebaseService: AuthService, private router: Router) {}

  async ngOnInit() {
    this.recetaId = this.route.snapshot.paramMap.get('id');
    if (this.recetaId !== 'new' && this.recetaId) {
      const recetas = await this.firebaseService.getRecetas();
      this.receta = recetas.find(r => r.id === this.recetaId) || this.receta;
    }
  }

  async guardarReceta() {
    if (this.recetaId === 'new') {
      await this.firebaseService.addReceta(this.receta);
    } else if (this.recetaId) {
      await this.firebaseService.updateReceta(this.recetaId, this.receta);
    }
    this.router.navigate(['/recetas']);
  }
}
