// Compiled by ClojureScript 1.7.170 {}
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
figwheel.client.file_reloading.queued_file_reload;
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
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16805__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16805__auto__){
return or__16805__auto__;
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
var or__16805__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22334_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22334_SHARP_));
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
var seq__22339 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22340 = null;
var count__22341 = (0);
var i__22342 = (0);
while(true){
if((i__22342 < count__22341)){
var n = cljs.core._nth.call(null,chunk__22340,i__22342);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22343 = seq__22339;
var G__22344 = chunk__22340;
var G__22345 = count__22341;
var G__22346 = (i__22342 + (1));
seq__22339 = G__22343;
chunk__22340 = G__22344;
count__22341 = G__22345;
i__22342 = G__22346;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22339);
if(temp__4425__auto__){
var seq__22339__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22339__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__22339__$1);
var G__22347 = cljs.core.chunk_rest.call(null,seq__22339__$1);
var G__22348 = c__17608__auto__;
var G__22349 = cljs.core.count.call(null,c__17608__auto__);
var G__22350 = (0);
seq__22339 = G__22347;
chunk__22340 = G__22348;
count__22341 = G__22349;
i__22342 = G__22350;
continue;
} else {
var n = cljs.core.first.call(null,seq__22339__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22351 = cljs.core.next.call(null,seq__22339__$1);
var G__22352 = null;
var G__22353 = (0);
var G__22354 = (0);
seq__22339 = G__22351;
chunk__22340 = G__22352;
count__22341 = G__22353;
i__22342 = G__22354;
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

var seq__22393_22400 = cljs.core.seq.call(null,deps);
var chunk__22394_22401 = null;
var count__22395_22402 = (0);
var i__22396_22403 = (0);
while(true){
if((i__22396_22403 < count__22395_22402)){
var dep_22404 = cljs.core._nth.call(null,chunk__22394_22401,i__22396_22403);
topo_sort_helper_STAR_.call(null,dep_22404,(depth + (1)),state);

var G__22405 = seq__22393_22400;
var G__22406 = chunk__22394_22401;
var G__22407 = count__22395_22402;
var G__22408 = (i__22396_22403 + (1));
seq__22393_22400 = G__22405;
chunk__22394_22401 = G__22406;
count__22395_22402 = G__22407;
i__22396_22403 = G__22408;
continue;
} else {
var temp__4425__auto___22409 = cljs.core.seq.call(null,seq__22393_22400);
if(temp__4425__auto___22409){
var seq__22393_22410__$1 = temp__4425__auto___22409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22393_22410__$1)){
var c__17608__auto___22411 = cljs.core.chunk_first.call(null,seq__22393_22410__$1);
var G__22412 = cljs.core.chunk_rest.call(null,seq__22393_22410__$1);
var G__22413 = c__17608__auto___22411;
var G__22414 = cljs.core.count.call(null,c__17608__auto___22411);
var G__22415 = (0);
seq__22393_22400 = G__22412;
chunk__22394_22401 = G__22413;
count__22395_22402 = G__22414;
i__22396_22403 = G__22415;
continue;
} else {
var dep_22416 = cljs.core.first.call(null,seq__22393_22410__$1);
topo_sort_helper_STAR_.call(null,dep_22416,(depth + (1)),state);

var G__22417 = cljs.core.next.call(null,seq__22393_22410__$1);
var G__22418 = null;
var G__22419 = (0);
var G__22420 = (0);
seq__22393_22400 = G__22417;
chunk__22394_22401 = G__22418;
count__22395_22402 = G__22419;
i__22396_22403 = G__22420;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22397){
var vec__22399 = p__22397;
var x = cljs.core.nth.call(null,vec__22399,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22399,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22399,x,xs,get_deps__$1){
return (function (p1__22355_SHARP_){
return clojure.set.difference.call(null,p1__22355_SHARP_,x);
});})(vec__22399,x,xs,get_deps__$1))
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
var seq__22433 = cljs.core.seq.call(null,provides);
var chunk__22434 = null;
var count__22435 = (0);
var i__22436 = (0);
while(true){
if((i__22436 < count__22435)){
var prov = cljs.core._nth.call(null,chunk__22434,i__22436);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22437_22445 = cljs.core.seq.call(null,requires);
var chunk__22438_22446 = null;
var count__22439_22447 = (0);
var i__22440_22448 = (0);
while(true){
if((i__22440_22448 < count__22439_22447)){
var req_22449 = cljs.core._nth.call(null,chunk__22438_22446,i__22440_22448);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22449,prov);

var G__22450 = seq__22437_22445;
var G__22451 = chunk__22438_22446;
var G__22452 = count__22439_22447;
var G__22453 = (i__22440_22448 + (1));
seq__22437_22445 = G__22450;
chunk__22438_22446 = G__22451;
count__22439_22447 = G__22452;
i__22440_22448 = G__22453;
continue;
} else {
var temp__4425__auto___22454 = cljs.core.seq.call(null,seq__22437_22445);
if(temp__4425__auto___22454){
var seq__22437_22455__$1 = temp__4425__auto___22454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22437_22455__$1)){
var c__17608__auto___22456 = cljs.core.chunk_first.call(null,seq__22437_22455__$1);
var G__22457 = cljs.core.chunk_rest.call(null,seq__22437_22455__$1);
var G__22458 = c__17608__auto___22456;
var G__22459 = cljs.core.count.call(null,c__17608__auto___22456);
var G__22460 = (0);
seq__22437_22445 = G__22457;
chunk__22438_22446 = G__22458;
count__22439_22447 = G__22459;
i__22440_22448 = G__22460;
continue;
} else {
var req_22461 = cljs.core.first.call(null,seq__22437_22455__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22461,prov);

var G__22462 = cljs.core.next.call(null,seq__22437_22455__$1);
var G__22463 = null;
var G__22464 = (0);
var G__22465 = (0);
seq__22437_22445 = G__22462;
chunk__22438_22446 = G__22463;
count__22439_22447 = G__22464;
i__22440_22448 = G__22465;
continue;
}
} else {
}
}
break;
}

var G__22466 = seq__22433;
var G__22467 = chunk__22434;
var G__22468 = count__22435;
var G__22469 = (i__22436 + (1));
seq__22433 = G__22466;
chunk__22434 = G__22467;
count__22435 = G__22468;
i__22436 = G__22469;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22433);
if(temp__4425__auto__){
var seq__22433__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22433__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__22433__$1);
var G__22470 = cljs.core.chunk_rest.call(null,seq__22433__$1);
var G__22471 = c__17608__auto__;
var G__22472 = cljs.core.count.call(null,c__17608__auto__);
var G__22473 = (0);
seq__22433 = G__22470;
chunk__22434 = G__22471;
count__22435 = G__22472;
i__22436 = G__22473;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22433__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22441_22474 = cljs.core.seq.call(null,requires);
var chunk__22442_22475 = null;
var count__22443_22476 = (0);
var i__22444_22477 = (0);
while(true){
if((i__22444_22477 < count__22443_22476)){
var req_22478 = cljs.core._nth.call(null,chunk__22442_22475,i__22444_22477);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22478,prov);

var G__22479 = seq__22441_22474;
var G__22480 = chunk__22442_22475;
var G__22481 = count__22443_22476;
var G__22482 = (i__22444_22477 + (1));
seq__22441_22474 = G__22479;
chunk__22442_22475 = G__22480;
count__22443_22476 = G__22481;
i__22444_22477 = G__22482;
continue;
} else {
var temp__4425__auto___22483__$1 = cljs.core.seq.call(null,seq__22441_22474);
if(temp__4425__auto___22483__$1){
var seq__22441_22484__$1 = temp__4425__auto___22483__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22441_22484__$1)){
var c__17608__auto___22485 = cljs.core.chunk_first.call(null,seq__22441_22484__$1);
var G__22486 = cljs.core.chunk_rest.call(null,seq__22441_22484__$1);
var G__22487 = c__17608__auto___22485;
var G__22488 = cljs.core.count.call(null,c__17608__auto___22485);
var G__22489 = (0);
seq__22441_22474 = G__22486;
chunk__22442_22475 = G__22487;
count__22443_22476 = G__22488;
i__22444_22477 = G__22489;
continue;
} else {
var req_22490 = cljs.core.first.call(null,seq__22441_22484__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22490,prov);

var G__22491 = cljs.core.next.call(null,seq__22441_22484__$1);
var G__22492 = null;
var G__22493 = (0);
var G__22494 = (0);
seq__22441_22474 = G__22491;
chunk__22442_22475 = G__22492;
count__22443_22476 = G__22493;
i__22444_22477 = G__22494;
continue;
}
} else {
}
}
break;
}

