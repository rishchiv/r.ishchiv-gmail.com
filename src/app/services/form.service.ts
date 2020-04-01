import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    private form: FormGroup;

    constructor(private fb: FormBuilder) { }

    public createForm(form, validators?) {
        return this.form = this.fb.group(form, validators);
    }

    public hasError(field: string, errorName: string) {
        const formField = this.form.get(field);
        if (!formField.hasOwnProperty('errors') || !formField.errors) return false;
        return formField.errors[errorName];
    }

    public invalid(field: string) {
        return this.form.get(field).invalid &&
            (this.form.get(field).dirty || this.form.get(field).touched);
    }

    public invalidRaw(field: string) {
        return this.form.get(field).invalid;
    }
}
