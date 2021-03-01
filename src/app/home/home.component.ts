import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../common/css/style.css', '../common/lib/owlcarousel/assets/owl.carousel.min.css', '../common/lib/animate/animate.min.css','../common/lib/lightbox/css/lightbox.min.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
