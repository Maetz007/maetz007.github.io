$(document).ready(function(){
  var $expElement;
  var $expControl;
  var $textId;

  $('.dropDown').on('click', function(event) {
    $textId = $(this).children('span').attr('id');
    $expElement = $(event.delegateTarget);
    $expControl = $('#' + $(this).attr('aria-controls'));
    var isExpanded = $(this).attr('aria-expanded');
    $('#' + $textId).siblings().removeClass('fa-angle-down').addClass('fa-angle-up');
    if ( isExpanded == 'true' ) {
       $expControl.slideUp(100, 'linear');
       $expElement.attr('aria-expanded', false);
       $('#' + $textId).siblings().removeClass('fa-angle-up').addClass('fa-angle-down');
    } else {
       $expControl.slideDown(100, 'linear');
       $expElement.attr('aria-expanded', true);
       $('#' + $textId).siblings().removeClass('fa-angle-down').addClass('fa-angle-up');
    }
    // This if statement is just meant to keep focus on the button should the user shift-tab back to the button and close the dropdown.
    if ( $('.dropDown').focus() ) {
      $('.dropDown').focus();
    } else {
      $('a.list_link:first').focus();
    }
  });

  $('.list_link').on('click', function(){
    var $newText = $(this).text();
    $expControl.slideUp(100, 'linear');
    $('#' + $textId).siblings().removeClass('fa-angle-up').addClass('fa-angle-down');
    $($expElement).attr('aria-expanded', false);
    $('#' + $textId).text($newText);
    $('.dropDown').focus();
  });

  $('.dropDownContent').keydown(function(e) {
    switch (e.keyCode) {
      case 27:
        $expControl.slideUp(100, 'linear');
        $('#' + $textId).siblings().removeClass('fa-angle-up').addClass('fa-angle-down');
        $($expElement).attr('aria-expanded', false);
        $('.dropDown').focus();
      case 32:
        $('.list_link').trigger('click');
        break
      case 35:
        $('a.list_link:last').focus();
        break;
      case 36:
        $('a.list_link:first').focus();
        break;
      case 38:
        $('.list_link:focus').closest('li').prev().find('a.list_link').focus();
        break;
      case 40:
        $('.list_link:focus').closest('li').next().find('a.list_link').focus();
        break;
      default: // do nothing;
    }
  });
});
