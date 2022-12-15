import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, ValidationErrors, Validators } from '@angular/forms';
import { EmergencyContactInterface, ReferenceInterface } from 'src/app/module/interfaces/interfaces.module';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  visaTypes: Set<String> = new Set(["H1-B", "L2", "F1(CPT/OPT)", "H4", "Other"])
  listOfEmergencyContact: Array<EmergencyContactInterface> = [];
  listOfReference: Array<ReferenceInterface> = [];
  applicationForm: any;
  isCitizenOrPermanent = true;

  info: String = "avatar"
  uploadUrl: string = '/api/file/upload'


  ngOnInit(): void {
    this.applicationForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]{1,20}$")
      ],],
      lastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
      middleName: ['', [Validators.pattern("^[a-zA-Z]{1,20}$")]],
      preferredName: ['', [Validators.pattern("^[a-zA-Z]{1,20}$")]],
      address1: ['', [Validators.required, Validators.maxLength(60), Validators.pattern("^[0-9a-zA-Z\\s]{1,},[a-zA-Z\\s]{1,},[0-9\\s]{1,},[a-zA-Z\\s]{1,},[a-zA-Z\\s]{1,}$")]],
      address2: ['', [Validators.maxLength(60), Validators.pattern("^[0-9a-zA-Z\\s]{1,60}$")]],
      cellPhone: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      alternatePhone: ['', [Validators.pattern("^[0-9]{10}$")]],
      carInfo: ['', [Validators.pattern("^[a-z0-9A-Z]+_[a-z0-9A-Z]+_[a-z0-9A-Z]+$"), Validators.maxLength(30)]],
      email: ['', [Validators.email, Validators.required]],
      ssn: ['', [Validators.pattern("^[0-9]{9}$"), Validators.required]],
      dateOfBirth: [''],
      gender: ['', [Validators.pattern(""), Validators.required]],//TODO
      visaType: ['', [Validators.required]],//TODO
      otherVisaType: ['', []],//TODO
      visaDate: ['', []],
      haveDriverLicense: [],
      driverLicenseNumber: ['', []],
      driverLicenseExpirationDate: [],
    });
    this.addECField()
  }

  // currentAddress: ['', [Validators.required, Validators.maxLength(60), Validators.pattern("^[a-zA-Z]{+},\s[a-zA-Z]{+},[a-zA-Z]{+},[a-zA-Z]{+},[a-zA-Z]{+}$")]],

  submitForm(): void {
    let info = this.applicationForm.value
    this.http.post('/api/employee/onboarding/application_form', info)

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

  addECField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfEmergencyContact.length > 0 ? this.listOfEmergencyContact[this.listOfEmergencyContact.length - 1].id + 1 : 0;

    const emergencyContact = {
      id,
      ecFirstName: `ecFirstName${id}`,
      ecLastName: `ecLastName${id}`,
      ecMiddleName: `ecMiddleName${id}`,
      ecPhone: `ecPhone${id}`,
      ecEmail: `ecEmailName${id}`,
      ecRelationship: `ecRelationship${id}`
    };
    const index = this.listOfEmergencyContact.push(emergencyContact);
    // console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.applicationForm.addControl(
      this.listOfEmergencyContact[index - 1].ecFirstName,
      new UntypedFormControl(null, [Validators.required,
      Validators.pattern("^[a-zA-Z]{1,20}$")])
    );
    this.applicationForm.addControl(
      this.listOfEmergencyContact[index - 1].ecLastName,
      new UntypedFormControl(null, [Validators.required,
      Validators.pattern("^[a-zA-Z]{1,20}$")])
    );
    this.applicationForm.addControl(
      this.listOfEmergencyContact[index - 1].ecMiddleName,
      new UntypedFormControl(null, [Validators.pattern("^[a-zA-Z]{1,20}$")])
    );
    this.applicationForm.addControl(
      this.listOfEmergencyContact[index - 1].ecEmail,
      new UntypedFormControl(null, [Validators.required, Validators.email])
    );
    this.applicationForm.addControl(
      this.listOfEmergencyContact[index - 1].ecPhone,
      new UntypedFormControl(null, [Validators.required, Validators.pattern("^[0-9]{10}$")])
    );
    this.applicationForm.addControl(
      this.listOfEmergencyContact[index - 1].ecRelationship,
      new UntypedFormControl(null, Validators.required)
    );
  }

  addRField(e?: MouseEvent): void {
    if (this.listOfReference.length == 1) {
      return;
    }

    if (e) {
      e.preventDefault();
    }
    const id = this.listOfReference.length > 0 ? this.listOfReference[this.listOfReference.length - 1].id + 1 : 0;

    const reference = {
      id,
      rFirstName: `rFirstName`,
      rLastName: `rLastName`,
      rMiddleName: `rMiddleName`,
      rPhone: `rPhone`,
      rEmail: `rEmailName`,
      rRelationship: `rRelationship`,
      rAddress: `rAddress`
    };

    const index = this.listOfReference.push(reference);
    // console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.applicationForm.addControl(
      this.listOfReference[index - 1].rFirstName,
      new UntypedFormControl(null, [Validators.required,
      Validators.pattern("^[a-zA-Z]{1,20}$")])
    );
    this.applicationForm.addControl(
      this.listOfReference[index - 1].rLastName,
      new UntypedFormControl(null, [Validators.required,
      Validators.pattern("^[a-zA-Z]{1,20}$")])
    );
    this.applicationForm.addControl(
      this.listOfReference[index - 1].rMiddleName,
      new UntypedFormControl(null, [Validators.pattern("^[a-zA-Z]{1,20}$")])
    );
    this.applicationForm.addControl(
      this.listOfReference[index - 1].rEmail,
      new UntypedFormControl(null, [Validators.required, Validators.email])
    );
    this.applicationForm.addControl(
      this.listOfReference[index - 1].rPhone,
      new UntypedFormControl(null, [Validators.required, Validators.pattern("^[0-9]{10}$")])
    );
    this.applicationForm.addControl(
      this.listOfReference[index - 1].rRelationship,
      new UntypedFormControl(null, Validators.required)
    );
    this.applicationForm.addControl(
      this.listOfReference[index - 1].rAddress,
      new UntypedFormControl(null, [Validators.required, Validators.pattern("^[0-9a-zA-Z\\s]{1,},[a-zA-Z\\s]{1,},[0-9\\s]{1,},[a-zA-Z\\s]{1,},[a-zA-Z\\s]{1,}$")])
    );
  }

  removeECField(i: EmergencyContactInterface, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfEmergencyContact.length > 1) {
      const index = this.listOfEmergencyContact.indexOf(i);
      this.listOfEmergencyContact.splice(index, 1);
      console.log(this.listOfEmergencyContact);
      this.applicationForm.removeControl(i.ecFirstName);
      this.applicationForm.removeControl(i.ecLastName);
      this.applicationForm.removeControl(i.ecMiddleName);
      this.applicationForm.removeControl(i.ecEmail);
      this.applicationForm.removeControl(i.ecPhone);
      this.applicationForm.removeControl(i.ecRelationship);
    }
  }

  removeRField(i: ReferenceInterface, e: MouseEvent): void {
    e.preventDefault();
    const index = this.listOfReference.indexOf(i);
    this.listOfReference.splice(index, 1);
    console.log(this.listOfReference);
    this.applicationForm.removeControl(i.rFirstName);
    this.applicationForm.removeControl(i.rMiddleName);
    this.applicationForm.removeControl(i.rLastName);
    this.applicationForm.removeControl(i.rEmail);
    this.applicationForm.removeControl(i.rAddress);
    this.applicationForm.removeControl(i.rPhone);
    this.applicationForm.removeControl(i.rRelationship);
  }


  test() {
    console.log(this.applicationForm)
  }

  getFormValidationErrors() {
    Object.keys(this.applicationForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.applicationForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }

  constructor(private fb: UntypedFormBuilder, private http: HttpService) { }

}