import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
