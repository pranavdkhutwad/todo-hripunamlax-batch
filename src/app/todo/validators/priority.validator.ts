import { AbstractControl } from "@angular/forms";

export const validatePriority = (control: AbstractControl) => {
    const value = control.value;

    if ([1, 2, 3].includes(value)) {
        return null;
    }

    return {
        validatepriority: true
    };
}
