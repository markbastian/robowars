// Compiled by ClojureScript 1.7.170 {}
goog.provide('robowars.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof robowars.core.app_state !== 'undefined'){
} else {
robowars.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
robowars.core.hello_world = (function robowars$core$hello_world(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,robowars.core.app_state))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [robowars.core.hello_world], null),document.getElementById("app"));
robowars.core.on_js_reload = (function robowars$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1456613029840