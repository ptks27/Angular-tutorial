import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, NEVER, switchMap } from 'rxjs';
import { useDragImage } from '../shared/use-drag-image';

@Component({
  selector: 'app-viewchild',
  standalone: false,

  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.scss',
})
export class ViewchildComponent implements OnInit {
  @ViewChild('GalaxyImage', { read: ElementRef })
  set imageRef(el: ElementRef<HTMLImageElement> | undefined) {
    this.imageRef$.next(el);
  }

  get imageRef() {
    return this.imageRef$.value;
  }

  imageRef$ = new BehaviorSubject<ElementRef<HTMLImageElement> | undefined>(
    undefined
  );

  isShowImage = false;
  constructor() {}

  ngOnInit(): void {
    this.imageRef$.pipe(
      switchMap((ref) => {
        if (ref) {
          return useDragImage(ref.nativeElement);
        }
        return NEVER;
      })
    );
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
