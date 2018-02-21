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
    $('a.list_link:first').focus();
  });

  $('.list_link').on('click', function(){
    var $newText = $(this).text();
    $expControl.slideUp(100, 'linear');
    $('#' + $textId).siblings().removeClass('fa-angle-up').addClass('fa-angle-down');
    $($expElement).attr('aria-expanded', false);
    $('#' + $textId).text($newText);
    $('.dropDown').focus();
  });

  $('.example_content').keydown(function(e) {
    switch (e.keyCode) {
      case 27:
        $expControl.slideUp(100, 'linear');
        $('#' + $textId).siblings().removeClass('fa-angle-up').addClass('fa-angle-down');
        $($expElement).attr('aria-expanded', false);
        $('.dropDown').focus();
        break;
      case 32:
        $('.list_link').trigger('click');
        break
      case 35:
        $('.list_link:last').focus();
        break;
      case 36:
        $('.dropDown').focus();
        break;
      case 38:
        $('.list_link:focus').closest('li').prev().find('.list_link').focus();
        $expElement.attr('aria-activeDescendant', $(this).attr('id'));
        break;
      case 40:
        $('.list_link:focus').closest('li').next().find('.list_link').focus();
        $expElement.attr('aria-activeDescendant', $(this).attr('id'));
        break;
      default: // do nothing;
    }
  });
});
