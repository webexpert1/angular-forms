import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  registerForm = this.fb.group({
    gender: ['male'],
    username: ['', Validators.required],
    city: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    confirmPassword: ['', Validators.required]
  }, { validator: this.passwordMatchValidator });

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value ? null : { mismatch: true};
  }
  ngOnInit(): void {
  }

  register() {
    console.log('register', this.registerForm.value)
  }

  cancel() {
    console.log('cancel')
  }

}
