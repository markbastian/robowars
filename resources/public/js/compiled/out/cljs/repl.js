// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23358_23372 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23359_23373 = null;
var count__23360_23374 = (0);
var i__23361_23375 = (0);
while(true){
if((i__23361_23375 < count__23360_23374)){
var f_23376 = cljs.core._nth.call(null,chunk__23359_23373,i__23361_23375);
cljs.core.println.call(null,"  ",f_23376);

var G__23377 = seq__23358_23372;
var G__23378 = chunk__23359_23373;
var G__23379 = count__23360_23374;
var G__23380 = (i__23361_23375 + (1));
seq__23358_23372 = G__23377;
chunk__23359_23373 = G__23378;
count__23360_23374 = G__23379;
i__23361_23375 = G__23380;
continue;
} else {
var temp__4425__auto___23381 = cljs.core.seq.call(null,seq__23358_23372);
if(temp__4425__auto___23381){
var seq__23358_23382__$1 = temp__4425__auto___23381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23358_23382__$1)){
var c__17608__auto___23383 = cljs.core.chunk_first.call(null,seq__23358_23382__$1);
var G__23384 = cljs.core.chunk_rest.call(null,seq__23358_23382__$1);
var G__23385 = c__17608__auto___23383;
var G__23386 = cljs.core.count.call(null,c__17608__auto___23383);
var G__23387 = (0);
seq__23358_23372 = G__23384;
chunk__23359_23373 = G__23385;
count__23360_23374 = G__23386;
i__23361_23375 = G__23387;
continue;
} else {
var f_23388 = cljs.core.first.call(null,seq__23358_23382__$1);
cljs.core.println.call(null,"  ",f_23388);

var G__23389 = cljs.core.next.call(null,seq__23358_23382__$1);
var G__23390 = null;
var G__23391 = (0);
var G__23392 = (0);
seq__23358_23372 = G__23389;
chunk__23359_23373 = G__23390;
count__23360_23374 = G__23391;
i__23361_23375 = G__23392;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23393 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16805__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23393);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23393)))?cljs.core.second.call(null,arglists_23393):arglists_23393));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23362 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23363 = null;
var count__23364 = (0);
var i__23365 = (0);
while(true){
if((i__23365 < count__23364)){
var vec__23366 = cljs.core._nth.call(null,chunk__23363,i__23365);
var name = cljs.core.nth.call(null,vec__23366,(0),null);
var map__23367 = cljs.core.nth.call(null,vec__23366,(1),null);
var map__23367__$1 = ((((!((map__23367 == null)))?((((map__23367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23367):map__23367);
var doc = cljs.core.get.call(null,map__23367__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23367__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23394 = seq__23362;
var G__23395 = chunk__23363;
var G__23396 = count__23364;
var G__23397 = (i__23365 + (1));
seq__23362 = G__23394;
chunk__23363 = G__23395;
count__23364 = G__23396;
i__23365 = G__23397;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23362);
if(temp__4425__auto__){
var seq__23362__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23362__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__23362__$1);
var G__23398 = cljs.core.chunk_rest.call(null,seq__23362__$1);
var G__23399 = c__17608__auto__;
var G__23400 = cljs.core.count.call(null,c__17608__auto__);
var G__23401 = (0);
seq__23362 = G__23398;
chunk__23363 = G__23399;
count__23364 = G__23400;
i__23365 = G__23401;
continue;
} else {
var vec__23369 = cljs.core.first.call(null,seq__23362__$1);
var name = cljs.core.nth.call(null,vec__23369,(0),null);
var map__23370 = cljs.core.nth.call(null,vec__23369,(1),null);
var map__23370__$1 = ((((!((map__23370 == null)))?((((map__23370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23370):map__23370);
var doc = cljs.core.get.call(null,map__23370__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23370__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23402 = cljs.core.next.call(null,seq__23362__$1);
var G__23403 = null;
var G__23404 = (0);
var G__23405 = (0);
seq__23362 = G__23402;
chunk__23363 = G__23403;
count__23364 = G__23404;
i__23365 = G__23405;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1456613032061