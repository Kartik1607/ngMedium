import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {UserService} from "../../Services/user.service";
import {AuthServiceService} from "../../Services/auth-service.service";

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
  errorMessage;

  @Output() onClose: EventEmitter<string> = new EventEmitter();

  constructor(private authService: AuthServiceService) {
    this.isSignUpPage = true;
    this.setValues();
  }

  ngOnInit() {
  }

  private setValues() {
    this.errorMessage = null;
    if(! this.isSignUpPage) {
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
    this.errorMessage = "";
    if(name.length < 6) {
      this.errorMessage = "User name must be at least 6 characters."
    }
    if(password.length < 6) {
      this.errorMessage += "\nPassword must be at least 6 characters."
    }
    if(this.errorMessage) {
      return;
    }
    this.authService.loginUser(name, password, (data)=>{
      this.onClose.emit(data['_id']);
    },(err) => {
      this.errorMessage = err;
    });
  }

  performSignUp(fullname, name, password) {
    this.errorMessage = "";
    if(fullname.length == 0) {
      this.errorMessage = "Full name cannot be empty."
    }
    if(name.length < 6) {
      this.errorMessage += "\nUser name must be at least 6 characters."
    }
    if(password.length < 6) {
      this.errorMessage += "\nPassword must be at least 6 characters."
    }
    if(this.errorMessage) return;
    this.authService.registerUser(fullname, name, password,
      (data)=>{
        this.onClose.emit(data['_id']);
      }, (err)=>{
        this.errorMessage = err;
      });
  }
}
