import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard,IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonFab, IonFabButton,IonIcon,IonList,IonItem,IonAvatar, IonLabel, IonAccordionGroup, IonAccordion, ModalController, IonButton, AlertController} from '@ionic/angular/standalone';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

import { addIcons } from 'ionicons';
import { cloudUploadOutline } from 'ionicons/icons';

/* @Component({
  template: `
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>¿Qué es LeavesCares?</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Sistema avanzado de detección de enfermedades en hojas mediante Inteligencia artificial, diseñado para ayudar a los manzanos, plantas de papa y uva.
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
  standalone: true,
  imports: [IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, CommonModule]
})
class LeavesCaresModalComponent {} */


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
    IonFab, IonFabButton, IonIcon, CommonModule, IonList,IonItem,IonAvatar, IonLabel, IonAccordionGroup, IonAccordion, IonButton],
})
// no fue necesario agregar las clases importadas porque Ionic si las reconoce, a diferencia con la clase Icons que si se necesitó añadirla en el constructor de la clase
export class Tab3Page {

  integrantes = [
    { nombre: "Alex Vizuete", matricula: "202200804", imagen: "../../assets/images/Alex.jpeg" },
    { nombre: "Ariana Palacios", matricula: "202204152", imagen: "../../assets/images/Ariana.jpeg" },
    { nombre: "Diego Flores", matricula: "202202917", imagen: "../../assets/images/Diego.jpg" },
    // Agrega más integrantes según sea necesario
  ];

  public ventajas = [
    { detalle: 'Costo-efectivo: Herramienta accesible que reduce significativamente el gasto en monitoreo agrícola.' },
    { detalle: 'Monitoreo Continuo: Posibilidad de realizar controles de calidad diarios sin aumento significativo en el costo.' },
    { detalle: 'Prevención: Detección temprana de enfermedades, permitiendo acciones rápidas antes de que las enfermedades se propaguen ampliamente.' },
    { detalle: 'Reducción de Mano de Obra: Menos dependencia de inspecciones físicas intensivas.' },
    { detalle: 'Seguridad de la Cosecha: Disminuye el riesgo de pérdidas masivas por enfermedades no detectadas a tiempo.' }
  ];

  public desventajas = [
    { detalle: 'Errores de Detección: La IA puede exhibir limitaciones en la detección precisa de algunas enfermedades' },
    { detalle: 'Accesibilidad Tecnológica: Dependencia de la conectividad a Internet, que puede ser limitada en áreas rurales o remotas' }
  ];

/*   constructor(public modalController: ModalController) {

    addIcons({ cloudUploadOutline });
  } */

    constructor(public alertController: AlertController) {

      addIcons({ cloudUploadOutline });
    }

/*   async openLeavesCaresModal() {
    const modal = await this.modalController.create({
      component: LeavesCaresModalComponent
    });
    return await modal.present();
  } */

    async presentAlert() {
      const alert = await this.alertController.create({
        header: '¿Qué es LeavesCares?',
        message: 'Es un sistema avanzado de detección de enfermedades en hojas mediante Inteligencia artificial, diseñado para ayudar a los manzanos, plantas de papa y uva.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
}
