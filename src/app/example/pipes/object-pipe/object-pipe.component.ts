import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-pipe',
  templateUrl: './object-pipe.component.html',
  styleUrls: ['./object-pipe.component.css']
})
export class ObjectPipeComponent implements OnInit {

  cb = (value): string => {
    return `name_${value}`;
  };
  constructor() { }

  ngOnInit() {
  }

}
