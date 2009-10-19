/* Copyright (c) 2009 Petr Vostrel (http://www.pisi.cz/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.pisi.cz/jquery/reel/
 * Version: 1.0 RC
 * Updated: 2009-08-25
 *
 * Requires jQuery 1.3.x
 */
(function(b){b.fn.reel=function(c){var d={footage:6,frame:1,frames:36,horizontal:true,indicator:false,loops:true,panorama:false,save:false,spacing:0,suffix:"-sheet"};return this.each(function(){var i=b(this),j=b.extend(d,c),h=b(document),f=function(k,l){i.data(k,l);i.trigger("store");return l},g=function(k){var l=i.data(k);i.trigger("recall");return l},e={init:function(){var n=i.attr("class"),r=i.attr("src"),q=r.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+j.suffix+".$2"),m={x:a(i.css("width")),y:a(i.css("height"))},p=b("<div>").attr("class",n).addClass("jquery_reel"),l=["mousewheel","disableTextSelect"],k=j.save?{opacity:0}:{display:"none"};i=i.wrap(p).css(k).parent().css({width:m.x+"px",height:m.y+"px",cursor:"ew-resize",backgroundImage:"url("+q+")"});for(var o in e){i.bind(o,e[o])}b.each(l,function(s,t){if(!b.fn[t]){b.fn[t]=function(){return this}}});i.trigger("setup")},setup:function(l){var k={x:a(i.css("width")),y:a(i.css("height"))};f("frames",j.frames);f("spacing",j.spacing);f("offset",i.offset());f("dimensions",k);f("sensitivity",j.panorama?70:20);i.trigger("start")},start:function(k){i.mouseenter(function(l){i.trigger("enter")}).mouseleave(function(l){i.trigger("leave")}).mousemove(function(l){i.trigger("over",[l.clientX,l.clientY])}).mousewheel(function(l,m){i.trigger("wheel",[m]);return false}).mousedown(function(l){i.trigger("down",[l.clientX,l.clientY])}).disableTextSelect();if(j.indicator){i.append(b("<div>").addClass("indicator"))}i.trigger("frameChange",j.frame)},animate:function(k){log(k.type)},down:function(n,k,p){var m=f("clicked",true),l=f("clicked_location",k),o=f("clicked_on_frame",g("frame"));h.mousemove(function(q){i.trigger("drag",[q.clientX,q.clientY])}).mouseup(function(q){i.trigger("up")})},up:function(l){var k=f("clicked",false);h.unbind("mousemove mouseup")},drag:function(o,r,q){var s=g("clicked_location"),m=g("sensitivity"),l=g("clicked_on_frame"),p=g("frames"),k=Math.round((s-r)/m),n=f("reversed",k<0),l=f("frame",l-k);i.trigger("frameChange")},frameChange:function(s,n){var n=!n?g("frame"):f("frame",n),t=g("frames"),k=g("dimensions"),u=g("spacing"),p=g("reversed"),n=!j.loops&&n>t?t:n,n=!j.loops&&n<1?1:n,n=n-Math.floor(n/t)*t,n=f("frame",n<1?t:n),v=Math.floor(n/j.footage),q=n-v*j.footage-1,v=q==-1?v+q:v,q=q==-1?j.footage+q:q,r=j.horizontal?k.y:k.x,o=j.horizontal?k.x:k.y,z=-v*(u+r),w=-q*(u+o),B=Math.ceil(t/j.footage),l=B*r+(B-1)*u,z=p&&j.horizontal?z-l:z,w=p&&!j.horizontal?w-l:w,m=j.horizontal?w+"px "+z+"px":z+"px "+w+"px",A=(k.x/(t-1)*(n-1))+"px";i.css("backgroundPosition",m);i.find(".indicator").css("left",A)},wheel:function(m,q){var p=g("frame"),l=g("sensitivity"),o=g("frames"),q=Math.abs(q)>4?q/l/3:q,k=q<0?Math.floor(q):Math.ceil(q),n=f("reversed",k<0),p=f("frame",p-k);i.trigger("frameChange");return false}};i.ready(e.init)})};var a=function(c){if(typeof(c)!="string"){return c}return c.replace(/[^0-9]+/,"")-0}})(jQuery);