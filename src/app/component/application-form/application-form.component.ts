import { Component, OnInit } from '@angular/core';
import { Reference, EmergencyContact } from 'src/app/module/interfaces/interfaces.module';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  // constructor() { }

  references: Reference[] = []
  emergencyContacts: EmergencyContact[] = []



  applicationForm: any;

  visaTypes: Set<String> = new Set(["H1-B", "L2", "F1(CPT/OPT)", "H4", "Other"])

  ngOnInit(): void {
    this.applicationForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.maxLength(20),
      ],],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      middleName: ['', [Validators.maxLength(20)]],
      preferredName: ['', [Validators.max(20)]],
      avatar: [null, []],
      currentAddress: ['', [Validators.required, Validators.maxLength(40)]],
      cellPhone: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      alternatePhone: ['', [Validators.pattern("^[0-9]{10}$")]],
      carInfo: ['', [Validators.pattern("^[a-z0-9A-Z]+_[a-z0-9A-Z]+_[a-z0-9A-Z]+$"), Validators.maxLength(30)]],
      email: ['', [Validators.email, Validators.required]],
      ssn: ['', [Validators.pattern("^[0-9]{9}$"), Validators.required]],
      dateOfBirth: [null],
      gender: ['', [Validators.pattern(""), Validators.required]],//TODO
      visaType: [null, [Validators.required]],//TODO
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      references: this.references,
      emergencyContacts: this.emergencyContacts
    });
  }

  isCitizenOrPermanent = true;

  //TODO hvae bug
  otherVisaType: String = ''
  otherVisaTypeFn(event: any) {
    let visaType = this.applicationForm.value['visaType']
    if (visaType != 'Other' && (visaType == null || visaType == 'greenCard' || visaType == 'citizen' || this.visaTypes.has(this.applicationForm.value['visaType']))) {
      return;
    } else {
      this.applicationForm.value['visaType'] = event
    }
  }


  submitForm(): void {
    console.log('submit', this.applicationForm.value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.applicationForm.reset();
    for (const key in this.applicationForm.controls) {
      if (this.applicationForm.controls.hasOwnProperty(key)) {
        this.applicationForm.controls[key].markAsPristine();
        this.applicationForm.controls[key].updateValueAndValidity();
      }
    }
  }

  tewst() {
    console.log(this.applicationForm.value)
  }

  constructor(private fb: UntypedFormBuilder) { }

}

