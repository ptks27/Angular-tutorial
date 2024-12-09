import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-viewchild',
  standalone: false,

  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.scss',
})
export class ViewchildComponent implements OnInit, AfterViewInit {
  @ViewChild('GalaxyImage', { read: ElementRef })
  imageRef?: ElementRef<HTMLImageElement>;
  isShowImage = false;
  constructor() {}

  ngOnInit(): void {
    console.log('onInit : ', this.imageRef);
  }

  ngAfterViewInit(): void {
    console.log('afterview : ', this.imageRef);
  }

  small() {
    if (this.imageRef !== undefined) {
      const imageElement = this.imageRef.nativeElement;
      imageElement.style.width = '200px';
      imageElement.style.height = '150px';
    }
  }

  medium() {
    if (this.imageRef !== undefined) {
      const imageElement = this.imageRef.nativeElement;
      imageElement.style.width = '300px';
      imageElement.style.height = '200px';
    }
  }

  big() {
    if (this.imageRef !== undefined) {
      const imageElement = this.imageRef.nativeElement;
      imageElement.style.width = '400px';
      imageElement.style.height = '300px';
    }
  }
}
