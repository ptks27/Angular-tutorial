import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private router: Router) {}
  editTitle() {
    this.router.navigate(['/title']);
  }
  goToBuffet() {
    this.router.navigate(['/buffet']);
  }
  goToActionBar() {
    this.router.navigate(['/action-bar']);
  }
  goToMaxMin() {
    this.router.navigate(['/max-min']);
  }
  goToSqaure() {
    this.router.navigate(['/sqaure']);
  }
  goToTwoWay() {
    this.router.navigate(['/twoway']);
  }
  goToView() {
    this.router.navigate(['/view']);
  }
  goToArray() {
    this.router.navigate(['/array']);
  }
  goToTestRequest() {
    this.router.navigate(['/test-request']);
  }
  goToPrimeNg() {
    this.router.navigate(['/primeng']);
  }
  goToShoppingCart() {
    this.router.navigate(['/shopping-cart']);
  }
  goToShoppingSearch() {
    this.router.navigate(['/shopping-search']);
  }
  goToGetSet() {
    this.router.navigate(['/getset']);
  }
  goToDirective() {
    this.router.navigate(['/directive']);
  }
  goToReactive() {
    this.router.navigate(['/reactive']);
  }
  goToForms() {
    this.router.navigate(['/forms']);
  }
  goToCreate() {
    this.router.navigate(['/create']);
  }
  goToStyle() {
    this.router.navigate(['/style']);
  }
  goToPipe() {
    this.router.navigate(['/pipe']);
  }
  goToViewChild() {
    this.router.navigate(['/viewchild']);
  }
}
