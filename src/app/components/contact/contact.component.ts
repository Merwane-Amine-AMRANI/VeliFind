import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',
    '../../common/css/style.css',
    '../../common/lib/owlcarousel/assets/owl.carousel.min.css',
    '../../common/lib/animate/animate.min.css',
    '../../common/lib/lightbox/css/lightbox.min.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
