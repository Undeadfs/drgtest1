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

sizeValue = "Line chart size : 75%";
cols: number = 2;
rowHeight: number = 100;
resizable: boolean = false;
// editMode : boolean = false;
transition: string = 'transform 500ms ease, width 500ms ease, height 500ms ease';

// sidebabrLayout: KtdGridLayout = [
//   {id: '0', x: 0, y: 0, w: 1.5, h: 1},
//   {id: '1', x: 0, y: 0, w: 1, h: 1},
//   {id: '2', x: 0, y: 0, w: 1, h: 1},
// ];

layout: KtdGridLayout = [
    {id: '0', x: 0, y: 0, w: 1.5, h: 2},
    {id: '1', x: 0, y: 0, w: 1, h: 2},
    {id: '2', x: 0, y: 0, w: 1, h: 2},
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
  console.log(layout);
  this.layout = layout;
}
removeItem(id: string) {
  this.layout = ktdArrayRemoveItem(this.layout, item=> item.id === id);
}

toggleSize(){
      
      if(this.sizeValue=="Line chart size : 75%"){
        this.sizeValue = "Line chart size : 100%"
        this.layout[0].w = 2
        this.layout = [...this.layout];
      } else {
        this.sizeValue = "Line chart size : 75%"
        this.layout[0].w = 1.5
        this.layout = [...this.layout];
      }
}

// toggleEditMode(){
//   this.editMode = !this.editMode
// }

}
