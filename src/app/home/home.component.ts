import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { first } from 'rxjs/operators';
import { User } from '../_models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
      });
  }
}
