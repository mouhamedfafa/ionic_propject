import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { AuthentificationService } from '../shared/service/authentification.service';
import { StorageService } from '../shared/service/storage.service';
import { TokenServiceService } from '../shared/service/tokenService.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.page.html',
  styleUrls: ['./security.page.scss'],
})
export class SecurityPage implements OnInit {

 
    registerForm!: FormGroup;
    submitted = false;
  
    form: User = {
      login: '',
      password: '',
      nom: '',
      adresse: '',
      numero: 0,
      token:'',
      id:0
    
    };
    constructor(
      private auth: AuthentificationService,
      private token: TokenServiceService,
      private formBuilder: FormBuilder,
      private router :Router,
      private storage: StorageService
        ) {}
  
    async ngOnInit() {
  
  ;
  
      this.registerForm = this.formBuilder.group({
        login: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
     
        
    });
    // await this.storage.create();
  
    
    }
  



  get f() { 
    return this.registerForm.controls;
   }
  
  onSubmit(): void {
    
   
    this.submitted = true;

    if (this.registerForm.invalid) {
      // alert("okk")
      return;
  }



    this.auth.login(this.form).subscribe(
      async (data: any) => {
        // console.log(data.token);
      await  this.storage.set('token', data.token);
        this.token.saveToken(data.token);
        // sessionStorage.setItem('id', data.id);
        // console.log();
        this.auth.tokenrol= this.registerForm.value.login
        
        if(this.auth.getDecodedAccessToken(data.token).roles[0] ==='ROLE_LIVREUR'){
          this.router.navigate(['/commandes'])

        }
else{
  this.router.navigate(['client'])

}

// 
// retrieving from the session
console.log(data) 
      },
      (error: any) => {
        console.log(error);
      }
    );
    
    // console.log(this.form);
  }



  // onLogut(){
  //   this.auth.logout()


  // }
  




  }


