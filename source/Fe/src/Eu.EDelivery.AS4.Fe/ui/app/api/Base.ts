import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CertificateStore } from './CertificateStore';

export class Base {
    idFormat: string;
    certificateStore: CertificateStore;
    static getForm(formBuilder: FormBuilder, current: Base): FormGroup {
        return formBuilder.group({
            idFormat: [current && current.idFormat, Validators.required],
            certificateStore: CertificateStore.getForm(formBuilder, current && current.certificateStore)
        });
    }
}
