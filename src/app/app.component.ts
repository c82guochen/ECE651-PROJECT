import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  title = 'lehstore';
  ifLogin = false;

  constructor(private routeInfo: ActivatedRoute,private userService:UserService) {}

  ngOnInit(): void {
      this.routeInfo.queryParams.subscribe((data)=>{
      console.log(data);
      console.log(typeof(data));
      if(JSON.stringify(data) === '{}'){
        this.ifLogin = this.userService.getIfLogin();
      }
      else{
        this.ifLogin = data['ifLogin'];
        this.username = data['username'];
        console.log(this.ifLogin);
        console.log(this.username);
      }
    });

  }

  reload(){
    window.location.reload()
  }
}
