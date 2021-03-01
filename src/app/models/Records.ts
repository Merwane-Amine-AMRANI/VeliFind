import {Fields} from '@velib-pfe/velibs/models/Fields';
import {Geometry} from '@velib-pfe/velibs/models/Geometry';

export interface Records {
  datasetid: string;
  recordid: string;
  fields: Fields;
  geometry: Geometry;
  record_timestamp: string;
}
