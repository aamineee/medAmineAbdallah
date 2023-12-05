import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export  class UsersComponent{
  user:any=[];
  constructor(private users:UsersService){}
  ngOnInit(): void {
    this.getPost();

  }
getPost(){
  this.users.getUsers().subscribe(
    (data:any)=>{this.user=data;  
    },
    (error)=>{
      console.log(error);
    }
  )
}

}
