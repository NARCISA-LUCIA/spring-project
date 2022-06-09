import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-users-profiles',
  templateUrl: './users-profiles.component.html',
  styleUrls: ['./users-profiles.component.css']
})
export class UsersProfilesComponent implements OnInit {
  formControlGroup: FormGroup = this.formBuilder.group({
    firstName: new FormControl(''),
    secondName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}


