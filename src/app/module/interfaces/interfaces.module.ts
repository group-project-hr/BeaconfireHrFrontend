import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class InterfacesModule { }

export declare interface Reference {
  firstName: String,
  lastName: String,
  middleName: String,
  Phone: String,
  Address: String,
  Email: String,
  Relationship: String
}

export declare interface EmergencyContact {
  firstName: String,
  lastName: String,
  middleName: String,
  Phone: String,
  Email: String,
  Relationship: String
}
