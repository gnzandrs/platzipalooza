$(document).foundation()

$('[data-toggle-dia]').on('click', function (ev) {
	var panel = $(this).data('toggleDia')
	$('#lineup-tabs').foundation('selectTab', panel)
})