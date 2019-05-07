import { Component, OnInit } from '@angular/core';
import { HeaderSettings } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NT-Demo-lib';

  headerSettings: HeaderSettings;

  constructor() {

    // Fake datas
    this.headerSettings = {
      LogoUrl: "https://pbs.twimg.com/profile_images/462130746484719616/K1yUo_yP_400x400.png",
      OrgName: "OSD",
      Menus: [{
        title: "Menu 1",
        link: "#"
      },
      {
        title: "Menu 2",
        link: "#"
      },
      {
        title: "Menu 2",
        link: "#"
      }
      ],
      User: {
        UserName: "Nhat Tran",
        ProfileImage: "https://cachlammoi.com/wp-content/uploads/2018/01/mixed-logo.jpg",
      }
    }
  }

  ngOnInit() {
  }
}
