import {Component, OnInit, ViewChild} from '@angular/core';
import {Fields} from '../../models/Fields';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {StationsService} from '../../services/stations.service';
import {DomSanitizer} from '@angular/platform-browser';
import {map, startWith} from 'rxjs/operators';
import {MatIconRegistry} from '@angular/material/icon';
import {MatSelectionList} from '@angular/material/list';
import {ActivatedRoute, Router} from '@angular/router';

const SEARCH_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
`;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  stationFields: Fields[];
  finalStations: Fields[];
  searchedStation: Fields[];
  searchStations: string | null;
  nameSearchForm!: FormGroup;
  control= new FormControl();
  filtres: string[] = ['Electrique', 'Mécanique', 'Places vides'];
  commune: string[];
  autoComplete: string[];
  filteredAutoComplete: Observable<string[]>;

  constructor(private velibsService: StationsService,
              private fb: FormBuilder,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private router: Router
              ) {
    this.stationFields = [];
    this.finalStations = [];
    iconRegistry.addSvgIconLiteral('Search', sanitizer.bypassSecurityTrustHtml(SEARCH_ICON));
  }

  ngOnInit(): void {
    this.createForm();
    this.velibsService.getAllStation().subscribe(station => {
      this.stationFields = station.records.map(res => res.fields);
      this.commune = station.records.map(res =>res.fields.nom_arrondissement_communes);
      this.finalStations = this.stationFields;
    });
  }
  // tslint:disable-next-line:typedef
  searchStation() {
    // tslint:disable-next-line:max-line-length
    this.finalStations = this.stationFields
      .filter((Station) => Station.nom_arrondissement_communes
                                         .toLocaleLowerCase()
                                         .includes(this.searchStations.toLocaleLowerCase()));
    this.searchedStation = this.finalStations;
  }

  private createForm(): void {

    this.nameSearchForm = this.fb.group({name: ['', Validators.required]});
  }

  onSelect(filtre: string): void{
    if(this.searchedStation) {
      switch(filtre) {
        case 'Electrique': {
          this.finalStations = this.searchedStation
            .filter((Station) => Station.ebike.valueOf() > 0);
          console.log('ebike');
          console.log(this.finalStations);
          break;
        }
        case 'Mécanique': {
          this.finalStations = this.searchedStation
            .filter((Station) => Station.mechanical.valueOf() > 0);
          console.log('mecano');

          console.log(this.finalStations);
          break;
        }
        case 'Places vides': {
          this.finalStations = this.searchedStation
            .filter((Station) => Station.numdocksavailable.valueOf() > 0);
          console.log('place');
          console.log(this.finalStations);
          break;
        }
      }
    }else{
      switch(filtre) {
        case 'Electrique': {
          this.finalStations = this.stationFields
            .filter((Station) => Station.ebike.valueOf() > 0);
          console.log('ebike');
          console.log(this.finalStations);
          break;
        }
        case 'Mécanique': {
          this.finalStations = this.stationFields
            .filter((Station) => Station.mechanical.valueOf() > 0);
          console.log('mecano');

          console.log(this.finalStations);
          break;
        }
        case 'Places vides': {
          this.finalStations = this.stationFields
            .filter((Station) => Station.numdocksavailable.valueOf() > 0);
          console.log('place');
          console.log(this.finalStations);
          break;
        }
      }
    }
  }

  @ViewChild('filtre') filtre: MatSelectionList;
  reset(){
    this.filtre.deselectAll();
    if(this.searchedStation) {
      this.finalStations = this.searchedStation;
      console.log('reset');
      console.log(this.finalStations);
    }else{
      this.finalStations = this.stationFields;
      console.log('reset');
      console.log(this.finalStations);
    }

  }

  isUnique(item, position, array) {
    return array.indexOf(item) === position;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.autoComplete.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  autoComp(){
    this.autoComplete = this.commune.filter(this.isUnique);
    console.log(this.autoComplete);
    this.filteredAutoComplete = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
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
