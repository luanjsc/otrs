﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){function q(a,e){function l(c){c=k.list[c];var d;c.equals(a.editable())||"true"==c.getAttribute("contenteditable")?(d=a.createRange(),d.selectNodeContents(c),d=d.select()):(d=a.getSelection(),d.selectElement(c));CKEDITOR.env.ie&&a.fire("selectionChange",{selection:d,path:new CKEDITOR.dom.elementPath(c)});a.focus()}function m(){n&&n.setHtml('\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e');delete k.list}var p=a.ui.spaceId("path"),n,k=a._.elementsPath,q=k.idBase;e.html+='\x3cspan id\x3d"'+
p+'_label" class\x3d"cke_voice_label"\x3e'+a.lang.elementspath.eleLabel+'\x3c/span\x3e\x3cspan id\x3d"'+p+'" class\x3d"cke_path" role\x3d"group" aria-labelledby\x3d"'+p+'_label"\x3e\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e\x3c/span\x3e';a.on("uiReady",function(){var c=a.ui.space("path");c&&a.focusManager.add(c,1)});k.onClick=l;var v=CKEDITOR.tools.addFunction(l),w=CKEDITOR.tools.addFunction(function(c,d){var g=k.idBase,b;d=new CKEDITOR.dom.event(d);b="rtl"==a.lang.dir;switch(d.getKeystroke()){case b?
39:37:case 9:return(b=CKEDITOR.document.getById(g+(c+1)))||(b=CKEDITOR.document.getById(g+"0")),b.focus(),!1;case b?37:39:case CKEDITOR.SHIFT+9:return(b=CKEDITOR.document.getById(g+(c-1)))||(b=CKEDITOR.document.getById(g+(k.list.length-1))),b.focus(),!1;case 27:return a.focus(),!1;case 13:case 32:return l(c),!1}return!0});a.on("selectionChange",function(){for(var c=[],d=k.list=[],g=[],b=k.filters,e=!0,l=a.elementPath().elements,f,u=l.length;u--;){var h=l[u],r=0;f=h.data("cke-display-name")?h.data("cke-display-name"):
h.data("cke-real-element-type")?h.data("cke-real-element-type"):h.getName();(e=h.hasAttribute("contenteditable")?"true"==h.getAttribute("contenteditable"):e)||h.hasAttribute("contenteditable")||(r=1);for(var t=0;t<b.length;t++){var m=b[t](h,f);if(!1===m){r=1;break}f=m||f}r||(d.unshift(h),g.unshift(f))}d=d.length;for(b=0;b<d;b++)f=g[b],e=a.lang.elementspath.eleTitle.replace(/%1/,f),f=x.output({id:q+b,label:e,text:f,jsTitle:"javascript:void('"+f+"')",index:b,keyDownFn:w,clickFn:v}),c.unshift(f);n||
(n=CKEDITOR.document.getById(p));g=n;g.setHtml(c.join("")+'\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e');a.fire("elementsPathUpdate",{space:g})});a.on("readOnly",m);a.on("contentDomUnload",m);a.addCommand("elementsPathFocus",y.toolbarFocus);a.setKeystroke(CKEDITOR.ALT+122,"elementsPathFocus")}var y={toolbarFocus:{editorFocus:!1,readOnly:1,exec:function(a){(a=CKEDITOR.document.getById(a._.elementsPath.idBase+"0"))&&a.focus(CKEDITOR.env.ie||CKEDITOR.env.air)}}},e="";CKEDITOR.env.gecko&&
CKEDITOR.env.mac&&(e+=' onkeypress\x3d"return false;"');CKEDITOR.env.gecko&&(e+=' onblur\x3d"this.style.cssText \x3d this.style.cssText;"');var x=CKEDITOR.addTemplate("pathItem",'\x3ca id\x3d"{id}" href\x3d"{jsTitle}" tabindex\x3d"-1" class\x3d"cke_path_item" title\x3d"{label}"'+e+' hidefocus\x3d"true"  onkeydown\x3d"return CKEDITOR.tools.callFunction({keyDownFn},{index}, event );" onclick\x3d"CKEDITOR.tools.callFunction({clickFn},{index}); return false;" role\x3d"button" aria-label\x3d"{label}"\x3e{text}\x3c/a\x3e');
CKEDITOR.plugins.add("elementspath",{lang:"af,ar,az,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",init:function(a){a._.elementsPath={idBase:"cke_elementspath_"+CKEDITOR.tools.getNextNumber()+"_",filters:[]};a.on("uiSpace",function(e){"bottom"==e.data.space&&q(a,e.data)})}})})();