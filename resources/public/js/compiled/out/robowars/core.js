// Compiled by ClojureScript 1.9.229 {}
goog.provide('robowars.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof robowars.core.app_state !== 'undefined'){
} else {
robowars.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!",new cljs.core.Keyword(null,"active-robot","active-robot",1228983112),new cljs.core.Keyword(null,"twonky","twonky",-738654436),new cljs.core.Keyword(null,"robots","robots",-1582878607),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"twonky","twonky",-738654436),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.Keyword(null,"dir","dir",1734754661),(0),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-1","move-1",1458787990),new cljs.core.Keyword(null,"rotate-right","rotate-right",1632589253),new cljs.core.Keyword(null,"move-1","move-1",1458787990),new cljs.core.Keyword(null,"rotate-right","rotate-right",1632589253),new cljs.core.Keyword(null,"move-1","move-1",1458787990)], null)], null),new cljs.core.Keyword(null,"beep","beep",-1120313130),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(2)], null),new cljs.core.Keyword(null,"dir","dir",1734754661),(0),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-1","move-1",1458787990),new cljs.core.Keyword(null,"rotate-right","rotate-right",1632589253),new cljs.core.Keyword(null,"move-1","move-1",1458787990),new cljs.core.Keyword(null,"rotate-right","rotate-right",1632589253),new cljs.core.Keyword(null,"move-1","move-1",1458787990)], null)], null),new cljs.core.Keyword(null,"gonk","gonk",229014222),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(8)], null),new cljs.core.Keyword(null,"dir","dir",1734754661),(0),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-1","move-1",1458787990),new cljs.core.Keyword(null,"rotate-right","rotate-right",1632589253),new cljs.core.Keyword(null,"move-1","move-1",1458787990),new cljs.core.Keyword(null,"rotate-right","rotate-right",1632589253),new cljs.core.Keyword(null,"move-1","move-1",1458787990)], null)], null),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6)], null),new cljs.core.Keyword(null,"dir","dir",1734754661),(0),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-1","move-1",1458787990),new cljs.core.Keyword(null,"rotate-right","rotate-right",1632589253),new cljs.core.Keyword(null,"move-1","move-1",1458787990),new cljs.core.Keyword(null,"rotate-right","rotate-right",1632589253),new cljs.core.Keyword(null,"move-1","move-1",1458787990)], null)], null)], null)], null));
}
robowars.core.next_player = (function robowars$core$next_player(p__46175){
var map__46182 = p__46175;
var map__46182__$1 = ((((!((map__46182 == null)))?((((map__46182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46182):map__46182);
var state = map__46182__$1;
var active_robot = cljs.core.get.call(null,map__46182__$1,new cljs.core.Keyword(null,"active-robot","active-robot",1228983112));
var robots = cljs.core.get.call(null,map__46182__$1,new cljs.core.Keyword(null,"robots","robots",-1582878607));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"active-robot","active-robot",1228983112),cljs.core.some.call(null,((function (map__46182,map__46182__$1,state,active_robot,robots){
return (function (p__46184){
var vec__46185 = p__46184;
var r = cljs.core.nth.call(null,vec__46185,(0),null);
var n = cljs.core.nth.call(null,vec__46185,(1),null);
if(cljs.core._EQ_.call(null,r,active_robot)){
return n;
} else {
return null;
}
});})(map__46182,map__46182__$1,state,active_robot,robots))
,cljs.core.partition.call(null,(2),(1),cljs.core.cycle.call(null,cljs.core.keys.call(null,robots)))));
});
robowars.core.x = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"move-1","move-1",1458787990),(18),new cljs.core.Keyword(null,"move-2","move-2",343242756),(12),new cljs.core.Keyword(null,"move-3","move-3",1199511690),(6),new cljs.core.Keyword(null,"back-up","back-up",-183741053),(6),new cljs.core.Keyword(null,"rotate-right","rotate-right",1632589253),(18),new cljs.core.Keyword(null,"rotate-left","rotate-left",1566345310),(18),new cljs.core.Keyword(null,"u-turn","u-turn",-901619075),(6)], null);
robowars.core.gen_hands = (function robowars$core$gen_hands(){
return cljs.core.map.call(null,cljs.core.sort,cljs.core.partition.call(null,(9),cljs.core.shuffle.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p__46192){
var vec__46193 = p__46192;
var k = cljs.core.nth.call(null,vec__46193,(0),null);
var v = cljs.core.nth.call(null,vec__46193,(1),null);
return cljs.core.repeat.call(null,v,k);
}),robowars.core.x)))));
});
robowars.core.deg__GT_vec = (function robowars$core$deg__GT_vec(deg){
var rads = ((Math.PI * deg) / (180));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.round(Math.cos(rads)) | (0)),(Math.round(Math.sin(rads)) | (0))], null);
});
robowars.core.push = (function robowars$core$push(push_pos,dir,state){
var temp__6501__auto__ = cljs.core.some.call(null,(function (p__46202){
var vec__46203 = p__46202;
var k = cljs.core.nth.call(null,vec__46203,(0),null);
var map__46206 = cljs.core.nth.call(null,vec__46203,(1),null);
var map__46206__$1 = ((((!((map__46206 == null)))?((((map__46206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46206):map__46206);
var pos = cljs.core.get.call(null,map__46206__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core._EQ_.call(null,pos,push_pos)){
return k;
} else {
return null;
}
}),state.call(null,new cljs.core.Keyword(null,"robots","robots",-1582878607)));
if(cljs.core.truth_(temp__6501__auto__)){
var occupant = temp__6501__auto__;
var pushed_pos = cljs.core.mapv.call(null,cljs.core._PLUS_,push_pos,dir);
return cljs.core.assoc_in.call(null,robowars$core$push.call(null,pushed_pos,dir,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"robots","robots",-1582878607),occupant,new cljs.core.Keyword(null,"pos","pos",-864607220)], null),pushed_pos);
} else {
return state;
}
});
robowars.core.move_forward = (function robowars$core$move_forward(robot,state){
return robowars.core.push.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"robots","robots",-1582878607),robot,new cljs.core.Keyword(null,"pos","pos",-864607220)], null)),robowars.core.deg__GT_vec.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"robots","robots",-1582878607),robot,new cljs.core.Keyword(null,"dir","dir",1734754661)], null))),state);
});
robowars.core.rotate_left = (function robowars$core$rotate_left(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dir","dir",1734754661)], null),cljs.core._,(90));
});
robowars.core.rotate_right = (function robowars$core$rotate_right(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dir","dir",1734754661)], null),cljs.core._PLUS_,(90));
});
robowars.core.u_turn = (function robowars$core$u_turn(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dir","dir",1734754661)], null),cljs.core._PLUS_,(180));
});
robowars.core.hello_world = (function robowars$core$hello_world(){
var cell_dim = (20);
var ncells = (12);
var map__46241 = cljs.core.deref.call(null,robowars.core.app_state);
var map__46241__$1 = ((((!((map__46241 == null)))?((((map__46241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46241):map__46241);
var active_robot = cljs.core.get.call(null,map__46241__$1,new cljs.core.Keyword(null,"active-robot","active-robot",1228983112));
var robots = cljs.core.get.call(null,map__46241__$1,new cljs.core.Keyword(null,"robots","robots",-1582878607));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,robowars.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str("Current player is "),cljs.core.str(new cljs.core.Keyword(null,"active-robot","active-robot",1228983112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,robowars.core.app_state)))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(ncells * cell_dim),new cljs.core.Keyword(null,"height","height",1025178622),(ncells * cell_dim)], null),cljs.core.doall.call(null,(function (){var iter__27251__auto__ = ((function (cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots){
return (function robowars$core$hello_world_$_iter__46243(s__46244){
return (new cljs.core.LazySeq(null,((function (cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots){
return (function (){
var s__46244__$1 = s__46244;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__46244__$1);
if(temp__6503__auto__){
var xs__7059__auto__ = temp__6503__auto__;
var i = cljs.core.first.call(null,xs__7059__auto__);
var iterys__27247__auto__ = ((function (s__46244__$1,i,xs__7059__auto__,temp__6503__auto__,cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots){
return (function robowars$core$hello_world_$_iter__46243_$_iter__46245(s__46246){
return (new cljs.core.LazySeq(null,((function (s__46244__$1,i,xs__7059__auto__,temp__6503__auto__,cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots){
return (function (){
var s__46246__$1 = s__46246;
while(true){
var temp__6503__auto____$1 = cljs.core.seq.call(null,s__46246__$1);
if(temp__6503__auto____$1){
var s__46246__$2 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46246__$2)){
var c__27249__auto__ = cljs.core.chunk_first.call(null,s__46246__$2);
var size__27250__auto__ = cljs.core.count.call(null,c__27249__auto__);
var b__46248 = cljs.core.chunk_buffer.call(null,size__27250__auto__);
if((function (){var i__46247 = (0);
while(true){
if((i__46247 < size__27250__auto__)){
var j = cljs.core._nth.call(null,c__27249__auto__,i__46247);
cljs.core.chunk_append.call(null,b__46248,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(":"),cljs.core.str(j)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(i * cell_dim),new cljs.core.Keyword(null,"y","y",-1757859776),(j * cell_dim),new cljs.core.Keyword(null,"width","width",-384071477),cell_dim,new cljs.core.Keyword(null,"height","height",1025178622),cell_dim,new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"black","black",1294279647)], null)], null));

var G__46273 = (i__46247 + (1));
i__46247 = G__46273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46248),robowars$core$hello_world_$_iter__46243_$_iter__46245.call(null,cljs.core.chunk_rest.call(null,s__46246__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46248),null);
}
} else {
var j = cljs.core.first.call(null,s__46246__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(":"),cljs.core.str(j)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(i * cell_dim),new cljs.core.Keyword(null,"y","y",-1757859776),(j * cell_dim),new cljs.core.Keyword(null,"width","width",-384071477),cell_dim,new cljs.core.Keyword(null,"height","height",1025178622),cell_dim,new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"black","black",1294279647)], null)], null),robowars$core$hello_world_$_iter__46243_$_iter__46245.call(null,cljs.core.rest.call(null,s__46246__$2)));
}
} else {
return null;
}
break;
}
});})(s__46244__$1,i,xs__7059__auto__,temp__6503__auto__,cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots))
,null,null));
});})(s__46244__$1,i,xs__7059__auto__,temp__6503__auto__,cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots))
;
var fs__27248__auto__ = cljs.core.seq.call(null,iterys__27247__auto__.call(null,cljs.core.range.call(null,ncells)));
if(fs__27248__auto__){
return cljs.core.concat.call(null,fs__27248__auto__,robowars$core$hello_world_$_iter__46243.call(null,cljs.core.rest.call(null,s__46244__$1)));
} else {
var G__46274 = cljs.core.rest.call(null,s__46244__$1);
s__46244__$1 = G__46274;
continue;
}
} else {
return null;
}
break;
}
});})(cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots))
,null,null));
});})(cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots))
;
return iter__27251__auto__.call(null,cljs.core.range.call(null,ncells));
})()),cljs.core.doall.call(null,(function (){var iter__27251__auto__ = ((function (cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots){
return (function robowars$core$hello_world_$_iter__46249(s__46250){
return (new cljs.core.LazySeq(null,((function (cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots){
return (function (){
var s__46250__$1 = s__46250;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__46250__$1);
if(temp__6503__auto__){
var s__46250__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46250__$2)){
var c__27249__auto__ = cljs.core.chunk_first.call(null,s__46250__$2);
var size__27250__auto__ = cljs.core.count.call(null,c__27249__auto__);
var b__46252 = cljs.core.chunk_buffer.call(null,size__27250__auto__);
if((function (){var i__46251 = (0);
while(true){
if((i__46251 < size__27250__auto__)){
var vec__46263 = cljs.core._nth.call(null,c__27249__auto__,i__46251);
var nm = cljs.core.nth.call(null,vec__46263,(0),null);
var map__46266 = cljs.core.nth.call(null,vec__46263,(1),null);
var map__46266__$1 = ((((!((map__46266 == null)))?((((map__46266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46266):map__46266);
var pos = cljs.core.get.call(null,map__46266__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var dir = cljs.core.get.call(null,map__46266__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var trans = cljs.core.map.call(null,((function (i__46251,vec__46263,nm,map__46266,map__46266__$1,pos,dir,c__27249__auto__,size__27250__auto__,b__46252,s__46250__$2,temp__6503__auto__,cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots){
return (function (p1__46208_SHARP_){
return (p1__46208_SHARP_ * cell_dim);
});})(i__46251,vec__46263,nm,map__46266,map__46266__$1,pos,dir,c__27249__auto__,size__27250__auto__,b__46252,s__46250__$2,temp__6503__auto__,cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots))
,pos);
cljs.core.chunk_append.call(null,b__46252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),nm,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cell_dim], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_dim,(cell_dim * 0.5)], null)], null),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"fill","fill",883462889),((cljs.core._EQ_.call(null,nm,active_robot))?new cljs.core.Keyword(null,"green","green",-945526839):new cljs.core.Keyword(null,"yellow","yellow",-881035449)),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(cljs.core.first.call(null,trans)),cljs.core.str(" "),cljs.core.str(cljs.core.second.call(null,trans)),cljs.core.str(") rotate("),cljs.core.str(dir),cljs.core.str(" 10 10)")].join('')], null)], null));

var G__46275 = (i__46251 + (1));
i__46251 = G__46275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46252),robowars$core$hello_world_$_iter__46249.call(null,cljs.core.chunk_rest.call(null,s__46250__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46252),null);
}
} else {
var vec__46268 = cljs.core.first.call(null,s__46250__$2);
var nm = cljs.core.nth.call(null,vec__46268,(0),null);
var map__46271 = cljs.core.nth.call(null,vec__46268,(1),null);
var map__46271__$1 = ((((!((map__46271 == null)))?((((map__46271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46271):map__46271);
var pos = cljs.core.get.call(null,map__46271__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var dir = cljs.core.get.call(null,map__46271__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var trans = cljs.core.map.call(null,((function (vec__46268,nm,map__46271,map__46271__$1,pos,dir,s__46250__$2,temp__6503__auto__,cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots){
return (function (p1__46208_SHARP_){
return (p1__46208_SHARP_ * cell_dim);
});})(vec__46268,nm,map__46271,map__46271__$1,pos,dir,s__46250__$2,temp__6503__auto__,cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots))
,pos);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),nm,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cell_dim], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_dim,(cell_dim * 0.5)], null)], null),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"fill","fill",883462889),((cljs.core._EQ_.call(null,nm,active_robot))?new cljs.core.Keyword(null,"green","green",-945526839):new cljs.core.Keyword(null,"yellow","yellow",-881035449)),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(cljs.core.first.call(null,trans)),cljs.core.str(" "),cljs.core.str(cljs.core.second.call(null,trans)),cljs.core.str(") rotate("),cljs.core.str(dir),cljs.core.str(" 10 10)")].join('')], null)], null),robowars$core$hello_world_$_iter__46249.call(null,cljs.core.rest.call(null,s__46250__$2)));
}
} else {
return null;
}
break;
}
});})(cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots))
,null,null));
});})(cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots))
;
return iter__27251__auto__.call(null,robots);
})())], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots){
return (function (){
return cljs.core.swap_BANG_.call(null,robowars.core.app_state,cljs.core.partial.call(null,robowars.core.move_forward,new cljs.core.Keyword(null,"active-robot","active-robot",1228983112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,robowars.core.app_state))));
});})(cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots))
], null),"Move 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots){
return (function (){
return cljs.core.swap_BANG_.call(null,robowars.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"robots","robots",-1582878607),new cljs.core.Keyword(null,"active-robot","active-robot",1228983112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,robowars.core.app_state))], null),robowars.core.rotate_right);
});})(cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots))
], null),"Rotate right"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots){
return (function (){
return cljs.core.swap_BANG_.call(null,robowars.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"robots","robots",-1582878607),new cljs.core.Keyword(null,"active-robot","active-robot",1228983112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,robowars.core.app_state))], null),robowars.core.rotate_left);
});})(cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots))
], null),"Rotate left"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots){
return (function (){
return cljs.core.swap_BANG_.call(null,robowars.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"robots","robots",-1582878607),new cljs.core.Keyword(null,"active-robot","active-robot",1228983112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,robowars.core.app_state))], null),robowars.core.u_turn);
});})(cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots))
], null),"U-turn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots){
return (function (){
return cljs.core.swap_BANG_.call(null,robowars.core.app_state,robowars.core.next_player);
});})(cell_dim,ncells,map__46241,map__46241__$1,active_robot,robots))
], null),"next"], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [robowars.core.hello_world], null),document.getElementById("app"));
robowars.core.on_js_reload = (function robowars$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1474694623192