import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinatesMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude]));
  }

  @Input() initialCoordinates: coordinatesMap[] = [];

  @Output() onSelectedLocation = new EventEmitter<coordinatesMap>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Movies' })
    ],
    zoom: 18,
    center: latLng(35.69610419338152, 51.391854286193855)
  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent){
    this.layers = [];
    this.layers.push(marker(event.latlng));

    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    this.onSelectedLocation.emit({latitude, longitude});
  }

}
