import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  nav_variable:boolean=false;
  @HostListener("document:scroll")  
  scrollFunction():any{
    if(document.body.scrollTop >  0 || document.documentElement.scrollTop > 0){
    this.nav_variable=true;
    }else{
      this.nav_variable=false;
    }
  }
}
