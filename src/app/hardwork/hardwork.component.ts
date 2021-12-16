import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardwork',
  templateUrl: './hardwork.component.html',
  styleUrls: ['./hardwork.component.scss'],
})
export class HardworkComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}

interface User {
  id: number;
  first: string;
  last: string;
}

export class SelectExample {
  users: User[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];

  compareWith(o1: User, o2: User) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}