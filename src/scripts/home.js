var videoForPlay = $(".video");
var sidebarToggler = $(".sidebar-toggler");

var videoForPlayOn = true;

$(window).scroll(function() {
	if (videoForPlay.visible(true) && videoForPlayOn == true) {
		videoForPlayOn = false;
		videoForPlay[0].play();
	}
});

new WOW().init();

var elem = document.querySelector('.malarkey');

var opts = {
	typeSpeed: 50,
	deleteSpeed: 50,
	pauseDelay: 2000,
	loop: true,
	postfix: ''
};

malarkey(elem, opts).type('Swift')
					.pause()
					.delete()
					.type('Kotlin')
					.pause()
					.delete()
					.type('JavaScript')
					.pause()
					.delete();
					.type('Java')
					.pause()
					.delete();
					.type('C#')
					.pause()
					.delete();