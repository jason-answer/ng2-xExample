import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-pipe',
  templateUrl: './array-pipe.component.html',
  styleUrls: ['./array-pipe.component.css']
})

export class ArrayPipeComponent implements OnInit {

  pluckItems = [
    {
      a: 1,
      b: {
        c: 4
      }
    },
    {
      a: 2,
      b: {
        c: 5
      }
    },
    {
      a: 3,
      b: {
        c: 6
      }
    },
  ];

  /** every Pipe*/
  itemsOne = [1, 1, 1];
  itemsTwo = [1, 1, 2];
  itemsThree = [2, 2, 2];
  predicate = (value: any, index: number, array: any[]): boolean => {
    return value === 1;
  };

  /** groupBy Pipe*/
  arrayObject = [
    { id: 1, elm: 'foo', value: 0 },
    { id: 2, elm: 'bar', value: 1 },
    { id: 3, elm: 'foo', value: 2 },
    { id: 4, elm: 'foo', value: 2 }
  ];

  arrayNestedObject = [
    { id: 1, prop: { deep: 'foo' } },
    { id: 2, prop: { deep: 'bar' } },
    { id: 3, prop: { deep: 'foo' } },
    { id: 4, prop: { deep: 'bar' } }
  ];
  /** orderBy Pipe*/
  numbers = [2, 1, 3];

  obj = [
    { id: 4, name: 'Dave', amount: 2 },
    { id: 2, name: 'Michael', amount: 2 },
    { id: 3, name: 'Dan', amount: 1 },
    { id: 1, name: 'John', amount: 1 }
  ];

  deepObj = [
    { id: 1, name: 'John', amount: 1337, deep: { prop: 4 } },
    { id: 2, name: 'Michael', amount: 42, deep: { prop: 2 } },
    { id: 3, name: 'Dan', amount: 1, deep: { prop: 1 } },
    { id: 4, name: 'Dave', amount: 2, deep: { prop: 3 } }
  ];
  /** filterBy  Pipe*/
  users = [
    { id: 1, first_name: 'John', last_name: 'Doe', work: { company: 'Foo Tech' } },
    { id: 2, first_name: 'Jane', last_name: 'West', work: { company: 'AAA Solutions' } },
    { id: 3, first_name: 'Bruce', last_name: 'John', work: { company: 'Bar Tech' } },
    { id: 4, first_name: 'William', last_name: 'Cent', work: { company: 'Foo Tech' } }
  ];
  constructor() { }

  ngOnInit() {


  }

}
