import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import User from 'src/app/models/User.model';

@Pipe({ name: 'add2' })
export class Add2 implements PipeTransform {
  transform(num: number) {
    return num + 2;
  }
}

const initialState = {
  firstName: '',
  lastName: '',
  age: null,
  active: false
};
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = { ...initialState };
  users: User[];
  currentStyles: string;
  loaded: boolean;
  enableAdd: boolean;
  currentClasses = {};
  @ViewChild('userForm') form: any;

  constructor(private userService: UsersService) {
  }
  ngOnInit(): void {
    this.currentStyles = '{ margin-top: 50%; }';
    this.enableAdd = true;
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  }

  onSubmit = ({ value, valid }: { value: User; valid: boolean }) => {
    if (!valid) {
      console.log('User details not valid');
    } else {
      value.active = true;
      value.doj = new Date();
      this.userService.addUser(value);
      this.form.reset();
      this.userService.printUsers();
    }
  };
}
