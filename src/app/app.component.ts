import { Pipe, PipeTransform, Component } from '@angular/core';
import User from 'src/models/User.model';
import { HeaderComponent } from './components/header/header.component';

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
  header = HeaderComponent;

  constructor() {
    this.currentStyles = '{ margin-top: 50%; }';
    this.enableAdd = true;
    this.users = [
      {
        firstName: 'RAMMOHANA RAO',
        lastName: 'BALAGA',
        age: 25,
        active: true,
        doj: new Date()
      },
      {
        firstName: 'SIMHACHALAM',
        lastName: 'BALAGA',
        age: 24,
        active: true,
        doj: new Date()
      },
      {
        firstName: 'SURESH',
        lastName: 'BALAGA',
        age: 28,
        active: true,
        doj: new Date()
      }
    ];
    this.loaded = true;
  }

  onSubmit = () => {
    this.user.active = true;
    this.user.doj = new Date();
    this.users.unshift(this.user);
    this.user = { ...initialState };
    console.log(this.user);
  };
}
