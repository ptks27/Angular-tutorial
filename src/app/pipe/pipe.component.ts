import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: false,

  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss',
})
export class PipeComponent {
  pokemonChooseList = [
    {
      id: 1,
      pokename: 'Pikachu',
      choose: 'Y',
    },
    {
      id: 2,
      pokename: 'Ditto',
      choose: 'N',
    },
    {
      id: 3,
      pokename: 'Wobbuffet',
      choose: 'Y',
    },
    {
      id: 4,
      pokename: 'Girafarig',
      choose: 'N',
    },
    {
      id: 5,
      pokename: 'Forretress',
      choose: 'Y',
    },
  ];
}
