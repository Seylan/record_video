var ffmpeg = require('ffmpeg');

try {
	var process = new ffmpeg('/Users/awijesinghe/Development/research/record-video1/videos/myFinalAnswer.mp4');
	process.then(function (video) {
		
		video
		.setVideoSize('640x?', true, true, '#fff')
		.save('/Users/awijesinghe/Development/research/record-video1/videos/compressedVideo.mp4', function (error, file) {
			if (!error)
				console.log('Video file: ' + file);
		});

	}, function (err) {
		console.log('Error: ' + err);
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}