import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';

// validation function
function validateNumber(): ValidatorFn {
    return (c: AbstractControl) => {
        if (isNaN(parseInt(c.value))) {
            return {
                numberValidator: {
                    valid: false
                }
            };
        } else {
            return null;
        }
    }
}

@Directive({
    selector: '[numberValidator][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: NumberValidator, multi: true }
    ]
})
export class NumberValidator implements Validator {
    validator: ValidatorFn;

    constructor() {
        this.validator = validateNumber();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

}