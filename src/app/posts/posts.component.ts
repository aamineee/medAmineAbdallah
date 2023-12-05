import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
  //hi
})
export class PostsComponent implements OnInit{
 /* postdata={
    userId:'',id:'',title:'',body:''
  };*/
  post:any=[];

constructor(private posts:PostsService){}

  ngOnInit(): void {
    this.getPost();

  }
getPost(){
  this.posts.getPost().subscribe(
    (data:any)=>{this.post=data;
    },
    (error)=>{
      console.log(error);
    }
  )
}

}
