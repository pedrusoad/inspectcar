import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public marcas = [
    { nome: "Audi" },
    { nome: "BMW" },
    { nome: "BYD" },
    { nome: "Caoa Chery" },
    { nome: "Chery" },
    { nome: "Chevrolet" },
    { nome: "Citroën" },
    { nome: "Fiat" },
    { nome: "Geely" },
    { nome: "GWM" },
    { nome: "Honda" },
    { nome: "Hyundai" },
    { nome: "JAC Motors" },
    { nome: "Jaguar" },
    { nome: "Jeep" },
    { nome: "Kia" },
    { nome: "Land Rover" },
    { nome: "Lucid Motors" },
    { nome: "Mercedes-Benz" },
    { nome: "Mini" },
    { nome: "Mitsubishi" },
    { nome: "Nio" },
    { nome: "Nissan" },
    { nome: "Peugeot" },
    { nome: "Porsche" },
    { nome: "Ram" },
    { nome: "Renault" },
    { nome: "Seres" },
    { nome: "Tesla" },
    { nome: "Toyota" },
    { nome: "Volkswagen" },
    { nome: "Volvo" },
    { nome: "XPeng" },
    { nome: "OUTRO" }
  ];

  public getMarcas() {
    return this.marcas;
  }

}