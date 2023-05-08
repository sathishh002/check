import { FormGroup } from "@angular/forms"

export function Conformvalidator (cn:string,mcn:string){
    return(formGroup:FormGroup)=>{
        const pass=formGroup.controls[cn];
        const cpass=formGroup.controls[mcn];

        if(pass.value!==cpass.value){
            cpass.setErrors({Conformvalidator:true})
        }
        else{
            cpass.setErrors(null);
        }
    }
}
