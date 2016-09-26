// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function reagent$impl$util$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function reagent$impl$util$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function reagent$impl$util$get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function reagent$impl$util$get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function reagent$impl$util$get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent$impl$util$reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function reagent$impl$util$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function reagent$impl$util$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__38033 = clojure.string.split.call(null,name_str,/-/);
var seq__38034 = cljs.core.seq.call(null,vec__38033);
var first__38035 = cljs.core.first.call(null,seq__38034);
var seq__38034__$1 = cljs.core.next.call(null,seq__38034);
var start = first__38035;
var parts = seq__38034__$1;
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__38037__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__26397__auto___38038 = self__.p;
if(cljs.core.truth_(or__26397__auto___38038)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__38037 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__38039__i = 0, G__38039__a = new Array(arguments.length -  1);
while (G__38039__i < G__38039__a.length) {G__38039__a[G__38039__i] = arguments[G__38039__i + 1]; ++G__38039__i;}
  a = new cljs.core.IndexedSeq(G__38039__a,0);
} 
return G__38037__delegate.call(this,self__,a);};
G__38037.cljs$lang$maxFixedArity = 1;
G__38037.cljs$lang$applyTo = (function (arglist__38040){
var self__ = cljs.core.first(arglist__38040);
var a = cljs.core.rest(arglist__38040);
return G__38037__delegate(self__,a);
});
G__38037.cljs$core$IFn$_invoke$arity$variadic = G__38037__delegate;
return G__38037;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args38036){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args38036)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__38041__delegate = function (a){
var _ = this;
var or__26397__auto___38042 = self__.p;
if(cljs.core.truth_(or__26397__auto___38042)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__38041 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__38043__i = 0, G__38043__a = new Array(arguments.length -  0);
while (G__38043__i < G__38043__a.length) {G__38043__a[G__38043__i] = arguments[G__38043__i + 0]; ++G__38043__i;}
  a = new cljs.core.IndexedSeq(G__38043__a,0);
} 
return G__38041__delegate.call(this,a);};
G__38041.cljs$lang$maxFixedArity = 0;
G__38041.cljs$lang$applyTo = (function (arglist__38044){
var a = cljs.core.seq(arglist__38044);
return G__38041__delegate(a);
});
G__38041.cljs$core$IFn$_invoke$arity$variadic = G__38041__delegate;
return G__38041;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__27049__auto__,writer__27050__auto__,opt__27051__auto__){
return cljs.core._write.call(null,writer__27050__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__6503__auto__)){
var c1 = temp__6503__auto__;
var temp__6503__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__6503__auto____$1)){
var c2 = temp__6503__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__6503__auto__)){
var s1 = temp__6503__auto__;
var temp__6503__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__6503__auto____$1)){
var s2 = temp__6503__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error("Assert failed: (map? p1)"));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function reagent$impl$util$clear_container(node){
var G__38046 = node;
if((G__38046 == null)){
return null;
} else {
return (G__38046["innerHTML"] = "");
}
});
reagent.impl.util.render_component = (function reagent$impl$util$render_component(comp,container,callback){
var rendered = cljs.core.volatile_BANG_.call(null,null);
try{var _STAR_always_update_STAR_38049 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return cljs.core.vreset_BANG_.call(null,rendered,(React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_38049,rendered){
return (function (){
var _STAR_always_update_STAR_38050 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38050;
}});})(_STAR_always_update_STAR_38049,rendered))
));
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38049;
}}finally {if(cljs.core.truth_(cljs.core.deref.call(null,rendered))){
} else {
reagent.impl.util.clear_container.call(null,container);
}
}});
reagent.impl.util.re_render_component = (function reagent$impl$util$re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function reagent$impl$util$unmount_component_at_node(container){
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function reagent$impl$util$force_update_all(){
var seq__38055_38059 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__38056_38060 = null;
var count__38057_38061 = (0);
var i__38058_38062 = (0);
while(true){
if((i__38058_38062 < count__38057_38061)){
var v_38063 = cljs.core._nth.call(null,chunk__38056_38060,i__38058_38062);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_38063);

var G__38064 = seq__38055_38059;
var G__38065 = chunk__38056_38060;
var G__38066 = count__38057_38061;
var G__38067 = (i__38058_38062 + (1));
seq__38055_38059 = G__38064;
chunk__38056_38060 = G__38065;
count__38057_38061 = G__38066;
i__38058_38062 = G__38067;
continue;
} else {
var temp__6503__auto___38068 = cljs.core.seq.call(null,seq__38055_38059);
if(temp__6503__auto___38068){
var seq__38055_38069__$1 = temp__6503__auto___38068;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38055_38069__$1)){
var c__27300__auto___38070 = cljs.core.chunk_first.call(null,seq__38055_38069__$1);
var G__38071 = cljs.core.chunk_rest.call(null,seq__38055_38069__$1);
var G__38072 = c__27300__auto___38070;
var G__38073 = cljs.core.count.call(null,c__27300__auto___38070);
var G__38074 = (0);
seq__38055_38059 = G__38071;
chunk__38056_38060 = G__38072;
count__38057_38061 = G__38073;
i__38058_38062 = G__38074;
continue;
} else {
var v_38075 = cljs.core.first.call(null,seq__38055_38069__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_38075);

var G__38076 = cljs.core.next.call(null,seq__38055_38069__$1);
var G__38077 = null;
var G__38078 = (0);
var G__38079 = (0);
seq__38055_38059 = G__38076;
chunk__38056_38060 = G__38077;
count__38057_38061 = G__38078;
i__38058_38062 = G__38079;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR_38081 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (comp["forceUpdate"])();
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38081;
}} else {
return (comp["forceUpdate"])();
}
});

//# sourceMappingURL=util.js.map?rel=1474693969660