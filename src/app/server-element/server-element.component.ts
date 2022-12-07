import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input('svrElement') element: { type: string; name: string; content: string };
  @ViewChild('heading') header: ElementRef;

  constructor() {}

  ngOnInit(): void {}
}
