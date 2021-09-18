import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  map!: mapboxgl.Map;
  LightTheme = true;

  ngOnInit(){
    (mapboxgl as any).accessToken = environment.mapboxKey;

    this.map = new mapboxgl.Map({
    container: 'map-mapbox', // container ID
    // style: 'mapbox://styles/mapbox/streets-v11', // style URL
    // style: 'mapbox://styles/supraja87/cksiywhri94nu18rhwl5mjfhn',
    style: 'mapbox://styles/supraja87/cksykc2i36frp18o7cpm2mj0z',
    center: [0,0], // starting position
    zoom: 1.85, // starting zoom
    renderWorldCopies: false,
    });

    this.map.on('load', () => {
        const toggleButton = document.getElementById('toggleTheme');
        toggleButton.onclick = () => {
          console.log("button is clicked")
          if(this.LightTheme){
            this.LightTheme = !this.LightTheme;
            this.map.setStyle('mapbox://styles/supraja87/ckt2w8alk0s8c18tb5p03sjuo');
          }
          else{
            this.LightTheme = !this.LightTheme;
            this.map.setStyle('mapbox://styles/supraja87/cksykc2i36frp18o7cpm2mj0z');
          }
        }

    });

  }
  
}