YUI().use("node-base", "node-event-delegate", function(Y) {
  var menuButton = Y.one(".nav-menu-button")
    , nav = Y.one("#nav");

  if(menuButton != null) {
    menuButton.on("click", function(e) {
      nav.toggleClass("active");
    });
  }
});

YUI().use("node-base", "node-event-delegate", function(Y) {
  Y.one("body").delegate("click", (function(e) {
    e.preventDefault();
  }), "a[href=\"#\"]");
});

$(document).on("click", ".pure-menu-tabs a", function(event) {
  event.preventDefault();

  var self = $(this)
    , id = self.attr("href").substring(1);

  self
    .parents("ul")
    .find("li")
    .removeClass("pure-menu-selected");

  self
    .parent()
    .addClass("pure-menu-selected");

  $(".menu-content").each(function(el) {
    el = $(this);

    if (el.attr("id") === id) {
      return el.removeClass("hidden");
    } else {
      return el.addClass("hidden");
    }
  });
});
