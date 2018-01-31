'use strict';
 
let videoStitch = require('video-stitch');
 
let videoConcat = videoStitch.concat;
 
videoConcat({
    silent: false // optional. if set to false, gives detailed output on console 
  })
  .clips([
    {
      "fileName": "/Users/awijesinghe/Development/research/record-video/videos/1.mp4"
    },
    {
      "fileName": "/Users/awijesinghe/Development/research/record-video/videos/2.mp4"
    },
  ])
  .output("/Users/awijesinghe/Development/research/record-video/videos/myAnswer.mp4") //optional absolute file name for output file 
  .concat()
  .then((outputFileName) => {
    
  });