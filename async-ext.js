function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return"";}var myCookie=getCookie("cookiePreference");if(myCookie==""){alertify.confirm('<article><h3 style="text-indent:30px;"><img width="32px" height="32px" src="./images/icons/cookie-32x32.png" alt="image icône d\'un cookie"> Protection des données (cookies) :</h3><section style="text-indent:10px;"> - Un cookie pour sauvegarder vos préférences en matière de cookie (RGPD) ;</section><br><section style="text-indent:10px;"> - Des cookies pour Google Analytics</section></article>',function(){alertify.success('Accepted');setCookie("cookiePreference",1,365);location.reload();},function(){alertify.error('Declined');setCookie("cookiePreference",0,365);location.reload();}).set({labels:{ok:'Accept',cancel:'Decline'},padding:false});}
if(myCookie=="0"){window['ga-disable-UA-45860209-2']=true;}
if(myCookie=="1"){window['ga-disable-UA-45860209-2']=false;}
if(myCookie!=""){var elmt=document.getElementById("AMPLongShortPresentation");elmt.style.display="none";var lgdp=document.getElementById("iframeLGDP");
if(typeof getAllUrlParams().title !="undefined" && typeof page_sommaire !="undefined"){
	lgdp.setAttribute("src","./PDFjs/web/viewer.html?file=../../Le-Guide-d-un-Pilote.pdf&title="+getAllUrlParams().title+"&page="+page_sommaire);
}
else{
	lgdp.setAttribute("src","./PDFjs/web/viewer.html?file=../../Le-Guide-d-un-Pilote.pdf");
}
lgdp.style.display="inherit";}
window.addEventListener('load',function(e){window.applicationCache.addEventListener('updateready',function(e){if(window.applicationCache.status==window.applicationCache.UPDATEREADY){alertify.confirm('La nouvelle version du site est disponible.',function(){alertify.success('Accepted');}).set('onok',function(closeEvent){alertify.success('Ok');});}else{}},false);},false);window.showPatchNote=function(){alertify.confirm('<iframe src="./patch-note.html" title="Patch Note" width="100%" height="300" frameborder="0" marginheight="0" marginwidth="0"></iframe>');}
window.functionTitle=function(x){alertify.minimalDialog||alertify.dialog(x,function(){return{main:function(content){this.setContent(content);}};});alertify.minimalDialog("Minimal button-less dialog.");};