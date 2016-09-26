// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26397__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26397__auto__){
return or__26397__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26397__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26397__auto__)){
return or__26397__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41451_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41451_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__41456 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41457 = null;
var count__41458 = (0);
var i__41459 = (0);
while(true){
if((i__41459 < count__41458)){
var n = cljs.core._nth.call(null,chunk__41457,i__41459);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41460 = seq__41456;
var G__41461 = chunk__41457;
var G__41462 = count__41458;
var G__41463 = (i__41459 + (1));
seq__41456 = G__41460;
chunk__41457 = G__41461;
count__41458 = G__41462;
i__41459 = G__41463;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__41456);
if(temp__6503__auto__){
var seq__41456__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41456__$1)){
var c__27300__auto__ = cljs.core.chunk_first.call(null,seq__41456__$1);
var G__41464 = cljs.core.chunk_rest.call(null,seq__41456__$1);
var G__41465 = c__27300__auto__;
var G__41466 = cljs.core.count.call(null,c__27300__auto__);
var G__41467 = (0);
seq__41456 = G__41464;
chunk__41457 = G__41465;
count__41458 = G__41466;
i__41459 = G__41467;
continue;
} else {
var n = cljs.core.first.call(null,seq__41456__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41468 = cljs.core.next.call(null,seq__41456__$1);
var G__41469 = null;
var G__41470 = (0);
var G__41471 = (0);
seq__41456 = G__41468;
chunk__41457 = G__41469;
count__41458 = G__41470;
i__41459 = G__41471;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__41522_41533 = cljs.core.seq.call(null,deps);
var chunk__41523_41534 = null;
var count__41524_41535 = (0);
var i__41525_41536 = (0);
while(true){
if((i__41525_41536 < count__41524_41535)){
var dep_41537 = cljs.core._nth.call(null,chunk__41523_41534,i__41525_41536);
topo_sort_helper_STAR_.call(null,dep_41537,(depth + (1)),state);

var G__41538 = seq__41522_41533;
var G__41539 = chunk__41523_41534;
var G__41540 = count__41524_41535;
var G__41541 = (i__41525_41536 + (1));
seq__41522_41533 = G__41538;
chunk__41523_41534 = G__41539;
count__41524_41535 = G__41540;
i__41525_41536 = G__41541;
continue;
} else {
var temp__6503__auto___41542 = cljs.core.seq.call(null,seq__41522_41533);
if(temp__6503__auto___41542){
var seq__41522_41543__$1 = temp__6503__auto___41542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41522_41543__$1)){
var c__27300__auto___41544 = cljs.core.chunk_first.call(null,seq__41522_41543__$1);
var G__41545 = cljs.core.chunk_rest.call(null,seq__41522_41543__$1);
var G__41546 = c__27300__auto___41544;
var G__41547 = cljs.core.count.call(null,c__27300__auto___41544);
var G__41548 = (0);
seq__41522_41533 = G__41545;
chunk__41523_41534 = G__41546;
count__41524_41535 = G__41547;
i__41525_41536 = G__41548;
continue;
} else {
var dep_41549 = cljs.core.first.call(null,seq__41522_41543__$1);
topo_sort_helper_STAR_.call(null,dep_41549,(depth + (1)),state);

var G__41550 = cljs.core.next.call(null,seq__41522_41543__$1);
var G__41551 = null;
var G__41552 = (0);
var G__41553 = (0);
seq__41522_41533 = G__41550;
chunk__41523_41534 = G__41551;
count__41524_41535 = G__41552;
i__41525_41536 = G__41553;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41526){
var vec__41530 = p__41526;
var seq__41531 = cljs.core.seq.call(null,vec__41530);
var first__41532 = cljs.core.first.call(null,seq__41531);
var seq__41531__$1 = cljs.core.next.call(null,seq__41531);
var x = first__41532;
var xs = seq__41531__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41530,seq__41531,first__41532,seq__41531__$1,x,xs,get_deps__$1){
return (function (p1__41472_SHARP_){
return clojure.set.difference.call(null,p1__41472_SHARP_,x);
});})(vec__41530,seq__41531,first__41532,seq__41531__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__41566 = cljs.core.seq.call(null,provides);
var chunk__41567 = null;
var count__41568 = (0);
var i__41569 = (0);
while(true){
if((i__41569 < count__41568)){
var prov = cljs.core._nth.call(null,chunk__41567,i__41569);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41570_41578 = cljs.core.seq.call(null,requires);
var chunk__41571_41579 = null;
var count__41572_41580 = (0);
var i__41573_41581 = (0);
while(true){
if((i__41573_41581 < count__41572_41580)){
var req_41582 = cljs.core._nth.call(null,chunk__41571_41579,i__41573_41581);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41582,prov);

var G__41583 = seq__41570_41578;
var G__41584 = chunk__41571_41579;
var G__41585 = count__41572_41580;
var G__41586 = (i__41573_41581 + (1));
seq__41570_41578 = G__41583;
chunk__41571_41579 = G__41584;
count__41572_41580 = G__41585;
i__41573_41581 = G__41586;
continue;
} else {
var temp__6503__auto___41587 = cljs.core.seq.call(null,seq__41570_41578);
if(temp__6503__auto___41587){
var seq__41570_41588__$1 = temp__6503__auto___41587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41570_41588__$1)){
var c__27300__auto___41589 = cljs.core.chunk_first.call(null,seq__41570_41588__$1);
var G__41590 = cljs.core.chunk_rest.call(null,seq__41570_41588__$1);
var G__41591 = c__27300__auto___41589;
var G__41592 = cljs.core.count.call(null,c__27300__auto___41589);
var G__41593 = (0);
seq__41570_41578 = G__41590;
chunk__41571_41579 = G__41591;
count__41572_41580 = G__41592;
i__41573_41581 = G__41593;
continue;
} else {
var req_41594 = cljs.core.first.call(null,seq__41570_41588__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41594,prov);

var G__41595 = cljs.core.next.call(null,seq__41570_41588__$1);
var G__41596 = null;
var G__41597 = (0);
var G__41598 = (0);
seq__41570_41578 = G__41595;
chunk__41571_41579 = G__41596;
count__41572_41580 = G__41597;
i__41573_41581 = G__41598;
continue;
}
} else {
}
}
break;
}

var G__41599 = seq__41566;
var G__41600 = chunk__41567;
var G__41601 = count__41568;
var G__41602 = (i__41569 + (1));
seq__41566 = G__41599;
chunk__41567 = G__41600;
count__41568 = G__41601;
i__41569 = G__41602;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__41566);
if(temp__6503__auto__){
var seq__41566__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41566__$1)){
var c__27300__auto__ = cljs.core.chunk_first.call(null,seq__41566__$1);
var G__41603 = cljs.core.chunk_rest.call(null,seq__41566__$1);
var G__41604 = c__27300__auto__;
var G__41605 = cljs.core.count.call(null,c__27300__auto__);
var G__41606 = (0);
seq__41566 = G__41603;
chunk__41567 = G__41604;
count__41568 = G__41605;
i__41569 = G__41606;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41566__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41574_41607 = cljs.core.seq.call(null,requires);
var chunk__41575_41608 = null;
var count__41576_41609 = (0);
var i__41577_41610 = (0);
while(true){
if((i__41577_41610 < count__41576_41609)){
var req_41611 = cljs.core._nth.call(null,chunk__41575_41608,i__41577_41610);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41611,prov);

var G__41612 = seq__41574_41607;
var G__41613 = chunk__41575_41608;
var G__41614 = count__41576_41609;
var G__41615 = (i__41577_41610 + (1));
seq__41574_41607 = G__41612;
chunk__41575_41608 = G__41613;
count__41576_41609 = G__41614;
i__41577_41610 = G__41615;
continue;
} else {
var temp__6503__auto___41616__$1 = cljs.core.seq.call(null,seq__41574_41607);
if(temp__6503__auto___41616__$1){
var seq__41574_41617__$1 = temp__6503__auto___41616__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41574_41617__$1)){
var c__27300__auto___41618 = cljs.core.chunk_first.call(null,seq__41574_41617__$1);
var G__41619 = cljs.core.chunk_rest.call(null,seq__41574_41617__$1);
var G__41620 = c__27300__auto___41618;
var G__41621 = cljs.core.count.call(null,c__27300__auto___41618);
var G__41622 = (0);
seq__41574_41607 = G__41619;
chunk__41575_41608 = G__41620;
count__41576_41609 = G__41621;
i__41577_41610 = G__41622;
continue;
} else {
var req_41623 = cljs.core.first.call(null,seq__41574_41617__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41623,prov);

var G__41624 = cljs.core.next.call(null,seq__41574_41617__$1);
var G__41625 = null;
var G__41626 = (0);
var G__41627 = (0);
seq__41574_41607 = G__41624;
chunk__41575_41608 = G__41625;
count__41576_41609 = G__41626;
i__41577_41610 = G__41627;
continue;
}
} else {
}
}
break;
}

