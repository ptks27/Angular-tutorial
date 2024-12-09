import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

export function useDragImage(element: HTMLImageElement) {
  return fromEvent<MouseEvent>(element, 'mousedown').pipe(
    switchMap((downevet) => {
      downevet.preventDefault();
      const { x: imageX, y: imageY } = element.getBoundingClientRect();
      element.style.position = `fixed`;

      return fromEvent<MouseEvent>(document, 'mousemove').pipe(
        tap((moveevent) => {
          const top = imageY + (moveevent.y - downevet.y);
          const left = imageX + (moveevent.x - downevet.x);
          element.style.top = `${top}px`;
          element.style.left = `${left}px`;
        }),
        takeUntil(fromEvent(document, 'mouseup'))
      );
    })
  );
}
