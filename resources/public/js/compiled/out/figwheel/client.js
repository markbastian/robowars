// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23777 = cljs.core._EQ_;
var expr__23778 = (function (){var or__16805__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e23781){if((e23781 instanceof Error)){
var e = e23781;
return false;
} else {
throw e23781;

}
}})();
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23777.call(null,"true",expr__23778))){
return true;
} else {
if(cljs.core.truth_(pred__23777.call(null,"false",expr__23778))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23778)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e23783){if((e23783 instanceof Error)){
var e = e23783;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e23783;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17870__auto__ = [];
var len__17863__auto___23785 = arguments.length;
var i__17864__auto___23786 = (0);
while(true){
if((i__17864__auto___23786 < len__17863__auto___23785)){
args__17870__auto__.push((arguments[i__17864__auto___23786]));

var G__23787 = (i__17864__auto___23786 + (1));
i__17864__auto___23786 = G__23787;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23784){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23784));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23788){
var map__23791 = p__23788;
var map__23791__$1 = ((((!((map__23791 == null)))?((((map__23791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23791):map__23791);
var message = cljs.core.get.call(null,map__23791__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23791__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16805__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16793__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16793__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16793__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19465__auto___23953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___23953,ch){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___23953,ch){
return (function (state_23922){
var state_val_23923 = (state_23922[(1)]);
if((state_val_23923 === (7))){
var inst_23918 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
var statearr_23924_23954 = state_23922__$1;
(statearr_23924_23954[(2)] = inst_23918);

(statearr_23924_23954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (1))){
var state_23922__$1 = state_23922;
var statearr_23925_23955 = state_23922__$1;
(statearr_23925_23955[(2)] = null);

(statearr_23925_23955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (4))){
var inst_23875 = (state_23922[(7)]);
var inst_23875__$1 = (state_23922[(2)]);
var state_23922__$1 = (function (){var statearr_23926 = state_23922;
(statearr_23926[(7)] = inst_23875__$1);

return statearr_23926;
})();
if(cljs.core.truth_(inst_23875__$1)){
var statearr_23927_23956 = state_23922__$1;
(statearr_23927_23956[(1)] = (5));

} else {
var statearr_23928_23957 = state_23922__$1;
(statearr_23928_23957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (15))){
var inst_23882 = (state_23922[(8)]);
var inst_23897 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23882);
var inst_23898 = cljs.core.first.call(null,inst_23897);
var inst_23899 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23898);
var inst_23900 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23899)].join('');
var inst_23901 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23900);
var state_23922__$1 = state_23922;
var statearr_23929_23958 = state_23922__$1;
(statearr_23929_23958[(2)] = inst_23901);

(statearr_23929_23958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (13))){
var inst_23906 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
var statearr_23930_23959 = state_23922__$1;
(statearr_23930_23959[(2)] = inst_23906);

(statearr_23930_23959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (6))){
var state_23922__$1 = state_23922;
var statearr_23931_23960 = state_23922__$1;
(statearr_23931_23960[(2)] = null);

(statearr_23931_23960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (17))){
var inst_23904 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
var statearr_23932_23961 = state_23922__$1;
(statearr_23932_23961[(2)] = inst_23904);

(statearr_23932_23961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (3))){
var inst_23920 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23922__$1,inst_23920);
} else {
if((state_val_23923 === (12))){
var inst_23881 = (state_23922[(9)]);
var inst_23895 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23881,opts);
var state_23922__$1 = state_23922;
if(cljs.core.truth_(inst_23895)){
var statearr_23933_23962 = state_23922__$1;
(statearr_23933_23962[(1)] = (15));

} else {
var statearr_23934_23963 = state_23922__$1;
(statearr_23934_23963[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (2))){
var state_23922__$1 = state_23922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23922__$1,(4),ch);
} else {
if((state_val_23923 === (11))){
var inst_23882 = (state_23922[(8)]);
var inst_23887 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23888 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23882);
var inst_23889 = cljs.core.async.timeout.call(null,(1000));
var inst_23890 = [inst_23888,inst_23889];
var inst_23891 = (new cljs.core.PersistentVector(null,2,(5),inst_23887,inst_23890,null));
var state_23922__$1 = state_23922;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23922__$1,(14),inst_23891);
} else {
if((state_val_23923 === (9))){
var inst_23882 = (state_23922[(8)]);
var inst_23908 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23909 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23882);
var inst_23910 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23909);
var inst_23911 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23910)].join('');
var inst_23912 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23911);
var state_23922__$1 = (function (){var statearr_23935 = state_23922;
(statearr_23935[(10)] = inst_23908);

return statearr_23935;
})();
var statearr_23936_23964 = state_23922__$1;
(statearr_23936_23964[(2)] = inst_23912);

(statearr_23936_23964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (5))){
var inst_23875 = (state_23922[(7)]);
var inst_23877 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23878 = (new cljs.core.PersistentArrayMap(null,2,inst_23877,null));
var inst_23879 = (new cljs.core.PersistentHashSet(null,inst_23878,null));
var inst_23880 = figwheel.client.focus_msgs.call(null,inst_23879,inst_23875);
var inst_23881 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23880);
var inst_23882 = cljs.core.first.call(null,inst_23880);
var inst_23883 = figwheel.client.autoload_QMARK_.call(null);
var state_23922__$1 = (function (){var statearr_23937 = state_23922;
(statearr_23937[(9)] = inst_23881);

(statearr_23937[(8)] = inst_23882);

return statearr_23937;
})();
if(cljs.core.truth_(inst_23883)){
var statearr_23938_23965 = state_23922__$1;
(statearr_23938_23965[(1)] = (8));

} else {
var statearr_23939_23966 = state_23922__$1;
(statearr_23939_23966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (14))){
var inst_23893 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
var statearr_23940_23967 = state_23922__$1;
(statearr_23940_23967[(2)] = inst_23893);

(statearr_23940_23967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (16))){
var state_23922__$1 = state_23922;
var statearr_23941_23968 = state_23922__$1;
(statearr_23941_23968[(2)] = null);

(statearr_23941_23968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (10))){
var inst_23914 = (state_23922[(2)]);
var state_23922__$1 = (function (){var statearr_23942 = state_23922;
(statearr_23942[(11)] = inst_23914);

return statearr_23942;
})();
var statearr_23943_23969 = state_23922__$1;
(statearr_23943_23969[(2)] = null);

(statearr_23943_23969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (8))){
var inst_23881 = (state_23922[(9)]);
var inst_23885 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23881,opts);
var state_23922__$1 = state_23922;
if(cljs.core.truth_(inst_23885)){
var statearr_23944_23970 = state_23922__$1;
(statearr_23944_23970[(1)] = (11));

} else {
var statearr_23945_23971 = state_23922__$1;
(statearr_23945_23971[(1)] = (12));

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
});})(c__19465__auto___23953,ch))
;
return ((function (switch__19353__auto__,c__19465__auto___23953,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19354__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19354__auto____0 = (function (){
var statearr_23949 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23949[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19354__auto__);

(statearr_23949[(1)] = (1));

return statearr_23949;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19354__auto____1 = (function (state_23922){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_23922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e23950){if((e23950 instanceof Object)){
var ex__19357__auto__ = e23950;
var statearr_23951_23972 = state_23922;
(statearr_23951_23972[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23973 = state_23922;
state_23922 = G__23973;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19354__auto__ = function(state_23922){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19354__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19354__auto____1.call(this,state_23922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19354__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19354__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___23953,ch))
})();
var state__19467__auto__ = (function (){var statearr_23952 = f__19466__auto__.call(null);
(statearr_23952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___23953);

return statearr_23952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___23953,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23974_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23974_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23981 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23981){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23979 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23980 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23980;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23979;
}}catch (e23978){if((e23978 instanceof Error)){
var e = e23978;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23981], null));
} else {
var e = e23978;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23981))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23982){
var map__23989 = p__23982;
var map__23989__$1 = ((((!((map__23989 == null)))?((((map__23989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23989):map__23989);
var opts = map__23989__$1;
var build_id = cljs.core.get.call(null,map__23989__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23989,map__23989__$1,opts,build_id){
return (function (p__23991){
var vec__23992 = p__23991;
var map__23993 = cljs.core.nth.call(null,vec__23992,(0),null);
var map__23993__$1 = ((((!((map__23993 == null)))?((((map__23993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23993):map__23993);
var msg = map__23993__$1;
var msg_name = cljs.core.get.call(null,map__23993__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23992,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23992,map__23993,map__23993__$1,msg,msg_name,_,map__23989,map__23989__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23992,map__23993,map__23993__$1,msg,msg_name,_,map__23989,map__23989__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23989,map__23989__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23999){
var vec__24000 = p__23999;
var map__24001 = cljs.core.nth.call(null,vec__24000,(0),null);
var map__24001__$1 = ((((!((map__24001 == null)))?((((map__24001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24001):map__24001);
var msg = map__24001__$1;
var msg_name = cljs.core.get.call(null,map__24001__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24000,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24003){
var map__24013 = p__24003;
var map__24013__$1 = ((((!((map__24013 == null)))?((((map__24013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24013):map__24013);
var on_compile_warning = cljs.core.get.call(null,map__24013__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24013__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24013,map__24013__$1,on_compile_warning,on_compile_fail){
return (function (p__24015){
var vec__24016 = p__24015;
var map__24017 = cljs.core.nth.call(null,vec__24016,(0),null);
var map__24017__$1 = ((((!((map__24017 == null)))?((((map__24017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24017):map__24017);
var msg = map__24017__$1;
var msg_name = cljs.core.get.call(null,map__24017__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24016,(1));
var pred__24019 = cljs.core._EQ_;
var expr__24020 = msg_name;
if(cljs.core.truth_(pred__24019.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24020))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24019.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24020))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24013,map__24013__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto__,msg_hist,msg_names,msg){
return (function (state_24236){
var state_val_24237 = (state_24236[(1)]);
if((state_val_24237 === (7))){
var inst_24160 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
if(cljs.core.truth_(inst_24160)){
var statearr_24238_24284 = state_24236__$1;
(statearr_24238_24284[(1)] = (8));

} else {
var statearr_24239_24285 = state_24236__$1;
(statearr_24239_24285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (20))){
var inst_24230 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24240_24286 = state_24236__$1;
(statearr_24240_24286[(2)] = inst_24230);

(statearr_24240_24286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (27))){
var inst_24226 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24241_24287 = state_24236__$1;
(statearr_24241_24287[(2)] = inst_24226);

(statearr_24241_24287[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (1))){
var inst_24153 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24236__$1 = state_24236;
if(cljs.core.truth_(inst_24153)){
var statearr_24242_24288 = state_24236__$1;
(statearr_24242_24288[(1)] = (2));

} else {
var statearr_24243_24289 = state_24236__$1;
(statearr_24243_24289[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (24))){
var inst_24228 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24244_24290 = state_24236__$1;
(statearr_24244_24290[(2)] = inst_24228);

(statearr_24244_24290[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (4))){
var inst_24234 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24236__$1,inst_24234);
} else {
if((state_val_24237 === (15))){
var inst_24232 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24245_24291 = state_24236__$1;
(statearr_24245_24291[(2)] = inst_24232);

(statearr_24245_24291[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (21))){
var inst_24191 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24246_24292 = state_24236__$1;
(statearr_24246_24292[(2)] = inst_24191);

(statearr_24246_24292[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (31))){
var inst_24215 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24236__$1 = state_24236;
if(cljs.core.truth_(inst_24215)){
var statearr_24247_24293 = state_24236__$1;
(statearr_24247_24293[(1)] = (34));

} else {
var statearr_24248_24294 = state_24236__$1;
(statearr_24248_24294[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (32))){
var inst_24224 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24249_24295 = state_24236__$1;
(statearr_24249_24295[(2)] = inst_24224);

(statearr_24249_24295[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (33))){
var inst_24213 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24250_24296 = state_24236__$1;
(statearr_24250_24296[(2)] = inst_24213);

(statearr_24250_24296[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (13))){
var inst_24174 = figwheel.client.heads_up.clear.call(null);
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24236__$1,(16),inst_24174);
} else {
if((state_val_24237 === (22))){
var inst_24195 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24196 = figwheel.client.heads_up.append_message.call(null,inst_24195);
var state_24236__$1 = state_24236;
var statearr_24251_24297 = state_24236__$1;
(statearr_24251_24297[(2)] = inst_24196);

(statearr_24251_24297[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (36))){
var inst_24222 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24252_24298 = state_24236__$1;
(statearr_24252_24298[(2)] = inst_24222);

(statearr_24252_24298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (29))){
var inst_24206 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24253_24299 = state_24236__$1;
(statearr_24253_24299[(2)] = inst_24206);

(statearr_24253_24299[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (6))){
var inst_24155 = (state_24236[(7)]);
var state_24236__$1 = state_24236;
var statearr_24254_24300 = state_24236__$1;
(statearr_24254_24300[(2)] = inst_24155);

(statearr_24254_24300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (28))){
var inst_24202 = (state_24236[(2)]);
var inst_24203 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24204 = figwheel.client.heads_up.display_warning.call(null,inst_24203);
var state_24236__$1 = (function (){var statearr_24255 = state_24236;
(statearr_24255[(8)] = inst_24202);

return statearr_24255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24236__$1,(29),inst_24204);
} else {
if((state_val_24237 === (25))){
var inst_24200 = figwheel.client.heads_up.clear.call(null);
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24236__$1,(28),inst_24200);
} else {
if((state_val_24237 === (34))){
var inst_24217 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24236__$1,(37),inst_24217);
} else {
if((state_val_24237 === (17))){
var inst_24182 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24256_24301 = state_24236__$1;
(statearr_24256_24301[(2)] = inst_24182);

(statearr_24256_24301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (3))){
var inst_24172 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24236__$1 = state_24236;
if(cljs.core.truth_(inst_24172)){
var statearr_24257_24302 = state_24236__$1;
(statearr_24257_24302[(1)] = (13));

} else {
var statearr_24258_24303 = state_24236__$1;
(statearr_24258_24303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (12))){
var inst_24168 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24259_24304 = state_24236__$1;
(statearr_24259_24304[(2)] = inst_24168);

(statearr_24259_24304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (2))){
var inst_24155 = (state_24236[(7)]);
var inst_24155__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24236__$1 = (function (){var statearr_24260 = state_24236;
(statearr_24260[(7)] = inst_24155__$1);

return statearr_24260;
})();
if(cljs.core.truth_(inst_24155__$1)){
var statearr_24261_24305 = state_24236__$1;
(statearr_24261_24305[(1)] = (5));

} else {
var statearr_24262_24306 = state_24236__$1;
(statearr_24262_24306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (23))){
var inst_24198 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24236__$1 = state_24236;
if(cljs.core.truth_(inst_24198)){
var statearr_24263_24307 = state_24236__$1;
(statearr_24263_24307[(1)] = (25));

} else {
var statearr_24264_24308 = state_24236__$1;
(statearr_24264_24308[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (35))){
var state_24236__$1 = state_24236;
var statearr_24265_24309 = state_24236__$1;
(statearr_24265_24309[(2)] = null);

(statearr_24265_24309[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (19))){
var inst_24193 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24236__$1 = state_24236;
if(cljs.core.truth_(inst_24193)){
var statearr_24266_24310 = state_24236__$1;
(statearr_24266_24310[(1)] = (22));

} else {
var statearr_24267_24311 = state_24236__$1;
(statearr_24267_24311[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (11))){
var inst_24164 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24268_24312 = state_24236__$1;
(statearr_24268_24312[(2)] = inst_24164);

(statearr_24268_24312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (9))){
var inst_24166 = figwheel.client.heads_up.clear.call(null);
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24236__$1,(12),inst_24166);
} else {
if((state_val_24237 === (5))){
var inst_24157 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24236__$1 = state_24236;
var statearr_24269_24313 = state_24236__$1;
(statearr_24269_24313[(2)] = inst_24157);

(statearr_24269_24313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (14))){
var inst_24184 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24236__$1 = state_24236;
if(cljs.core.truth_(inst_24184)){
var statearr_24270_24314 = state_24236__$1;
(statearr_24270_24314[(1)] = (18));

} else {
var statearr_24271_24315 = state_24236__$1;
(statearr_24271_24315[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (26))){
var inst_24208 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24236__$1 = state_24236;
if(cljs.core.truth_(inst_24208)){
var statearr_24272_24316 = state_24236__$1;
(statearr_24272_24316[(1)] = (30));

} else {
var statearr_24273_24317 = state_24236__$1;
(statearr_24273_24317[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (16))){
var inst_24176 = (state_24236[(2)]);
var inst_24177 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24178 = figwheel.client.format_messages.call(null,inst_24177);
var inst_24179 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24180 = figwheel.client.heads_up.display_error.call(null,inst_24178,inst_24179);
var state_24236__$1 = (function (){var statearr_24274 = state_24236;
(statearr_24274[(9)] = inst_24176);

return statearr_24274;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24236__$1,(17),inst_24180);
} else {
if((state_val_24237 === (30))){
var inst_24210 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24211 = figwheel.client.heads_up.display_warning.call(null,inst_24210);
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24236__$1,(33),inst_24211);
} else {
if((state_val_24237 === (10))){
var inst_24170 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24275_24318 = state_24236__$1;
(statearr_24275_24318[(2)] = inst_24170);

(statearr_24275_24318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (18))){
var inst_24186 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24187 = figwheel.client.format_messages.call(null,inst_24186);
var inst_24188 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24189 = figwheel.client.heads_up.display_error.call(null,inst_24187,inst_24188);
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24236__$1,(21),inst_24189);
} else {
if((state_val_24237 === (37))){
var inst_24219 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24276_24319 = state_24236__$1;
(statearr_24276_24319[(2)] = inst_24219);

(statearr_24276_24319[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (8))){
var inst_24162 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24236__$1,(11),inst_24162);
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
});})(c__19465__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19353__auto__,c__19465__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19354__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19354__auto____0 = (function (){
var statearr_24280 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24280[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19354__auto__);

(statearr_24280[(1)] = (1));

return statearr_24280;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19354__auto____1 = (function (state_24236){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_24236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e24281){if((e24281 instanceof Object)){
var ex__19357__auto__ = e24281;
var statearr_24282_24320 = state_24236;
(statearr_24282_24320[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24321 = state_24236;
state_24236 = G__24321;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19354__auto__ = function(state_24236){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19354__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19354__auto____1.call(this,state_24236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19354__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19354__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto__,msg_hist,msg_names,msg))
})();
var state__19467__auto__ = (function (){var statearr_24283 = f__19466__auto__.call(null);
(statearr_24283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto__);

return statearr_24283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto__,msg_hist,msg_names,msg))
);

return c__19465__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19465__auto___24384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___24384,ch){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___24384,ch){
return (function (state_24367){
var state_val_24368 = (state_24367[(1)]);
if((state_val_24368 === (1))){
var state_24367__$1 = state_24367;
var statearr_24369_24385 = state_24367__$1;
(statearr_24369_24385[(2)] = null);

(statearr_24369_24385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (2))){
var state_24367__$1 = state_24367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24367__$1,(4),ch);
} else {
if((state_val_24368 === (3))){
var inst_24365 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24367__$1,inst_24365);
} else {
if((state_val_24368 === (4))){
var inst_24355 = (state_24367[(7)]);
var inst_24355__$1 = (state_24367[(2)]);
var state_24367__$1 = (function (){var statearr_24370 = state_24367;
(statearr_24370[(7)] = inst_24355__$1);

return statearr_24370;
})();
if(cljs.core.truth_(inst_24355__$1)){
var statearr_24371_24386 = state_24367__$1;
(statearr_24371_24386[(1)] = (5));

} else {
var statearr_24372_24387 = state_24367__$1;
(statearr_24372_24387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (5))){
var inst_24355 = (state_24367[(7)]);
var inst_24357 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24355);
var state_24367__$1 = state_24367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24367__$1,(8),inst_24357);
} else {
if((state_val_24368 === (6))){
var state_24367__$1 = state_24367;
var statearr_24373_24388 = state_24367__$1;
(statearr_24373_24388[(2)] = null);

(statearr_24373_24388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (7))){
var inst_24363 = (state_24367[(2)]);
var state_24367__$1 = state_24367;
var statearr_24374_24389 = state_24367__$1;
(statearr_24374_24389[(2)] = inst_24363);

(statearr_24374_24389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24368 === (8))){
var inst_24359 = (state_24367[(2)]);
var state_24367__$1 = (function (){var statearr_24375 = state_24367;
(statearr_24375[(8)] = inst_24359);

return statearr_24375;
})();
var statearr_24376_24390 = state_24367__$1;
(statearr_24376_24390[(2)] = null);

(statearr_24376_24390[(1)] = (2));


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
});})(c__19465__auto___24384,ch))
;
return ((function (switch__19353__auto__,c__19465__auto___24384,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19354__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19354__auto____0 = (function (){
var statearr_24380 = [null,null,null,null,null,null,null,null,null];
(statearr_24380[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19354__auto__);

(statearr_24380[(1)] = (1));

return statearr_24380;
});
var figwheel$client$heads_up_plugin_$_state_machine__19354__auto____1 = (function (state_24367){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_24367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e24381){if((e24381 instanceof Object)){
var ex__19357__auto__ = e24381;
var statearr_24382_24391 = state_24367;
(statearr_24382_24391[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24392 = state_24367;
state_24367 = G__24392;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19354__auto__ = function(state_24367){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19354__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19354__auto____1.call(this,state_24367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19354__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19354__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___24384,ch))
})();
var state__19467__auto__ = (function (){var statearr_24383 = f__19466__auto__.call(null);
(statearr_24383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___24384);

return statearr_24383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___24384,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto__){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto__){
return (function (state_24413){
var state_val_24414 = (state_24413[(1)]);
if((state_val_24414 === (1))){
var inst_24408 = cljs.core.async.timeout.call(null,(3000));
var state_24413__$1 = state_24413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24413__$1,(2),inst_24408);
} else {
if((state_val_24414 === (2))){
var inst_24410 = (state_24413[(2)]);
var inst_24411 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24413__$1 = (function (){var statearr_24415 = state_24413;
(statearr_24415[(7)] = inst_24410);

return statearr_24415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24413__$1,inst_24411);
} else {
return null;
}
}
});})(c__19465__auto__))
;
return ((function (switch__19353__auto__,c__19465__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19354__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19354__auto____0 = (function (){
var statearr_24419 = [null,null,null,null,null,null,null,null];
(statearr_24419[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19354__auto__);

(statearr_24419[(1)] = (1));

return statearr_24419;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19354__auto____1 = (function (state_24413){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_24413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e24420){if((e24420 instanceof Object)){
var ex__19357__auto__ = e24420;
var statearr_24421_24423 = state_24413;
(statearr_24421_24423[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24424 = state_24413;
state_24413 = G__24424;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19354__auto__ = function(state_24413){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19354__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19354__auto____1.call(this,state_24413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19354__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19354__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto__))
})();
var state__19467__auto__ = (function (){var statearr_24422 = f__19466__auto__.call(null);
(statearr_24422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto__);

return statearr_24422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto__))
);

return c__19465__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24425){
var map__24432 = p__24425;
var map__24432__$1 = ((((!((map__24432 == null)))?((((map__24432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24432):map__24432);
var ed = map__24432__$1;
var formatted_exception = cljs.core.get.call(null,map__24432__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24432__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24432__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24434_24438 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24435_24439 = null;
var count__24436_24440 = (0);
var i__24437_24441 = (0);
while(true){
if((i__24437_24441 < count__24436_24440)){
var msg_24442 = cljs.core._nth.call(null,chunk__24435_24439,i__24437_24441);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24442);

var G__24443 = seq__24434_24438;
var G__24444 = chunk__24435_24439;
var G__24445 = count__24436_24440;
var G__24446 = (i__24437_24441 + (1));
seq__24434_24438 = G__24443;
chunk__24435_24439 = G__24444;
count__24436_24440 = G__24445;
i__24437_24441 = G__24446;
continue;
} else {
var temp__4425__auto___24447 = cljs.core.seq.call(null,seq__24434_24438);
if(temp__4425__auto___24447){
var seq__24434_24448__$1 = temp__4425__auto___24447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24434_24448__$1)){
var c__17608__auto___24449 = cljs.core.chunk_first.call(null,seq__24434_24448__$1);
var G__24450 = cljs.core.chunk_rest.call(null,seq__24434_24448__$1);
var G__24451 = c__17608__auto___24449;
var G__24452 = cljs.core.count.call(null,c__17608__auto___24449);
var G__24453 = (0);
seq__24434_24438 = G__24450;
chunk__24435_24439 = G__24451;
count__24436_24440 = G__24452;
i__24437_24441 = G__24453;
continue;
} else {
var msg_24454 = cljs.core.first.call(null,seq__24434_24448__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24454);

var G__24455 = cljs.core.next.call(null,seq__24434_24448__$1);
var G__24456 = null;
var G__24457 = (0);
var G__24458 = (0);
seq__24434_24438 = G__24455;
chunk__24435_24439 = G__24456;
count__24436_24440 = G__24457;
i__24437_24441 = G__24458;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24459){
var map__24462 = p__24459;
var map__24462__$1 = ((((!((map__24462 == null)))?((((map__24462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24462):map__24462);
var w = map__24462__$1;
var message = cljs.core.get.call(null,map__24462__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16793__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16793__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24470 = cljs.core.seq.call(null,plugins);
var chunk__24471 = null;
var count__24472 = (0);
var i__24473 = (0);
while(true){
if((i__24473 < count__24472)){
var vec__24474 = cljs.core._nth.call(null,chunk__24471,i__24473);
var k = cljs.core.nth.call(null,vec__24474,(0),null);
var plugin = cljs.core.nth.call(null,vec__24474,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24476 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24470,chunk__24471,count__24472,i__24473,pl_24476,vec__24474,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24476.call(null,msg_hist);
});})(seq__24470,chunk__24471,count__24472,i__24473,pl_24476,vec__24474,k,plugin))
);
} else {
}

var G__24477 = seq__24470;
var G__24478 = chunk__24471;
var G__24479 = count__24472;
var G__24480 = (i__24473 + (1));
seq__24470 = G__24477;
chunk__24471 = G__24478;
count__24472 = G__24479;
i__24473 = G__24480;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24470);
if(temp__4425__auto__){
var seq__24470__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24470__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__24470__$1);
var G__24481 = cljs.core.chunk_rest.call(null,seq__24470__$1);
var G__24482 = c__17608__auto__;
var G__24483 = cljs.core.count.call(null,c__17608__auto__);
var G__24484 = (0);
seq__24470 = G__24481;
chunk__24471 = G__24482;
count__24472 = G__24483;
i__24473 = G__24484;
continue;
} else {
var vec__24475 = cljs.core.first.call(null,seq__24470__$1);
var k = cljs.core.nth.call(null,vec__24475,(0),null);
var plugin = cljs.core.nth.call(null,vec__24475,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24485 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24470,chunk__24471,count__24472,i__24473,pl_24485,vec__24475,k,plugin,seq__24470__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24485.call(null,msg_hist);
});})(seq__24470,chunk__24471,count__24472,i__24473,pl_24485,vec__24475,k,plugin,seq__24470__$1,temp__4425__auto__))
);
} else {
}

var G__24486 = cljs.core.next.call(null,seq__24470__$1);
var G__24487 = null;
var G__24488 = (0);
var G__24489 = (0);
seq__24470 = G__24486;
chunk__24471 = G__24487;
count__24472 = G__24488;
i__24473 = G__24489;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24490 = [];
var len__17863__auto___24493 = arguments.length;
var i__17864__auto___24494 = (0);
while(true){
if((i__17864__auto___24494 < len__17863__auto___24493)){
args24490.push((arguments[i__17864__auto___24494]));

var G__24495 = (i__17864__auto___24494 + (1));
i__17864__auto___24494 = G__24495;
continue;
} else {
}
break;
}

var G__24492 = args24490.length;
switch (G__24492) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24490.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24501 = arguments.length;
var i__17864__auto___24502 = (0);
while(true){
if((i__17864__auto___24502 < len__17863__auto___24501)){
args__17870__auto__.push((arguments[i__17864__auto___24502]));

var G__24503 = (i__17864__auto___24502 + (1));
i__17864__auto___24502 = G__24503;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24498){
var map__24499 = p__24498;
var map__24499__$1 = ((((!((map__24499 == null)))?((((map__24499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24499):map__24499);
var opts = map__24499__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24497){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24497));
});

//# sourceMappingURL=client.js.map?rel=1456613032735