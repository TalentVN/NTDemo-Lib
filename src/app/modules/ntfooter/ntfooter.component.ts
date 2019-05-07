import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ntfooter',
  templateUrl: './ntfooter.component.html',
  styleUrls: ['./ntfooter.component.css']
})
export class NTFooterComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
    console.log(this.title);
  }

}
