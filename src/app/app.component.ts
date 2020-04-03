import { Pipe, PipeTransform, Component, ViewChild } from '@angular/core';
import User from 'src/models/User.model';
import { UsersService } from './services/users.service';
import { NgForm } from '@angular/forms';

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
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  user: User = { ...initialState };
  users: User[];
  currentStyles: string;
  loaded: boolean;
  enableAdd: boolean;
  currentClasses = {};
  @ViewChild('userForm') form: any;

  constructor(private userService: UsersService) {
    this.currentStyles = '{ margin-top: 50%; }';
    this.enableAdd = true;
    userService.getUsers().subscribe(users => {
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
