import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface UserData {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
  remove: string;
}
/** Constants used to fill up our data base. */

const email: string[] = [
  'sabau.dragos@gmail.com',
  'testTwo@gmail.com',
  'daniela@gmail.com',
  'george@gmail.com',
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  title: string = 'userAdd';
  userNumber: number = 30;
  userIsAdmin: boolean = true;
  dataSource = new MatTableDataSource<UserData>();
  formControlGroup: FormGroup = this.formBuilder.group({
    firstName: new FormControl(''),
    secondName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
    button: new FormControl(''),
    photo: new FormControl(''),
    input: new FormControl(''),
  });

  displayedColumns: string[] = [
    'id',
    'firstName',
    'secondName',
    'email',
    'remove',
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const firstName: string[] = ['dragos', 'testTwo', 'daniela', 'George'];
    let userDataArray: UserData[] = [
      {
        id: 1,
        firstName: 'John',
        secondName: 'Doe',
        email: 'george@gmail.com',
        remove: 'delete',
      },
      {
        id: 2,
        firstName: 'Elvis',
        secondName: 'Presly',
        email: 'elvis@gmail.com',
        remove: 'delete',
      },
      {
        id: 3,
        firstName: 'James',
        secondName: 'Cameron',
        email: 'james@gmail.com',
        remove: 'delete',
      },
    ];
    this.dataSource = new MatTableDataSource<UserData>(userDataArray);
  }
}
