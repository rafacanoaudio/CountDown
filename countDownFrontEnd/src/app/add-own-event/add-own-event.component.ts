import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-own-event',
  templateUrl: './add-own-event.component.html',
  styleUrls: ['./add-own-event.component.css']
})
export class AddOwnEventComponent {
  // isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private router: Router) { }

  onSubmit(form: NgForm){

    // checks to see if form submission is valid
    if (!form.valid){
      return;
    }

    // extracts email and password values from the form data object
    const eventName = form.value.eventName;
    const author = form.value.author;
    const date = form.value.date;
    const eventDescription = form.value.eventDescription;


    console.log(eventName);
    console.log(author);
    console.log(date);
    console.log(eventDescription);

    this.isLoading = true;

    form.reset();
  }
}
