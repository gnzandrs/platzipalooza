$(document).foundation()

$('[data-toggle-dia]').on('click', function (e) {
	var panel = $(this).data('toggleDia')
	$('#lineup-tabs').foundation('selectTab', panel)
})


var $offCanvas = $('#offCanvas')
var $sticky = $('#sticky')

$offCanvas.find('li').on('click', function (e) {
	$offCanvas.foundation('close')
	/* fix left menu animation */
	setTimeout(function () {
		$sticky.css('left', '0px')
	}, 300)

})

