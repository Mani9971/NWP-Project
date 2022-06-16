import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.component.html',
  styleUrls: ['./map-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapLocationComponent implements OnInit {
  options: any;
  overlays!: any[];
  constructor(public config: DynamicDialogConfig) {}

  ngOnInit() {
    this.options = {
      center: { lat: +this.config.data?.lat, lng: +this.config.data?.lon },
      zoom: 15,
    };
  }
}
