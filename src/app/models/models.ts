export class PointMarker{
  long:number;
  lat:number;
  name:string;
  places:number;
  bikes:number;
  etat:boolean;
  idStattion: number;
}

export class Velib {
  ebike: number;
  capacity: number;
  name: string;
  nom_arrondissement_communes: string;
  numbikesavailable: number;
  is_installed: string;
  is_renting: number;
  mechanical: number;
  stationcode: number;
  numdocksavailable: number;
  duedate: string;
}
