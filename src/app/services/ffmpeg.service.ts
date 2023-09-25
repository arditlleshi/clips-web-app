import { Injectable } from '@angular/core';
import { createFFmpegCore } from '@ffmpeg/ffmpeg/dist/esm/types';

@Injectable({
  providedIn: 'root'
})
export class FfmpegService {

  isReady = false;
  private ffmpeg;
  //
  constructor(){
    this.ffmpeg = createFFmpegCore({ log: true });
  }

  async init(){
    if (this.isReady){
      return
    }

    // await this.ffmpeg.load();

    this.isReady = true;
  }
}
