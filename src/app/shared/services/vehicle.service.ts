import { Injectable } from '@angular/core';


export interface Veiculo {
  marca: string;
  modelo: string;
  placa: string;
  portas: string;
  tipo: string;
}

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  

  constructor() { }

  veiculo: Veiculo[] = [];
  backupVeiculo: Veiculo[] = [];



}