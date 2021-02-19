import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',  // 또는 웹 페이지를 적용 가능함.
   template: `<h1>Ultra Racing</h1>
             <car-parts></car-parts>`  // 상세 부분은 car-parts.component.ts에서 구현 되어 있음..
  , styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultra Racing.... StartUsingTerminal';
}

