import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, 
    CommonModule, IonList, IonItem, IonLabel]
})
export class Tab5Page implements OnInit {

  Math = Math;
  history: any[] = [];
  collectionName = 'history';

  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.providerService.readCollection(this.collectionName).subscribe((data) => {
      this.history = data.reverse();
    });
  }
}
