$(".toggle").click( function() {
  var toggleTarget = $(this).attr( "toggle-target" );
  $("." + toggleTarget).toggle(300);
});



$(document).ready(function () {
  // console.log("hello");
  $('[data-jq-id="toggle-voucher-extended-options"]').bind("click", function() {
    //$('[data-jq-id="voucher-extended-options"]').toggle(400);
  });
  $(document).find('[data-jq-method]').each(function() {
    var $dasda = $(this);
    
    $dasda.click(function() { 
        var method = $dasda.data('jq-method'),
          target = $dasda.data('jq-target'),
          args = $dasda.data('jq-arguments'),
          $target = $('[data-jq-id="'+ target +'"]');
          $.fn[method].apply($target, [args]);
    })
  });
});


// element
//      some kind of ID (not standard element id)
//      action = jquery method
//      target for action (if 0 then self)

// element
//      jq-id
//      jq-method
//      jq-target => jq-id
//      jq-arguments

// on load
// for each element which has jq-method
//      get method, target and arguments
//      do da binding
// done



/*$(".toggle").click( function() {
  var toggleTarget = $(this).attr( "toggle-target" );
  $("." + toggleTarget).toggle(300);
});



var print = function (message) {
  console.log(message);
};

$(document).ready(function () {
  $('[data-jq-id="toggle-voucher-extended-options"]').bind("click", function() {
    $('[data-jq-id="voucher-extended-options"]').toggle(400);
  });
  
  var actionElements = $(document).find('[data-jq-method]');

  for ( var i = 0; i < actionElements.length ; i++) {
    print(actionElements[i]);
  }



});


// element
//      some kind of ID (not standard element id)
//      action = jquery method
//      target for action (if 0 then self)

// element
//      jq-id
//      jq-method
//      jq-target => jq-id
//      jq-arguments

// on load
// for each element which has jq-method
//      get method, target and arguments
//      do da binding
// done



*/