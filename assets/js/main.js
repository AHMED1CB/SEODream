$(document).ready(() => {

	let nav = $('nav > .nav-links');

	let toggler = $('.toggler');

	let links = $('.nav-links li a');


	$(toggler).on('click' ,() => {


		$(nav).slideToggle(300)
		

	})


	links.each((_ , link) => {
		$(link).on('click', _ => {
			
				links.each((_ , lnk) => $(lnk).removeClass('active'));
				$(link).addClass('active')
				
		})
	})


})



  sal({
      threshold: .2,
      once: true
});