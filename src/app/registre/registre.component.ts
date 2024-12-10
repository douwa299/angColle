import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-registre',
  standalone: false,
  
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export class RegistreComponent {
  constructor( private router : Router){}
  goToUser(){
    this.router.navigate(['/user'])
  }

}
