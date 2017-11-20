import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  modalImage: string;
  isSignUpPage: boolean;
  modalHeading: string;
  modalSubHeading: string;
  formAction: string;
  modalHelperText: string;
  modalHelperAction: string;

  @Output() onClose: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.isSignUpPage = false;
    this.setValues();
  }

  ngOnInit() {
  }

  private setValues() {
    if(this.isSignUpPage) {
      this.modalImage = 'https://cdn-images-1.medium.com/proxy/1*lQWWgHf-jUvQVEyAKQLIkw@2x.png';
      this.modalHeading = 'Welcome Back.';
      this.modalSubHeading = 'Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you.';
      this.formAction = 'Login';
      this.modalHelperText = 'Are you new to Medium? ';
      this.modalHelperAction = 'Sign Up';
    } else {
      this.modalImage = 'https://cdn-images-1.medium.com/proxy/1*xQRMjmyxoyQwwFloo9ioNQ.png';
      this.modalHeading = 'Join Medium.';
      this.modalSubHeading = 'Create an account to personalize your homepage, follow your favorite authors and publications, applaud stories you love, and more.';
      this.formAction = 'Sign Up';
      this.modalHelperText = 'Already have an account?';
      this.modalHelperAction = 'Sign In'
    }
  }
  switchLogin() {
    this.isSignUpPage = !this.isSignUpPage;
    this.setValues()
  }

  performLogin(name, password) {

  }

  performSignUp(name, password) {

  }
}