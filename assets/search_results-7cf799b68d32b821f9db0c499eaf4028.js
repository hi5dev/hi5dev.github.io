$(function() {
  $('#search-query').lunrSearch({
    indexUrl: '/search.json',
    results:  '#search-results',
    entries:  '.entries',
    template: '#search-results-template'
  });

  $("#search-query").on("keyup", function(e) {
    if(e.keyCode == 27) {
      $("#search-query").val("");
      $("#search-results").hide();
    }
  });
});
