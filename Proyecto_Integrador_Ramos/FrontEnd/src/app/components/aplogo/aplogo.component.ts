import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-aplogo',
  templateUrl: './aplogo.component.html',
  styleUrls: ['./aplogo.component.css']
})
export class APLogoComponent implements OnInit {
  isLogged = false;

  constructor(private router:Router, private tokerService: TokenService) { }

  ngOnInit(): void {
    if(this.tokerService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut(): void{
    this.tokerService.logOut();
    window.location.reload();
  }

}
