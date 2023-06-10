import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private router:Router) {}
  //login
    login(email:string,password:string){
      this.fireauth.signInWithEmailAndPassword(email,password).then ((res)=>{
        localStorage.setItem('token','true');
        if(res.user?.emailVerified == true) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/varify-email']);
        }
        
      },err=>{
        alert('err.message');
        this.router.navigate(['/login'])
      
     
      })
    }
    
//signup
    signup(email:string,password:string){
      this.fireauth.createUserWithEmailAndPassword(email,password).then ((res)=>{
        alert('user registered successfully');
        this.router.navigate(['/login'])

        this.sendEmailForVarification(res.user);
      },err=>{
        alert('err.message');
        this.router.navigate(['/login'])
      })
    }
    //logout
    logout(){
      this.fireauth.signOut().then ((res)=>{
        localStorage.removeItem('token');
        this.router.navigate(['/login'])
      },err=>{
        alert('err.message');
        this.router.navigate(['/login'])

      })
    }
//forgot password
forgotpassword(email:string){
  this.fireauth.sendPasswordResetEmail(email).then (()=>{
    this.router.navigate(['/varify-email']);
    },err=>{
        alert('err.message');
        this.router.navigate(['/login'])
  })
}
sendEmailForVarification(user : any){
  user.sendEmailForVarification().then( (res : any) =>{
 this.router.navigate(['/varify-email']);
  },(err : any) =>{
  alert('Something went wrong. Not able to send mail to your email')
  })
}
}
