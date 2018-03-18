import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Video} from '../video';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {

@Input() list:Video;
@Output() selectvideo=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onselect(vid:Video){
  this.selectvideo.emit(vid);

  }

}