var G__41628 = cljs.core.next.call(null,seq__41566__$1);
var G__41629 = null;
var G__41630 = (0);
var G__41631 = (0);
seq__41566 = G__41628;
chunk__41567 = G__41629;
count__41568 = G__41630;
i__41569 = G__41631;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__41636_41640 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41637_41641 = null;
var count__41638_41642 = (0);
var i__41639_41643 = (0);
while(true){
if((i__41639_41643 < count__41638_41642)){
var ns_41644 = cljs.core._nth.call(null,chunk__41637_41641,i__41639_41643);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41644);

var G__41645 = seq__41636_41640;
var G__41646 = chunk__41637_41641;
var G__41647 = count__41638_41642;
var G__41648 = (i__41639_41643 + (1));
seq__41636_41640 = G__41645;
chunk__41637_41641 = G__41646;
count__41638_41642 = G__41647;
i__41639_41643 = G__41648;
continue;
} else {
var temp__6503__auto___41649 = cljs.core.seq.call(null,seq__41636_41640);
if(temp__6503__auto___41649){
var seq__41636_41650__$1 = temp__6503__auto___41649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41636_41650__$1)){
var c__27300__auto___41651 = cljs.core.chunk_first.call(null,seq__41636_41650__$1);
var G__41652 = cljs.core.chunk_rest.call(null,seq__41636_41650__$1);
var G__41653 = c__27300__auto___41651;
var G__41654 = cljs.core.count.call(null,c__27300__auto___41651);
var G__41655 = (0);
seq__41636_41640 = G__41652;
chunk__41637_41641 = G__41653;
count__41638_41642 = G__41654;
i__41639_41643 = G__41655;
continue;
} else {
var ns_41656 = cljs.core.first.call(null,seq__41636_41650__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41656);

var G__41657 = cljs.core.next.call(null,seq__41636_41650__$1);
var G__41658 = null;
var G__41659 = (0);
var G__41660 = (0);
seq__41636_41640 = G__41657;
chunk__41637_41641 = G__41658;
count__41638_41642 = G__41659;
i__41639_41643 = G__41660;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26397__auto__ = goog.require__;
if(cljs.core.truth_(or__26397__auto__)){
return or__26397__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__41661__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41662__i = 0, G__41662__a = new Array(arguments.length -  0);
while (G__41662__i < G__41662__a.length) {G__41662__a[G__41662__i] = arguments[G__41662__i + 0]; ++G__41662__i;}
  args = new cljs.core.IndexedSeq(G__41662__a,0);
} 
return G__41661__delegate.call(this,args);};
G__41661.cljs$lang$maxFixedArity = 0;
G__41661.cljs$lang$applyTo = (function (arglist__41663){
var args = cljs.core.seq(arglist__41663);
return G__41661__delegate(args);
});
G__41661.cljs$core$IFn$_invoke$arity$variadic = G__41661__delegate;
return G__41661;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41665 = cljs.core._EQ_;
var expr__41666 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41665.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41666))){
var path_parts = ((function (pred__41665,expr__41666){
return (function (p1__41664_SHARP_){
return clojure.string.split.call(null,p1__41664_SHARP_,/[\/\\]/);
});})(pred__41665,expr__41666))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__41665,expr__41666){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41668){if((e41668 instanceof Error)){
var e = e41668;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41668;

}
}})());
});
;})(path_parts,sep,root,pred__41665,expr__41666))
} else {
if(cljs.core.truth_(pred__41665.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41666))){
return ((function (pred__41665,expr__41666){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__41665,expr__41666){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__41665,expr__41666))
);

return deferred.addErrback(((function (deferred,pred__41665,expr__41666){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__41665,expr__41666))
);
});
;})(pred__41665,expr__41666))
} else {
return ((function (pred__41665,expr__41666){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41665,expr__41666))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41669,callback){
var map__41672 = p__41669;
var map__41672__$1 = ((((!((map__41672 == null)))?((((map__41672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41672):map__41672);
var file_msg = map__41672__$1;
var request_url = cljs.core.get.call(null,map__41672__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__41672,map__41672__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41672,map__41672__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto__){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto__){
return (function (state_41696){
var state_val_41697 = (state_41696[(1)]);
if((state_val_41697 === (7))){
var inst_41692 = (state_41696[(2)]);
var state_41696__$1 = state_41696;
var statearr_41698_41718 = state_41696__$1;
(statearr_41698_41718[(2)] = inst_41692);

(statearr_41698_41718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (1))){
var state_41696__$1 = state_41696;
var statearr_41699_41719 = state_41696__$1;
(statearr_41699_41719[(2)] = null);

(statearr_41699_41719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (4))){
var inst_41676 = (state_41696[(7)]);
var inst_41676__$1 = (state_41696[(2)]);
var state_41696__$1 = (function (){var statearr_41700 = state_41696;
(statearr_41700[(7)] = inst_41676__$1);

return statearr_41700;
})();
if(cljs.core.truth_(inst_41676__$1)){
var statearr_41701_41720 = state_41696__$1;
(statearr_41701_41720[(1)] = (5));

} else {
var statearr_41702_41721 = state_41696__$1;
(statearr_41702_41721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (6))){
var state_41696__$1 = state_41696;
var statearr_41703_41722 = state_41696__$1;
(statearr_41703_41722[(2)] = null);

(statearr_41703_41722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (3))){
var inst_41694 = (state_41696[(2)]);
var state_41696__$1 = state_41696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41696__$1,inst_41694);
} else {
if((state_val_41697 === (2))){
var state_41696__$1 = state_41696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41696__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41697 === (11))){
var inst_41688 = (state_41696[(2)]);
var state_41696__$1 = (function (){var statearr_41704 = state_41696;
(statearr_41704[(8)] = inst_41688);

return statearr_41704;
})();
var statearr_41705_41723 = state_41696__$1;
(statearr_41705_41723[(2)] = null);

(statearr_41705_41723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (9))){
var inst_41682 = (state_41696[(9)]);
var inst_41680 = (state_41696[(10)]);
var inst_41684 = inst_41682.call(null,inst_41680);
var state_41696__$1 = state_41696;
var statearr_41706_41724 = state_41696__$1;
(statearr_41706_41724[(2)] = inst_41684);

(statearr_41706_41724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (5))){
var inst_41676 = (state_41696[(7)]);
var inst_41678 = figwheel.client.file_reloading.blocking_load.call(null,inst_41676);
var state_41696__$1 = state_41696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41696__$1,(8),inst_41678);
} else {
if((state_val_41697 === (10))){
var inst_41680 = (state_41696[(10)]);
var inst_41686 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41680);
var state_41696__$1 = state_41696;
var statearr_41707_41725 = state_41696__$1;
(statearr_41707_41725[(2)] = inst_41686);

(statearr_41707_41725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (8))){
var inst_41682 = (state_41696[(9)]);
var inst_41676 = (state_41696[(7)]);
var inst_41680 = (state_41696[(2)]);
var inst_41681 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41682__$1 = cljs.core.get.call(null,inst_41681,inst_41676);
var state_41696__$1 = (function (){var statearr_41708 = state_41696;
(statearr_41708[(9)] = inst_41682__$1);

(statearr_41708[(10)] = inst_41680);

return statearr_41708;
})();
if(cljs.core.truth_(inst_41682__$1)){
var statearr_41709_41726 = state_41696__$1;
(statearr_41709_41726[(1)] = (9));

} else {
var statearr_41710_41727 = state_41696__$1;
(statearr_41710_41727[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30370__auto__))
;
return ((function (switch__30303__auto__,c__30370__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30304__auto__ = null;
var figwheel$client$file_reloading$state_machine__30304__auto____0 = (function (){
var statearr_41714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41714[(0)] = figwheel$client$file_reloading$state_machine__30304__auto__);

(statearr_41714[(1)] = (1));

return statearr_41714;
});
var figwheel$client$file_reloading$state_machine__30304__auto____1 = (function (state_41696){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_41696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e41715){if((e41715 instanceof Object)){
var ex__30307__auto__ = e41715;
var statearr_41716_41728 = state_41696;
(statearr_41716_41728[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41729 = state_41696;
state_41696 = G__41729;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30304__auto__ = function(state_41696){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30304__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30304__auto____1.call(this,state_41696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30304__auto____0;
figwheel$client$file_reloading$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30304__auto____1;
return figwheel$client$file_reloading$state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto__))
})();
var state__30372__auto__ = (function (){var statearr_41717 = f__30371__auto__.call(null);
(statearr_41717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto__);

return statearr_41717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto__))
);

return c__30370__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41730,callback){
var map__41733 = p__41730;
var map__41733__$1 = ((((!((map__41733 == null)))?((((map__41733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41733):map__41733);
var file_msg = map__41733__$1;
var namespace = cljs.core.get.call(null,map__41733__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41733,map__41733__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41733,map__41733__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41735){
var map__41738 = p__41735;
var map__41738__$1 = ((((!((map__41738 == null)))?((((map__41738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41738):map__41738);
var file_msg = map__41738__$1;
var namespace = cljs.core.get.call(null,map__41738__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26385__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__26385__auto__){
var or__26397__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26397__auto__)){
return or__26397__auto__;
} else {
var or__26397__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26397__auto____$1)){
return or__26397__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26385__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41740,callback){
var map__41743 = p__41740;
var map__41743__$1 = ((((!((map__41743 == null)))?((((map__41743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41743):map__41743);
var file_msg = map__41743__$1;
var request_url = cljs.core.get.call(null,map__41743__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41743__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30370__auto___41847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___41847,out){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___41847,out){
return (function (state_41829){
var state_val_41830 = (state_41829[(1)]);
if((state_val_41830 === (1))){
var inst_41803 = cljs.core.seq.call(null,files);
var inst_41804 = cljs.core.first.call(null,inst_41803);
var inst_41805 = cljs.core.next.call(null,inst_41803);
var inst_41806 = files;
var state_41829__$1 = (function (){var statearr_41831 = state_41829;
(statearr_41831[(7)] = inst_41805);

(statearr_41831[(8)] = inst_41806);

(statearr_41831[(9)] = inst_41804);

return statearr_41831;
})();
var statearr_41832_41848 = state_41829__$1;
(statearr_41832_41848[(2)] = null);

(statearr_41832_41848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (2))){
var inst_41806 = (state_41829[(8)]);
var inst_41812 = (state_41829[(10)]);
var inst_41811 = cljs.core.seq.call(null,inst_41806);
var inst_41812__$1 = cljs.core.first.call(null,inst_41811);
var inst_41813 = cljs.core.next.call(null,inst_41811);
var inst_41814 = (inst_41812__$1 == null);
var inst_41815 = cljs.core.not.call(null,inst_41814);
var state_41829__$1 = (function (){var statearr_41833 = state_41829;
(statearr_41833[(11)] = inst_41813);

(statearr_41833[(10)] = inst_41812__$1);

return statearr_41833;
})();
if(inst_41815){
var statearr_41834_41849 = state_41829__$1;
(statearr_41834_41849[(1)] = (4));

} else {
var statearr_41835_41850 = state_41829__$1;
(statearr_41835_41850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (3))){
var inst_41827 = (state_41829[(2)]);
var state_41829__$1 = state_41829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41829__$1,inst_41827);
} else {
if((state_val_41830 === (4))){
var inst_41812 = (state_41829[(10)]);
var inst_41817 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41812);
var state_41829__$1 = state_41829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41829__$1,(7),inst_41817);
} else {
if((state_val_41830 === (5))){
var inst_41823 = cljs.core.async.close_BANG_.call(null,out);
var state_41829__$1 = state_41829;
var statearr_41836_41851 = state_41829__$1;
(statearr_41836_41851[(2)] = inst_41823);

(statearr_41836_41851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (6))){
var inst_41825 = (state_41829[(2)]);
var state_41829__$1 = state_41829;
var statearr_41837_41852 = state_41829__$1;
(statearr_41837_41852[(2)] = inst_41825);

(statearr_41837_41852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41830 === (7))){
var inst_41813 = (state_41829[(11)]);
var inst_41819 = (state_41829[(2)]);
var inst_41820 = cljs.core.async.put_BANG_.call(null,out,inst_41819);
var inst_41806 = inst_41813;
var state_41829__$1 = (function (){var statearr_41838 = state_41829;
(statearr_41838[(8)] = inst_41806);

(statearr_41838[(12)] = inst_41820);

return statearr_41838;
})();
var statearr_41839_41853 = state_41829__$1;
(statearr_41839_41853[(2)] = null);

(statearr_41839_41853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30370__auto___41847,out))
;
return ((function (switch__30303__auto__,c__30370__auto___41847,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30304__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30304__auto____0 = (function (){
var statearr_41843 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41843[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30304__auto__);

(statearr_41843[(1)] = (1));

return statearr_41843;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30304__auto____1 = (function (state_41829){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_41829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e41844){if((e41844 instanceof Object)){
var ex__30307__auto__ = e41844;
var statearr_41845_41854 = state_41829;
(statearr_41845_41854[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41855 = state_41829;
state_41829 = G__41855;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30304__auto__ = function(state_41829){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30304__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30304__auto____1.call(this,state_41829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30304__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30304__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___41847,out))
})();
var state__30372__auto__ = (function (){var statearr_41846 = f__30371__auto__.call(null);
(statearr_41846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___41847);

return statearr_41846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___41847,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41856,opts){
var map__41860 = p__41856;
var map__41860__$1 = ((((!((map__41860 == null)))?((((map__41860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41860):map__41860);
var eval_body__$1 = cljs.core.get.call(null,map__41860__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41860__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26385__auto__ = eval_body__$1;
if(cljs.core.truth_(and__26385__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__26385__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41862){var e = e41862;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6501__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__41863_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41863_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6501__auto__)){
var file_msg = temp__6501__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__41872){
var vec__41873 = p__41872;
var k = cljs.core.nth.call(null,vec__41873,(0),null);
var v = cljs.core.nth.call(null,vec__41873,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41876){
var vec__41877 = p__41876;
var k = cljs.core.nth.call(null,vec__41877,(0),null);
var v = cljs.core.nth.call(null,vec__41877,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41883,p__41884){
var map__42131 = p__41883;
var map__42131__$1 = ((((!((map__42131 == null)))?((((map__42131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42131):map__42131);
var opts = map__42131__$1;
var before_jsload = cljs.core.get.call(null,map__42131__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42131__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42131__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42132 = p__41884;
var map__42132__$1 = ((((!((map__42132 == null)))?((((map__42132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42132):map__42132);
var msg = map__42132__$1;
var files = cljs.core.get.call(null,map__42132__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42132__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42132__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42285){
var state_val_42286 = (state_42285[(1)]);
if((state_val_42286 === (7))){
var inst_42146 = (state_42285[(7)]);
var inst_42147 = (state_42285[(8)]);
var inst_42149 = (state_42285[(9)]);
var inst_42148 = (state_42285[(10)]);
var inst_42154 = cljs.core._nth.call(null,inst_42147,inst_42149);
var inst_42155 = figwheel.client.file_reloading.eval_body.call(null,inst_42154,opts);
var inst_42156 = (inst_42149 + (1));
var tmp42287 = inst_42146;
var tmp42288 = inst_42147;
var tmp42289 = inst_42148;
var inst_42146__$1 = tmp42287;
var inst_42147__$1 = tmp42288;
var inst_42148__$1 = tmp42289;
var inst_42149__$1 = inst_42156;
var state_42285__$1 = (function (){var statearr_42290 = state_42285;
(statearr_42290[(7)] = inst_42146__$1);

(statearr_42290[(8)] = inst_42147__$1);

(statearr_42290[(9)] = inst_42149__$1);

(statearr_42290[(11)] = inst_42155);

(statearr_42290[(10)] = inst_42148__$1);

return statearr_42290;
})();
var statearr_42291_42377 = state_42285__$1;
(statearr_42291_42377[(2)] = null);

(statearr_42291_42377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (20))){
var inst_42189 = (state_42285[(12)]);
var inst_42197 = figwheel.client.file_reloading.sort_files.call(null,inst_42189);
var state_42285__$1 = state_42285;
var statearr_42292_42378 = state_42285__$1;
(statearr_42292_42378[(2)] = inst_42197);

(statearr_42292_42378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (27))){
var state_42285__$1 = state_42285;
var statearr_42293_42379 = state_42285__$1;
(statearr_42293_42379[(2)] = null);

(statearr_42293_42379[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (1))){
var inst_42138 = (state_42285[(13)]);
var inst_42135 = before_jsload.call(null,files);
var inst_42136 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42137 = (function (){return ((function (inst_42138,inst_42135,inst_42136,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41880_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41880_SHARP_);
});
;})(inst_42138,inst_42135,inst_42136,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42138__$1 = cljs.core.filter.call(null,inst_42137,files);
var inst_42139 = cljs.core.not_empty.call(null,inst_42138__$1);
var state_42285__$1 = (function (){var statearr_42294 = state_42285;
(statearr_42294[(14)] = inst_42135);

(statearr_42294[(13)] = inst_42138__$1);

(statearr_42294[(15)] = inst_42136);

return statearr_42294;
})();
if(cljs.core.truth_(inst_42139)){
var statearr_42295_42380 = state_42285__$1;
(statearr_42295_42380[(1)] = (2));

} else {
var statearr_42296_42381 = state_42285__$1;
(statearr_42296_42381[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (24))){
var state_42285__$1 = state_42285;
var statearr_42297_42382 = state_42285__$1;
(statearr_42297_42382[(2)] = null);

(statearr_42297_42382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (39))){
var inst_42239 = (state_42285[(16)]);
var state_42285__$1 = state_42285;
var statearr_42298_42383 = state_42285__$1;
(statearr_42298_42383[(2)] = inst_42239);

(statearr_42298_42383[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (46))){
var inst_42280 = (state_42285[(2)]);
var state_42285__$1 = state_42285;
var statearr_42299_42384 = state_42285__$1;
(statearr_42299_42384[(2)] = inst_42280);

(statearr_42299_42384[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (4))){
var inst_42183 = (state_42285[(2)]);
var inst_42184 = cljs.core.List.EMPTY;
var inst_42185 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42184);
var inst_42186 = (function (){return ((function (inst_42183,inst_42184,inst_42185,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41881_SHARP_){
var and__26385__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41881_SHARP_);
if(cljs.core.truth_(and__26385__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41881_SHARP_));
} else {
return and__26385__auto__;
}
});
;})(inst_42183,inst_42184,inst_42185,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42187 = cljs.core.filter.call(null,inst_42186,files);
var inst_42188 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42189 = cljs.core.concat.call(null,inst_42187,inst_42188);
var state_42285__$1 = (function (){var statearr_42300 = state_42285;
(statearr_42300[(12)] = inst_42189);

(statearr_42300[(17)] = inst_42185);

(statearr_42300[(18)] = inst_42183);

return statearr_42300;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42301_42385 = state_42285__$1;
(statearr_42301_42385[(1)] = (16));

} else {
var statearr_42302_42386 = state_42285__$1;
(statearr_42302_42386[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (15))){
var inst_42173 = (state_42285[(2)]);
var state_42285__$1 = state_42285;
var statearr_42303_42387 = state_42285__$1;
(statearr_42303_42387[(2)] = inst_42173);

(statearr_42303_42387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (21))){
var inst_42199 = (state_42285[(19)]);
var inst_42199__$1 = (state_42285[(2)]);
var inst_42200 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42199__$1);
var state_42285__$1 = (function (){var statearr_42304 = state_42285;
(statearr_42304[(19)] = inst_42199__$1);

return statearr_42304;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42285__$1,(22),inst_42200);
} else {
if((state_val_42286 === (31))){
var inst_42283 = (state_42285[(2)]);
var state_42285__$1 = state_42285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42285__$1,inst_42283);
} else {
if((state_val_42286 === (32))){
var inst_42239 = (state_42285[(16)]);
var inst_42244 = inst_42239.cljs$lang$protocol_mask$partition0$;
var inst_42245 = (inst_42244 & (64));
var inst_42246 = inst_42239.cljs$core$ISeq$;
var inst_42247 = (inst_42245) || (inst_42246);
var state_42285__$1 = state_42285;
if(cljs.core.truth_(inst_42247)){
var statearr_42305_42388 = state_42285__$1;
(statearr_42305_42388[(1)] = (35));

} else {
var statearr_42306_42389 = state_42285__$1;
(statearr_42306_42389[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (40))){
var inst_42260 = (state_42285[(20)]);
var inst_42259 = (state_42285[(2)]);
var inst_42260__$1 = cljs.core.get.call(null,inst_42259,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42261 = cljs.core.get.call(null,inst_42259,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42262 = cljs.core.not_empty.call(null,inst_42260__$1);
var state_42285__$1 = (function (){var statearr_42307 = state_42285;
(statearr_42307[(21)] = inst_42261);

(statearr_42307[(20)] = inst_42260__$1);

return statearr_42307;
})();
if(cljs.core.truth_(inst_42262)){
var statearr_42308_42390 = state_42285__$1;
(statearr_42308_42390[(1)] = (41));

} else {
var statearr_42309_42391 = state_42285__$1;
(statearr_42309_42391[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (33))){
var state_42285__$1 = state_42285;
var statearr_42310_42392 = state_42285__$1;
(statearr_42310_42392[(2)] = false);

(statearr_42310_42392[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (13))){
var inst_42159 = (state_42285[(22)]);
var inst_42163 = cljs.core.chunk_first.call(null,inst_42159);
var inst_42164 = cljs.core.chunk_rest.call(null,inst_42159);
var inst_42165 = cljs.core.count.call(null,inst_42163);
var inst_42146 = inst_42164;
var inst_42147 = inst_42163;
var inst_42148 = inst_42165;
var inst_42149 = (0);
var state_42285__$1 = (function (){var statearr_42311 = state_42285;
(statearr_42311[(7)] = inst_42146);

(statearr_42311[(8)] = inst_42147);

(statearr_42311[(9)] = inst_42149);

(statearr_42311[(10)] = inst_42148);

return statearr_42311;
})();
var statearr_42312_42393 = state_42285__$1;
(statearr_42312_42393[(2)] = null);

(statearr_42312_42393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (22))){
var inst_42203 = (state_42285[(23)]);
var inst_42199 = (state_42285[(19)]);
var inst_42207 = (state_42285[(24)]);
var inst_42202 = (state_42285[(25)]);
var inst_42202__$1 = (state_42285[(2)]);
var inst_42203__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42202__$1);
var inst_42204 = (function (){var all_files = inst_42199;
var res_SINGLEQUOTE_ = inst_42202__$1;
var res = inst_42203__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42203,inst_42199,inst_42207,inst_42202,inst_42202__$1,inst_42203__$1,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41882_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41882_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42203,inst_42199,inst_42207,inst_42202,inst_42202__$1,inst_42203__$1,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42205 = cljs.core.filter.call(null,inst_42204,inst_42202__$1);
var inst_42206 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42207__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42206);
var inst_42208 = cljs.core.not_empty.call(null,inst_42207__$1);
var state_42285__$1 = (function (){var statearr_42313 = state_42285;
(statearr_42313[(23)] = inst_42203__$1);

(statearr_42313[(26)] = inst_42205);

(statearr_42313[(24)] = inst_42207__$1);

(statearr_42313[(25)] = inst_42202__$1);

return statearr_42313;
})();
if(cljs.core.truth_(inst_42208)){
var statearr_42314_42394 = state_42285__$1;
(statearr_42314_42394[(1)] = (23));

} else {
var statearr_42315_42395 = state_42285__$1;
(statearr_42315_42395[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (36))){
var state_42285__$1 = state_42285;
var statearr_42316_42396 = state_42285__$1;
(statearr_42316_42396[(2)] = false);

(statearr_42316_42396[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (41))){
var inst_42260 = (state_42285[(20)]);
var inst_42264 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42265 = cljs.core.map.call(null,inst_42264,inst_42260);
var inst_42266 = cljs.core.pr_str.call(null,inst_42265);
var inst_42267 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_42266)].join('');
var inst_42268 = figwheel.client.utils.log.call(null,inst_42267);
var state_42285__$1 = state_42285;
var statearr_42317_42397 = state_42285__$1;
(statearr_42317_42397[(2)] = inst_42268);

(statearr_42317_42397[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (43))){
var inst_42261 = (state_42285[(21)]);
var inst_42271 = (state_42285[(2)]);
var inst_42272 = cljs.core.not_empty.call(null,inst_42261);
var state_42285__$1 = (function (){var statearr_42318 = state_42285;
(statearr_42318[(27)] = inst_42271);

return statearr_42318;
})();
if(cljs.core.truth_(inst_42272)){
var statearr_42319_42398 = state_42285__$1;
(statearr_42319_42398[(1)] = (44));

} else {
var statearr_42320_42399 = state_42285__$1;
(statearr_42320_42399[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (29))){
var inst_42203 = (state_42285[(23)]);
var inst_42239 = (state_42285[(16)]);
var inst_42199 = (state_42285[(19)]);
var inst_42205 = (state_42285[(26)]);
var inst_42207 = (state_42285[(24)]);
var inst_42202 = (state_42285[(25)]);
var inst_42235 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42238 = (function (){var all_files = inst_42199;
var res_SINGLEQUOTE_ = inst_42202;
var res = inst_42203;
var files_not_loaded = inst_42205;
var dependencies_that_loaded = inst_42207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42203,inst_42239,inst_42199,inst_42205,inst_42207,inst_42202,inst_42235,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42237){
var map__42321 = p__42237;
var map__42321__$1 = ((((!((map__42321 == null)))?((((map__42321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42321):map__42321);
var namespace = cljs.core.get.call(null,map__42321__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42203,inst_42239,inst_42199,inst_42205,inst_42207,inst_42202,inst_42235,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42239__$1 = cljs.core.group_by.call(null,inst_42238,inst_42205);
var inst_42241 = (inst_42239__$1 == null);
var inst_42242 = cljs.core.not.call(null,inst_42241);
var state_42285__$1 = (function (){var statearr_42323 = state_42285;
(statearr_42323[(16)] = inst_42239__$1);

(statearr_42323[(28)] = inst_42235);

return statearr_42323;
})();
if(inst_42242){
var statearr_42324_42400 = state_42285__$1;
(statearr_42324_42400[(1)] = (32));

} else {
var statearr_42325_42401 = state_42285__$1;
(statearr_42325_42401[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (44))){
var inst_42261 = (state_42285[(21)]);
var inst_42274 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42261);
var inst_42275 = cljs.core.pr_str.call(null,inst_42274);
var inst_42276 = [cljs.core.str("not required: "),cljs.core.str(inst_42275)].join('');
var inst_42277 = figwheel.client.utils.log.call(null,inst_42276);
var state_42285__$1 = state_42285;
var statearr_42326_42402 = state_42285__$1;
(statearr_42326_42402[(2)] = inst_42277);

(statearr_42326_42402[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (6))){
var inst_42180 = (state_42285[(2)]);
var state_42285__$1 = state_42285;
var statearr_42327_42403 = state_42285__$1;
(statearr_42327_42403[(2)] = inst_42180);

(statearr_42327_42403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (28))){
var inst_42205 = (state_42285[(26)]);
var inst_42232 = (state_42285[(2)]);
var inst_42233 = cljs.core.not_empty.call(null,inst_42205);
var state_42285__$1 = (function (){var statearr_42328 = state_42285;
(statearr_42328[(29)] = inst_42232);

return statearr_42328;
})();
if(cljs.core.truth_(inst_42233)){
var statearr_42329_42404 = state_42285__$1;
(statearr_42329_42404[(1)] = (29));

} else {
var statearr_42330_42405 = state_42285__$1;
(statearr_42330_42405[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (25))){
var inst_42203 = (state_42285[(23)]);
var inst_42219 = (state_42285[(2)]);
var inst_42220 = cljs.core.not_empty.call(null,inst_42203);
var state_42285__$1 = (function (){var statearr_42331 = state_42285;
(statearr_42331[(30)] = inst_42219);

return statearr_42331;
})();
if(cljs.core.truth_(inst_42220)){
var statearr_42332_42406 = state_42285__$1;
(statearr_42332_42406[(1)] = (26));

} else {
var statearr_42333_42407 = state_42285__$1;
(statearr_42333_42407[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (34))){
var inst_42254 = (state_42285[(2)]);
var state_42285__$1 = state_42285;
if(cljs.core.truth_(inst_42254)){
var statearr_42334_42408 = state_42285__$1;
(statearr_42334_42408[(1)] = (38));

} else {
var statearr_42335_42409 = state_42285__$1;
(statearr_42335_42409[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (17))){
var state_42285__$1 = state_42285;
var statearr_42336_42410 = state_42285__$1;
(statearr_42336_42410[(2)] = recompile_dependents);

(statearr_42336_42410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (3))){
var state_42285__$1 = state_42285;
var statearr_42337_42411 = state_42285__$1;
(statearr_42337_42411[(2)] = null);

(statearr_42337_42411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (12))){
var inst_42176 = (state_42285[(2)]);
var state_42285__$1 = state_42285;
var statearr_42338_42412 = state_42285__$1;
(statearr_42338_42412[(2)] = inst_42176);

(statearr_42338_42412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (2))){
var inst_42138 = (state_42285[(13)]);
var inst_42145 = cljs.core.seq.call(null,inst_42138);
var inst_42146 = inst_42145;
var inst_42147 = null;
var inst_42148 = (0);
var inst_42149 = (0);
var state_42285__$1 = (function (){var statearr_42339 = state_42285;
(statearr_42339[(7)] = inst_42146);

(statearr_42339[(8)] = inst_42147);

(statearr_42339[(9)] = inst_42149);

(statearr_42339[(10)] = inst_42148);

return statearr_42339;
})();
var statearr_42340_42413 = state_42285__$1;
(statearr_42340_42413[(2)] = null);

(statearr_42340_42413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (23))){
var inst_42203 = (state_42285[(23)]);
var inst_42199 = (state_42285[(19)]);
var inst_42205 = (state_42285[(26)]);
var inst_42207 = (state_42285[(24)]);
var inst_42202 = (state_42285[(25)]);
var inst_42210 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42212 = (function (){var all_files = inst_42199;
var res_SINGLEQUOTE_ = inst_42202;
var res = inst_42203;
var files_not_loaded = inst_42205;
var dependencies_that_loaded = inst_42207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42203,inst_42199,inst_42205,inst_42207,inst_42202,inst_42210,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42211){
var map__42341 = p__42211;
var map__42341__$1 = ((((!((map__42341 == null)))?((((map__42341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42341):map__42341);
var request_url = cljs.core.get.call(null,map__42341__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42203,inst_42199,inst_42205,inst_42207,inst_42202,inst_42210,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42213 = cljs.core.reverse.call(null,inst_42207);
var inst_42214 = cljs.core.map.call(null,inst_42212,inst_42213);
var inst_42215 = cljs.core.pr_str.call(null,inst_42214);
var inst_42216 = figwheel.client.utils.log.call(null,inst_42215);
var state_42285__$1 = (function (){var statearr_42343 = state_42285;
(statearr_42343[(31)] = inst_42210);

return statearr_42343;
})();
var statearr_42344_42414 = state_42285__$1;
(statearr_42344_42414[(2)] = inst_42216);

(statearr_42344_42414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (35))){
var state_42285__$1 = state_42285;
var statearr_42345_42415 = state_42285__$1;
(statearr_42345_42415[(2)] = true);

(statearr_42345_42415[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (19))){
var inst_42189 = (state_42285[(12)]);
var inst_42195 = figwheel.client.file_reloading.expand_files.call(null,inst_42189);
var state_42285__$1 = state_42285;
var statearr_42346_42416 = state_42285__$1;
(statearr_42346_42416[(2)] = inst_42195);

(statearr_42346_42416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (11))){
var state_42285__$1 = state_42285;
var statearr_42347_42417 = state_42285__$1;
(statearr_42347_42417[(2)] = null);

(statearr_42347_42417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (9))){
var inst_42178 = (state_42285[(2)]);
var state_42285__$1 = state_42285;
var statearr_42348_42418 = state_42285__$1;
(statearr_42348_42418[(2)] = inst_42178);

(statearr_42348_42418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (5))){
var inst_42149 = (state_42285[(9)]);
var inst_42148 = (state_42285[(10)]);
var inst_42151 = (inst_42149 < inst_42148);
var inst_42152 = inst_42151;
var state_42285__$1 = state_42285;
if(cljs.core.truth_(inst_42152)){
var statearr_42349_42419 = state_42285__$1;
(statearr_42349_42419[(1)] = (7));

} else {
var statearr_42350_42420 = state_42285__$1;
(statearr_42350_42420[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (14))){
var inst_42159 = (state_42285[(22)]);
var inst_42168 = cljs.core.first.call(null,inst_42159);
var inst_42169 = figwheel.client.file_reloading.eval_body.call(null,inst_42168,opts);
var inst_42170 = cljs.core.next.call(null,inst_42159);
var inst_42146 = inst_42170;
var inst_42147 = null;
var inst_42148 = (0);
var inst_42149 = (0);
var state_42285__$1 = (function (){var statearr_42351 = state_42285;
(statearr_42351[(7)] = inst_42146);

(statearr_42351[(8)] = inst_42147);

(statearr_42351[(32)] = inst_42169);

(statearr_42351[(9)] = inst_42149);

(statearr_42351[(10)] = inst_42148);

return statearr_42351;
})();
var statearr_42352_42421 = state_42285__$1;
(statearr_42352_42421[(2)] = null);

(statearr_42352_42421[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (45))){
var state_42285__$1 = state_42285;
var statearr_42353_42422 = state_42285__$1;
(statearr_42353_42422[(2)] = null);

(statearr_42353_42422[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (26))){
var inst_42203 = (state_42285[(23)]);
var inst_42199 = (state_42285[(19)]);
var inst_42205 = (state_42285[(26)]);
var inst_42207 = (state_42285[(24)]);
var inst_42202 = (state_42285[(25)]);
var inst_42222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42224 = (function (){var all_files = inst_42199;
var res_SINGLEQUOTE_ = inst_42202;
var res = inst_42203;
var files_not_loaded = inst_42205;
var dependencies_that_loaded = inst_42207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42203,inst_42199,inst_42205,inst_42207,inst_42202,inst_42222,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42223){
var map__42354 = p__42223;
var map__42354__$1 = ((((!((map__42354 == null)))?((((map__42354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42354):map__42354);
var namespace = cljs.core.get.call(null,map__42354__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42354__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42203,inst_42199,inst_42205,inst_42207,inst_42202,inst_42222,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42225 = cljs.core.map.call(null,inst_42224,inst_42203);
var inst_42226 = cljs.core.pr_str.call(null,inst_42225);
var inst_42227 = figwheel.client.utils.log.call(null,inst_42226);
var inst_42228 = (function (){var all_files = inst_42199;
var res_SINGLEQUOTE_ = inst_42202;
var res = inst_42203;
var files_not_loaded = inst_42205;
var dependencies_that_loaded = inst_42207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42203,inst_42199,inst_42205,inst_42207,inst_42202,inst_42222,inst_42224,inst_42225,inst_42226,inst_42227,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42203,inst_42199,inst_42205,inst_42207,inst_42202,inst_42222,inst_42224,inst_42225,inst_42226,inst_42227,state_val_42286,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42229 = setTimeout(inst_42228,(10));
var state_42285__$1 = (function (){var statearr_42356 = state_42285;
(statearr_42356[(33)] = inst_42227);

(statearr_42356[(34)] = inst_42222);

return statearr_42356;
})();
var statearr_42357_42423 = state_42285__$1;
(statearr_42357_42423[(2)] = inst_42229);

(statearr_42357_42423[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (16))){
var state_42285__$1 = state_42285;
var statearr_42358_42424 = state_42285__$1;
(statearr_42358_42424[(2)] = reload_dependents);

(statearr_42358_42424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (38))){
var inst_42239 = (state_42285[(16)]);
var inst_42256 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42239);
var state_42285__$1 = state_42285;
var statearr_42359_42425 = state_42285__$1;
(statearr_42359_42425[(2)] = inst_42256);

(statearr_42359_42425[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (30))){
var state_42285__$1 = state_42285;
var statearr_42360_42426 = state_42285__$1;
(statearr_42360_42426[(2)] = null);

(statearr_42360_42426[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (10))){
var inst_42159 = (state_42285[(22)]);
var inst_42161 = cljs.core.chunked_seq_QMARK_.call(null,inst_42159);
var state_42285__$1 = state_42285;
if(inst_42161){
var statearr_42361_42427 = state_42285__$1;
(statearr_42361_42427[(1)] = (13));

} else {
var statearr_42362_42428 = state_42285__$1;
(statearr_42362_42428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (18))){
var inst_42193 = (state_42285[(2)]);
var state_42285__$1 = state_42285;
if(cljs.core.truth_(inst_42193)){
var statearr_42363_42429 = state_42285__$1;
(statearr_42363_42429[(1)] = (19));

} else {
var statearr_42364_42430 = state_42285__$1;
(statearr_42364_42430[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (42))){
var state_42285__$1 = state_42285;
var statearr_42365_42431 = state_42285__$1;
(statearr_42365_42431[(2)] = null);

(statearr_42365_42431[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (37))){
var inst_42251 = (state_42285[(2)]);
var state_42285__$1 = state_42285;
var statearr_42366_42432 = state_42285__$1;
(statearr_42366_42432[(2)] = inst_42251);

(statearr_42366_42432[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42286 === (8))){
var inst_42146 = (state_42285[(7)]);
var inst_42159 = (state_42285[(22)]);
var inst_42159__$1 = cljs.core.seq.call(null,inst_42146);
var state_42285__$1 = (function (){var statearr_42367 = state_42285;
(statearr_42367[(22)] = inst_42159__$1);

return statearr_42367;
})();
if(inst_42159__$1){
var statearr_42368_42433 = state_42285__$1;
(statearr_42368_42433[(1)] = (10));

} else {
var statearr_42369_42434 = state_42285__$1;
(statearr_42369_42434[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30303__auto__,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30304__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30304__auto____0 = (function (){
var statearr_42373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42373[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30304__auto__);

(statearr_42373[(1)] = (1));

return statearr_42373;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30304__auto____1 = (function (state_42285){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_42285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e42374){if((e42374 instanceof Object)){
var ex__30307__auto__ = e42374;
var statearr_42375_42435 = state_42285;
(statearr_42375_42435[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42436 = state_42285;
state_42285 = G__42436;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30304__auto__ = function(state_42285){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30304__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30304__auto____1.call(this,state_42285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30304__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30304__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30372__auto__ = (function (){var statearr_42376 = f__30371__auto__.call(null);
(statearr_42376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto__);

return statearr_42376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto__,map__42131,map__42131__$1,opts,before_jsload,on_jsload,reload_dependents,map__42132,map__42132__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30370__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42439,link){
var map__42442 = p__42439;
var map__42442__$1 = ((((!((map__42442 == null)))?((((map__42442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42442):map__42442);
var file = cljs.core.get.call(null,map__42442__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = link.href;
if(cljs.core.truth_(temp__6503__auto__)){
var link_href = temp__6503__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6503__auto__,map__42442,map__42442__$1,file){
return (function (p1__42437_SHARP_,p2__42438_SHARP_){
if(cljs.core._EQ_.call(null,p1__42437_SHARP_,p2__42438_SHARP_)){
return p1__42437_SHARP_;
} else {
return false;
}
});})(link_href,temp__6503__auto__,map__42442,map__42442__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6503__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42448){
var map__42449 = p__42448;
var map__42449__$1 = ((((!((map__42449 == null)))?((((map__42449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42449):map__42449);
var match_length = cljs.core.get.call(null,map__42449__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42449__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42444_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42444_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6503__auto__)){
var res = temp__6503__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args42451 = [];
var len__27580__auto___42454 = arguments.length;
var i__27581__auto___42455 = (0);
while(true){
if((i__27581__auto___42455 < len__27580__auto___42454)){
args42451.push((arguments[i__27581__auto___42455]));

var G__42456 = (i__27581__auto___42455 + (1));
i__27581__auto___42455 = G__42456;
continue;
} else {
}
break;
}

var G__42453 = args42451.length;
switch (G__42453) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42451.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42458_SHARP_,p2__42459_SHARP_){
return cljs.core.assoc.call(null,p1__42458_SHARP_,cljs.core.get.call(null,p2__42459_SHARP_,key),p2__42459_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__42460){
var map__42463 = p__42460;
var map__42463__$1 = ((((!((map__42463 == null)))?((((map__42463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42463):map__42463);
var f_data = map__42463__$1;
var file = cljs.core.get.call(null,map__42463__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6503__auto__)){
var link = temp__6503__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42465,p__42466){
var map__42475 = p__42465;
var map__42475__$1 = ((((!((map__42475 == null)))?((((map__42475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42475):map__42475);
var opts = map__42475__$1;
var on_cssload = cljs.core.get.call(null,map__42475__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42476 = p__42466;
var map__42476__$1 = ((((!((map__42476 == null)))?((((map__42476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42476):map__42476);
var files_msg = map__42476__$1;
var files = cljs.core.get.call(null,map__42476__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__42479_42483 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__42480_42484 = null;
var count__42481_42485 = (0);
var i__42482_42486 = (0);
while(true){
if((i__42482_42486 < count__42481_42485)){
var f_42487 = cljs.core._nth.call(null,chunk__42480_42484,i__42482_42486);
figwheel.client.file_reloading.reload_css_file.call(null,f_42487);

var G__42488 = seq__42479_42483;
var G__42489 = chunk__42480_42484;
var G__42490 = count__42481_42485;
var G__42491 = (i__42482_42486 + (1));
seq__42479_42483 = G__42488;
chunk__42480_42484 = G__42489;
count__42481_42485 = G__42490;
i__42482_42486 = G__42491;
continue;
} else {
var temp__6503__auto___42492 = cljs.core.seq.call(null,seq__42479_42483);
if(temp__6503__auto___42492){
var seq__42479_42493__$1 = temp__6503__auto___42492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42479_42493__$1)){
var c__27300__auto___42494 = cljs.core.chunk_first.call(null,seq__42479_42493__$1);
var G__42495 = cljs.core.chunk_rest.call(null,seq__42479_42493__$1);
var G__42496 = c__27300__auto___42494;
var G__42497 = cljs.core.count.call(null,c__27300__auto___42494);
var G__42498 = (0);
seq__42479_42483 = G__42495;
chunk__42480_42484 = G__42496;
count__42481_42485 = G__42497;
i__42482_42486 = G__42498;
continue;
} else {
var f_42499 = cljs.core.first.call(null,seq__42479_42493__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_42499);

var G__42500 = cljs.core.next.call(null,seq__42479_42493__$1);
var G__42501 = null;
var G__42502 = (0);
var G__42503 = (0);
seq__42479_42483 = G__42500;
chunk__42480_42484 = G__42501;
count__42481_42485 = G__42502;
i__42482_42486 = G__42503;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__42475,map__42475__$1,opts,on_cssload,map__42476,map__42476__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__42475,map__42475__$1,opts,on_cssload,map__42476,map__42476__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1474693971402