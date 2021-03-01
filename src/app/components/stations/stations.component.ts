import { StationsService } from '../../services/stations.service';
import { Component, OnInit } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  stations: any[];
  finalStations: any[];
  searchStations = '';

  constructor(private service: StationsService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
     this.service.getAllStation().subscribe(res => {
       this.stations = res.records.map(r => r.fields);
       this.finalStations = this.stations;
       console.log(this.finalStations);
     });
  }
  // tslint:disable-next-line:typedef
  searchStation() {
    // tslint:disable-next-line:max-line-length no-shadowed-variable
    this.finalStations = this.stations.filter((Station) => Station.name.toLocaleLowerCase().includes(this.searchStations.toLocaleLowerCase()));
  }

}

