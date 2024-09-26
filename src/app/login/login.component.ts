import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService :AuthService, private router : Router) {
    this.loginForm = this.fb.group({
      username: ['',[Validators.required]],
      password: ['',Validators.required] // Puedes añadir el campo de contraseña aquí
    });
  
}
onSubmit(){

  if (this.loginForm.valid){
    const formData = this.loginForm.value;
    this.authService.login(formData.username, formData.password, { username: formData.username, password: formData.password }).subscribe(response => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/flights']);
    }, error => {
      alert('Login failed');
    });
    console.log(formData.email+"-"+formData.password);
  }

}

}
