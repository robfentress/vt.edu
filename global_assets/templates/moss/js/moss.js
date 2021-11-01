//get cookie value function
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

$(document).ready(function () {

    var menu = $('.flypanels-content'),
    origOffsetY = menu.offset();
    origOffsetY = origOffsetY.top - 20;
    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.flypanels-topbar').addClass('flypanels-topbar-sticky');
            $('.navbar').addClass('navbar-sticky');
            $('.icon-menu').addClass('flypanels-button-left-sticky');
            //$('.shield').fadeIn('fast');
            //$('.shield-mobile').fadeIn('fast');
        } else {
            $('.flypanels-topbar').removeClass('flypanels-topbar-sticky');
            $('.navbar').removeClass('navbar-sticky');
            $('.icon-menu').removeClass('flypanels-button-left-sticky');
            //$('.shield').fadeOut('fast');
            //$('.shield-mobile').fadeOut('fast');
        }
    }
    document.onscroll = scroll;

    //find in-page anchors w/o hrefs and add class to them for spacing below sticky nav
    $('.vt-text a:not([href]), .vt-rawhtml a:not([href])').each(function () {
    	var attrName = $(this).attr('name'),
    		attrID = $(this).attr('id');
    	if(attrName || attrID) {
    		$(this).addClass('textAnchor');
    	}
    });

    //customization via sitePrefs
    if(typeof(mossPrefs) != 'undefined') {
        //show or hide quicklinks
        if(mossPrefs.showQuicklinks == "no") {
            $('#vt_quicklinks_li').addClass("visHidden");
            $(window).trigger('resize');
        }

        //show or hide breadcrumbs
        if(mossPrefs.showBreadcrumbs == "no") {

            $('.gateway').css("display", "none");
        }
    }

    // COPYRIGHT FOOTER
    var copyright = $('.vt-footer-container > .row > div[class*="col-"] > ul:first-of-type li:last-child p').html();
    $('#vt_footer_wrapper').append("<div id='footer-copyright'><p>" + copyright + "</p></div>");
    // COPYRIGHT FOOTER

    //search box scripts
    if(window.location.href.indexOf("q=") < 1) {
        $('#vt_search_box_comp').val("Search VT");
    }

	$('#vt_search_box_comp').on("click", function() {
		$('#vt_search_box_comp').val("").attr("placeholder", "");
	});

    //vt-carousel fade class
    if($('.vt-carousel').length > 0) {
        $('.vt-carousel').each(function() {
            $(this).addClass('carousel-fade');
        })
    }

    //table function trigger
    if($('table').length > 0){
        // $.getScript( "/global_assets/js/util/table-functions.js", function() {});
      $('body').append('<script type="text/javascript" src="/global_assets/js/util/table-functions.js"></script>');
    }

    //list function trigger
    if($('.list').length > 0){
        // $.getScript( "/global_assets/js/util/list-functions.js", function() {});
      $('body').append('<script type="text/javascript" src="/global_assets/js/util/list-functions.js"></script>');
    }

    //multitab-accordion function trigger
    if($('.vtmultitab').length > 0){
        // $.getScript( "/global_assets/js/util/multitab-accordion.js", function() {});
      $('body').append('<script type="text/javascript" src="/global_assets/js/util/multitab-accordion.js"></script>');
    }
});

//current nav item highlight script
$(function(){
  $('.navbar a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    }
  });
});

//mobile nav init script
$(document).ready(function(){
  if(window.location.href.indexOf("wcmmode=disabled") > 0 || getCookie('cq-editor-layer') !== "Edit") {
    $('.flypanels-container').flyPanels({
        treeMenu: {
            init: true
        },
        search: {
            init: true,
            saveQueryCookie: true
        }
    });
    FastClick.attach(document.body);
  }
});

//main nav dropdown hover script
 $(document).ready(function(){

     $('ul.menu.flex').flexMenu(
        {
            showOnHover: 'true',
        });

 });

//changes for last nav item to have right justified dropdown
function dropdownSize(){
    setTimeout(function () {
        var browserName = navigator.userAgent,
        dropdownWidth = $("#vt_main_nav_ul >li:last-child ul.dropdown-menu").css("width"),
        parentWidth = $("#vt_main_nav_ul >li:last-child").css("width"),
        marginAmount = 0;
        if (navigator.appVersion.indexOf("Win")!=-1) {
            if (browserName.indexOf("Chrome")!=-1) {
                if (browserName.indexOf("Edge") == -1) {
                    marginAmount = -0.5;
                }else{
                    marginAmount = 0.5;
                }
            }
        }
        if(dropdownWidth){
            dropdownWidth = dropdownWidth.substr(0, dropdownWidth.length-2);
            dropdownWidth = Number(dropdownWidth).toFixed(0);
            parentWidth = parentWidth.substr(0, parentWidth.length-2);
            parentWidth = Number(parentWidth).toFixed(0);
            dropdownWidth = (parentWidth - dropdownWidth) - marginAmount;
            dropdownWidth = String(dropdownWidth) + "px";
            $("#vt_main_nav_ul >li:last-child ul.dropdown-menu").css("margin-left", dropdownWidth);
        }
    }, 500);
}

