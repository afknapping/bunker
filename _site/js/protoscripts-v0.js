$(".toggle").click( function() {
  var toggleTarget = $(this).attr( "toggle-target" );
  $("." + toggleTarget).toggle(300);
});





// element
//      some kind of ID (not id)
//      action = jquery method
//      target for action (if 0 then self)

// element
//      jq-id
//      jq-method
//      jq-target
//      jq-arguments

// on load
// for each element which has jq-method
//      get method, target and arguments
//      do da binding
// done



