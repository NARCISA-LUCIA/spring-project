import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '../model/user.model';
import { UserService } from '../service/user-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  title: string = 'userAdd';
  userNumber: number = 30;
  userIsAdmin: boolean = true;
  dataSource = new MatTableDataSource<User>();
  formControlGroup: FormGroup = this.formBuilder.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
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
    'lastName',
    'email',
    'remove',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((result: User[]) => {
      if (result.length > 0) {
        this.dataSource = new MatTableDataSource(result);
      }
    });
  }
}
