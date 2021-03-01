import {Parameter} from '@velib-pfe/velibs/models/Parameter';
import {Records} from '@velib-pfe/velibs/models/Records';

export interface Stations {
  nhits?: number;
  parameters: Parameter;
  records: Records[];
}
