import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css',
    '../../common/css/style.css',
    '../../common/lib/owlcarousel/assets/owl.carousel.min.css',
    '../../common/lib/animate/animate.min.css',
    '../../common/lib/lightbox/css/lightbox.min.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
