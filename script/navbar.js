$(function(){
    $(window).scroll(function(){
        if (window.pageYOffset > $("#navbar").height()) {
            $("#navbar").addClass('fixed-top');
        } else {
            $("#navbar").removeClass('fixed-top');
        }
    });
  });

  $(document).ready(function () {
    $('li.dropdown').hover(
        function () {
            $(this).find('a.nav-link').addClass('active');
            $(this).find('.dropdown-menu-level-1').addClass('show');
        },
        function () {
            $(this).find('a.nav-link').removeClass('active');
            $(this).find('.dropdown-menu-level-1').removeClass('show');
            $(this).find('.dropdown-menu-level-2').removeClass('show');
        }
    );
});
