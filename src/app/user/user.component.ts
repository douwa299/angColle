import { Component } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name="douaa"
  location="maroc"
  status="active"
  Message: any;
  imageurl="src/app/iconeù.webp"
  nomutilisateur : string= "Douaa Berrahmo";
  constructor(private router : Router){}
  goToregister(){
        this.router.navigate(["/registre"]);
    }


  getstatus(){
    return this.status;
  }
  getmsg(){
    console.log("My new message");
  }

}
