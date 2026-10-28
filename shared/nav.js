/* Arca site nav. To add a tool, add one line to TOOLS. Pages put <nav id="arcaNav" data-current="<id>"></nav> where the bar goes. */
(function(){
 var TOOLS=[
  {id:'load-planner',name:'Load Planner',href:'load-planner.html'},
  {id:'mawb-tracker',name:'MAWB Tracker',href:'mawb-tracker.html'}
 ];
 var el=document.getElementById('arcaNav');if(!el)return;
 var cur=el.getAttribute('data-current');
 // inside a Claude artifact there is no home page, so the brand is not a link there
 var linkHome=!(window.claude||/claude/.test(location.hostname));
 var brand='<span class="anav-word">Arca</span><span class="anav-sub">BioLogistics</span>';
 el.className='anav';el.setAttribute('aria-label','Arca tools');
 el.innerHTML='<div class="anav-in">'+(linkHome?'<a class="anav-brand" href="index.html" aria-label="Arca BioLogistics tools home">'+brand+'</a>':'<span class="anav-brand">'+brand+'</span>')+
  '<div class="anav-l">'+TOOLS.map(function(t){return '<a href="'+t.href+'"'+(t.id===cur?' aria-current="page"':'')+'>'+t.name+'</a>'}).join('')+'</div></div>';
})();
