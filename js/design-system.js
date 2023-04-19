//Automatic page contents menu for sidebar - inserts anchor link and title in contents menu, for each page section that starts with a h2
document.addEventListener('DOMContentLoaded', function (event) {

  //Only fire if we have our custom paragraph types on the page
  var elem = document.querySelector(".paragraph--type--cds-design-system-text-section h2");
  if (elem) {

    //Target elements for current page link, and design system content wrapper
    var parent = document.querySelector(".ds-menu__secondary .nav-item.is-active-trail a"); //Current active page link in contents menu
    var contents_mob = document.querySelector(".cds-design-system__content"); // Design system page content wrapper
    // Create a wrapper for our auto menu and insert it after the current page link
    var parent_content = '<ul id="ds-anchor-menu"></ul>';
    parent.insertAdjacentHTML('afterend', parent_content);
    // Create a wrapper for our mobile contents menu, insert it at the start of the design system content (mobile only CSS)
    var contents_mob_content = '<div id="ds-contents"><ul></ul></div>';
    contents_mob.insertAdjacentHTML('afterbegin', contents_mob_content);

    //Target active link and wrapper for auto menu
    var isactive = document.querySelector('.ds-menu__secondary .nav-item.is-active-trail a'); //Current active page link in contents menu

    var anchor_menu_wrapper = document.getElementById('ds-anchor-menu'); //Anchor menu wrapper we created previously using parent_conten

    //Create the anchor menu
    [...document.querySelectorAll('.paragraph--type--cds-design-system-text-section h2')].forEach(el => {
      //Set up hyphenated title
      var thetitle = el.innerText; //h2 titles
      var hyphenatedtitle = thetitle.replace(/ /g, "-").toLowerCase(); //Hyphenate h2 title for use in anchor link
      var contents_mob_wrapper = document.querySelector("#ds-contents ul"); // Design system page wrapper 
      var anchorlinks = '<li><a href="#' + hyphenatedtitle + '" class="ds-anchorlink">- ' + thetitle + '</a></li>';

      anchor_menu_wrapper.insertAdjacentHTML('beforeend', anchorlinks); //Assign links to anchor menu
      contents_mob_wrapper.insertAdjacentHTML('beforeend', anchorlinks); //Assign links to contents menu mobile
    })
  }
});

// Highlight the active 'anchor' links in the design system menu when clicked
document.addEventListener('click', function (event) {
  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches('.ds-anchorlink')) return;
  //Remove active class from all menu items
  [...document.querySelectorAll('.ds-anchorlink')].forEach(el => {
    el.classList.remove("is-active");
  })
  //Add active class to clicked link
  event.target.classList.add('is-active');
  // Log the clicked element in the console
}, false);


document.addEventListener('DOMContentLoaded', function (event) {
  //Look for contents menu, only run the functions if it exists
  var elem = document.querySelector(".ds-menu__secondary");
  if (elem) {
    //Highlight the active page in the contents menu
    var path = window.location.href; // Get the url 

    [...document.getElementsByClassName('.ds-menu__secondary a')].forEach(el => {
      if (event.currentTarget.href == path) {
        event.currentTarget.classList.add(".is-active")
      } else { }
    })
  }
});

//Change wording on LocalGov Search module header search
document.addEventListener('DOMContentLoaded', function () {
  //Header LocalGov Search container (present in header only)
  var elem = document.getElementById('views-exposed-form-localgov-sitewide-search-sitewide-search-page-block');
  if (elem) {
    // Change the wording of the search submit button in the header bar
    document.getElementById('views-exposed-form-localgov-sitewide-search-sitewide-search-page-block').querySelector("input[type=submit]").value = 'Search';
    // Change the wording of the search field placeholder in the header bar 
    document.getElementById('views-exposed-form-localgov-sitewide-search-sitewide-search-page-block').querySelector("input[type=text]").placeholder = 'Search Design System';
  }
});

//Change wording on LocalGov Search module page search
document.addEventListener('DOMContentLoaded', function () {
  //LocalGov Search Form container (present in both header and page)
  var elem = document.getElementById('views-exposed-form-localgov-sitewide-search-sitewide-search-page');
  if (elem) {
    // Change the wording of the search submit button in the search page
    document.getElementById('views-exposed-form-localgov-sitewide-search-sitewide-search-page').querySelector("input[type=submit]").value = 'Search';
    // Change the wording of the search field label in the search page
    document.getElementById('views-exposed-form-localgov-sitewide-search-sitewide-search-page').querySelector("label").innerText = 'Search Design System';
  }
});