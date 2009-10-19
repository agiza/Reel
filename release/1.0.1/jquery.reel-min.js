/* Copyright (c) 2009 Petr Vostrel (http://www.pisi.cz/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.vostrel.cz/jquery/reel/
 * Version: 1.0.0
 * Updated: 2009-08-31
 *
 * Requires jQuery 1.3.x
 */
(function(b){b.fn.reel=function(c){var d={footage:6,frame:1,frames:36,horizontal:true,hotspot:undefined,hint:"",indicator:0,klass:"",loops:true,saves:false,sensitivity:20,spacing:0,stitched:undefined,suffix:"-reel"};return this.each(function(){var i=b(this),j=b.extend(d,c),h=b(document),f=function(k,l){i.data(k,l);i.trigger("store");return l},g=function(k){var l=i.data(k);i.trigger("recall");return l},e={init:function(){var n=i.attr("class"),r=i.attr("src"),q=r.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+j.suffix+".$2"),m={x:a(i.css("width")),y:a(i.css("height"))},p=b("<div>").attr("class",n).addClass("jquery-reel").addClass(j.klass),l=["mousewheel","disableTextSelect"],k=j.saves?{opacity:0}:{display:"none"};i=i.wrap(p).css(k).parent().css({width:m.x+"px",height:m.y+"px",backgroundImage:"url("+q+")"});for(var o in e){i.bind(o,e[o])}b.each(l,function(s,t){if(!b.fn[t]){b.fn[t]=function(){return this}}});i.trigger("setup")},setup:function(l){var k={x:a(i.css("width")),y:a(i.css("height"))};f("frames",j.frames);f("spacing",j.spacing);f("offset",i.offset());f("dimensions",k);i.trigger("start")},start:function(m){var k=j.hotspot?j.hotspot:i,l=g("dimensions");k.css("cursor","ew-resize").mouseenter(function(n){i.trigger("enter")}).mouseleave(function(n){i.trigger("leave")}).mousemove(function(n){i.trigger("over",[n.clientX,n.clientY])}).mousewheel(function(n,o){i.trigger("wheel",[o]);return false}).dblclick(function(n){i.trigger("animate")}).mousedown(function(n){i.trigger("down",[n.clientX,n.clientY])}).disableTextSelect();if(j.tooltip!=""){k.attr("title",j.tooltip)}if(j.indicator){i.append(b("<div>").addClass("indicator").css({width:j.indicator+"px",height:j.indicator+"px",top:(l.y-j.indicator)+"px",position:"relative",backgroundColor:"#000"}))}i.trigger("frameChange",j.frame)},animate:function(k){},down:function(n,k,p){var m=f("clicked",true),l=f("clicked_location",k),o=f("last_frame",f("clicked_on_frame",g("frame")));h.mousemove(function(q){i.trigger("drag",[q.clientX,q.clientY])}).mouseup(function(q){i.trigger("up")})},up:function(l){var k=f("clicked",false);h.unbind("mousemove mouseup")},drag:function(m,k,q){var l=g("clicked_location"),o=g("clicked_on_frame"),n=g("frames"),p=Math.round((l-k)/j.sensitivity),o=f("frame",o-p);i.trigger("frameChange")},frameChange:function(B,v){var v=!v?g("frame"):f("frame",v),D=g("last_frame"),u=g("frames"),C=g("dimensions"),o=g("spacing"),v=!j.loops&&v>u?u:v,v=!j.loops&&v<1?1:v,v=v-Math.floor(v/u)*u,v=f("last_frame",f("frame",v<1?u:v)),E=v-D,E=Math.abs(E)>10?0-E:E,m=f("reversed",E!=0?(E>0):g("reversed"));if(!j.stitched){var w=Math.floor(v/j.footage),l=v-w*j.footage-1,w=l==-1?w+l:w,l=l==-1?j.footage+l:l,z=j.horizontal?C.y:C.x,k=j.horizontal?C.x:C.y,t=-w*(o+z),r=-l*(o+k),s=Math.ceil(u/j.footage),n=s*z+(s-1)*o,t=m&&j.horizontal?t-n:t,r=m&&!j.horizontal?r-n:r,A=j.horizontal?r+"px "+t+"px":t+"px "+r+"px"}else{var p=j.stitched/u,t=v*p,r=0,A=t+"px 0"+r+"px"}var q=((C.x-j.indicator)/(u-1)*(v-1))+"px";i.css("backgroundPosition",A).find(".indicator").css("left",q)},wheel:function(l,p){var n=g("frame"),m=g("frames"),o=Math.ceil(Math.sqrt(Math.abs(p))),k=p<0?-o:o,n=f("frame",n-k);i.trigger("frameChange");return false}};i.ready(e.init)})};var a=function(c){if(typeof(c)!="string"){return c}return c.replace(/[^0-9]+/,"")-0}})(jQuery);