var G__22495 = cljs.core.next.call(null,seq__22433__$1);
var G__22496 = null;
var G__22497 = (0);
var G__22498 = (0);
seq__22433 = G__22495;
chunk__22434 = G__22496;
count__22435 = G__22497;
i__22436 = G__22498;
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
var seq__22503_22507 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22504_22508 = null;
var count__22505_22509 = (0);
var i__22506_22510 = (0);
while(true){
if((i__22506_22510 < count__22505_22509)){
var ns_22511 = cljs.core._nth.call(null,chunk__22504_22508,i__22506_22510);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22511);

var G__22512 = seq__22503_22507;
var G__22513 = chunk__22504_22508;
var G__22514 = count__22505_22509;
var G__22515 = (i__22506_22510 + (1));
seq__22503_22507 = G__22512;
chunk__22504_22508 = G__22513;
count__22505_22509 = G__22514;
i__22506_22510 = G__22515;
continue;
} else {
var temp__4425__auto___22516 = cljs.core.seq.call(null,seq__22503_22507);
if(temp__4425__auto___22516){
var seq__22503_22517__$1 = temp__4425__auto___22516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22503_22517__$1)){
var c__17608__auto___22518 = cljs.core.chunk_first.call(null,seq__22503_22517__$1);
var G__22519 = cljs.core.chunk_rest.call(null,seq__22503_22517__$1);
var G__22520 = c__17608__auto___22518;
var G__22521 = cljs.core.count.call(null,c__17608__auto___22518);
var G__22522 = (0);
seq__22503_22507 = G__22519;
chunk__22504_22508 = G__22520;
count__22505_22509 = G__22521;
i__22506_22510 = G__22522;
continue;
} else {
var ns_22523 = cljs.core.first.call(null,seq__22503_22517__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22523);

var G__22524 = cljs.core.next.call(null,seq__22503_22517__$1);
var G__22525 = null;
var G__22526 = (0);
var G__22527 = (0);
seq__22503_22507 = G__22524;
chunk__22504_22508 = G__22525;
count__22505_22509 = G__22526;
i__22506_22510 = G__22527;
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
goog.require_figwheel_backup_ = (function (){var or__16805__auto__ = goog.require__;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
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
var G__22528__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22529__i = 0, G__22529__a = new Array(arguments.length -  0);
while (G__22529__i < G__22529__a.length) {G__22529__a[G__22529__i] = arguments[G__22529__i + 0]; ++G__22529__i;}
  args = new cljs.core.IndexedSeq(G__22529__a,0);
} 
return G__22528__delegate.call(this,args);};
G__22528.cljs$lang$maxFixedArity = 0;
G__22528.cljs$lang$applyTo = (function (arglist__22530){
var args = cljs.core.seq(arglist__22530);
return G__22528__delegate(args);
});
G__22528.cljs$core$IFn$_invoke$arity$variadic = G__22528__delegate;
return G__22528;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22532 = cljs.core._EQ_;
var expr__22533 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22532.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22533))){
var path_parts = ((function (pred__22532,expr__22533){
return (function (p1__22531_SHARP_){
return clojure.string.split.call(null,p1__22531_SHARP_,/[\/\\]/);
});})(pred__22532,expr__22533))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22532,expr__22533){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22535){if((e22535 instanceof Error)){
var e = e22535;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22535;

}
}})());
});
;})(path_parts,sep,root,pred__22532,expr__22533))
} else {
if(cljs.core.truth_(pred__22532.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22533))){
return ((function (pred__22532,expr__22533){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22532,expr__22533){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22532,expr__22533))
);

return deferred.addErrback(((function (deferred,pred__22532,expr__22533){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22532,expr__22533))
);
});
;})(pred__22532,expr__22533))
} else {
return ((function (pred__22532,expr__22533){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22532,expr__22533))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22536,callback){
var map__22539 = p__22536;
var map__22539__$1 = ((((!((map__22539 == null)))?((((map__22539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22539):map__22539);
var file_msg = map__22539__$1;
var request_url = cljs.core.get.call(null,map__22539__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22539,map__22539__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22539,map__22539__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto__){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto__){
return (function (state_22563){
var state_val_22564 = (state_22563[(1)]);
if((state_val_22564 === (7))){
var inst_22559 = (state_22563[(2)]);
var state_22563__$1 = state_22563;
var statearr_22565_22585 = state_22563__$1;
(statearr_22565_22585[(2)] = inst_22559);

(statearr_22565_22585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (1))){
var state_22563__$1 = state_22563;
var statearr_22566_22586 = state_22563__$1;
(statearr_22566_22586[(2)] = null);

(statearr_22566_22586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (4))){
var inst_22543 = (state_22563[(7)]);
var inst_22543__$1 = (state_22563[(2)]);
var state_22563__$1 = (function (){var statearr_22567 = state_22563;
(statearr_22567[(7)] = inst_22543__$1);

return statearr_22567;
})();
if(cljs.core.truth_(inst_22543__$1)){
var statearr_22568_22587 = state_22563__$1;
(statearr_22568_22587[(1)] = (5));

} else {
var statearr_22569_22588 = state_22563__$1;
(statearr_22569_22588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (6))){
var state_22563__$1 = state_22563;
var statearr_22570_22589 = state_22563__$1;
(statearr_22570_22589[(2)] = null);

(statearr_22570_22589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (3))){
var inst_22561 = (state_22563[(2)]);
var state_22563__$1 = state_22563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22563__$1,inst_22561);
} else {
if((state_val_22564 === (2))){
var state_22563__$1 = state_22563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22563__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22564 === (11))){
var inst_22555 = (state_22563[(2)]);
var state_22563__$1 = (function (){var statearr_22571 = state_22563;
(statearr_22571[(8)] = inst_22555);

return statearr_22571;
})();
var statearr_22572_22590 = state_22563__$1;
(statearr_22572_22590[(2)] = null);

(statearr_22572_22590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (9))){
var inst_22547 = (state_22563[(9)]);
var inst_22549 = (state_22563[(10)]);
var inst_22551 = inst_22549.call(null,inst_22547);
var state_22563__$1 = state_22563;
var statearr_22573_22591 = state_22563__$1;
(statearr_22573_22591[(2)] = inst_22551);

(statearr_22573_22591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (5))){
var inst_22543 = (state_22563[(7)]);
var inst_22545 = figwheel.client.file_reloading.blocking_load.call(null,inst_22543);
var state_22563__$1 = state_22563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22563__$1,(8),inst_22545);
} else {
if((state_val_22564 === (10))){
var inst_22547 = (state_22563[(9)]);
var inst_22553 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22547);
var state_22563__$1 = state_22563;
var statearr_22574_22592 = state_22563__$1;
(statearr_22574_22592[(2)] = inst_22553);

(statearr_22574_22592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22564 === (8))){
var inst_22549 = (state_22563[(10)]);
var inst_22543 = (state_22563[(7)]);
var inst_22547 = (state_22563[(2)]);
var inst_22548 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22549__$1 = cljs.core.get.call(null,inst_22548,inst_22543);
var state_22563__$1 = (function (){var statearr_22575 = state_22563;
(statearr_22575[(9)] = inst_22547);

(statearr_22575[(10)] = inst_22549__$1);

return statearr_22575;
})();
if(cljs.core.truth_(inst_22549__$1)){
var statearr_22576_22593 = state_22563__$1;
(statearr_22576_22593[(1)] = (9));

} else {
var statearr_22577_22594 = state_22563__$1;
(statearr_22577_22594[(1)] = (10));

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
});})(c__19465__auto__))
;
return ((function (switch__19353__auto__,c__19465__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19354__auto__ = null;
var figwheel$client$file_reloading$state_machine__19354__auto____0 = (function (){
var statearr_22581 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22581[(0)] = figwheel$client$file_reloading$state_machine__19354__auto__);

(statearr_22581[(1)] = (1));

return statearr_22581;
});
var figwheel$client$file_reloading$state_machine__19354__auto____1 = (function (state_22563){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_22563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e22582){if((e22582 instanceof Object)){
var ex__19357__auto__ = e22582;
var statearr_22583_22595 = state_22563;
(statearr_22583_22595[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22596 = state_22563;
state_22563 = G__22596;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19354__auto__ = function(state_22563){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19354__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19354__auto____1.call(this,state_22563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19354__auto____0;
figwheel$client$file_reloading$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19354__auto____1;
return figwheel$client$file_reloading$state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto__))
})();
var state__19467__auto__ = (function (){var statearr_22584 = f__19466__auto__.call(null);
(statearr_22584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto__);

return statearr_22584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto__))
);

return c__19465__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22597,callback){
var map__22600 = p__22597;
var map__22600__$1 = ((((!((map__22600 == null)))?((((map__22600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22600):map__22600);
var file_msg = map__22600__$1;
var namespace = cljs.core.get.call(null,map__22600__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22600,map__22600__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22600,map__22600__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22602){
var map__22605 = p__22602;
var map__22605__$1 = ((((!((map__22605 == null)))?((((map__22605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22605):map__22605);
var file_msg = map__22605__$1;
var namespace = cljs.core.get.call(null,map__22605__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16793__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16793__auto__){
var or__16805__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
var or__16805__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto____$1)){
return or__16805__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16793__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22607,callback){
var map__22610 = p__22607;
var map__22610__$1 = ((((!((map__22610 == null)))?((((map__22610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22610):map__22610);
var file_msg = map__22610__$1;
var request_url = cljs.core.get.call(null,map__22610__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22610__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19465__auto___22698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___22698,out){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___22698,out){
return (function (state_22680){
var state_val_22681 = (state_22680[(1)]);
if((state_val_22681 === (1))){
var inst_22658 = cljs.core.nth.call(null,files,(0),null);
var inst_22659 = cljs.core.nthnext.call(null,files,(1));
var inst_22660 = files;
var state_22680__$1 = (function (){var statearr_22682 = state_22680;
(statearr_22682[(7)] = inst_22659);

(statearr_22682[(8)] = inst_22660);

(statearr_22682[(9)] = inst_22658);

return statearr_22682;
})();
var statearr_22683_22699 = state_22680__$1;
(statearr_22683_22699[(2)] = null);

(statearr_22683_22699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (2))){
var inst_22660 = (state_22680[(8)]);
var inst_22663 = (state_22680[(10)]);
var inst_22663__$1 = cljs.core.nth.call(null,inst_22660,(0),null);
var inst_22664 = cljs.core.nthnext.call(null,inst_22660,(1));
var inst_22665 = (inst_22663__$1 == null);
var inst_22666 = cljs.core.not.call(null,inst_22665);
var state_22680__$1 = (function (){var statearr_22684 = state_22680;
(statearr_22684[(11)] = inst_22664);

(statearr_22684[(10)] = inst_22663__$1);

return statearr_22684;
})();
if(inst_22666){
var statearr_22685_22700 = state_22680__$1;
(statearr_22685_22700[(1)] = (4));

} else {
var statearr_22686_22701 = state_22680__$1;
(statearr_22686_22701[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (3))){
var inst_22678 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22680__$1,inst_22678);
} else {
if((state_val_22681 === (4))){
var inst_22663 = (state_22680[(10)]);
var inst_22668 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22663);
var state_22680__$1 = state_22680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22680__$1,(7),inst_22668);
} else {
if((state_val_22681 === (5))){
var inst_22674 = cljs.core.async.close_BANG_.call(null,out);
var state_22680__$1 = state_22680;
var statearr_22687_22702 = state_22680__$1;
(statearr_22687_22702[(2)] = inst_22674);

(statearr_22687_22702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (6))){
var inst_22676 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
var statearr_22688_22703 = state_22680__$1;
(statearr_22688_22703[(2)] = inst_22676);

(statearr_22688_22703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (7))){
var inst_22664 = (state_22680[(11)]);
var inst_22670 = (state_22680[(2)]);
var inst_22671 = cljs.core.async.put_BANG_.call(null,out,inst_22670);
var inst_22660 = inst_22664;
var state_22680__$1 = (function (){var statearr_22689 = state_22680;
(statearr_22689[(12)] = inst_22671);

(statearr_22689[(8)] = inst_22660);

return statearr_22689;
})();
var statearr_22690_22704 = state_22680__$1;
(statearr_22690_22704[(2)] = null);

(statearr_22690_22704[(1)] = (2));


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
});})(c__19465__auto___22698,out))
;
return ((function (switch__19353__auto__,c__19465__auto___22698,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19354__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19354__auto____0 = (function (){
var statearr_22694 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22694[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19354__auto__);

(statearr_22694[(1)] = (1));

return statearr_22694;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19354__auto____1 = (function (state_22680){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_22680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e22695){if((e22695 instanceof Object)){
var ex__19357__auto__ = e22695;
var statearr_22696_22705 = state_22680;
(statearr_22696_22705[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22706 = state_22680;
state_22680 = G__22706;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19354__auto__ = function(state_22680){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19354__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19354__auto____1.call(this,state_22680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19354__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19354__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___22698,out))
})();
var state__19467__auto__ = (function (){var statearr_22697 = f__19466__auto__.call(null);
(statearr_22697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___22698);

return statearr_22697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___22698,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22707,opts){
var map__22711 = p__22707;
var map__22711__$1 = ((((!((map__22711 == null)))?((((map__22711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22711):map__22711);
var eval_body__$1 = cljs.core.get.call(null,map__22711__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22711__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16793__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16793__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16793__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22713){var e = e22713;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22714_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22714_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
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
return cljs.core.map.call(null,(function (p__22719){
var vec__22720 = p__22719;
var k = cljs.core.nth.call(null,vec__22720,(0),null);
var v = cljs.core.nth.call(null,vec__22720,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22721){
var vec__22722 = p__22721;
var k = cljs.core.nth.call(null,vec__22722,(0),null);
var v = cljs.core.nth.call(null,vec__22722,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22726,p__22727){
var map__22974 = p__22726;
var map__22974__$1 = ((((!((map__22974 == null)))?((((map__22974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22974):map__22974);
var opts = map__22974__$1;
var before_jsload = cljs.core.get.call(null,map__22974__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22974__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22974__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22975 = p__22727;
var map__22975__$1 = ((((!((map__22975 == null)))?((((map__22975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22975):map__22975);
var msg = map__22975__$1;
var files = cljs.core.get.call(null,map__22975__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22975__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22975__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23128){
var state_val_23129 = (state_23128[(1)]);
if((state_val_23129 === (7))){
var inst_22992 = (state_23128[(7)]);
var inst_22991 = (state_23128[(8)]);
var inst_22990 = (state_23128[(9)]);
var inst_22989 = (state_23128[(10)]);
var inst_22997 = cljs.core._nth.call(null,inst_22990,inst_22992);
var inst_22998 = figwheel.client.file_reloading.eval_body.call(null,inst_22997,opts);
var inst_22999 = (inst_22992 + (1));
var tmp23130 = inst_22991;
var tmp23131 = inst_22990;
var tmp23132 = inst_22989;
var inst_22989__$1 = tmp23132;
var inst_22990__$1 = tmp23131;
var inst_22991__$1 = tmp23130;
var inst_22992__$1 = inst_22999;
var state_23128__$1 = (function (){var statearr_23133 = state_23128;
(statearr_23133[(7)] = inst_22992__$1);

(statearr_23133[(8)] = inst_22991__$1);

(statearr_23133[(9)] = inst_22990__$1);

(statearr_23133[(11)] = inst_22998);

(statearr_23133[(10)] = inst_22989__$1);

return statearr_23133;
})();
var statearr_23134_23220 = state_23128__$1;
(statearr_23134_23220[(2)] = null);

(statearr_23134_23220[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (20))){
var inst_23032 = (state_23128[(12)]);
var inst_23040 = figwheel.client.file_reloading.sort_files.call(null,inst_23032);
var state_23128__$1 = state_23128;
var statearr_23135_23221 = state_23128__$1;
(statearr_23135_23221[(2)] = inst_23040);

(statearr_23135_23221[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (27))){
var state_23128__$1 = state_23128;
var statearr_23136_23222 = state_23128__$1;
(statearr_23136_23222[(2)] = null);

(statearr_23136_23222[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (1))){
var inst_22981 = (state_23128[(13)]);
var inst_22978 = before_jsload.call(null,files);
var inst_22979 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22980 = (function (){return ((function (inst_22981,inst_22978,inst_22979,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22723_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22723_SHARP_);
});
;})(inst_22981,inst_22978,inst_22979,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22981__$1 = cljs.core.filter.call(null,inst_22980,files);
var inst_22982 = cljs.core.not_empty.call(null,inst_22981__$1);
var state_23128__$1 = (function (){var statearr_23137 = state_23128;
(statearr_23137[(13)] = inst_22981__$1);

(statearr_23137[(14)] = inst_22978);

(statearr_23137[(15)] = inst_22979);

return statearr_23137;
})();
if(cljs.core.truth_(inst_22982)){
var statearr_23138_23223 = state_23128__$1;
(statearr_23138_23223[(1)] = (2));

} else {
var statearr_23139_23224 = state_23128__$1;
(statearr_23139_23224[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (24))){
var state_23128__$1 = state_23128;
var statearr_23140_23225 = state_23128__$1;
(statearr_23140_23225[(2)] = null);

(statearr_23140_23225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (39))){
var inst_23082 = (state_23128[(16)]);
var state_23128__$1 = state_23128;
var statearr_23141_23226 = state_23128__$1;
(statearr_23141_23226[(2)] = inst_23082);

(statearr_23141_23226[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (46))){
var inst_23123 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
var statearr_23142_23227 = state_23128__$1;
(statearr_23142_23227[(2)] = inst_23123);

(statearr_23142_23227[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (4))){
var inst_23026 = (state_23128[(2)]);
var inst_23027 = cljs.core.List.EMPTY;
var inst_23028 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23027);
var inst_23029 = (function (){return ((function (inst_23026,inst_23027,inst_23028,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22724_SHARP_){
var and__16793__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22724_SHARP_);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22724_SHARP_));
} else {
return and__16793__auto__;
}
});
;})(inst_23026,inst_23027,inst_23028,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23030 = cljs.core.filter.call(null,inst_23029,files);
var inst_23031 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23032 = cljs.core.concat.call(null,inst_23030,inst_23031);
var state_23128__$1 = (function (){var statearr_23143 = state_23128;
(statearr_23143[(12)] = inst_23032);

(statearr_23143[(17)] = inst_23026);

(statearr_23143[(18)] = inst_23028);

return statearr_23143;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23144_23228 = state_23128__$1;
(statearr_23144_23228[(1)] = (16));

} else {
var statearr_23145_23229 = state_23128__$1;
(statearr_23145_23229[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (15))){
var inst_23016 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
var statearr_23146_23230 = state_23128__$1;
(statearr_23146_23230[(2)] = inst_23016);

(statearr_23146_23230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (21))){
var inst_23042 = (state_23128[(19)]);
var inst_23042__$1 = (state_23128[(2)]);
var inst_23043 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23042__$1);
var state_23128__$1 = (function (){var statearr_23147 = state_23128;
(statearr_23147[(19)] = inst_23042__$1);

return statearr_23147;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23128__$1,(22),inst_23043);
} else {
if((state_val_23129 === (31))){
var inst_23126 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23128__$1,inst_23126);
} else {
if((state_val_23129 === (32))){
var inst_23082 = (state_23128[(16)]);
var inst_23087 = inst_23082.cljs$lang$protocol_mask$partition0$;
var inst_23088 = (inst_23087 & (64));
var inst_23089 = inst_23082.cljs$core$ISeq$;
var inst_23090 = (inst_23088) || (inst_23089);
var state_23128__$1 = state_23128;
if(cljs.core.truth_(inst_23090)){
var statearr_23148_23231 = state_23128__$1;
(statearr_23148_23231[(1)] = (35));

} else {
var statearr_23149_23232 = state_23128__$1;
(statearr_23149_23232[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (40))){
var inst_23103 = (state_23128[(20)]);
var inst_23102 = (state_23128[(2)]);
var inst_23103__$1 = cljs.core.get.call(null,inst_23102,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23104 = cljs.core.get.call(null,inst_23102,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23105 = cljs.core.not_empty.call(null,inst_23103__$1);
var state_23128__$1 = (function (){var statearr_23150 = state_23128;
(statearr_23150[(21)] = inst_23104);

(statearr_23150[(20)] = inst_23103__$1);

return statearr_23150;
})();
if(cljs.core.truth_(inst_23105)){
var statearr_23151_23233 = state_23128__$1;
(statearr_23151_23233[(1)] = (41));

} else {
var statearr_23152_23234 = state_23128__$1;
(statearr_23152_23234[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (33))){
var state_23128__$1 = state_23128;
var statearr_23153_23235 = state_23128__$1;
(statearr_23153_23235[(2)] = false);

(statearr_23153_23235[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (13))){
var inst_23002 = (state_23128[(22)]);
var inst_23006 = cljs.core.chunk_first.call(null,inst_23002);
var inst_23007 = cljs.core.chunk_rest.call(null,inst_23002);
var inst_23008 = cljs.core.count.call(null,inst_23006);
var inst_22989 = inst_23007;
var inst_22990 = inst_23006;
var inst_22991 = inst_23008;
var inst_22992 = (0);
var state_23128__$1 = (function (){var statearr_23154 = state_23128;
(statearr_23154[(7)] = inst_22992);

(statearr_23154[(8)] = inst_22991);

(statearr_23154[(9)] = inst_22990);

(statearr_23154[(10)] = inst_22989);

return statearr_23154;
})();
var statearr_23155_23236 = state_23128__$1;
(statearr_23155_23236[(2)] = null);

(statearr_23155_23236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (22))){
var inst_23050 = (state_23128[(23)]);
var inst_23045 = (state_23128[(24)]);
var inst_23042 = (state_23128[(19)]);
var inst_23046 = (state_23128[(25)]);
var inst_23045__$1 = (state_23128[(2)]);
var inst_23046__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23045__$1);
var inst_23047 = (function (){var all_files = inst_23042;
var res_SINGLEQUOTE_ = inst_23045__$1;
var res = inst_23046__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23050,inst_23045,inst_23042,inst_23046,inst_23045__$1,inst_23046__$1,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22725_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22725_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23050,inst_23045,inst_23042,inst_23046,inst_23045__$1,inst_23046__$1,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23048 = cljs.core.filter.call(null,inst_23047,inst_23045__$1);
var inst_23049 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23050__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23049);
var inst_23051 = cljs.core.not_empty.call(null,inst_23050__$1);
var state_23128__$1 = (function (){var statearr_23156 = state_23128;
(statearr_23156[(23)] = inst_23050__$1);

(statearr_23156[(24)] = inst_23045__$1);

(statearr_23156[(26)] = inst_23048);

(statearr_23156[(25)] = inst_23046__$1);

return statearr_23156;
})();
if(cljs.core.truth_(inst_23051)){
var statearr_23157_23237 = state_23128__$1;
(statearr_23157_23237[(1)] = (23));

} else {
var statearr_23158_23238 = state_23128__$1;
(statearr_23158_23238[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (36))){
var state_23128__$1 = state_23128;
var statearr_23159_23239 = state_23128__$1;
(statearr_23159_23239[(2)] = false);

(statearr_23159_23239[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (41))){
var inst_23103 = (state_23128[(20)]);
var inst_23107 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23108 = cljs.core.map.call(null,inst_23107,inst_23103);
var inst_23109 = cljs.core.pr_str.call(null,inst_23108);
var inst_23110 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23109)].join('');
var inst_23111 = figwheel.client.utils.log.call(null,inst_23110);
var state_23128__$1 = state_23128;
var statearr_23160_23240 = state_23128__$1;
(statearr_23160_23240[(2)] = inst_23111);

(statearr_23160_23240[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (43))){
var inst_23104 = (state_23128[(21)]);
var inst_23114 = (state_23128[(2)]);
var inst_23115 = cljs.core.not_empty.call(null,inst_23104);
var state_23128__$1 = (function (){var statearr_23161 = state_23128;
(statearr_23161[(27)] = inst_23114);

return statearr_23161;
})();
if(cljs.core.truth_(inst_23115)){
var statearr_23162_23241 = state_23128__$1;
(statearr_23162_23241[(1)] = (44));

} else {
var statearr_23163_23242 = state_23128__$1;
(statearr_23163_23242[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (29))){
var inst_23050 = (state_23128[(23)]);
var inst_23045 = (state_23128[(24)]);
var inst_23042 = (state_23128[(19)]);
var inst_23082 = (state_23128[(16)]);
var inst_23048 = (state_23128[(26)]);
var inst_23046 = (state_23128[(25)]);
var inst_23078 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23081 = (function (){var all_files = inst_23042;
var res_SINGLEQUOTE_ = inst_23045;
var res = inst_23046;
var files_not_loaded = inst_23048;
var dependencies_that_loaded = inst_23050;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23050,inst_23045,inst_23042,inst_23082,inst_23048,inst_23046,inst_23078,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23080){
var map__23164 = p__23080;
var map__23164__$1 = ((((!((map__23164 == null)))?((((map__23164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23164):map__23164);
var namespace = cljs.core.get.call(null,map__23164__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23050,inst_23045,inst_23042,inst_23082,inst_23048,inst_23046,inst_23078,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23082__$1 = cljs.core.group_by.call(null,inst_23081,inst_23048);
var inst_23084 = (inst_23082__$1 == null);
var inst_23085 = cljs.core.not.call(null,inst_23084);
var state_23128__$1 = (function (){var statearr_23166 = state_23128;
(statearr_23166[(28)] = inst_23078);

(statearr_23166[(16)] = inst_23082__$1);

return statearr_23166;
})();
if(inst_23085){
var statearr_23167_23243 = state_23128__$1;
(statearr_23167_23243[(1)] = (32));

} else {
var statearr_23168_23244 = state_23128__$1;
(statearr_23168_23244[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (44))){
var inst_23104 = (state_23128[(21)]);
var inst_23117 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23104);
var inst_23118 = cljs.core.pr_str.call(null,inst_23117);
var inst_23119 = [cljs.core.str("not required: "),cljs.core.str(inst_23118)].join('');
var inst_23120 = figwheel.client.utils.log.call(null,inst_23119);
var state_23128__$1 = state_23128;
var statearr_23169_23245 = state_23128__$1;
(statearr_23169_23245[(2)] = inst_23120);

(statearr_23169_23245[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (6))){
var inst_23023 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
var statearr_23170_23246 = state_23128__$1;
(statearr_23170_23246[(2)] = inst_23023);

(statearr_23170_23246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (28))){
var inst_23048 = (state_23128[(26)]);
var inst_23075 = (state_23128[(2)]);
var inst_23076 = cljs.core.not_empty.call(null,inst_23048);
var state_23128__$1 = (function (){var statearr_23171 = state_23128;
(statearr_23171[(29)] = inst_23075);

return statearr_23171;
})();
if(cljs.core.truth_(inst_23076)){
var statearr_23172_23247 = state_23128__$1;
(statearr_23172_23247[(1)] = (29));

} else {
var statearr_23173_23248 = state_23128__$1;
(statearr_23173_23248[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (25))){
var inst_23046 = (state_23128[(25)]);
var inst_23062 = (state_23128[(2)]);
var inst_23063 = cljs.core.not_empty.call(null,inst_23046);
var state_23128__$1 = (function (){var statearr_23174 = state_23128;
(statearr_23174[(30)] = inst_23062);

return statearr_23174;
})();
if(cljs.core.truth_(inst_23063)){
var statearr_23175_23249 = state_23128__$1;
(statearr_23175_23249[(1)] = (26));

} else {
var statearr_23176_23250 = state_23128__$1;
(statearr_23176_23250[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (34))){
var inst_23097 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
if(cljs.core.truth_(inst_23097)){
var statearr_23177_23251 = state_23128__$1;
(statearr_23177_23251[(1)] = (38));

} else {
var statearr_23178_23252 = state_23128__$1;
(statearr_23178_23252[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (17))){
var state_23128__$1 = state_23128;
var statearr_23179_23253 = state_23128__$1;
(statearr_23179_23253[(2)] = recompile_dependents);

(statearr_23179_23253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (3))){
var state_23128__$1 = state_23128;
var statearr_23180_23254 = state_23128__$1;
(statearr_23180_23254[(2)] = null);

(statearr_23180_23254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (12))){
var inst_23019 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
var statearr_23181_23255 = state_23128__$1;
(statearr_23181_23255[(2)] = inst_23019);

(statearr_23181_23255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (2))){
var inst_22981 = (state_23128[(13)]);
var inst_22988 = cljs.core.seq.call(null,inst_22981);
var inst_22989 = inst_22988;
var inst_22990 = null;
var inst_22991 = (0);
var inst_22992 = (0);
var state_23128__$1 = (function (){var statearr_23182 = state_23128;
(statearr_23182[(7)] = inst_22992);

(statearr_23182[(8)] = inst_22991);

(statearr_23182[(9)] = inst_22990);

(statearr_23182[(10)] = inst_22989);

return statearr_23182;
})();
var statearr_23183_23256 = state_23128__$1;
(statearr_23183_23256[(2)] = null);

(statearr_23183_23256[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (23))){
var inst_23050 = (state_23128[(23)]);
var inst_23045 = (state_23128[(24)]);
var inst_23042 = (state_23128[(19)]);
var inst_23048 = (state_23128[(26)]);
var inst_23046 = (state_23128[(25)]);
var inst_23053 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23055 = (function (){var all_files = inst_23042;
var res_SINGLEQUOTE_ = inst_23045;
var res = inst_23046;
var files_not_loaded = inst_23048;
var dependencies_that_loaded = inst_23050;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23050,inst_23045,inst_23042,inst_23048,inst_23046,inst_23053,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23054){
var map__23184 = p__23054;
var map__23184__$1 = ((((!((map__23184 == null)))?((((map__23184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23184):map__23184);
var request_url = cljs.core.get.call(null,map__23184__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23050,inst_23045,inst_23042,inst_23048,inst_23046,inst_23053,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23056 = cljs.core.reverse.call(null,inst_23050);
var inst_23057 = cljs.core.map.call(null,inst_23055,inst_23056);
var inst_23058 = cljs.core.pr_str.call(null,inst_23057);
var inst_23059 = figwheel.client.utils.log.call(null,inst_23058);
var state_23128__$1 = (function (){var statearr_23186 = state_23128;
(statearr_23186[(31)] = inst_23053);

return statearr_23186;
})();
var statearr_23187_23257 = state_23128__$1;
(statearr_23187_23257[(2)] = inst_23059);

(statearr_23187_23257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (35))){
var state_23128__$1 = state_23128;
var statearr_23188_23258 = state_23128__$1;
(statearr_23188_23258[(2)] = true);

(statearr_23188_23258[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (19))){
var inst_23032 = (state_23128[(12)]);
var inst_23038 = figwheel.client.file_reloading.expand_files.call(null,inst_23032);
var state_23128__$1 = state_23128;
var statearr_23189_23259 = state_23128__$1;
(statearr_23189_23259[(2)] = inst_23038);

(statearr_23189_23259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (11))){
var state_23128__$1 = state_23128;
var statearr_23190_23260 = state_23128__$1;
(statearr_23190_23260[(2)] = null);

(statearr_23190_23260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (9))){
var inst_23021 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
var statearr_23191_23261 = state_23128__$1;
(statearr_23191_23261[(2)] = inst_23021);

(statearr_23191_23261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (5))){
var inst_22992 = (state_23128[(7)]);
var inst_22991 = (state_23128[(8)]);
var inst_22994 = (inst_22992 < inst_22991);
var inst_22995 = inst_22994;
var state_23128__$1 = state_23128;
if(cljs.core.truth_(inst_22995)){
var statearr_23192_23262 = state_23128__$1;
(statearr_23192_23262[(1)] = (7));

} else {
var statearr_23193_23263 = state_23128__$1;
(statearr_23193_23263[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (14))){
var inst_23002 = (state_23128[(22)]);
var inst_23011 = cljs.core.first.call(null,inst_23002);
var inst_23012 = figwheel.client.file_reloading.eval_body.call(null,inst_23011,opts);
var inst_23013 = cljs.core.next.call(null,inst_23002);
var inst_22989 = inst_23013;
var inst_22990 = null;
var inst_22991 = (0);
var inst_22992 = (0);
var state_23128__$1 = (function (){var statearr_23194 = state_23128;
(statearr_23194[(7)] = inst_22992);

(statearr_23194[(32)] = inst_23012);

(statearr_23194[(8)] = inst_22991);

(statearr_23194[(9)] = inst_22990);

(statearr_23194[(10)] = inst_22989);

return statearr_23194;
})();
var statearr_23195_23264 = state_23128__$1;
(statearr_23195_23264[(2)] = null);

(statearr_23195_23264[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (45))){
var state_23128__$1 = state_23128;
var statearr_23196_23265 = state_23128__$1;
(statearr_23196_23265[(2)] = null);

(statearr_23196_23265[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (26))){
var inst_23050 = (state_23128[(23)]);
var inst_23045 = (state_23128[(24)]);
var inst_23042 = (state_23128[(19)]);
var inst_23048 = (state_23128[(26)]);
var inst_23046 = (state_23128[(25)]);
var inst_23065 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23067 = (function (){var all_files = inst_23042;
var res_SINGLEQUOTE_ = inst_23045;
var res = inst_23046;
var files_not_loaded = inst_23048;
var dependencies_that_loaded = inst_23050;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23050,inst_23045,inst_23042,inst_23048,inst_23046,inst_23065,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23066){
var map__23197 = p__23066;
var map__23197__$1 = ((((!((map__23197 == null)))?((((map__23197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23197):map__23197);
var namespace = cljs.core.get.call(null,map__23197__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23197__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23050,inst_23045,inst_23042,inst_23048,inst_23046,inst_23065,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23068 = cljs.core.map.call(null,inst_23067,inst_23046);
var inst_23069 = cljs.core.pr_str.call(null,inst_23068);
var inst_23070 = figwheel.client.utils.log.call(null,inst_23069);
var inst_23071 = (function (){var all_files = inst_23042;
var res_SINGLEQUOTE_ = inst_23045;
var res = inst_23046;
var files_not_loaded = inst_23048;
var dependencies_that_loaded = inst_23050;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23050,inst_23045,inst_23042,inst_23048,inst_23046,inst_23065,inst_23067,inst_23068,inst_23069,inst_23070,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23050,inst_23045,inst_23042,inst_23048,inst_23046,inst_23065,inst_23067,inst_23068,inst_23069,inst_23070,state_val_23129,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23072 = setTimeout(inst_23071,(10));
var state_23128__$1 = (function (){var statearr_23199 = state_23128;
(statearr_23199[(33)] = inst_23070);

(statearr_23199[(34)] = inst_23065);

return statearr_23199;
})();
var statearr_23200_23266 = state_23128__$1;
(statearr_23200_23266[(2)] = inst_23072);

(statearr_23200_23266[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (16))){
var state_23128__$1 = state_23128;
var statearr_23201_23267 = state_23128__$1;
(statearr_23201_23267[(2)] = reload_dependents);

(statearr_23201_23267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (38))){
var inst_23082 = (state_23128[(16)]);
var inst_23099 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23082);
var state_23128__$1 = state_23128;
var statearr_23202_23268 = state_23128__$1;
(statearr_23202_23268[(2)] = inst_23099);

(statearr_23202_23268[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (30))){
var state_23128__$1 = state_23128;
var statearr_23203_23269 = state_23128__$1;
(statearr_23203_23269[(2)] = null);

(statearr_23203_23269[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (10))){
var inst_23002 = (state_23128[(22)]);
var inst_23004 = cljs.core.chunked_seq_QMARK_.call(null,inst_23002);
var state_23128__$1 = state_23128;
if(inst_23004){
var statearr_23204_23270 = state_23128__$1;
(statearr_23204_23270[(1)] = (13));

} else {
var statearr_23205_23271 = state_23128__$1;
(statearr_23205_23271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (18))){
var inst_23036 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
if(cljs.core.truth_(inst_23036)){
var statearr_23206_23272 = state_23128__$1;
(statearr_23206_23272[(1)] = (19));

} else {
var statearr_23207_23273 = state_23128__$1;
(statearr_23207_23273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (42))){
var state_23128__$1 = state_23128;
var statearr_23208_23274 = state_23128__$1;
(statearr_23208_23274[(2)] = null);

(statearr_23208_23274[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (37))){
var inst_23094 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
var statearr_23209_23275 = state_23128__$1;
(statearr_23209_23275[(2)] = inst_23094);

(statearr_23209_23275[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (8))){
var inst_23002 = (state_23128[(22)]);
var inst_22989 = (state_23128[(10)]);
var inst_23002__$1 = cljs.core.seq.call(null,inst_22989);
var state_23128__$1 = (function (){var statearr_23210 = state_23128;
(statearr_23210[(22)] = inst_23002__$1);

return statearr_23210;
})();
if(inst_23002__$1){
var statearr_23211_23276 = state_23128__$1;
(statearr_23211_23276[(1)] = (10));

} else {
var statearr_23212_23277 = state_23128__$1;
(statearr_23212_23277[(1)] = (11));

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
});})(c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19353__auto__,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19354__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19354__auto____0 = (function (){
var statearr_23216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23216[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19354__auto__);

(statearr_23216[(1)] = (1));

return statearr_23216;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19354__auto____1 = (function (state_23128){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_23128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e23217){if((e23217 instanceof Object)){
var ex__19357__auto__ = e23217;
var statearr_23218_23278 = state_23128;
(statearr_23218_23278[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23279 = state_23128;
state_23128 = G__23279;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19354__auto__ = function(state_23128){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19354__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19354__auto____1.call(this,state_23128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19354__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19354__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19467__auto__ = (function (){var statearr_23219 = f__19466__auto__.call(null);
(statearr_23219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto__);

return statearr_23219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto__,map__22974,map__22974__$1,opts,before_jsload,on_jsload,reload_dependents,map__22975,map__22975__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19465__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23282,link){
var map__23285 = p__23282;
var map__23285__$1 = ((((!((map__23285 == null)))?((((map__23285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23285):map__23285);
var file = cljs.core.get.call(null,map__23285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23285,map__23285__$1,file){
return (function (p1__23280_SHARP_,p2__23281_SHARP_){
if(cljs.core._EQ_.call(null,p1__23280_SHARP_,p2__23281_SHARP_)){
return p1__23280_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23285,map__23285__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23291){
var map__23292 = p__23291;
var map__23292__$1 = ((((!((map__23292 == null)))?((((map__23292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23292):map__23292);
var match_length = cljs.core.get.call(null,map__23292__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23292__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23287_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23287_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
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
var args23294 = [];
var len__17863__auto___23297 = arguments.length;
var i__17864__auto___23298 = (0);
while(true){
if((i__17864__auto___23298 < len__17863__auto___23297)){
args23294.push((arguments[i__17864__auto___23298]));

var G__23299 = (i__17864__auto___23298 + (1));
i__17864__auto___23298 = G__23299;
continue;
} else {
}
break;
}

var G__23296 = args23294.length;
switch (G__23296) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23294.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23301_SHARP_,p2__23302_SHARP_){
return cljs.core.assoc.call(null,p1__23301_SHARP_,cljs.core.get.call(null,p2__23302_SHARP_,key),p2__23302_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23303){
var map__23306 = p__23303;
var map__23306__$1 = ((((!((map__23306 == null)))?((((map__23306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23306):map__23306);
var f_data = map__23306__$1;
var file = cljs.core.get.call(null,map__23306__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23308,files_msg){
var map__23315 = p__23308;
var map__23315__$1 = ((((!((map__23315 == null)))?((((map__23315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23315):map__23315);
var opts = map__23315__$1;
var on_cssload = cljs.core.get.call(null,map__23315__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23317_23321 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23318_23322 = null;
var count__23319_23323 = (0);
var i__23320_23324 = (0);
while(true){
if((i__23320_23324 < count__23319_23323)){
var f_23325 = cljs.core._nth.call(null,chunk__23318_23322,i__23320_23324);
figwheel.client.file_reloading.reload_css_file.call(null,f_23325);

var G__23326 = seq__23317_23321;
var G__23327 = chunk__23318_23322;
var G__23328 = count__23319_23323;
var G__23329 = (i__23320_23324 + (1));
seq__23317_23321 = G__23326;
chunk__23318_23322 = G__23327;
count__23319_23323 = G__23328;
i__23320_23324 = G__23329;
continue;
} else {
var temp__4425__auto___23330 = cljs.core.seq.call(null,seq__23317_23321);
if(temp__4425__auto___23330){
var seq__23317_23331__$1 = temp__4425__auto___23330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23317_23331__$1)){
var c__17608__auto___23332 = cljs.core.chunk_first.call(null,seq__23317_23331__$1);
var G__23333 = cljs.core.chunk_rest.call(null,seq__23317_23331__$1);
var G__23334 = c__17608__auto___23332;
var G__23335 = cljs.core.count.call(null,c__17608__auto___23332);
var G__23336 = (0);
seq__23317_23321 = G__23333;
chunk__23318_23322 = G__23334;
count__23319_23323 = G__23335;
i__23320_23324 = G__23336;
continue;
} else {
var f_23337 = cljs.core.first.call(null,seq__23317_23331__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23337);

var G__23338 = cljs.core.next.call(null,seq__23317_23331__$1);
var G__23339 = null;
var G__23340 = (0);
var G__23341 = (0);
seq__23317_23321 = G__23338;
chunk__23318_23322 = G__23339;
count__23319_23323 = G__23340;
i__23320_23324 = G__23341;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23315,map__23315__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23315,map__23315__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1456613032004