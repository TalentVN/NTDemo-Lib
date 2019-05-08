import { Component, OnInit } from '@angular/core';
import { HeaderSettings, Menu } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NT-Demo-lib';

  bottomTitle = 'Orient Software © 2019 All Rights Reserved. Made with love by Orient Team.';

  headerSettings: HeaderSettings;
  menuSettings: Menu;

  constructor() { }

  ngOnInit() {
    this._buildHeaderSetting();
    this._buildMenuSetting();
  }

  // Fake datas headerSettings
  private _buildHeaderSetting(): void {

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
  }

  // Fake datas menuSettings
  private _buildMenuSetting(): void {
    this.menuSettings = {
      MenuItems: [{
        Title: "Menu Menu 1",
        Link: "#",
        Icon: "far fa-address-book fa-2x"
      },
      {
        Title: "Menu Menu Menu 2",
        Link: "#",
        Icon: "fab fa-adn fa-2x"
      },
      {
        Title: "Menu Menu Menu 2",
        Link: "#",
        Icon: "fas fa-ambulance fa-2x"
      },
      {
        Title: "Menu Menu Menu 2",
        Link: "#",
        Icon: "far fa-address-book fa-2x"
      },
      {
        Title: "Menu Menu Menu 2",
        Link: "#",
        Icon: "fab fa-adn fa-2x"
      },
      {
        Title: "Menu Menu Menu 2",
        Link: "#",
        Icon: ""
      },
      ]
    }
  }

  // Catch UserName from LoginComponent output
  public getUserName(event) {
    console.log(event);
  }

  // Catch PassWord from LoginComponent output
  public getPassWord(event) {
    console.log(event);
  }

  // Catch RememberMe from LoginComponent output
  public getRememberMe(event) {
    console.log(event);
  }
}
