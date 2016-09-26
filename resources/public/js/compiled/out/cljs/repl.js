// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37906){
var map__37931 = p__37906;
var map__37931__$1 = ((((!((map__37931 == null)))?((((map__37931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37931):map__37931);
var m = map__37931__$1;
var n = cljs.core.get.call(null,map__37931__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37931__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6503__auto__)){
var ns = temp__6503__auto__;
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
var seq__37933_37955 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37934_37956 = null;
var count__37935_37957 = (0);
var i__37936_37958 = (0);
while(true){
if((i__37936_37958 < count__37935_37957)){
var f_37959 = cljs.core._nth.call(null,chunk__37934_37956,i__37936_37958);
cljs.core.println.call(null,"  ",f_37959);

var G__37960 = seq__37933_37955;
var G__37961 = chunk__37934_37956;
var G__37962 = count__37935_37957;
var G__37963 = (i__37936_37958 + (1));
seq__37933_37955 = G__37960;
chunk__37934_37956 = G__37961;
count__37935_37957 = G__37962;
i__37936_37958 = G__37963;
continue;
} else {
var temp__6503__auto___37964 = cljs.core.seq.call(null,seq__37933_37955);
if(temp__6503__auto___37964){
var seq__37933_37965__$1 = temp__6503__auto___37964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37933_37965__$1)){
var c__27300__auto___37966 = cljs.core.chunk_first.call(null,seq__37933_37965__$1);
var G__37967 = cljs.core.chunk_rest.call(null,seq__37933_37965__$1);
var G__37968 = c__27300__auto___37966;
var G__37969 = cljs.core.count.call(null,c__27300__auto___37966);
var G__37970 = (0);
seq__37933_37955 = G__37967;
chunk__37934_37956 = G__37968;
count__37935_37957 = G__37969;
i__37936_37958 = G__37970;
continue;
} else {
var f_37971 = cljs.core.first.call(null,seq__37933_37965__$1);
cljs.core.println.call(null,"  ",f_37971);

var G__37972 = cljs.core.next.call(null,seq__37933_37965__$1);
var G__37973 = null;
var G__37974 = (0);
var G__37975 = (0);
seq__37933_37955 = G__37972;
chunk__37934_37956 = G__37973;
count__37935_37957 = G__37974;
i__37936_37958 = G__37975;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37976 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26397__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26397__auto__)){
return or__26397__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37976);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37976)))?cljs.core.second.call(null,arglists_37976):arglists_37976));
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
var seq__37937_37977 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37938_37978 = null;
var count__37939_37979 = (0);
var i__37940_37980 = (0);
while(true){
if((i__37940_37980 < count__37939_37979)){
var vec__37941_37981 = cljs.core._nth.call(null,chunk__37938_37978,i__37940_37980);
var name_37982 = cljs.core.nth.call(null,vec__37941_37981,(0),null);
var map__37944_37983 = cljs.core.nth.call(null,vec__37941_37981,(1),null);
var map__37944_37984__$1 = ((((!((map__37944_37983 == null)))?((((map__37944_37983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37944_37983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37944_37983):map__37944_37983);
var doc_37985 = cljs.core.get.call(null,map__37944_37984__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37986 = cljs.core.get.call(null,map__37944_37984__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37982);

cljs.core.println.call(null," ",arglists_37986);

if(cljs.core.truth_(doc_37985)){
cljs.core.println.call(null," ",doc_37985);
} else {
}

var G__37987 = seq__37937_37977;
var G__37988 = chunk__37938_37978;
var G__37989 = count__37939_37979;
var G__37990 = (i__37940_37980 + (1));
seq__37937_37977 = G__37987;
chunk__37938_37978 = G__37988;
count__37939_37979 = G__37989;
i__37940_37980 = G__37990;
continue;
} else {
var temp__6503__auto___37991 = cljs.core.seq.call(null,seq__37937_37977);
if(temp__6503__auto___37991){
var seq__37937_37992__$1 = temp__6503__auto___37991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37937_37992__$1)){
var c__27300__auto___37993 = cljs.core.chunk_first.call(null,seq__37937_37992__$1);
var G__37994 = cljs.core.chunk_rest.call(null,seq__37937_37992__$1);
var G__37995 = c__27300__auto___37993;
var G__37996 = cljs.core.count.call(null,c__27300__auto___37993);
var G__37997 = (0);
seq__37937_37977 = G__37994;
chunk__37938_37978 = G__37995;
count__37939_37979 = G__37996;
i__37940_37980 = G__37997;
continue;
} else {
var vec__37946_37998 = cljs.core.first.call(null,seq__37937_37992__$1);
var name_37999 = cljs.core.nth.call(null,vec__37946_37998,(0),null);
var map__37949_38000 = cljs.core.nth.call(null,vec__37946_37998,(1),null);
var map__37949_38001__$1 = ((((!((map__37949_38000 == null)))?((((map__37949_38000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37949_38000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37949_38000):map__37949_38000);
var doc_38002 = cljs.core.get.call(null,map__37949_38001__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38003 = cljs.core.get.call(null,map__37949_38001__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37999);

cljs.core.println.call(null," ",arglists_38003);

if(cljs.core.truth_(doc_38002)){
cljs.core.println.call(null," ",doc_38002);
} else {
}

var G__38004 = cljs.core.next.call(null,seq__37937_37992__$1);
var G__38005 = null;
var G__38006 = (0);
var G__38007 = (0);
seq__37937_37977 = G__38004;
chunk__37938_37978 = G__38005;
count__37939_37979 = G__38006;
i__37940_37980 = G__38007;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6503__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6503__auto__)){
var fnspec = temp__6503__auto__;
cljs.core.print.call(null,"Spec");

var seq__37951 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37952 = null;
var count__37953 = (0);
var i__37954 = (0);
while(true){
if((i__37954 < count__37953)){
var role = cljs.core._nth.call(null,chunk__37952,i__37954);
var temp__6503__auto___38008__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___38008__$1)){
var spec_38009 = temp__6503__auto___38008__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38009));
} else {
}

var G__38010 = seq__37951;
var G__38011 = chunk__37952;
var G__38012 = count__37953;
var G__38013 = (i__37954 + (1));
seq__37951 = G__38010;
chunk__37952 = G__38011;
count__37953 = G__38012;
i__37954 = G__38013;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__37951);
if(temp__6503__auto____$1){
var seq__37951__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37951__$1)){
var c__27300__auto__ = cljs.core.chunk_first.call(null,seq__37951__$1);
var G__38014 = cljs.core.chunk_rest.call(null,seq__37951__$1);
var G__38015 = c__27300__auto__;
var G__38016 = cljs.core.count.call(null,c__27300__auto__);
var G__38017 = (0);
seq__37951 = G__38014;
chunk__37952 = G__38015;
count__37953 = G__38016;
i__37954 = G__38017;
continue;
} else {
var role = cljs.core.first.call(null,seq__37951__$1);
var temp__6503__auto___38018__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___38018__$2)){
var spec_38019 = temp__6503__auto___38018__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38019));
} else {
}

var G__38020 = cljs.core.next.call(null,seq__37951__$1);
var G__38021 = null;
var G__38022 = (0);
var G__38023 = (0);
seq__37951 = G__38020;
chunk__37952 = G__38021;
count__37953 = G__38022;
i__37954 = G__38023;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1474693969601