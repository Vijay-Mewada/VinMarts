import { Component, OnInit,ElementRef, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  otpForm!: FormGroup;


  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.otpForm = this.fb.group({
      one: ['', [Validators.required]],
      two: ['', [Validators.required]],
      three: ['', [Validators.required]],
      four: ['', [Validators.required]],
      five: ['', [Validators.required]],
      six: ['', [Validators.required]],
    });
  }

  get f() {
    return this.otpForm.controls;
  }

  moveFocus(event:any, nextElement:any, previousElement:any) {
    console.log(event.keyCode);
    if (event.keyCode === 8 && previousElement) {
      previousElement.setFocus();
    } else if (event.keyCode >= 48 && event.keyCode <= 57) {
      if (nextElement) {
        nextElement.setFocus();
      }
    } else if (event.keyCode >= 96 && event.keyCode <= 105) {
      if (nextElement) {
        nextElement.setFocus();
      }
    } else {
      event.path[0].value = '';
    }
  }
  onSubmit() {
  }
}
