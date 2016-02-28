// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('robowars.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__24506__delegate = function (x){
if(cljs.core.truth_(robowars.core.on_js_reload)){
return cljs.core.apply.call(null,robowars.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'robowars.core/on-js-reload' is missing");
}
};
var G__24506 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__24507__i = 0, G__24507__a = new Array(arguments.length -  0);
while (G__24507__i < G__24507__a.length) {G__24507__a[G__24507__i] = arguments[G__24507__i + 0]; ++G__24507__i;}
  x = new cljs.core.IndexedSeq(G__24507__a,0);
} 
return G__24506__delegate.call(this,x);};
G__24506.cljs$lang$maxFixedArity = 0;
G__24506.cljs$lang$applyTo = (function (arglist__24508){
var x = cljs.core.seq(arglist__24508);
return G__24506__delegate(x);
});
G__24506.cljs$core$IFn$_invoke$arity$variadic = G__24506__delegate;
return G__24506;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1456613032760