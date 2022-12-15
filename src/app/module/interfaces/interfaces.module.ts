import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class InterfacesModule { }

export declare interface ReferenceInterface {
  id: number,
  rFirstName: string,
  rLastName: string,
  rMiddleName: string,
  rPhone: string,
  rAddress: string,
  rEmail: string,
  rRelationship: string
}

export declare interface EmergencyContactInterface {
  id: number,
  ecFirstName: string,
  ecLastName: string,
  ecMiddleName: string,
  ecPhone: string,
  ecEmail: string,
  ecRelationship: string
}