$(document).ready(function(){
      dropdownSize();
});

$(window).resize(function(){
      dropdownSize();
});

//accessibility additions
function accessNav(){
  if($(window).width() > 479) {
      $("#navbar-collapse-1").accessibleMegaMenu({
          uuidPrefix: "accessible-megamenu",
          menuClass: "nav-menu",
          topNavItemClass: "nav-item",
          panelClass: "vt_subnav1_block",
          panelGroupClass: "vt_subnav1",
          hoverClass: "hover",
          focusClass: "focus",
          openClass: "open"
    });
    // hack so that the megamenu doesn't show flash of css animation after the page loads.
     setTimeout(function () {
         $('body').removeClass('init');
     }, 500);
  }
}

//various document ready functions
$(document).ready(function(){
    accessNav();
    rightColPos();
    sitenameFix();
		$('.vt-contact-phone').each(function(){
			var newTel = reformatTel($(this).html().trim());
			$(this).html(newTel);
		});
});

//various document resize functions
$(window).resize(function(){
    accessNav();
    rightColPos();
    sitenameFix();
});

//sets focus for accessibility
function reFocus(item_id){
    setTimeout(function() { $('#'+item_id).focus() }, 500);
}

//end accessibility additions

//mobile nav toggle
$(window).on('resize', function(){
      var win = $(this);
      if (win.width() > 767) {
          $('.flypanels-container').removeClass('openright');
          $('.panelcontent .logo-block').removeClass('menu-open');
      } else {
          $('.panelcontent .logo-block').addClass('menu-open');
      }
});

//old portrait image script
$(window).on('load', function() {
    $('.vt-image img, .vt-list-columns figure img').addClass(function() {
        if (this.height === this.width) {
            return 'vt-square';
        } else if (this.height > this.width) {
            return 'vt-portrait';
        } else {
            return 'vt-landscape';
        }
    });
    $('figure img').addClass('vt-image-inline');
});

//hides side-nav if empty
$(function() {
    $('.side-nav .panel-group').each(function() {
        if ($.trim($(this).html()) == ''){
            // hides the side nav div
            $('.side-nav').addClass('hidden-side-nav');
         } else {
             $('.side-nav').addClass('visible-side-nav');
        }
    });
});

/* show hide alerts */

$(document).ready(function() {
    if($('#vt_alert_wrapper').length>0){
        $('#vt_alert_wrapper').append('<button id="vt_alert_hide_show" type="button"><span>Close</span></button>');
        $('#vt_alert_wrapper').prepend('<span class="fa fa-warning fa-5x"></span>');
        $('#vt_alert_hide_show').click(function(){
            $('#vt_alert_wrapper').toggleClass("vt-close-alert");
            $(this).html(function(i, v){
                return v === '<span>Open</span>' ? '<span>Close</span>' : '<span>Open</span>'
            })
        });
    }
});

// Responsive Tabs
$(function() {
   fakewaffle.responsiveTabs(['xs']);
});

//javascript form validation
$(document).ready(function(){
	// only load necessary files if we have a special class to trigger it
	if($(".vt-js-form").size()>0){
		// loading necessary javascript files for validation, wysiwyg editor, datepicker
		$.getScript("/global_assets/js/forms/jquery.ui.core.pack.js", function(){
			$.getScript("/global_assets/js/forms/jquery.wysiwyg.pack.js", function(){
				$(".vt-js-form .wysiwyg").wysiwyg({
					controls : {
						separator01 : { visible: true},
						indent : { visible: true },
						outdent: { visible: true },
						separator04 : { visible : true },
						insertOrderedList : { visible : true },
						insertUnorderedList : { visible : true },
						insertImage : { visible : false },
						increaseFontSize : {visible: false },
						decreaseFontSize : {visible: false },
						separator09 : { visible: false}
					}
				});
				$.getScript("/global_assets/js/forms/jquery.validate.js", function(){
					$.getScript("/global_assets/js/forms/additional-methods.js", function(){
						$.getScript("/global_assets/js/forms/ui.datepicker.js", function (){
							$(".vt-js-form .date").datepicker();
							$(".vt-js-form").validate();
						});
					});
				});
			});
		});
		$('head').prepend('<link rel="stylesheet" href="/global_assets/js/forms/jquery.wysiwyg.css" type="text/css" media="screen" />');
	}
});

//Rerun equal heights, default to 3 columns
function runEqualHeights(columns){
    // function deprecated //
}


