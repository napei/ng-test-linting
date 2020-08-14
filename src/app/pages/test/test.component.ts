import { Component, OnInit } from '@angular/core';
import { TestInterface } from 'src/app/core/models/test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public test: TestInterface = {
    Test: 'test',
  };

  constructor() {}

  ngOnInit(): void {}
}
