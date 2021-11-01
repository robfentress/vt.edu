$(function(){
	// load admissions js
		if ((location.host == "vt.edu" || location.host == "author.ensemble.vt.edu") && location.href.indexOf("/admissions/") > -1) {
			$.getScript("https://www.vt.edu/local_assets/www.vt.edu/admissions/ugadmissJS_body.js");
		}

		/*if ((location.href == "vt.edu" || location.href == "author.ensemble.vt.edu") && location.href.indexOf("vt.edu/admissions/") > -1) {
			$.getScript("https://www.vt.edu/local_assets/www.vt.edu/admissions/ugadmissJS_body.js");
		}*/
});