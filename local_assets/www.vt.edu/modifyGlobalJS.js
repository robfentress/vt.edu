//Insert utility menu
$(function() {
    $('body > .vt_skip_nav').after('<div class="util-nav-menu" role="navigation" aria-label="Virginia Tech Utility Menu"> <div class="nav-utilities col-sm-12 hidden-xs sub-nav"> <ul class="home-vt-toplinks sub-nav"> <li> <a href="http://www.vtnews.vt.edu"> News</a> <span class="toplink-pipe"> &nbsp;|</span> </li> <li> <a href="http://www.givingto.vt.edu"> Giving</a> <span class="toplink-pipe"> &nbsp;|</span> </li> <li> <a href="http://www.lib.vt.edu"> Libraries</a> <span class="toplink-pipe"> &nbsp;|</span> </li> <li> <a href="http://www.maps.vt.edu"> Maps &amp; Locations</a> <span class="toplink-pipe"> &nbsp;|</span> </li> <li> <a href="http://www.vt.edu/az_index.html"> A to Z Index</a> <span class="toplink-pipe"> &nbsp;|</span> </li> <li> <a href="http://www.hokiegear.com/?_s=bm-storefront&utm_source=vt_edu&utm_medium=referral">Shop</a> <span class="toplink-pipe"> &nbsp;|</span> </li> <li> <a href="http://vt.edu/status.html"> University Status</a> <span class="toplink-pipe"> &nbsp;|</span> </li> <li> <a href="https://hokiespa.vt.edu"> Hokie SPA</a> <span class="toplink-pipe"> &nbsp;|</span> </li> <li> <a href="https://canvas.vt.edu/"> Canvas</a> <span class="toplink-pipe"> &nbsp;|</span> </li> <li> <a href="https://my.vt.edu/"> My VT</a> <span class="toplink-pipe"> &nbsp;|</span> </li> <li> <a href="http://www.weremember.vt.edu"> <img alt="" class="vt-we-remember-ribbon" src="/global_assets/images/vt-2016-ribbon.svg"> We Remember</a> </li> </ul> </div> </div>');

    if(window.location.href.indexOf('/index') > 0 || window.location.href.indexOf('html') < 1) {
       $('.vt-home .flypanels-content').before('<div class="black-bar hidden-xs"> <div class="vt-info-bar"> <div class="vt-rawhtml vt-c-list-no-carats"><ul class="info-for-links" role="navigation" aria-label="Info for links"> <li> INFO FOR:&nbsp; </li> <li> <a href="http://www.vt.edu/apply-aid.html" onclick="_gaq.push([\'_trackEvent\', \'click\', \'Info For\', \'prospectives\']);">Prospective Students</a> <span class="toplink-pipe">&nbsp;|</span> </li> <li> <a href="http://graduateschool.vt.edu" onclick="_gaq.push([\'_trackEvent\', \'click\', \'Info For\', \'graduates\']);">Graduate Students</a> <span class="toplink-pipe">&nbsp;|</span> </li> <li> <a href="https://www.vt.edu/alumni.html" onclick="_gaq.push([\'_trackEvent\', \'click\', \'Info For\', \'alumni\']);">Alumni</a> <span class="toplink-pipe">&nbsp;|</span> </li> <li> <a href="https://www.vt.edu/family.html" onclick="_gaq.push([\'_trackEvent\', \'click\', \'Info For\', \'parents\']);">Parents &amp; Families</a> <span class="toplink-pipe">&nbsp;|</span> </li> <li> <a href="https://www.vt.edu/faculty_staff.html" onclick="_gaq.push([\'_trackEvent\', \'click\', \'Info For\', \'faculty\']);">Faculty &amp; Staff</a> <span class="toplink-pipe">&nbsp;|</span> </li> <li> <a href="https://www.vt.edu/business.html" onclick="_gaq.push([\'_trackEvent\', \'click\', \'Info For\', \'companies\']);">Business &amp; Industry</a> </li> </ul><ul class="social-icons" aria-label="follow us links"> <li> <a href="http://www.twitter.com/virginia_tech" target="_blank" onclick="_gaq.push([\'_trackEvent\', \'click\', \'Info For\', \'twitter\']);" title="Twitter" alt="follow us on twitter"> <span class="fa fa-twitter">&nbsp;</span> <span class="vt_skip">Twitter</span> </a> </li><li> <a href="http://www.facebook.com/virginiatech" target="_blank" onclick="_gaq.push([\'_trackEvent\', \'click\', \'Info For\', \'facebook\']);" title="Facebook" alt="follow us on facebook"> <span class="fa fa-facebook">&nbsp;</span> <span class="vt_skip">Facebook</span> </a> </li><li> <a href="http://www.instagram.com/virginia.tech" target="_blank" onclick="_gaq.push([\'_trackEvent\', \'click\', \'Info For\', \'instagram\']);" title="Instagram" alt="follow us on Instagram"> <span class="fa fa-instagram">&nbsp;</span> <span class="vt_skip">Instagram</span> </a> </li> </ul></div><!--/* vt-rawhtml */--> </div><!--/* info-bar */--> </div>');
    }
});

$(document).ready(function(){
    matchHeight();
    window.addEventListener('resize', matchHeight);

    //.vt-2col-8-4
    if($('.vt-multicolumn.vt-2col-8-4')) {
        $('.vt-multicolumn.vt-2col-8-4').each(function () {
            $(this).find('.row >div').removeClass('col-md-6 col-sm-6');
            $(this).find('.row >div:first-of-type').addClass('col-md-8');
            $(this).find('.row >div:last-of-type').addClass('col-md-4');
        });
    }


	/* --------------------------------------------------------

	ADMISSIONS -- Lee Hawkins

	----------------------------------------------------------*/
		if ((location.host == "vt.edu" || location.host == "author.ensemble.vt.edu") && location.href.indexOf("/admissions/") > -1) {
			$.getScript("https://www.vt.edu/local_assets/www.vt.edu/admissions/ugadmissJS.js");
		}

		/*if ((window.location.href == "vt.edu" || window.location.href == "author.ensemble.vt.edu") && window.location.href.indexOf("vt.edu/admissions/") > -1) {
			$.getScript("https://www.vt.edu/local_assets/www.vt.edu/admissions/ugadmissJS.js");
		}

		// Add page classes to majors pages (published only)
		if ((window.location.href == "vt.edu" || window.location.href == "author.ensemble.vt.edu") && window.location.href.indexOf("vt.edu/academics/majors") > -1) {
			$("body").addClass('ugmajors');
		}*/
		// Add page classes to majors pages (published only)
		if (location.href.indexOf("vt.edu/academics/majors") > -1) {
			$("body").addClass('ugmajors');
		}
	/*=========================================================*/

});

function matchHeight(){
  var firstCol = $('.vt-multicolumn-matchHeight').closest('.row').children().first();
  var lastCol = $('.vt-multicolumn-matchHeight');
  if(window.outerWidth > 767){
    lastCol.height(firstCol.height());
  }
  else{
    lastCol.css({"height": "auto"});
  }
}
