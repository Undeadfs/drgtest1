import { Component } from '@angular/core';
import { ktdTrackById } from '@katoid/angular-grid-layout';
import {KtdGridLayout} from '@katoid/angular-grid-layout';
import { ktdArrayRemoveItem } from "src/app/utils"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drgtest';

cols: number = 3;
rowHeight: number = 100;
resizable: boolean = false;
transition: string = 'transform 500ms ease, width 500ms ease, height 500ms ease';
layout: KtdGridLayout = [
    {id: '0', x: 0, y: 0, w: 2, h: 3},
    {id: '1', x: 0, y: 0, w: 1, h: 3},
    {id: '2', x: 0, y: 0, w: 1, h: 3},
];
trackById = ktdTrackById;

// ngOnInit() {
//   setTimeout(() => {
//     this.layout[0].w = 1;

//     this.layout = [...this.layout];
//     console.log('test')
//   }, 3000);
// }

onLayoutUpdated(layout: KtdGridLayout) {
  console.log('on layout updated', layout);
  this.layout = layout;
}
removeItem(id: string) {
  this.layout = ktdArrayRemoveItem(this.layout, item=> item.id === id);
}
}
