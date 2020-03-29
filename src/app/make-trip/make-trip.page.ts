import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { TripService } from './../shared/trip.service';

@Component({
  selector: 'app-make-trip',
  templateUrl: './make-trip.page.html',
  styleUrls: ['./make-trip.page.scss'],
})

export class MakeTripPage implements OnInit {
  bookingForm: FormGroup;
  
  constructor(
    private aptService: TripService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      user: [''],
      placeFrom: [''],
      placeTo: [''],
      dateFrom: [''],
      dateTo: [''],
      grades: [''], 
      trad: [''],
      price: [''],
    })
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}
