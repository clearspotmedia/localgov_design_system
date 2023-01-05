/**
 * JQuery file for design system contents menu and LocalGov Search customisations.
 */

jQuery(function ($) {
//Automatic menu from li

if ($(".page-node-type-design-system-page .field__item h2")[0]) {
var isparent = $('.ds-menu__secondary .menu-item.menu-item--active-trail');// Find active item parent link IDs
var insert_content_top = $('.design-system-page__content');// Insert contents menu here on mobile
// H2 headings exist so make the anchor menu
$(isparent).append('<ul id="ds-anchor-menu"></ul>');// Make ul container for menu inside
$(insert_content_top).prepend('<div id="ds-contents"><h2 id="ds-contents__heading">Contents</h2><ul></ul></div>');// Make ul container for menu inside

// Find active page in design system menu, loop out the page anchors based on h2 IDs
var isactive = $('.ds-menu__secondary a.is-active');//Active menu link
var ismenu = $('#ds-anchor-menu');//Anchor menu wrapper
$(".page-node-type-design-system-page .field__item h2:not(#ds-contents__heading)").each(function () {//Get each h2 text
  var thetitle = $(this).text();
  var hyphenatedtitle = thetitle.replace(/ /g, "-");//Hyphenate h2 title for use in anchor link
  $(this).prepend('<a name="' + hyphenatedtitle + '"></a>');//Create anchor before h2
  $(ismenu).append('<li><a href="#' + hyphenatedtitle + '" class="ds-anchorlink">- ' + $(this).text() + '</a></li>');//Output each link in design system menu
  $('#ds-contents ul').append('<li><a href="#' + hyphenatedtitle + '" class="ds-anchorlink">- ' + $(this).text() + '</a></li>');//Output each link in the top of page contents menu
});
} else {
// Do something if class does not exist
}

// Highlight the active page links in the design system menu (all levels). 
//Uses 'is-active' class which was already in place for top level menu items but had no styling assigned
var path = window.location.href; // Get the url 
$('.ds-menu__secondary a').each(function () {
if (this.href == path) {// If link URL matches browser URL make active
  $(this).attr('class', 'is-active');
}
else { }
});

// Highlight the active anchor link in the design system menu when clicked
$('.ds-menu__secondary a').on('click', function (e) {
$('.ds-menu__secondary a').each(function () {
  $(this).removeClass('is-active');
})
$(this).addClass('is-active');
});

// Change the wording of the search field placeholder in the header bar and search page
$('#views-exposed-form-localgov-sitewide-search-sitewide-search-page-block, #views-exposed-form-localgov-sitewide-search-sitewide-search-page').find("input[type=text]").each(function (ev) {
$(this).attr("placeholder", "Search design system");
});
// Change the wording of the search submit button in the header bar and search page
$('#views-exposed-form-localgov-sitewide-search-sitewide-search-page-block, #views-exposed-form-localgov-sitewide-search-sitewide-search-page').find("input[type=submit]").each(function (ev) {
$(this).val('Find');
});

});
