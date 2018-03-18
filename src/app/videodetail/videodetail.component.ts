import { Component, OnInit ,Input , Output ,EventEmitter } from '@angular/core';
import {Video} from '../video';

@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.css']
})
export class VideodetailComponent implements OnInit {

private editTitle:boolean=false;
@Input() video:Video;
@Output() updatevideoevent = new EventEmitter();
@Output() deletevideoevent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
  this.editTitle=false;
  }

  onclicktitle(){
  this.editTitle=true;
  }


  updatevideo(){
  this.updatevideoevent.emit(this.video);
  }

  deletevideo(){
  this.deletevideoevent.emit(this.video);
  }

}
