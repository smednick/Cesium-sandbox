import { Component } from '@angular/core';
import { AngularCesiumModule } from 'angular-cesium';

// import 'cesium';
declare var Cesium: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // viewer: any;


  constructor(){
    // this.viewer = new Cesium.Viewer('cesiumContainer');
  }
}


