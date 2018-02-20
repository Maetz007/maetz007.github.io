$(document).ready(function(){
  var $expElement;
  var $expControl;
  var $textId;

  $('.dropDown').on('click', function(event) {
    $textId = $(this).children('span').attr('id');
    $expElement = $(event.delegateTarget);
    $expControl = $('#' + $(this).attr('aria-controls'));
    var isExpanded = $(this).attr('aria-expanded');
    if (isExpanded == 'true') {
       $expControl.slideUp();
       $expElement.attr('aria-expanded', false);
    } else {
       $expControl.slideDown();
       $expElement.attr('aria-expanded', true);
       $('.list_link').first().focus();
    }
  });

  $('.list_link').on('click', function(){
    var $newText = $(this).text();
    $expControl.slideUp();
    $($expElement).attr('aria-expanded', false);
    $('#' + $textId).text($newText);
    $('.dropDown').focus();
  });
});