// function to keep right column from wrapping under body content if subnav gets longer than body
function rightColPos(){

    if (window.matchMedia('print')) {
      var mediaQueryList = window.matchMedia('print');

      mediaQueryList.addListener(function(mql) {
        if (mql.matches) {
            $("#vt_right_col").addClass("right-col-margin-18");
            $("#vt_right_col").removeClass("right-col-margin-75");
            $("#vt_right_col").removeClass("right-col-margin-8");
            $("#vt_right_col").removeClass("right-col-margin-0");
        }
      });
    }

    if($("#vt_with_rb").length > 0){

        setTimeout(function() {
            var rightCol = $("#vt_right_col").position(),
            bodyCol = $("#vt_body_col").position(),
            bodyColWidth = $("#vt_body_col").width(),
            bodyColRight = bodyCol.left + bodyColWidth;

            if($(window).width() > 991){

              if(rightCol.left < bodyColRight){
                  $("#vt_right_col").addClass("right-col-margin-75");
                  $("#vt_right_col").removeClass("right-col-margin-18");
                  $("#vt_right_col").removeClass("right-col-margin-8");
                  $("#vt_right_col").removeClass("right-col-margin-0");
              } else {
                  $("#vt_right_col").addClass("right-col-margin-8");
                  $("#vt_right_col").removeClass("right-col-margin-75");
                  $("#vt_right_col").removeClass("right-col-margin-18");
                  $("#vt_right_col").removeClass("right-col-margin-0");
              }

            } else {

              $("#vt_right_col").addClass("right-col-margin-0");
              $("#vt_right_col").removeClass("right-col-margin-8");
              $("#vt_right_col").removeClass("right-col-margin-75");
              $("#vt_right_col").removeClass("right-col-margin-18");
            }

        }, 500);

    }
} //end rightColPos


//additional function to make sure right-col doesn't wrap when side-nav menu expanded
$(function(){
    $(".visible-side-nav .panel-heading").on("click", function(){
        rightColPos();
    })
});

/* function to resize department name / site name based on number of decks */
function sitenameFix() {
    if($(".department-name a").height() > 40){
        $(".department-name a").addClass("department-name16");
    } else {
        $(".department-name a").removeClass("department-name16");
    }
}

/**
* Reformats a telephone number with no dashes to have dashes
* @parameter the telephone number -- string
* @returns reformatted telephone number -- string
*/
function reformatTel(tel){

	var newTel = "";
	var telArray = [];
	if(tel.match(/^\d{3}-\d{3}-\d{4}$/)){
			newTel = tel;
	}
	// looks for extra <a> tag in iOS safari and also checks for proper formatting
	else if(tel.match(/^<a.*(\d{3}-\d{3}-\d{4})<\/a>$/)){
			newTel = tel;
	}
	// looks for extra <a> tag in iOS safari and reformats
	else if(tel.match(/^<a.*>(.*)<\/a>$/)){
		var telMatch = match[2];
		newTel = match[1]+reformatTel(telMatch)+match[3];
	}
	else{
		if(tel.length === 10){
			telArray = [tel.substring(0, 3), tel.substring(3, 6), tel.substring(6, tel.length)];
			newTel = telArray.join("-");
		}
		else if(tel.split("ext").length > 1){
			var splitTel = tel.split("ext");
			newTel = reformatTel(splitTel[0].trim()) + " ext" + splitTel[1].trim();
		}
		else{
			if(tel.split("/").length > 1){
				newTel = tel.split("/").join("-");
			}
			else if(tel.split(" ").length > 1){
				newTel = tel.split(" ").join("-");
			}
			else
				newTel = tel;
		}
	}

	return newTel;

}

// Jit <jit@vt.edu>: CMS-9214
// For a long breadcrumb heirarchy, shorten to just display 3
// with the rest as "..." and titles attributes (so that a hover can show it)
// If it is still too long, shorten more
$(document).ready(function(){
    // to get the width of text
    $.fn.textWidth = function(){
      var html_org = $(this).html();
      $(this).html('<span>' + html_org + '</span>');
      var width = $(this).find('span:first').width();
      $(this).html(html_org);
      return width;
    };
    
    // Max nav trail / bread crumbs items to fully display
    var navTrailDisplay = 3;
    // Width to determine if another level needs to be hidden
    var navTrailMaxWidth = $("#vt_access_main").width();
    
    var navTrailLength = $("#vt_navtrail a").length; 
    if( navTrailLength > navTrailDisplay){
        $("#vt_navtrail a").each(function(i, val){
            if(i < navTrailLength - navTrailDisplay ){
                var aText = $(val).text();
                $(val).attr("title", aText);
                $(val).html("...");
            }
        });
    }
    
    // if the navigation trail is still long, shorten again
    if(navTrailLength > 0){
        for(i=0; i < navTrailDisplay; i++){        
            if($("#vt_navtrail").textWidth() > navTrailMaxWidth){
                 var levelToShorten = i;
                 if(navTrailLength - navTrailDisplay > 0){
                     levelToShorten = (navTrailLength - navTrailDisplay) + i;
                 }
                var item = $("#vt_navtrail a").get(levelToShorten);
                var aText = $(item).text();
                $(item).attr("title", aText);
                $(item).html("...");
            }
        }
    }
    // overflow auto is defined in core.css and we don't want scroll bars to show
   $("#vt_navtrail").css("overflow-x", "inherit");
});