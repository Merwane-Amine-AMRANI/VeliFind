import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css', '../../common/css/style.css',
    '../../common/lib/owlcarousel/assets/owl.carousel.min.css',
    '../../common/lib/animate/animate.min.css',
    '../../common/lib/lightbox/css/lightbox.min.css']
})
export class HeadersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toList() {
    this.router.navigate(['velibs/list']);
  }

  toMap() {
    this.router.navigate(['velibs/maps']);
  }


}
