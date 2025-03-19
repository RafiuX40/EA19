import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.page.html',
  styleUrls: ['./nueva-receta.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class NuevaRecetaPage {
  receta = {
    titulo: '',
    descripcion: '',
    ingredientes: '',
    pasos: ''
  };

  constructor(public router: Router) {}

  guardarReceta() {
    console.log('Receta guardada:', this.receta);
    // Aquí puedes agregar la lógica para enviarla a Firestore o donde quieras guardarla
    alert('¡Receta creada con éxito!');
    this.router.navigate(['/home']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
