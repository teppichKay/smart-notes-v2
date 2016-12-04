
/*
$(document).ready(function() {
    var count = 0;
    $(".btn-floating").click(function() {
        var table = document.getElementById(\)
        var domElement = document.createElement()
        count += 1;
        //var domElement1 = $('<div class="btn-discard"><text>Discard</text></div>')
        //$(this).after(domElement1).after(domElement);

        $(this).after(domElement);
    });
});
*/
$(document).ready(function() {
  $('select').material_select();
});

// add cards
$('.btn-floating').click(function () {
  $('.row')
  .append('<section class="wrapper cherry"><div class="component__list-item card"><textarea id="textarea" class="materialize-textarea component__heading"></textarea><div class="card-action component__list"><a class="waves-effect waves-light btn component__list-item" id="archive">archive</a></div></div></section>')

})
