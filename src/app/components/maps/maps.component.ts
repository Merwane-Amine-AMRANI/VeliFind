import { Component, OnInit } from '@angular/core';
import { StationsService } from '../../services/stations.service';
import { PointMarker } from '../../models/models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  // Custom icon
  icon = {
    url: './assets/bikeMarker.png',
    scaledSize: {
      width: 60,
      height: 55
    }
  };

  constructor(private mapService: StationsService,
              private router: Router) {
  }

  marker: any[];
  finalMarker: PointMarker[];
  latitude: number;
  longuitude: number;
  curentLocalisation: number[];
  zoom = 14;
  getLocation(): any{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.curentLocalisation= [latitude, longitude];
        return [latitude, longitude];
      });
    } else {
      console.log("No support for geolocation")
      return null;
    }
  }
  ngOnInit(): void {
    this.getLocation();
    this.mapService.getAllStation().subscribe(res => {
      this.marker = res.records.map(r => r.fields);
      this.finalMarker = [];

      console.log(this.curentLocalisation);
      this.marker.forEach(element => {
        const temp: PointMarker = new PointMarker();
        temp.lat = element.coordonnees_geo[0];
        temp.long = element.coordonnees_geo[1];
        temp.name = element.name;
        temp.bikes = element.numbikesavailable;
        temp.places = element.numdocksavailable;
        temp.etat = (element.is_installed == 'OUI');
        temp.idStattion = element.stationcode;
        this.finalMarker.push(temp);
      });
    });
  }

  toList() {
    this.router.navigate(['velibs/list']);
  }

  toMap() {
    this.router.navigate(['velibs/maps']);
  }

  toHome() {
    this.router.navigate(['velibs/home']);
  }
}
