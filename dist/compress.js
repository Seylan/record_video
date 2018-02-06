var hbjs = require('handbrake-js')
 
var options = {
  input: '/Users/awijesinghe/Development/research/record-video1/videos/myFinalAnswer.mp4',
  output: '/Users/awijesinghe/Development/research/record-video1/videos/compressedVideo.mp4',
  e: 'x264', // encoder type
  B:'160',   // audio encoding value . here its 160 Kbps AAC
  q: '35',   // CRF(Constant Rate Factor) default quality (and rate control) setting for the x264 and x265 encoders. 
             //value should be between 0-51. lower the value better the quality
  r: '24',   //fps  
}
hbjs.exec(options, function (err, stdout, stderr) {
    if (err) throw err
    console.log('STDERR:', stderr)
    console.log('STDOUT:', stdout)
  })

