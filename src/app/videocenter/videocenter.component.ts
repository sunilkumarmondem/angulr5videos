import { Component, OnInit } from '@angular/core';
import {Video} from '../video';
import {VideoService} from '../video.service';



@Component({
  selector: 'app-videocenter',
  templateUrl: './videocenter.component.html',
  styleUrls: ['./videocenter.component.css']
})
export class VideocenterComponent implements OnInit {

public errormsg;

private hidden:boolean=true;

videos:Video[];

selectedvideo:Video;

  constructor(private videoser:VideoService ) { }

  ngOnInit() {
  this.videoser.getvideos().subscribe(data => this.videos=data, error =>this.errormsg=error);
 
  }

  onselectvideo(video:Video){
  this.selectedvideo=video;
  this.hidden=true;
    }

    onsubmitaddvideo(video:Video){
    this.videoser.addvideo(video).subscribe(data =>{
    this.videos.push(data);
    this.hidden=true;
    this.selectedvideo=data;

    })
    }

  newvideo(){
  this.hidden=false;
  }

  onupdatevideoevent(video:Video){
  this.videoser.updatevideo(video).subscribe(data =>video=data);
  this.selectedvideo=null;
  }

  ondeletevideoevent(video:Video){
  let videoarray=this.videos;
  this.videoser.deletevideo(video).subscribe(data =>{
  for(let i=0; i<videoarray.length; i++){
  if(videoarray[i]._id === video._id){
  videoarray.splice(i,1);
  }
  }
  });
  this.selectedvideo=null;

  }



}
