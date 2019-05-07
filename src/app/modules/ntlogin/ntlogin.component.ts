import { Component, OnInit, Input } from '@angular/core';
import { UserLogin } from './userlogin';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './components/modal/ntmodal.component';

/**
 * NTHeaderComponent
 * 
 * Login page with binding model and show popup
 */
@Component({
  selector: 'app-ntlogin',
  templateUrl: './ntlogin.component.html',
  styleUrls: ['./ntlogin.component.css']
})

export class NTLoginComponent implements OnInit {

  // Init model
  userLogin: UserLogin = {
    UserName: '',
    Password: '',
    RememberMe: false
  };

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  // Onlick to open modal
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.UserName = this.userLogin.UserName;
    modalRef.componentInstance.PassWord = this.userLogin.Password;
    modalRef.componentInstance.RememberMe = this.userLogin.RememberMe;

    // Received result message
    modalRef.result.then((data) => {
      console.log(data);
    })
  }

}

