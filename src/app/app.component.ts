import { Component, OnInit } from '@angular/core';
import { HeaderSettings, Menu } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NT-Demo-lib';

  bottomTitle = 'Orient Software © 2019 All Rights Reserved. Made with love by Orient Team.';

  headerSettings: HeaderSettings;
  menuSettings: Menu;

  constructor() {

    // Fake datas headerSettings
    this.headerSettings = {
      LogoUrl: "https://cdn.worldvectorlogo.com/logos/react.svg",
      OrgName: "OSD",
      Menus: [{
        Title: "Menu 1",
        Link: "#1"
      },
      {
        Title: "Menu 2",
        Link: "#2"
      },
      {
        Title: "Menu 2",
        Link: "#3"
      }
      ],
      User: {
        UserName: "Nhat Tran",
        ProfileImage: "https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png",
        Tags: [
          {
            Detail: "Your Profile",
            Link: "#"
          },
          {
            Detail: "Your Projects",
            Link: "#"
          },
          {
            Detail: "Settings",
            Link: "#"
          },
          {
            Detail: "Help",
            Link: "#"
          },
          {
            Detail: "Sign Out",
            Link: "#"
          }
        ]
      }
    }

    // Fake datas menuSettings
    this.menuSettings = {
      menuItems: [{
        title: "Menu 1",
        link: "",
        icon: ""
      },
      {
        title: "Menu 2",
        link: "",
        icon: ""
      },]
    }
  }

  ngOnInit() {

  }
}
