// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19510 = [];
var len__17863__auto___19516 = arguments.length;
var i__17864__auto___19517 = (0);
while(true){
if((i__17864__auto___19517 < len__17863__auto___19516)){
args19510.push((arguments[i__17864__auto___19517]));

var G__19518 = (i__17864__auto___19517 + (1));
i__17864__auto___19517 = G__19518;
continue;
} else {
}
break;
}

var G__19512 = args19510.length;
switch (G__19512) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19510.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19513 = (function (f,blockable,meta19514){
this.f = f;
this.blockable = blockable;
this.meta19514 = meta19514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19515,meta19514__$1){
var self__ = this;
var _19515__$1 = this;
return (new cljs.core.async.t_cljs$core$async19513(self__.f,self__.blockable,meta19514__$1));
});

cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19515){
var self__ = this;
var _19515__$1 = this;
return self__.meta19514;
});

cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19514","meta19514",41186587,null)], null);
});

cljs.core.async.t_cljs$core$async19513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19513";

cljs.core.async.t_cljs$core$async19513.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async19513");
});

cljs.core.async.__GT_t_cljs$core$async19513 = (function cljs$core$async$__GT_t_cljs$core$async19513(f__$1,blockable__$1,meta19514){
return (new cljs.core.async.t_cljs$core$async19513(f__$1,blockable__$1,meta19514));
});

}

return (new cljs.core.async.t_cljs$core$async19513(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19522 = [];
var len__17863__auto___19525 = arguments.length;
var i__17864__auto___19526 = (0);
while(true){
if((i__17864__auto___19526 < len__17863__auto___19525)){
args19522.push((arguments[i__17864__auto___19526]));

var G__19527 = (i__17864__auto___19526 + (1));
i__17864__auto___19526 = G__19527;
continue;
} else {
}
break;
}

var G__19524 = args19522.length;
switch (G__19524) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19522.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19529 = [];
var len__17863__auto___19532 = arguments.length;
var i__17864__auto___19533 = (0);
while(true){
if((i__17864__auto___19533 < len__17863__auto___19532)){
args19529.push((arguments[i__17864__auto___19533]));

var G__19534 = (i__17864__auto___19533 + (1));
i__17864__auto___19533 = G__19534;
continue;
} else {
}
break;
}

var G__19531 = args19529.length;
switch (G__19531) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19529.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19536 = [];
var len__17863__auto___19539 = arguments.length;
var i__17864__auto___19540 = (0);
while(true){
if((i__17864__auto___19540 < len__17863__auto___19539)){
args19536.push((arguments[i__17864__auto___19540]));

var G__19541 = (i__17864__auto___19540 + (1));
i__17864__auto___19540 = G__19541;
continue;
} else {
}
break;
}

var G__19538 = args19536.length;
switch (G__19538) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19536.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19543 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19543);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19543,ret){
return (function (){
return fn1.call(null,val_19543);
});})(val_19543,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19544 = [];
var len__17863__auto___19547 = arguments.length;
var i__17864__auto___19548 = (0);
while(true){
if((i__17864__auto___19548 < len__17863__auto___19547)){
args19544.push((arguments[i__17864__auto___19548]));

var G__19549 = (i__17864__auto___19548 + (1));
i__17864__auto___19548 = G__19549;
continue;
} else {
}
break;
}

var G__19546 = args19544.length;
switch (G__19546) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19544.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17708__auto___19551 = n;
var x_19552 = (0);
while(true){
if((x_19552 < n__17708__auto___19551)){
(a[x_19552] = (0));

var G__19553 = (x_19552 + (1));
x_19552 = G__19553;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19554 = (i + (1));
i = G__19554;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19558 = (function (alt_flag,flag,meta19559){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19559 = meta19559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19560,meta19559__$1){
var self__ = this;
var _19560__$1 = this;
return (new cljs.core.async.t_cljs$core$async19558(self__.alt_flag,self__.flag,meta19559__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19560){
var self__ = this;
var _19560__$1 = this;
return self__.meta19559;
});})(flag))
;

cljs.core.async.t_cljs$core$async19558.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19558.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19558.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19558.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19558.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19559","meta19559",2092396934,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19558";

cljs.core.async.t_cljs$core$async19558.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async19558");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19558 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19558(alt_flag__$1,flag__$1,meta19559){
return (new cljs.core.async.t_cljs$core$async19558(alt_flag__$1,flag__$1,meta19559));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19558(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19564 = (function (alt_handler,flag,cb,meta19565){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19565 = meta19565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19566,meta19565__$1){
var self__ = this;
var _19566__$1 = this;
return (new cljs.core.async.t_cljs$core$async19564(self__.alt_handler,self__.flag,self__.cb,meta19565__$1));
});

cljs.core.async.t_cljs$core$async19564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19566){
var self__ = this;
var _19566__$1 = this;
return self__.meta19565;
});

cljs.core.async.t_cljs$core$async19564.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19565","meta19565",1442121744,null)], null);
});

cljs.core.async.t_cljs$core$async19564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19564";

cljs.core.async.t_cljs$core$async19564.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async19564");
});

cljs.core.async.__GT_t_cljs$core$async19564 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19564(alt_handler__$1,flag__$1,cb__$1,meta19565){
return (new cljs.core.async.t_cljs$core$async19564(alt_handler__$1,flag__$1,cb__$1,meta19565));
});

}

return (new cljs.core.async.t_cljs$core$async19564(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19567_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19567_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19568_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19568_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16805__auto__ = wport;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19569 = (i + (1));
i = G__19569;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16805__auto__ = ret;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16793__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16793__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19575 = arguments.length;
var i__17864__auto___19576 = (0);
while(true){
if((i__17864__auto___19576 < len__17863__auto___19575)){
args__17870__auto__.push((arguments[i__17864__auto___19576]));

var G__19577 = (i__17864__auto___19576 + (1));
i__17864__auto___19576 = G__19577;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19572){
var map__19573 = p__19572;
var map__19573__$1 = ((((!((map__19573 == null)))?((((map__19573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19573):map__19573);
var opts = map__19573__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19570){
var G__19571 = cljs.core.first.call(null,seq19570);
var seq19570__$1 = cljs.core.next.call(null,seq19570);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19571,seq19570__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19578 = [];
var len__17863__auto___19628 = arguments.length;
var i__17864__auto___19629 = (0);
while(true){
if((i__17864__auto___19629 < len__17863__auto___19628)){
args19578.push((arguments[i__17864__auto___19629]));

var G__19630 = (i__17864__auto___19629 + (1));
i__17864__auto___19629 = G__19630;
continue;
} else {
}
break;
}

var G__19580 = args19578.length;
switch (G__19580) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19578.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19465__auto___19632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___19632){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___19632){
return (function (state_19604){
var state_val_19605 = (state_19604[(1)]);
if((state_val_19605 === (7))){
var inst_19600 = (state_19604[(2)]);
var state_19604__$1 = state_19604;
var statearr_19606_19633 = state_19604__$1;
(statearr_19606_19633[(2)] = inst_19600);

(statearr_19606_19633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19605 === (1))){
var state_19604__$1 = state_19604;
var statearr_19607_19634 = state_19604__$1;
(statearr_19607_19634[(2)] = null);

(statearr_19607_19634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19605 === (4))){
var inst_19583 = (state_19604[(7)]);
var inst_19583__$1 = (state_19604[(2)]);
var inst_19584 = (inst_19583__$1 == null);
var state_19604__$1 = (function (){var statearr_19608 = state_19604;
(statearr_19608[(7)] = inst_19583__$1);

return statearr_19608;
})();
if(cljs.core.truth_(inst_19584)){
var statearr_19609_19635 = state_19604__$1;
(statearr_19609_19635[(1)] = (5));

} else {
var statearr_19610_19636 = state_19604__$1;
(statearr_19610_19636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19605 === (13))){
var state_19604__$1 = state_19604;
var statearr_19611_19637 = state_19604__$1;
(statearr_19611_19637[(2)] = null);

(statearr_19611_19637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19605 === (6))){
var inst_19583 = (state_19604[(7)]);
var state_19604__$1 = state_19604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19604__$1,(11),to,inst_19583);
} else {
if((state_val_19605 === (3))){
var inst_19602 = (state_19604[(2)]);
var state_19604__$1 = state_19604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19604__$1,inst_19602);
} else {
if((state_val_19605 === (12))){
var state_19604__$1 = state_19604;
var statearr_19612_19638 = state_19604__$1;
(statearr_19612_19638[(2)] = null);

(statearr_19612_19638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19605 === (2))){
var state_19604__$1 = state_19604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19604__$1,(4),from);
} else {
if((state_val_19605 === (11))){
var inst_19593 = (state_19604[(2)]);
var state_19604__$1 = state_19604;
if(cljs.core.truth_(inst_19593)){
var statearr_19613_19639 = state_19604__$1;
(statearr_19613_19639[(1)] = (12));

} else {
var statearr_19614_19640 = state_19604__$1;
(statearr_19614_19640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19605 === (9))){
var state_19604__$1 = state_19604;
var statearr_19615_19641 = state_19604__$1;
(statearr_19615_19641[(2)] = null);

(statearr_19615_19641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19605 === (5))){
var state_19604__$1 = state_19604;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19616_19642 = state_19604__$1;
(statearr_19616_19642[(1)] = (8));

} else {
var statearr_19617_19643 = state_19604__$1;
(statearr_19617_19643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19605 === (14))){
var inst_19598 = (state_19604[(2)]);
var state_19604__$1 = state_19604;
var statearr_19618_19644 = state_19604__$1;
(statearr_19618_19644[(2)] = inst_19598);

(statearr_19618_19644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19605 === (10))){
var inst_19590 = (state_19604[(2)]);
var state_19604__$1 = state_19604;
var statearr_19619_19645 = state_19604__$1;
(statearr_19619_19645[(2)] = inst_19590);

(statearr_19619_19645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19605 === (8))){
var inst_19587 = cljs.core.async.close_BANG_.call(null,to);
var state_19604__$1 = state_19604;
var statearr_19620_19646 = state_19604__$1;
(statearr_19620_19646[(2)] = inst_19587);

(statearr_19620_19646[(1)] = (10));


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
});})(c__19465__auto___19632))
;
return ((function (switch__19353__auto__,c__19465__auto___19632){
return (function() {
var cljs$core$async$state_machine__19354__auto__ = null;
var cljs$core$async$state_machine__19354__auto____0 = (function (){
var statearr_19624 = [null,null,null,null,null,null,null,null];
(statearr_19624[(0)] = cljs$core$async$state_machine__19354__auto__);

(statearr_19624[(1)] = (1));

return statearr_19624;
});
var cljs$core$async$state_machine__19354__auto____1 = (function (state_19604){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_19604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e19625){if((e19625 instanceof Object)){
var ex__19357__auto__ = e19625;
var statearr_19626_19647 = state_19604;
(statearr_19626_19647[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19648 = state_19604;
state_19604 = G__19648;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$state_machine__19354__auto__ = function(state_19604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19354__auto____1.call(this,state_19604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19354__auto____0;
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19354__auto____1;
return cljs$core$async$state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___19632))
})();
var state__19467__auto__ = (function (){var statearr_19627 = f__19466__auto__.call(null);
(statearr_19627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___19632);

return statearr_19627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___19632))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19832){
var vec__19833 = p__19832;
var v = cljs.core.nth.call(null,vec__19833,(0),null);
var p = cljs.core.nth.call(null,vec__19833,(1),null);
var job = vec__19833;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19465__auto___20015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___20015,res,vec__19833,v,p,job,jobs,results){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___20015,res,vec__19833,v,p,job,jobs,results){
return (function (state_19838){
var state_val_19839 = (state_19838[(1)]);
if((state_val_19839 === (1))){
var state_19838__$1 = state_19838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19838__$1,(2),res,v);
} else {
if((state_val_19839 === (2))){
var inst_19835 = (state_19838[(2)]);
var inst_19836 = cljs.core.async.close_BANG_.call(null,res);
var state_19838__$1 = (function (){var statearr_19840 = state_19838;
(statearr_19840[(7)] = inst_19835);

return statearr_19840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19838__$1,inst_19836);
} else {
return null;
}
}
});})(c__19465__auto___20015,res,vec__19833,v,p,job,jobs,results))
;
return ((function (switch__19353__auto__,c__19465__auto___20015,res,vec__19833,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0 = (function (){
var statearr_19844 = [null,null,null,null,null,null,null,null];
(statearr_19844[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__);

(statearr_19844[(1)] = (1));

return statearr_19844;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1 = (function (state_19838){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_19838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e19845){if((e19845 instanceof Object)){
var ex__19357__auto__ = e19845;
var statearr_19846_20016 = state_19838;
(statearr_19846_20016[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20017 = state_19838;
state_19838 = G__20017;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__ = function(state_19838){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1.call(this,state_19838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___20015,res,vec__19833,v,p,job,jobs,results))
})();
var state__19467__auto__ = (function (){var statearr_19847 = f__19466__auto__.call(null);
(statearr_19847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___20015);

return statearr_19847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___20015,res,vec__19833,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19848){
var vec__19849 = p__19848;
var v = cljs.core.nth.call(null,vec__19849,(0),null);
var p = cljs.core.nth.call(null,vec__19849,(1),null);
var job = vec__19849;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17708__auto___20018 = n;
var __20019 = (0);
while(true){
if((__20019 < n__17708__auto___20018)){
var G__19850_20020 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19850_20020) {
case "compute":
var c__19465__auto___20022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20019,c__19465__auto___20022,G__19850_20020,n__17708__auto___20018,jobs,results,process,async){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (__20019,c__19465__auto___20022,G__19850_20020,n__17708__auto___20018,jobs,results,process,async){
return (function (state_19863){
var state_val_19864 = (state_19863[(1)]);
if((state_val_19864 === (1))){
var state_19863__$1 = state_19863;
var statearr_19865_20023 = state_19863__$1;
(statearr_19865_20023[(2)] = null);

(statearr_19865_20023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (2))){
var state_19863__$1 = state_19863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19863__$1,(4),jobs);
} else {
if((state_val_19864 === (3))){
var inst_19861 = (state_19863[(2)]);
var state_19863__$1 = state_19863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19863__$1,inst_19861);
} else {
if((state_val_19864 === (4))){
var inst_19853 = (state_19863[(2)]);
var inst_19854 = process.call(null,inst_19853);
var state_19863__$1 = state_19863;
if(cljs.core.truth_(inst_19854)){
var statearr_19866_20024 = state_19863__$1;
(statearr_19866_20024[(1)] = (5));

} else {
var statearr_19867_20025 = state_19863__$1;
(statearr_19867_20025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (5))){
var state_19863__$1 = state_19863;
var statearr_19868_20026 = state_19863__$1;
(statearr_19868_20026[(2)] = null);

(statearr_19868_20026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (6))){
var state_19863__$1 = state_19863;
var statearr_19869_20027 = state_19863__$1;
(statearr_19869_20027[(2)] = null);

(statearr_19869_20027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19864 === (7))){
var inst_19859 = (state_19863[(2)]);
var state_19863__$1 = state_19863;
var statearr_19870_20028 = state_19863__$1;
(statearr_19870_20028[(2)] = inst_19859);

(statearr_19870_20028[(1)] = (3));


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
});})(__20019,c__19465__auto___20022,G__19850_20020,n__17708__auto___20018,jobs,results,process,async))
;
return ((function (__20019,switch__19353__auto__,c__19465__auto___20022,G__19850_20020,n__17708__auto___20018,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0 = (function (){
var statearr_19874 = [null,null,null,null,null,null,null];
(statearr_19874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__);

(statearr_19874[(1)] = (1));

return statearr_19874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1 = (function (state_19863){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_19863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e19875){if((e19875 instanceof Object)){
var ex__19357__auto__ = e19875;
var statearr_19876_20029 = state_19863;
(statearr_19876_20029[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20030 = state_19863;
state_19863 = G__20030;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__ = function(state_19863){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1.call(this,state_19863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__;
})()
;})(__20019,switch__19353__auto__,c__19465__auto___20022,G__19850_20020,n__17708__auto___20018,jobs,results,process,async))
})();
var state__19467__auto__ = (function (){var statearr_19877 = f__19466__auto__.call(null);
(statearr_19877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___20022);

return statearr_19877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(__20019,c__19465__auto___20022,G__19850_20020,n__17708__auto___20018,jobs,results,process,async))
);


break;
case "async":
var c__19465__auto___20031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20019,c__19465__auto___20031,G__19850_20020,n__17708__auto___20018,jobs,results,process,async){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (__20019,c__19465__auto___20031,G__19850_20020,n__17708__auto___20018,jobs,results,process,async){
return (function (state_19890){
var state_val_19891 = (state_19890[(1)]);
if((state_val_19891 === (1))){
var state_19890__$1 = state_19890;
var statearr_19892_20032 = state_19890__$1;
(statearr_19892_20032[(2)] = null);

(statearr_19892_20032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (2))){
var state_19890__$1 = state_19890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19890__$1,(4),jobs);
} else {
if((state_val_19891 === (3))){
var inst_19888 = (state_19890[(2)]);
var state_19890__$1 = state_19890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19890__$1,inst_19888);
} else {
if((state_val_19891 === (4))){
var inst_19880 = (state_19890[(2)]);
var inst_19881 = async.call(null,inst_19880);
var state_19890__$1 = state_19890;
if(cljs.core.truth_(inst_19881)){
var statearr_19893_20033 = state_19890__$1;
(statearr_19893_20033[(1)] = (5));

} else {
var statearr_19894_20034 = state_19890__$1;
(statearr_19894_20034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (5))){
var state_19890__$1 = state_19890;
var statearr_19895_20035 = state_19890__$1;
(statearr_19895_20035[(2)] = null);

(statearr_19895_20035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (6))){
var state_19890__$1 = state_19890;
var statearr_19896_20036 = state_19890__$1;
(statearr_19896_20036[(2)] = null);

(statearr_19896_20036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (7))){
var inst_19886 = (state_19890[(2)]);
var state_19890__$1 = state_19890;
var statearr_19897_20037 = state_19890__$1;
(statearr_19897_20037[(2)] = inst_19886);

(statearr_19897_20037[(1)] = (3));


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
});})(__20019,c__19465__auto___20031,G__19850_20020,n__17708__auto___20018,jobs,results,process,async))
;
return ((function (__20019,switch__19353__auto__,c__19465__auto___20031,G__19850_20020,n__17708__auto___20018,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0 = (function (){
var statearr_19901 = [null,null,null,null,null,null,null];
(statearr_19901[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__);

(statearr_19901[(1)] = (1));

return statearr_19901;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1 = (function (state_19890){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_19890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e19902){if((e19902 instanceof Object)){
var ex__19357__auto__ = e19902;
var statearr_19903_20038 = state_19890;
(statearr_19903_20038[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20039 = state_19890;
state_19890 = G__20039;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__ = function(state_19890){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1.call(this,state_19890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__;
})()
;})(__20019,switch__19353__auto__,c__19465__auto___20031,G__19850_20020,n__17708__auto___20018,jobs,results,process,async))
})();
var state__19467__auto__ = (function (){var statearr_19904 = f__19466__auto__.call(null);
(statearr_19904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___20031);

return statearr_19904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(__20019,c__19465__auto___20031,G__19850_20020,n__17708__auto___20018,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20040 = (__20019 + (1));
__20019 = G__20040;
continue;
} else {
}
break;
}

var c__19465__auto___20041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___20041,jobs,results,process,async){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___20041,jobs,results,process,async){
return (function (state_19926){
var state_val_19927 = (state_19926[(1)]);
if((state_val_19927 === (1))){
var state_19926__$1 = state_19926;
var statearr_19928_20042 = state_19926__$1;
(statearr_19928_20042[(2)] = null);

(statearr_19928_20042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19927 === (2))){
var state_19926__$1 = state_19926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19926__$1,(4),from);
} else {
if((state_val_19927 === (3))){
var inst_19924 = (state_19926[(2)]);
var state_19926__$1 = state_19926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19926__$1,inst_19924);
} else {
if((state_val_19927 === (4))){
var inst_19907 = (state_19926[(7)]);
var inst_19907__$1 = (state_19926[(2)]);
var inst_19908 = (inst_19907__$1 == null);
var state_19926__$1 = (function (){var statearr_19929 = state_19926;
(statearr_19929[(7)] = inst_19907__$1);

return statearr_19929;
})();
if(cljs.core.truth_(inst_19908)){
var statearr_19930_20043 = state_19926__$1;
(statearr_19930_20043[(1)] = (5));

} else {
var statearr_19931_20044 = state_19926__$1;
(statearr_19931_20044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19927 === (5))){
var inst_19910 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19926__$1 = state_19926;
var statearr_19932_20045 = state_19926__$1;
(statearr_19932_20045[(2)] = inst_19910);

(statearr_19932_20045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19927 === (6))){
var inst_19912 = (state_19926[(8)]);
var inst_19907 = (state_19926[(7)]);
var inst_19912__$1 = cljs.core.async.chan.call(null,(1));
var inst_19913 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19914 = [inst_19907,inst_19912__$1];
var inst_19915 = (new cljs.core.PersistentVector(null,2,(5),inst_19913,inst_19914,null));
var state_19926__$1 = (function (){var statearr_19933 = state_19926;
(statearr_19933[(8)] = inst_19912__$1);

return statearr_19933;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19926__$1,(8),jobs,inst_19915);
} else {
if((state_val_19927 === (7))){
var inst_19922 = (state_19926[(2)]);
var state_19926__$1 = state_19926;
var statearr_19934_20046 = state_19926__$1;
(statearr_19934_20046[(2)] = inst_19922);

(statearr_19934_20046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19927 === (8))){
var inst_19912 = (state_19926[(8)]);
var inst_19917 = (state_19926[(2)]);
var state_19926__$1 = (function (){var statearr_19935 = state_19926;
(statearr_19935[(9)] = inst_19917);

return statearr_19935;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19926__$1,(9),results,inst_19912);
} else {
if((state_val_19927 === (9))){
var inst_19919 = (state_19926[(2)]);
var state_19926__$1 = (function (){var statearr_19936 = state_19926;
(statearr_19936[(10)] = inst_19919);

return statearr_19936;
})();
var statearr_19937_20047 = state_19926__$1;
(statearr_19937_20047[(2)] = null);

(statearr_19937_20047[(1)] = (2));


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
});})(c__19465__auto___20041,jobs,results,process,async))
;
return ((function (switch__19353__auto__,c__19465__auto___20041,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0 = (function (){
var statearr_19941 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__);

(statearr_19941[(1)] = (1));

return statearr_19941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1 = (function (state_19926){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_19926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e19942){if((e19942 instanceof Object)){
var ex__19357__auto__ = e19942;
var statearr_19943_20048 = state_19926;
(statearr_19943_20048[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20049 = state_19926;
state_19926 = G__20049;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__ = function(state_19926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1.call(this,state_19926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___20041,jobs,results,process,async))
})();
var state__19467__auto__ = (function (){var statearr_19944 = f__19466__auto__.call(null);
(statearr_19944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___20041);

return statearr_19944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___20041,jobs,results,process,async))
);


var c__19465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto__,jobs,results,process,async){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto__,jobs,results,process,async){
return (function (state_19982){
var state_val_19983 = (state_19982[(1)]);
if((state_val_19983 === (7))){
var inst_19978 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_19984_20050 = state_19982__$1;
(statearr_19984_20050[(2)] = inst_19978);

(statearr_19984_20050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (20))){
var state_19982__$1 = state_19982;
var statearr_19985_20051 = state_19982__$1;
(statearr_19985_20051[(2)] = null);

(statearr_19985_20051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (1))){
var state_19982__$1 = state_19982;
var statearr_19986_20052 = state_19982__$1;
(statearr_19986_20052[(2)] = null);

(statearr_19986_20052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (4))){
var inst_19947 = (state_19982[(7)]);
var inst_19947__$1 = (state_19982[(2)]);
var inst_19948 = (inst_19947__$1 == null);
var state_19982__$1 = (function (){var statearr_19987 = state_19982;
(statearr_19987[(7)] = inst_19947__$1);

return statearr_19987;
})();
if(cljs.core.truth_(inst_19948)){
var statearr_19988_20053 = state_19982__$1;
(statearr_19988_20053[(1)] = (5));

} else {
var statearr_19989_20054 = state_19982__$1;
(statearr_19989_20054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (15))){
var inst_19960 = (state_19982[(8)]);
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19982__$1,(18),to,inst_19960);
} else {
if((state_val_19983 === (21))){
var inst_19973 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_19990_20055 = state_19982__$1;
(statearr_19990_20055[(2)] = inst_19973);

(statearr_19990_20055[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (13))){
var inst_19975 = (state_19982[(2)]);
var state_19982__$1 = (function (){var statearr_19991 = state_19982;
(statearr_19991[(9)] = inst_19975);

return statearr_19991;
})();
var statearr_19992_20056 = state_19982__$1;
(statearr_19992_20056[(2)] = null);

(statearr_19992_20056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (6))){
var inst_19947 = (state_19982[(7)]);
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19982__$1,(11),inst_19947);
} else {
if((state_val_19983 === (17))){
var inst_19968 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
if(cljs.core.truth_(inst_19968)){
var statearr_19993_20057 = state_19982__$1;
(statearr_19993_20057[(1)] = (19));

} else {
var statearr_19994_20058 = state_19982__$1;
(statearr_19994_20058[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (3))){
var inst_19980 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19982__$1,inst_19980);
} else {
if((state_val_19983 === (12))){
var inst_19957 = (state_19982[(10)]);
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19982__$1,(14),inst_19957);
} else {
if((state_val_19983 === (2))){
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19982__$1,(4),results);
} else {
if((state_val_19983 === (19))){
var state_19982__$1 = state_19982;
var statearr_19995_20059 = state_19982__$1;
(statearr_19995_20059[(2)] = null);

(statearr_19995_20059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (11))){
var inst_19957 = (state_19982[(2)]);
var state_19982__$1 = (function (){var statearr_19996 = state_19982;
(statearr_19996[(10)] = inst_19957);

return statearr_19996;
})();
var statearr_19997_20060 = state_19982__$1;
(statearr_19997_20060[(2)] = null);

(statearr_19997_20060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (9))){
var state_19982__$1 = state_19982;
var statearr_19998_20061 = state_19982__$1;
(statearr_19998_20061[(2)] = null);

(statearr_19998_20061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (5))){
var state_19982__$1 = state_19982;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19999_20062 = state_19982__$1;
(statearr_19999_20062[(1)] = (8));

} else {
var statearr_20000_20063 = state_19982__$1;
(statearr_20000_20063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (14))){
var inst_19962 = (state_19982[(11)]);
var inst_19960 = (state_19982[(8)]);
var inst_19960__$1 = (state_19982[(2)]);
var inst_19961 = (inst_19960__$1 == null);
var inst_19962__$1 = cljs.core.not.call(null,inst_19961);
var state_19982__$1 = (function (){var statearr_20001 = state_19982;
(statearr_20001[(11)] = inst_19962__$1);

(statearr_20001[(8)] = inst_19960__$1);

return statearr_20001;
})();
if(inst_19962__$1){
var statearr_20002_20064 = state_19982__$1;
(statearr_20002_20064[(1)] = (15));

} else {
var statearr_20003_20065 = state_19982__$1;
(statearr_20003_20065[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (16))){
var inst_19962 = (state_19982[(11)]);
var state_19982__$1 = state_19982;
var statearr_20004_20066 = state_19982__$1;
(statearr_20004_20066[(2)] = inst_19962);

(statearr_20004_20066[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (10))){
var inst_19954 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_20005_20067 = state_19982__$1;
(statearr_20005_20067[(2)] = inst_19954);

(statearr_20005_20067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (18))){
var inst_19965 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_20006_20068 = state_19982__$1;
(statearr_20006_20068[(2)] = inst_19965);

(statearr_20006_20068[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (8))){
var inst_19951 = cljs.core.async.close_BANG_.call(null,to);
var state_19982__$1 = state_19982;
var statearr_20007_20069 = state_19982__$1;
(statearr_20007_20069[(2)] = inst_19951);

(statearr_20007_20069[(1)] = (10));


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
});})(c__19465__auto__,jobs,results,process,async))
;
return ((function (switch__19353__auto__,c__19465__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0 = (function (){
var statearr_20011 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__);

(statearr_20011[(1)] = (1));

return statearr_20011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1 = (function (state_19982){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_19982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e20012){if((e20012 instanceof Object)){
var ex__19357__auto__ = e20012;
var statearr_20013_20070 = state_19982;
(statearr_20013_20070[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20071 = state_19982;
state_19982 = G__20071;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__ = function(state_19982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1.call(this,state_19982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto__,jobs,results,process,async))
})();
var state__19467__auto__ = (function (){var statearr_20014 = f__19466__auto__.call(null);
(statearr_20014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto__);

return statearr_20014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto__,jobs,results,process,async))
);

return c__19465__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20072 = [];
var len__17863__auto___20075 = arguments.length;
var i__17864__auto___20076 = (0);
while(true){
if((i__17864__auto___20076 < len__17863__auto___20075)){
args20072.push((arguments[i__17864__auto___20076]));

var G__20077 = (i__17864__auto___20076 + (1));
i__17864__auto___20076 = G__20077;
continue;
} else {
}
break;
}

var G__20074 = args20072.length;
switch (G__20074) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20072.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20079 = [];
var len__17863__auto___20082 = arguments.length;
var i__17864__auto___20083 = (0);
while(true){
if((i__17864__auto___20083 < len__17863__auto___20082)){
args20079.push((arguments[i__17864__auto___20083]));

var G__20084 = (i__17864__auto___20083 + (1));
i__17864__auto___20083 = G__20084;
continue;
} else {
}
break;
}

var G__20081 = args20079.length;
switch (G__20081) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20079.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20086 = [];
var len__17863__auto___20139 = arguments.length;
var i__17864__auto___20140 = (0);
while(true){
if((i__17864__auto___20140 < len__17863__auto___20139)){
args20086.push((arguments[i__17864__auto___20140]));

var G__20141 = (i__17864__auto___20140 + (1));
i__17864__auto___20140 = G__20141;
continue;
} else {
}
break;
}

var G__20088 = args20086.length;
switch (G__20088) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20086.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19465__auto___20143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___20143,tc,fc){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___20143,tc,fc){
return (function (state_20114){
var state_val_20115 = (state_20114[(1)]);
if((state_val_20115 === (7))){
var inst_20110 = (state_20114[(2)]);
var state_20114__$1 = state_20114;
var statearr_20116_20144 = state_20114__$1;
(statearr_20116_20144[(2)] = inst_20110);

(statearr_20116_20144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (1))){
var state_20114__$1 = state_20114;
var statearr_20117_20145 = state_20114__$1;
(statearr_20117_20145[(2)] = null);

(statearr_20117_20145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (4))){
var inst_20091 = (state_20114[(7)]);
var inst_20091__$1 = (state_20114[(2)]);
var inst_20092 = (inst_20091__$1 == null);
var state_20114__$1 = (function (){var statearr_20118 = state_20114;
(statearr_20118[(7)] = inst_20091__$1);

return statearr_20118;
})();
if(cljs.core.truth_(inst_20092)){
var statearr_20119_20146 = state_20114__$1;
(statearr_20119_20146[(1)] = (5));

} else {
var statearr_20120_20147 = state_20114__$1;
(statearr_20120_20147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (13))){
var state_20114__$1 = state_20114;
var statearr_20121_20148 = state_20114__$1;
(statearr_20121_20148[(2)] = null);

(statearr_20121_20148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (6))){
var inst_20091 = (state_20114[(7)]);
var inst_20097 = p.call(null,inst_20091);
var state_20114__$1 = state_20114;
if(cljs.core.truth_(inst_20097)){
var statearr_20122_20149 = state_20114__$1;
(statearr_20122_20149[(1)] = (9));

} else {
var statearr_20123_20150 = state_20114__$1;
(statearr_20123_20150[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (3))){
var inst_20112 = (state_20114[(2)]);
var state_20114__$1 = state_20114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20114__$1,inst_20112);
} else {
if((state_val_20115 === (12))){
var state_20114__$1 = state_20114;
var statearr_20124_20151 = state_20114__$1;
(statearr_20124_20151[(2)] = null);

(statearr_20124_20151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (2))){
var state_20114__$1 = state_20114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20114__$1,(4),ch);
} else {
if((state_val_20115 === (11))){
var inst_20091 = (state_20114[(7)]);
var inst_20101 = (state_20114[(2)]);
var state_20114__$1 = state_20114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20114__$1,(8),inst_20101,inst_20091);
} else {
if((state_val_20115 === (9))){
var state_20114__$1 = state_20114;
var statearr_20125_20152 = state_20114__$1;
(statearr_20125_20152[(2)] = tc);

(statearr_20125_20152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (5))){
var inst_20094 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20095 = cljs.core.async.close_BANG_.call(null,fc);
var state_20114__$1 = (function (){var statearr_20126 = state_20114;
(statearr_20126[(8)] = inst_20094);

return statearr_20126;
})();
var statearr_20127_20153 = state_20114__$1;
(statearr_20127_20153[(2)] = inst_20095);

(statearr_20127_20153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (14))){
var inst_20108 = (state_20114[(2)]);
var state_20114__$1 = state_20114;
var statearr_20128_20154 = state_20114__$1;
(statearr_20128_20154[(2)] = inst_20108);

(statearr_20128_20154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (10))){
var state_20114__$1 = state_20114;
var statearr_20129_20155 = state_20114__$1;
(statearr_20129_20155[(2)] = fc);

(statearr_20129_20155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20115 === (8))){
var inst_20103 = (state_20114[(2)]);
var state_20114__$1 = state_20114;
if(cljs.core.truth_(inst_20103)){
var statearr_20130_20156 = state_20114__$1;
(statearr_20130_20156[(1)] = (12));

} else {
var statearr_20131_20157 = state_20114__$1;
(statearr_20131_20157[(1)] = (13));

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
});})(c__19465__auto___20143,tc,fc))
;
return ((function (switch__19353__auto__,c__19465__auto___20143,tc,fc){
return (function() {
var cljs$core$async$state_machine__19354__auto__ = null;
var cljs$core$async$state_machine__19354__auto____0 = (function (){
var statearr_20135 = [null,null,null,null,null,null,null,null,null];
(statearr_20135[(0)] = cljs$core$async$state_machine__19354__auto__);

(statearr_20135[(1)] = (1));

return statearr_20135;
});
var cljs$core$async$state_machine__19354__auto____1 = (function (state_20114){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_20114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e20136){if((e20136 instanceof Object)){
var ex__19357__auto__ = e20136;
var statearr_20137_20158 = state_20114;
(statearr_20137_20158[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20159 = state_20114;
state_20114 = G__20159;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$state_machine__19354__auto__ = function(state_20114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19354__auto____1.call(this,state_20114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19354__auto____0;
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19354__auto____1;
return cljs$core$async$state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___20143,tc,fc))
})();
var state__19467__auto__ = (function (){var statearr_20138 = f__19466__auto__.call(null);
(statearr_20138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___20143);

return statearr_20138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___20143,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto__){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto__){
return (function (state_20223){
var state_val_20224 = (state_20223[(1)]);
if((state_val_20224 === (7))){
var inst_20219 = (state_20223[(2)]);
var state_20223__$1 = state_20223;
var statearr_20225_20246 = state_20223__$1;
(statearr_20225_20246[(2)] = inst_20219);

(statearr_20225_20246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20224 === (1))){
var inst_20203 = init;
var state_20223__$1 = (function (){var statearr_20226 = state_20223;
(statearr_20226[(7)] = inst_20203);

return statearr_20226;
})();
var statearr_20227_20247 = state_20223__$1;
(statearr_20227_20247[(2)] = null);

(statearr_20227_20247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20224 === (4))){
var inst_20206 = (state_20223[(8)]);
var inst_20206__$1 = (state_20223[(2)]);
var inst_20207 = (inst_20206__$1 == null);
var state_20223__$1 = (function (){var statearr_20228 = state_20223;
(statearr_20228[(8)] = inst_20206__$1);

return statearr_20228;
})();
if(cljs.core.truth_(inst_20207)){
var statearr_20229_20248 = state_20223__$1;
(statearr_20229_20248[(1)] = (5));

} else {
var statearr_20230_20249 = state_20223__$1;
(statearr_20230_20249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20224 === (6))){
var inst_20203 = (state_20223[(7)]);
var inst_20206 = (state_20223[(8)]);
var inst_20210 = (state_20223[(9)]);
var inst_20210__$1 = f.call(null,inst_20203,inst_20206);
var inst_20211 = cljs.core.reduced_QMARK_.call(null,inst_20210__$1);
var state_20223__$1 = (function (){var statearr_20231 = state_20223;
(statearr_20231[(9)] = inst_20210__$1);

return statearr_20231;
})();
if(inst_20211){
var statearr_20232_20250 = state_20223__$1;
(statearr_20232_20250[(1)] = (8));

} else {
var statearr_20233_20251 = state_20223__$1;
(statearr_20233_20251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20224 === (3))){
var inst_20221 = (state_20223[(2)]);
var state_20223__$1 = state_20223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20223__$1,inst_20221);
} else {
if((state_val_20224 === (2))){
var state_20223__$1 = state_20223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20223__$1,(4),ch);
} else {
if((state_val_20224 === (9))){
var inst_20210 = (state_20223[(9)]);
var inst_20203 = inst_20210;
var state_20223__$1 = (function (){var statearr_20234 = state_20223;
(statearr_20234[(7)] = inst_20203);

return statearr_20234;
})();
var statearr_20235_20252 = state_20223__$1;
(statearr_20235_20252[(2)] = null);

(statearr_20235_20252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20224 === (5))){
var inst_20203 = (state_20223[(7)]);
var state_20223__$1 = state_20223;
var statearr_20236_20253 = state_20223__$1;
(statearr_20236_20253[(2)] = inst_20203);

(statearr_20236_20253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20224 === (10))){
var inst_20217 = (state_20223[(2)]);
var state_20223__$1 = state_20223;
var statearr_20237_20254 = state_20223__$1;
(statearr_20237_20254[(2)] = inst_20217);

(statearr_20237_20254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20224 === (8))){
var inst_20210 = (state_20223[(9)]);
var inst_20213 = cljs.core.deref.call(null,inst_20210);
var state_20223__$1 = state_20223;
var statearr_20238_20255 = state_20223__$1;
(statearr_20238_20255[(2)] = inst_20213);

(statearr_20238_20255[(1)] = (10));


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
});})(c__19465__auto__))
;
return ((function (switch__19353__auto__,c__19465__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19354__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19354__auto____0 = (function (){
var statearr_20242 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20242[(0)] = cljs$core$async$reduce_$_state_machine__19354__auto__);

(statearr_20242[(1)] = (1));

return statearr_20242;
});
var cljs$core$async$reduce_$_state_machine__19354__auto____1 = (function (state_20223){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_20223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e20243){if((e20243 instanceof Object)){
var ex__19357__auto__ = e20243;
var statearr_20244_20256 = state_20223;
(statearr_20244_20256[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20257 = state_20223;
state_20223 = G__20257;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19354__auto__ = function(state_20223){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19354__auto____1.call(this,state_20223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19354__auto____0;
cljs$core$async$reduce_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19354__auto____1;
return cljs$core$async$reduce_$_state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto__))
})();
var state__19467__auto__ = (function (){var statearr_20245 = f__19466__auto__.call(null);
(statearr_20245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto__);

return statearr_20245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto__))
);

return c__19465__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20258 = [];
var len__17863__auto___20310 = arguments.length;
var i__17864__auto___20311 = (0);
while(true){
if((i__17864__auto___20311 < len__17863__auto___20310)){
args20258.push((arguments[i__17864__auto___20311]));

var G__20312 = (i__17864__auto___20311 + (1));
i__17864__auto___20311 = G__20312;
continue;
} else {
}
break;
}

var G__20260 = args20258.length;
switch (G__20260) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20258.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto__){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto__){
return (function (state_20285){
var state_val_20286 = (state_20285[(1)]);
if((state_val_20286 === (7))){
var inst_20267 = (state_20285[(2)]);
var state_20285__$1 = state_20285;
var statearr_20287_20314 = state_20285__$1;
(statearr_20287_20314[(2)] = inst_20267);

(statearr_20287_20314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20286 === (1))){
var inst_20261 = cljs.core.seq.call(null,coll);
var inst_20262 = inst_20261;
var state_20285__$1 = (function (){var statearr_20288 = state_20285;
(statearr_20288[(7)] = inst_20262);

return statearr_20288;
})();
var statearr_20289_20315 = state_20285__$1;
(statearr_20289_20315[(2)] = null);

(statearr_20289_20315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20286 === (4))){
var inst_20262 = (state_20285[(7)]);
var inst_20265 = cljs.core.first.call(null,inst_20262);
var state_20285__$1 = state_20285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20285__$1,(7),ch,inst_20265);
} else {
if((state_val_20286 === (13))){
var inst_20279 = (state_20285[(2)]);
var state_20285__$1 = state_20285;
var statearr_20290_20316 = state_20285__$1;
(statearr_20290_20316[(2)] = inst_20279);

(statearr_20290_20316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20286 === (6))){
var inst_20270 = (state_20285[(2)]);
var state_20285__$1 = state_20285;
if(cljs.core.truth_(inst_20270)){
var statearr_20291_20317 = state_20285__$1;
(statearr_20291_20317[(1)] = (8));

} else {
var statearr_20292_20318 = state_20285__$1;
(statearr_20292_20318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20286 === (3))){
var inst_20283 = (state_20285[(2)]);
var state_20285__$1 = state_20285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20285__$1,inst_20283);
} else {
if((state_val_20286 === (12))){
var state_20285__$1 = state_20285;
var statearr_20293_20319 = state_20285__$1;
(statearr_20293_20319[(2)] = null);

(statearr_20293_20319[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20286 === (2))){
var inst_20262 = (state_20285[(7)]);
var state_20285__$1 = state_20285;
if(cljs.core.truth_(inst_20262)){
var statearr_20294_20320 = state_20285__$1;
(statearr_20294_20320[(1)] = (4));

} else {
var statearr_20295_20321 = state_20285__$1;
(statearr_20295_20321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20286 === (11))){
var inst_20276 = cljs.core.async.close_BANG_.call(null,ch);
var state_20285__$1 = state_20285;
var statearr_20296_20322 = state_20285__$1;
(statearr_20296_20322[(2)] = inst_20276);

(statearr_20296_20322[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20286 === (9))){
var state_20285__$1 = state_20285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20297_20323 = state_20285__$1;
(statearr_20297_20323[(1)] = (11));

} else {
var statearr_20298_20324 = state_20285__$1;
(statearr_20298_20324[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20286 === (5))){
var inst_20262 = (state_20285[(7)]);
var state_20285__$1 = state_20285;
var statearr_20299_20325 = state_20285__$1;
(statearr_20299_20325[(2)] = inst_20262);

(statearr_20299_20325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20286 === (10))){
var inst_20281 = (state_20285[(2)]);
var state_20285__$1 = state_20285;
var statearr_20300_20326 = state_20285__$1;
(statearr_20300_20326[(2)] = inst_20281);

(statearr_20300_20326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20286 === (8))){
var inst_20262 = (state_20285[(7)]);
var inst_20272 = cljs.core.next.call(null,inst_20262);
var inst_20262__$1 = inst_20272;
var state_20285__$1 = (function (){var statearr_20301 = state_20285;
(statearr_20301[(7)] = inst_20262__$1);

return statearr_20301;
})();
var statearr_20302_20327 = state_20285__$1;
(statearr_20302_20327[(2)] = null);

(statearr_20302_20327[(1)] = (2));


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
});})(c__19465__auto__))
;
return ((function (switch__19353__auto__,c__19465__auto__){
return (function() {
var cljs$core$async$state_machine__19354__auto__ = null;
var cljs$core$async$state_machine__19354__auto____0 = (function (){
var statearr_20306 = [null,null,null,null,null,null,null,null];
(statearr_20306[(0)] = cljs$core$async$state_machine__19354__auto__);

(statearr_20306[(1)] = (1));

return statearr_20306;
});
var cljs$core$async$state_machine__19354__auto____1 = (function (state_20285){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_20285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e20307){if((e20307 instanceof Object)){
var ex__19357__auto__ = e20307;
var statearr_20308_20328 = state_20285;
(statearr_20308_20328[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20329 = state_20285;
state_20285 = G__20329;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$state_machine__19354__auto__ = function(state_20285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19354__auto____1.call(this,state_20285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19354__auto____0;
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19354__auto____1;
return cljs$core$async$state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto__))
})();
var state__19467__auto__ = (function (){var statearr_20309 = f__19466__auto__.call(null);
(statearr_20309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto__);

return statearr_20309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto__))
);

return c__19465__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_);
} else {
var m__17461__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20551 = (function (mult,ch,cs,meta20552){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20552 = meta20552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20553,meta20552__$1){
var self__ = this;
var _20553__$1 = this;
return (new cljs.core.async.t_cljs$core$async20551(self__.mult,self__.ch,self__.cs,meta20552__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20553){
var self__ = this;
var _20553__$1 = this;
return self__.meta20552;
});})(cs))
;

cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20551.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20552","meta20552",-582972342,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20551";

cljs.core.async.t_cljs$core$async20551.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20551");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20551 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20551(mult__$1,ch__$1,cs__$1,meta20552){
return (new cljs.core.async.t_cljs$core$async20551(mult__$1,ch__$1,cs__$1,meta20552));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20551(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19465__auto___20772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___20772,cs,m,dchan,dctr,done){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___20772,cs,m,dchan,dctr,done){
return (function (state_20684){
var state_val_20685 = (state_20684[(1)]);
if((state_val_20685 === (7))){
var inst_20680 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20686_20773 = state_20684__$1;
(statearr_20686_20773[(2)] = inst_20680);

(statearr_20686_20773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (20))){
var inst_20585 = (state_20684[(7)]);
var inst_20595 = cljs.core.first.call(null,inst_20585);
var inst_20596 = cljs.core.nth.call(null,inst_20595,(0),null);
var inst_20597 = cljs.core.nth.call(null,inst_20595,(1),null);
var state_20684__$1 = (function (){var statearr_20687 = state_20684;
(statearr_20687[(8)] = inst_20596);

return statearr_20687;
})();
if(cljs.core.truth_(inst_20597)){
var statearr_20688_20774 = state_20684__$1;
(statearr_20688_20774[(1)] = (22));

} else {
var statearr_20689_20775 = state_20684__$1;
(statearr_20689_20775[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (27))){
var inst_20632 = (state_20684[(9)]);
var inst_20625 = (state_20684[(10)]);
var inst_20627 = (state_20684[(11)]);
var inst_20556 = (state_20684[(12)]);
var inst_20632__$1 = cljs.core._nth.call(null,inst_20625,inst_20627);
var inst_20633 = cljs.core.async.put_BANG_.call(null,inst_20632__$1,inst_20556,done);
var state_20684__$1 = (function (){var statearr_20690 = state_20684;
(statearr_20690[(9)] = inst_20632__$1);

return statearr_20690;
})();
if(cljs.core.truth_(inst_20633)){
var statearr_20691_20776 = state_20684__$1;
(statearr_20691_20776[(1)] = (30));

} else {
var statearr_20692_20777 = state_20684__$1;
(statearr_20692_20777[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (1))){
var state_20684__$1 = state_20684;
var statearr_20693_20778 = state_20684__$1;
(statearr_20693_20778[(2)] = null);

(statearr_20693_20778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (24))){
var inst_20585 = (state_20684[(7)]);
var inst_20602 = (state_20684[(2)]);
var inst_20603 = cljs.core.next.call(null,inst_20585);
var inst_20565 = inst_20603;
var inst_20566 = null;
var inst_20567 = (0);
var inst_20568 = (0);
var state_20684__$1 = (function (){var statearr_20694 = state_20684;
(statearr_20694[(13)] = inst_20566);

(statearr_20694[(14)] = inst_20565);

(statearr_20694[(15)] = inst_20567);

(statearr_20694[(16)] = inst_20568);

(statearr_20694[(17)] = inst_20602);

return statearr_20694;
})();
var statearr_20695_20779 = state_20684__$1;
(statearr_20695_20779[(2)] = null);

(statearr_20695_20779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (39))){
var state_20684__$1 = state_20684;
var statearr_20699_20780 = state_20684__$1;
(statearr_20699_20780[(2)] = null);

(statearr_20699_20780[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (4))){
var inst_20556 = (state_20684[(12)]);
var inst_20556__$1 = (state_20684[(2)]);
var inst_20557 = (inst_20556__$1 == null);
var state_20684__$1 = (function (){var statearr_20700 = state_20684;
(statearr_20700[(12)] = inst_20556__$1);

return statearr_20700;
})();
if(cljs.core.truth_(inst_20557)){
var statearr_20701_20781 = state_20684__$1;
(statearr_20701_20781[(1)] = (5));

} else {
var statearr_20702_20782 = state_20684__$1;
(statearr_20702_20782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (15))){
var inst_20566 = (state_20684[(13)]);
var inst_20565 = (state_20684[(14)]);
var inst_20567 = (state_20684[(15)]);
var inst_20568 = (state_20684[(16)]);
var inst_20581 = (state_20684[(2)]);
var inst_20582 = (inst_20568 + (1));
var tmp20696 = inst_20566;
var tmp20697 = inst_20565;
var tmp20698 = inst_20567;
var inst_20565__$1 = tmp20697;
var inst_20566__$1 = tmp20696;
var inst_20567__$1 = tmp20698;
var inst_20568__$1 = inst_20582;
var state_20684__$1 = (function (){var statearr_20703 = state_20684;
(statearr_20703[(13)] = inst_20566__$1);

(statearr_20703[(14)] = inst_20565__$1);

(statearr_20703[(15)] = inst_20567__$1);

(statearr_20703[(16)] = inst_20568__$1);

(statearr_20703[(18)] = inst_20581);

return statearr_20703;
})();
var statearr_20704_20783 = state_20684__$1;
(statearr_20704_20783[(2)] = null);

(statearr_20704_20783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (21))){
var inst_20606 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20708_20784 = state_20684__$1;
(statearr_20708_20784[(2)] = inst_20606);

(statearr_20708_20784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (31))){
var inst_20632 = (state_20684[(9)]);
var inst_20636 = done.call(null,null);
var inst_20637 = cljs.core.async.untap_STAR_.call(null,m,inst_20632);
var state_20684__$1 = (function (){var statearr_20709 = state_20684;
(statearr_20709[(19)] = inst_20636);

return statearr_20709;
})();
var statearr_20710_20785 = state_20684__$1;
(statearr_20710_20785[(2)] = inst_20637);

(statearr_20710_20785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (32))){
var inst_20626 = (state_20684[(20)]);
var inst_20625 = (state_20684[(10)]);
var inst_20627 = (state_20684[(11)]);
var inst_20624 = (state_20684[(21)]);
var inst_20639 = (state_20684[(2)]);
var inst_20640 = (inst_20627 + (1));
var tmp20705 = inst_20626;
var tmp20706 = inst_20625;
var tmp20707 = inst_20624;
var inst_20624__$1 = tmp20707;
var inst_20625__$1 = tmp20706;
var inst_20626__$1 = tmp20705;
var inst_20627__$1 = inst_20640;
var state_20684__$1 = (function (){var statearr_20711 = state_20684;
(statearr_20711[(20)] = inst_20626__$1);

(statearr_20711[(10)] = inst_20625__$1);

(statearr_20711[(11)] = inst_20627__$1);

(statearr_20711[(22)] = inst_20639);

(statearr_20711[(21)] = inst_20624__$1);

return statearr_20711;
})();
var statearr_20712_20786 = state_20684__$1;
(statearr_20712_20786[(2)] = null);

(statearr_20712_20786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (40))){
var inst_20652 = (state_20684[(23)]);
var inst_20656 = done.call(null,null);
var inst_20657 = cljs.core.async.untap_STAR_.call(null,m,inst_20652);
var state_20684__$1 = (function (){var statearr_20713 = state_20684;
(statearr_20713[(24)] = inst_20656);

return statearr_20713;
})();
var statearr_20714_20787 = state_20684__$1;
(statearr_20714_20787[(2)] = inst_20657);

(statearr_20714_20787[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (33))){
var inst_20643 = (state_20684[(25)]);
var inst_20645 = cljs.core.chunked_seq_QMARK_.call(null,inst_20643);
var state_20684__$1 = state_20684;
if(inst_20645){
var statearr_20715_20788 = state_20684__$1;
(statearr_20715_20788[(1)] = (36));

} else {
var statearr_20716_20789 = state_20684__$1;
(statearr_20716_20789[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (13))){
var inst_20575 = (state_20684[(26)]);
var inst_20578 = cljs.core.async.close_BANG_.call(null,inst_20575);
var state_20684__$1 = state_20684;
var statearr_20717_20790 = state_20684__$1;
(statearr_20717_20790[(2)] = inst_20578);

(statearr_20717_20790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (22))){
var inst_20596 = (state_20684[(8)]);
var inst_20599 = cljs.core.async.close_BANG_.call(null,inst_20596);
var state_20684__$1 = state_20684;
var statearr_20718_20791 = state_20684__$1;
(statearr_20718_20791[(2)] = inst_20599);

(statearr_20718_20791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (36))){
var inst_20643 = (state_20684[(25)]);
var inst_20647 = cljs.core.chunk_first.call(null,inst_20643);
var inst_20648 = cljs.core.chunk_rest.call(null,inst_20643);
var inst_20649 = cljs.core.count.call(null,inst_20647);
var inst_20624 = inst_20648;
var inst_20625 = inst_20647;
var inst_20626 = inst_20649;
var inst_20627 = (0);
var state_20684__$1 = (function (){var statearr_20719 = state_20684;
(statearr_20719[(20)] = inst_20626);

(statearr_20719[(10)] = inst_20625);

(statearr_20719[(11)] = inst_20627);

(statearr_20719[(21)] = inst_20624);

return statearr_20719;
})();
var statearr_20720_20792 = state_20684__$1;
(statearr_20720_20792[(2)] = null);

(statearr_20720_20792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (41))){
var inst_20643 = (state_20684[(25)]);
var inst_20659 = (state_20684[(2)]);
var inst_20660 = cljs.core.next.call(null,inst_20643);
var inst_20624 = inst_20660;
var inst_20625 = null;
var inst_20626 = (0);
var inst_20627 = (0);
var state_20684__$1 = (function (){var statearr_20721 = state_20684;
(statearr_20721[(20)] = inst_20626);

(statearr_20721[(27)] = inst_20659);

(statearr_20721[(10)] = inst_20625);

(statearr_20721[(11)] = inst_20627);

(statearr_20721[(21)] = inst_20624);

return statearr_20721;
})();
var statearr_20722_20793 = state_20684__$1;
(statearr_20722_20793[(2)] = null);

(statearr_20722_20793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (43))){
var state_20684__$1 = state_20684;
var statearr_20723_20794 = state_20684__$1;
(statearr_20723_20794[(2)] = null);

(statearr_20723_20794[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (29))){
var inst_20668 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20724_20795 = state_20684__$1;
(statearr_20724_20795[(2)] = inst_20668);

(statearr_20724_20795[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (44))){
var inst_20677 = (state_20684[(2)]);
var state_20684__$1 = (function (){var statearr_20725 = state_20684;
(statearr_20725[(28)] = inst_20677);

return statearr_20725;
})();
var statearr_20726_20796 = state_20684__$1;
(statearr_20726_20796[(2)] = null);

(statearr_20726_20796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (6))){
var inst_20616 = (state_20684[(29)]);
var inst_20615 = cljs.core.deref.call(null,cs);
var inst_20616__$1 = cljs.core.keys.call(null,inst_20615);
var inst_20617 = cljs.core.count.call(null,inst_20616__$1);
var inst_20618 = cljs.core.reset_BANG_.call(null,dctr,inst_20617);
var inst_20623 = cljs.core.seq.call(null,inst_20616__$1);
var inst_20624 = inst_20623;
var inst_20625 = null;
var inst_20626 = (0);
var inst_20627 = (0);
var state_20684__$1 = (function (){var statearr_20727 = state_20684;
(statearr_20727[(20)] = inst_20626);

(statearr_20727[(10)] = inst_20625);

(statearr_20727[(11)] = inst_20627);

(statearr_20727[(29)] = inst_20616__$1);

(statearr_20727[(30)] = inst_20618);

(statearr_20727[(21)] = inst_20624);

return statearr_20727;
})();
var statearr_20728_20797 = state_20684__$1;
(statearr_20728_20797[(2)] = null);

(statearr_20728_20797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (28))){
var inst_20643 = (state_20684[(25)]);
var inst_20624 = (state_20684[(21)]);
var inst_20643__$1 = cljs.core.seq.call(null,inst_20624);
var state_20684__$1 = (function (){var statearr_20729 = state_20684;
(statearr_20729[(25)] = inst_20643__$1);

return statearr_20729;
})();
if(inst_20643__$1){
var statearr_20730_20798 = state_20684__$1;
(statearr_20730_20798[(1)] = (33));

} else {
var statearr_20731_20799 = state_20684__$1;
(statearr_20731_20799[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (25))){
var inst_20626 = (state_20684[(20)]);
var inst_20627 = (state_20684[(11)]);
var inst_20629 = (inst_20627 < inst_20626);
var inst_20630 = inst_20629;
var state_20684__$1 = state_20684;
if(cljs.core.truth_(inst_20630)){
var statearr_20732_20800 = state_20684__$1;
(statearr_20732_20800[(1)] = (27));

} else {
var statearr_20733_20801 = state_20684__$1;
(statearr_20733_20801[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (34))){
var state_20684__$1 = state_20684;
var statearr_20734_20802 = state_20684__$1;
(statearr_20734_20802[(2)] = null);

(statearr_20734_20802[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (17))){
var state_20684__$1 = state_20684;
var statearr_20735_20803 = state_20684__$1;
(statearr_20735_20803[(2)] = null);

(statearr_20735_20803[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (3))){
var inst_20682 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20684__$1,inst_20682);
} else {
if((state_val_20685 === (12))){
var inst_20611 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20736_20804 = state_20684__$1;
(statearr_20736_20804[(2)] = inst_20611);

(statearr_20736_20804[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (2))){
var state_20684__$1 = state_20684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20684__$1,(4),ch);
} else {
if((state_val_20685 === (23))){
var state_20684__$1 = state_20684;
var statearr_20737_20805 = state_20684__$1;
(statearr_20737_20805[(2)] = null);

(statearr_20737_20805[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (35))){
var inst_20666 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20738_20806 = state_20684__$1;
(statearr_20738_20806[(2)] = inst_20666);

(statearr_20738_20806[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (19))){
var inst_20585 = (state_20684[(7)]);
var inst_20589 = cljs.core.chunk_first.call(null,inst_20585);
var inst_20590 = cljs.core.chunk_rest.call(null,inst_20585);
var inst_20591 = cljs.core.count.call(null,inst_20589);
var inst_20565 = inst_20590;
var inst_20566 = inst_20589;
var inst_20567 = inst_20591;
var inst_20568 = (0);
var state_20684__$1 = (function (){var statearr_20739 = state_20684;
(statearr_20739[(13)] = inst_20566);

(statearr_20739[(14)] = inst_20565);

(statearr_20739[(15)] = inst_20567);

(statearr_20739[(16)] = inst_20568);

return statearr_20739;
})();
var statearr_20740_20807 = state_20684__$1;
(statearr_20740_20807[(2)] = null);

(statearr_20740_20807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (11))){
var inst_20565 = (state_20684[(14)]);
var inst_20585 = (state_20684[(7)]);
var inst_20585__$1 = cljs.core.seq.call(null,inst_20565);
var state_20684__$1 = (function (){var statearr_20741 = state_20684;
(statearr_20741[(7)] = inst_20585__$1);

return statearr_20741;
})();
if(inst_20585__$1){
var statearr_20742_20808 = state_20684__$1;
(statearr_20742_20808[(1)] = (16));

} else {
var statearr_20743_20809 = state_20684__$1;
(statearr_20743_20809[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (9))){
var inst_20613 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20744_20810 = state_20684__$1;
(statearr_20744_20810[(2)] = inst_20613);

(statearr_20744_20810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (5))){
var inst_20563 = cljs.core.deref.call(null,cs);
var inst_20564 = cljs.core.seq.call(null,inst_20563);
var inst_20565 = inst_20564;
var inst_20566 = null;
var inst_20567 = (0);
var inst_20568 = (0);
var state_20684__$1 = (function (){var statearr_20745 = state_20684;
(statearr_20745[(13)] = inst_20566);

(statearr_20745[(14)] = inst_20565);

(statearr_20745[(15)] = inst_20567);

(statearr_20745[(16)] = inst_20568);

return statearr_20745;
})();
var statearr_20746_20811 = state_20684__$1;
(statearr_20746_20811[(2)] = null);

(statearr_20746_20811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (14))){
var state_20684__$1 = state_20684;
var statearr_20747_20812 = state_20684__$1;
(statearr_20747_20812[(2)] = null);

(statearr_20747_20812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (45))){
var inst_20674 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20748_20813 = state_20684__$1;
(statearr_20748_20813[(2)] = inst_20674);

(statearr_20748_20813[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (26))){
var inst_20616 = (state_20684[(29)]);
var inst_20670 = (state_20684[(2)]);
var inst_20671 = cljs.core.seq.call(null,inst_20616);
var state_20684__$1 = (function (){var statearr_20749 = state_20684;
(statearr_20749[(31)] = inst_20670);

return statearr_20749;
})();
if(inst_20671){
var statearr_20750_20814 = state_20684__$1;
(statearr_20750_20814[(1)] = (42));

} else {
var statearr_20751_20815 = state_20684__$1;
(statearr_20751_20815[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (16))){
var inst_20585 = (state_20684[(7)]);
var inst_20587 = cljs.core.chunked_seq_QMARK_.call(null,inst_20585);
var state_20684__$1 = state_20684;
if(inst_20587){
var statearr_20752_20816 = state_20684__$1;
(statearr_20752_20816[(1)] = (19));

} else {
var statearr_20753_20817 = state_20684__$1;
(statearr_20753_20817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (38))){
var inst_20663 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20754_20818 = state_20684__$1;
(statearr_20754_20818[(2)] = inst_20663);

(statearr_20754_20818[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (30))){
var state_20684__$1 = state_20684;
var statearr_20755_20819 = state_20684__$1;
(statearr_20755_20819[(2)] = null);

(statearr_20755_20819[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (10))){
var inst_20566 = (state_20684[(13)]);
var inst_20568 = (state_20684[(16)]);
var inst_20574 = cljs.core._nth.call(null,inst_20566,inst_20568);
var inst_20575 = cljs.core.nth.call(null,inst_20574,(0),null);
var inst_20576 = cljs.core.nth.call(null,inst_20574,(1),null);
var state_20684__$1 = (function (){var statearr_20756 = state_20684;
(statearr_20756[(26)] = inst_20575);

return statearr_20756;
})();
if(cljs.core.truth_(inst_20576)){
var statearr_20757_20820 = state_20684__$1;
(statearr_20757_20820[(1)] = (13));

} else {
var statearr_20758_20821 = state_20684__$1;
(statearr_20758_20821[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (18))){
var inst_20609 = (state_20684[(2)]);
var state_20684__$1 = state_20684;
var statearr_20759_20822 = state_20684__$1;
(statearr_20759_20822[(2)] = inst_20609);

(statearr_20759_20822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (42))){
var state_20684__$1 = state_20684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20684__$1,(45),dchan);
} else {
if((state_val_20685 === (37))){
var inst_20643 = (state_20684[(25)]);
var inst_20556 = (state_20684[(12)]);
var inst_20652 = (state_20684[(23)]);
var inst_20652__$1 = cljs.core.first.call(null,inst_20643);
var inst_20653 = cljs.core.async.put_BANG_.call(null,inst_20652__$1,inst_20556,done);
var state_20684__$1 = (function (){var statearr_20760 = state_20684;
(statearr_20760[(23)] = inst_20652__$1);

return statearr_20760;
})();
if(cljs.core.truth_(inst_20653)){
var statearr_20761_20823 = state_20684__$1;
(statearr_20761_20823[(1)] = (39));

} else {
var statearr_20762_20824 = state_20684__$1;
(statearr_20762_20824[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20685 === (8))){
var inst_20567 = (state_20684[(15)]);
var inst_20568 = (state_20684[(16)]);
var inst_20570 = (inst_20568 < inst_20567);
var inst_20571 = inst_20570;
var state_20684__$1 = state_20684;
if(cljs.core.truth_(inst_20571)){
var statearr_20763_20825 = state_20684__$1;
(statearr_20763_20825[(1)] = (10));

} else {
var statearr_20764_20826 = state_20684__$1;
(statearr_20764_20826[(1)] = (11));

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
});})(c__19465__auto___20772,cs,m,dchan,dctr,done))
;
return ((function (switch__19353__auto__,c__19465__auto___20772,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19354__auto__ = null;
var cljs$core$async$mult_$_state_machine__19354__auto____0 = (function (){
var statearr_20768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20768[(0)] = cljs$core$async$mult_$_state_machine__19354__auto__);

(statearr_20768[(1)] = (1));

return statearr_20768;
});
var cljs$core$async$mult_$_state_machine__19354__auto____1 = (function (state_20684){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_20684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e20769){if((e20769 instanceof Object)){
var ex__19357__auto__ = e20769;
var statearr_20770_20827 = state_20684;
(statearr_20770_20827[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20828 = state_20684;
state_20684 = G__20828;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19354__auto__ = function(state_20684){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19354__auto____1.call(this,state_20684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19354__auto____0;
cljs$core$async$mult_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19354__auto____1;
return cljs$core$async$mult_$_state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___20772,cs,m,dchan,dctr,done))
})();
var state__19467__auto__ = (function (){var statearr_20771 = f__19466__auto__.call(null);
(statearr_20771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___20772);

return statearr_20771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___20772,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20829 = [];
var len__17863__auto___20832 = arguments.length;
var i__17864__auto___20833 = (0);
while(true){
if((i__17864__auto___20833 < len__17863__auto___20832)){
args20829.push((arguments[i__17864__auto___20833]));

var G__20834 = (i__17864__auto___20833 + (1));
i__17864__auto___20833 = G__20834;
continue;
} else {
}
break;
}

var G__20831 = args20829.length;
switch (G__20831) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20829.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,state_map);
} else {
var m__17461__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,mode);
} else {
var m__17461__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20846 = arguments.length;
var i__17864__auto___20847 = (0);
while(true){
if((i__17864__auto___20847 < len__17863__auto___20846)){
args__17870__auto__.push((arguments[i__17864__auto___20847]));

var G__20848 = (i__17864__auto___20847 + (1));
i__17864__auto___20847 = G__20848;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((3) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17871__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20840){
var map__20841 = p__20840;
var map__20841__$1 = ((((!((map__20841 == null)))?((((map__20841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20841):map__20841);
var opts = map__20841__$1;
var statearr_20843_20849 = state;
(statearr_20843_20849[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20841,map__20841__$1,opts){
return (function (val){
var statearr_20844_20850 = state;
(statearr_20844_20850[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20841,map__20841__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20845_20851 = state;
(statearr_20845_20851[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20836){
var G__20837 = cljs.core.first.call(null,seq20836);
var seq20836__$1 = cljs.core.next.call(null,seq20836);
var G__20838 = cljs.core.first.call(null,seq20836__$1);
var seq20836__$2 = cljs.core.next.call(null,seq20836__$1);
var G__20839 = cljs.core.first.call(null,seq20836__$2);
var seq20836__$3 = cljs.core.next.call(null,seq20836__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20837,G__20838,G__20839,seq20836__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21015 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21016){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21016 = meta21016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21017,meta21016__$1){
var self__ = this;
var _21017__$1 = this;
return (new cljs.core.async.t_cljs$core$async21015(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21016__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21017){
var self__ = this;
var _21017__$1 = this;
return self__.meta21016;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21015.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21015.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21015.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21015.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21015.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21015.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21015.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21015.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21016","meta21016",-409800117,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21015";

cljs.core.async.t_cljs$core$async21015.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21015");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21015 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21015(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21016){
return (new cljs.core.async.t_cljs$core$async21015(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21016));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21015(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19465__auto___21178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___21178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___21178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21115){
var state_val_21116 = (state_21115[(1)]);
if((state_val_21116 === (7))){
var inst_21033 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21117_21179 = state_21115__$1;
(statearr_21117_21179[(2)] = inst_21033);

(statearr_21117_21179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (20))){
var inst_21045 = (state_21115[(7)]);
var state_21115__$1 = state_21115;
var statearr_21118_21180 = state_21115__$1;
(statearr_21118_21180[(2)] = inst_21045);

(statearr_21118_21180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (27))){
var state_21115__$1 = state_21115;
var statearr_21119_21181 = state_21115__$1;
(statearr_21119_21181[(2)] = null);

(statearr_21119_21181[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (1))){
var inst_21021 = (state_21115[(8)]);
var inst_21021__$1 = calc_state.call(null);
var inst_21023 = (inst_21021__$1 == null);
var inst_21024 = cljs.core.not.call(null,inst_21023);
var state_21115__$1 = (function (){var statearr_21120 = state_21115;
(statearr_21120[(8)] = inst_21021__$1);

return statearr_21120;
})();
if(inst_21024){
var statearr_21121_21182 = state_21115__$1;
(statearr_21121_21182[(1)] = (2));

} else {
var statearr_21122_21183 = state_21115__$1;
(statearr_21122_21183[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (24))){
var inst_21089 = (state_21115[(9)]);
var inst_21068 = (state_21115[(10)]);
var inst_21075 = (state_21115[(11)]);
var inst_21089__$1 = inst_21068.call(null,inst_21075);
var state_21115__$1 = (function (){var statearr_21123 = state_21115;
(statearr_21123[(9)] = inst_21089__$1);

return statearr_21123;
})();
if(cljs.core.truth_(inst_21089__$1)){
var statearr_21124_21184 = state_21115__$1;
(statearr_21124_21184[(1)] = (29));

} else {
var statearr_21125_21185 = state_21115__$1;
(statearr_21125_21185[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (4))){
var inst_21036 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
if(cljs.core.truth_(inst_21036)){
var statearr_21126_21186 = state_21115__$1;
(statearr_21126_21186[(1)] = (8));

} else {
var statearr_21127_21187 = state_21115__$1;
(statearr_21127_21187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (15))){
var inst_21062 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
if(cljs.core.truth_(inst_21062)){
var statearr_21128_21188 = state_21115__$1;
(statearr_21128_21188[(1)] = (19));

} else {
var statearr_21129_21189 = state_21115__$1;
(statearr_21129_21189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (21))){
var inst_21067 = (state_21115[(12)]);
var inst_21067__$1 = (state_21115[(2)]);
var inst_21068 = cljs.core.get.call(null,inst_21067__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21069 = cljs.core.get.call(null,inst_21067__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21070 = cljs.core.get.call(null,inst_21067__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21115__$1 = (function (){var statearr_21130 = state_21115;
(statearr_21130[(10)] = inst_21068);

(statearr_21130[(12)] = inst_21067__$1);

(statearr_21130[(13)] = inst_21069);

return statearr_21130;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21115__$1,(22),inst_21070);
} else {
if((state_val_21116 === (31))){
var inst_21097 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
if(cljs.core.truth_(inst_21097)){
var statearr_21131_21190 = state_21115__$1;
(statearr_21131_21190[(1)] = (32));

} else {
var statearr_21132_21191 = state_21115__$1;
(statearr_21132_21191[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (32))){
var inst_21074 = (state_21115[(14)]);
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21115__$1,(35),out,inst_21074);
} else {
if((state_val_21116 === (33))){
var inst_21067 = (state_21115[(12)]);
var inst_21045 = inst_21067;
var state_21115__$1 = (function (){var statearr_21133 = state_21115;
(statearr_21133[(7)] = inst_21045);

return statearr_21133;
})();
var statearr_21134_21192 = state_21115__$1;
(statearr_21134_21192[(2)] = null);

(statearr_21134_21192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (13))){
var inst_21045 = (state_21115[(7)]);
var inst_21052 = inst_21045.cljs$lang$protocol_mask$partition0$;
var inst_21053 = (inst_21052 & (64));
var inst_21054 = inst_21045.cljs$core$ISeq$;
var inst_21055 = (inst_21053) || (inst_21054);
var state_21115__$1 = state_21115;
if(cljs.core.truth_(inst_21055)){
var statearr_21135_21193 = state_21115__$1;
(statearr_21135_21193[(1)] = (16));

} else {
var statearr_21136_21194 = state_21115__$1;
(statearr_21136_21194[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (22))){
var inst_21074 = (state_21115[(14)]);
var inst_21075 = (state_21115[(11)]);
var inst_21073 = (state_21115[(2)]);
var inst_21074__$1 = cljs.core.nth.call(null,inst_21073,(0),null);
var inst_21075__$1 = cljs.core.nth.call(null,inst_21073,(1),null);
var inst_21076 = (inst_21074__$1 == null);
var inst_21077 = cljs.core._EQ_.call(null,inst_21075__$1,change);
var inst_21078 = (inst_21076) || (inst_21077);
var state_21115__$1 = (function (){var statearr_21137 = state_21115;
(statearr_21137[(14)] = inst_21074__$1);

(statearr_21137[(11)] = inst_21075__$1);

return statearr_21137;
})();
if(cljs.core.truth_(inst_21078)){
var statearr_21138_21195 = state_21115__$1;
(statearr_21138_21195[(1)] = (23));

} else {
var statearr_21139_21196 = state_21115__$1;
(statearr_21139_21196[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (36))){
var inst_21067 = (state_21115[(12)]);
var inst_21045 = inst_21067;
var state_21115__$1 = (function (){var statearr_21140 = state_21115;
(statearr_21140[(7)] = inst_21045);

return statearr_21140;
})();
var statearr_21141_21197 = state_21115__$1;
(statearr_21141_21197[(2)] = null);

(statearr_21141_21197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (29))){
var inst_21089 = (state_21115[(9)]);
var state_21115__$1 = state_21115;
var statearr_21142_21198 = state_21115__$1;
(statearr_21142_21198[(2)] = inst_21089);

(statearr_21142_21198[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (6))){
var state_21115__$1 = state_21115;
var statearr_21143_21199 = state_21115__$1;
(statearr_21143_21199[(2)] = false);

(statearr_21143_21199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (28))){
var inst_21085 = (state_21115[(2)]);
var inst_21086 = calc_state.call(null);
var inst_21045 = inst_21086;
var state_21115__$1 = (function (){var statearr_21144 = state_21115;
(statearr_21144[(15)] = inst_21085);

(statearr_21144[(7)] = inst_21045);

return statearr_21144;
})();
var statearr_21145_21200 = state_21115__$1;
(statearr_21145_21200[(2)] = null);

(statearr_21145_21200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (25))){
var inst_21111 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21146_21201 = state_21115__$1;
(statearr_21146_21201[(2)] = inst_21111);

(statearr_21146_21201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (34))){
var inst_21109 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21147_21202 = state_21115__$1;
(statearr_21147_21202[(2)] = inst_21109);

(statearr_21147_21202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (17))){
var state_21115__$1 = state_21115;
var statearr_21148_21203 = state_21115__$1;
(statearr_21148_21203[(2)] = false);

(statearr_21148_21203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (3))){
var state_21115__$1 = state_21115;
var statearr_21149_21204 = state_21115__$1;
(statearr_21149_21204[(2)] = false);

(statearr_21149_21204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (12))){
var inst_21113 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21115__$1,inst_21113);
} else {
if((state_val_21116 === (2))){
var inst_21021 = (state_21115[(8)]);
var inst_21026 = inst_21021.cljs$lang$protocol_mask$partition0$;
var inst_21027 = (inst_21026 & (64));
var inst_21028 = inst_21021.cljs$core$ISeq$;
var inst_21029 = (inst_21027) || (inst_21028);
var state_21115__$1 = state_21115;
if(cljs.core.truth_(inst_21029)){
var statearr_21150_21205 = state_21115__$1;
(statearr_21150_21205[(1)] = (5));

} else {
var statearr_21151_21206 = state_21115__$1;
(statearr_21151_21206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (23))){
var inst_21074 = (state_21115[(14)]);
var inst_21080 = (inst_21074 == null);
var state_21115__$1 = state_21115;
if(cljs.core.truth_(inst_21080)){
var statearr_21152_21207 = state_21115__$1;
(statearr_21152_21207[(1)] = (26));

} else {
var statearr_21153_21208 = state_21115__$1;
(statearr_21153_21208[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (35))){
var inst_21100 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
if(cljs.core.truth_(inst_21100)){
var statearr_21154_21209 = state_21115__$1;
(statearr_21154_21209[(1)] = (36));

} else {
var statearr_21155_21210 = state_21115__$1;
(statearr_21155_21210[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (19))){
var inst_21045 = (state_21115[(7)]);
var inst_21064 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21045);
var state_21115__$1 = state_21115;
var statearr_21156_21211 = state_21115__$1;
(statearr_21156_21211[(2)] = inst_21064);

(statearr_21156_21211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (11))){
var inst_21045 = (state_21115[(7)]);
var inst_21049 = (inst_21045 == null);
var inst_21050 = cljs.core.not.call(null,inst_21049);
var state_21115__$1 = state_21115;
if(inst_21050){
var statearr_21157_21212 = state_21115__$1;
(statearr_21157_21212[(1)] = (13));

} else {
var statearr_21158_21213 = state_21115__$1;
(statearr_21158_21213[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (9))){
var inst_21021 = (state_21115[(8)]);
var state_21115__$1 = state_21115;
var statearr_21159_21214 = state_21115__$1;
(statearr_21159_21214[(2)] = inst_21021);

(statearr_21159_21214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (5))){
var state_21115__$1 = state_21115;
var statearr_21160_21215 = state_21115__$1;
(statearr_21160_21215[(2)] = true);

(statearr_21160_21215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (14))){
var state_21115__$1 = state_21115;
var statearr_21161_21216 = state_21115__$1;
(statearr_21161_21216[(2)] = false);

(statearr_21161_21216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (26))){
var inst_21075 = (state_21115[(11)]);
var inst_21082 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21075);
var state_21115__$1 = state_21115;
var statearr_21162_21217 = state_21115__$1;
(statearr_21162_21217[(2)] = inst_21082);

(statearr_21162_21217[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (16))){
var state_21115__$1 = state_21115;
var statearr_21163_21218 = state_21115__$1;
(statearr_21163_21218[(2)] = true);

(statearr_21163_21218[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (38))){
var inst_21105 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21164_21219 = state_21115__$1;
(statearr_21164_21219[(2)] = inst_21105);

(statearr_21164_21219[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (30))){
var inst_21068 = (state_21115[(10)]);
var inst_21075 = (state_21115[(11)]);
var inst_21069 = (state_21115[(13)]);
var inst_21092 = cljs.core.empty_QMARK_.call(null,inst_21068);
var inst_21093 = inst_21069.call(null,inst_21075);
var inst_21094 = cljs.core.not.call(null,inst_21093);
var inst_21095 = (inst_21092) && (inst_21094);
var state_21115__$1 = state_21115;
var statearr_21165_21220 = state_21115__$1;
(statearr_21165_21220[(2)] = inst_21095);

(statearr_21165_21220[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (10))){
var inst_21021 = (state_21115[(8)]);
var inst_21041 = (state_21115[(2)]);
var inst_21042 = cljs.core.get.call(null,inst_21041,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21043 = cljs.core.get.call(null,inst_21041,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21044 = cljs.core.get.call(null,inst_21041,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21045 = inst_21021;
var state_21115__$1 = (function (){var statearr_21166 = state_21115;
(statearr_21166[(16)] = inst_21043);

(statearr_21166[(17)] = inst_21044);

(statearr_21166[(7)] = inst_21045);

(statearr_21166[(18)] = inst_21042);

return statearr_21166;
})();
var statearr_21167_21221 = state_21115__$1;
(statearr_21167_21221[(2)] = null);

(statearr_21167_21221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (18))){
var inst_21059 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21168_21222 = state_21115__$1;
(statearr_21168_21222[(2)] = inst_21059);

(statearr_21168_21222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (37))){
var state_21115__$1 = state_21115;
var statearr_21169_21223 = state_21115__$1;
(statearr_21169_21223[(2)] = null);

(statearr_21169_21223[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (8))){
var inst_21021 = (state_21115[(8)]);
var inst_21038 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21021);
var state_21115__$1 = state_21115;
var statearr_21170_21224 = state_21115__$1;
(statearr_21170_21224[(2)] = inst_21038);

(statearr_21170_21224[(1)] = (10));


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
});})(c__19465__auto___21178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19353__auto__,c__19465__auto___21178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19354__auto__ = null;
var cljs$core$async$mix_$_state_machine__19354__auto____0 = (function (){
var statearr_21174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21174[(0)] = cljs$core$async$mix_$_state_machine__19354__auto__);

(statearr_21174[(1)] = (1));

return statearr_21174;
});
var cljs$core$async$mix_$_state_machine__19354__auto____1 = (function (state_21115){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_21115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e21175){if((e21175 instanceof Object)){
var ex__19357__auto__ = e21175;
var statearr_21176_21225 = state_21115;
(statearr_21176_21225[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21226 = state_21115;
state_21115 = G__21226;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19354__auto__ = function(state_21115){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19354__auto____1.call(this,state_21115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19354__auto____0;
cljs$core$async$mix_$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19354__auto____1;
return cljs$core$async$mix_$_state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___21178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19467__auto__ = (function (){var statearr_21177 = f__19466__auto__.call(null);
(statearr_21177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___21178);

return statearr_21177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___21178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21227 = [];
var len__17863__auto___21230 = arguments.length;
var i__17864__auto___21231 = (0);
while(true){
if((i__17864__auto___21231 < len__17863__auto___21230)){
args21227.push((arguments[i__17864__auto___21231]));

var G__21232 = (i__17864__auto___21231 + (1));
i__17864__auto___21231 = G__21232;
continue;
} else {
}
break;
}

var G__21229 = args21227.length;
switch (G__21229) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21227.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21235 = [];
var len__17863__auto___21360 = arguments.length;
var i__17864__auto___21361 = (0);
while(true){
if((i__17864__auto___21361 < len__17863__auto___21360)){
args21235.push((arguments[i__17864__auto___21361]));

var G__21362 = (i__17864__auto___21361 + (1));
i__17864__auto___21361 = G__21362;
continue;
} else {
}
break;
}

var G__21237 = args21235.length;
switch (G__21237) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21235.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16805__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16805__auto__,mults){
return (function (p1__21234_SHARP_){
if(cljs.core.truth_(p1__21234_SHARP_.call(null,topic))){
return p1__21234_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21234_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16805__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21238 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21239){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21239 = meta21239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21240,meta21239__$1){
var self__ = this;
var _21240__$1 = this;
return (new cljs.core.async.t_cljs$core$async21238(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21239__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21240){
var self__ = this;
var _21240__$1 = this;
return self__.meta21239;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21238.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21239","meta21239",238325069,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21238";

cljs.core.async.t_cljs$core$async21238.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21238");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21238 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21238(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21239){
return (new cljs.core.async.t_cljs$core$async21238(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21239));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21238(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19465__auto___21364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___21364,mults,ensure_mult,p){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___21364,mults,ensure_mult,p){
return (function (state_21312){
var state_val_21313 = (state_21312[(1)]);
if((state_val_21313 === (7))){
var inst_21308 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21314_21365 = state_21312__$1;
(statearr_21314_21365[(2)] = inst_21308);

(statearr_21314_21365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (20))){
var state_21312__$1 = state_21312;
var statearr_21315_21366 = state_21312__$1;
(statearr_21315_21366[(2)] = null);

(statearr_21315_21366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (1))){
var state_21312__$1 = state_21312;
var statearr_21316_21367 = state_21312__$1;
(statearr_21316_21367[(2)] = null);

(statearr_21316_21367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (24))){
var inst_21291 = (state_21312[(7)]);
var inst_21300 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21291);
var state_21312__$1 = state_21312;
var statearr_21317_21368 = state_21312__$1;
(statearr_21317_21368[(2)] = inst_21300);

(statearr_21317_21368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (4))){
var inst_21243 = (state_21312[(8)]);
var inst_21243__$1 = (state_21312[(2)]);
var inst_21244 = (inst_21243__$1 == null);
var state_21312__$1 = (function (){var statearr_21318 = state_21312;
(statearr_21318[(8)] = inst_21243__$1);

return statearr_21318;
})();
if(cljs.core.truth_(inst_21244)){
var statearr_21319_21369 = state_21312__$1;
(statearr_21319_21369[(1)] = (5));

} else {
var statearr_21320_21370 = state_21312__$1;
(statearr_21320_21370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (15))){
var inst_21285 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21321_21371 = state_21312__$1;
(statearr_21321_21371[(2)] = inst_21285);

(statearr_21321_21371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (21))){
var inst_21305 = (state_21312[(2)]);
var state_21312__$1 = (function (){var statearr_21322 = state_21312;
(statearr_21322[(9)] = inst_21305);

return statearr_21322;
})();
var statearr_21323_21372 = state_21312__$1;
(statearr_21323_21372[(2)] = null);

(statearr_21323_21372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (13))){
var inst_21267 = (state_21312[(10)]);
var inst_21269 = cljs.core.chunked_seq_QMARK_.call(null,inst_21267);
var state_21312__$1 = state_21312;
if(inst_21269){
var statearr_21324_21373 = state_21312__$1;
(statearr_21324_21373[(1)] = (16));

} else {
var statearr_21325_21374 = state_21312__$1;
(statearr_21325_21374[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (22))){
var inst_21297 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
if(cljs.core.truth_(inst_21297)){
var statearr_21326_21375 = state_21312__$1;
(statearr_21326_21375[(1)] = (23));

} else {
var statearr_21327_21376 = state_21312__$1;
(statearr_21327_21376[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (6))){
var inst_21243 = (state_21312[(8)]);
var inst_21291 = (state_21312[(7)]);
var inst_21293 = (state_21312[(11)]);
var inst_21291__$1 = topic_fn.call(null,inst_21243);
var inst_21292 = cljs.core.deref.call(null,mults);
var inst_21293__$1 = cljs.core.get.call(null,inst_21292,inst_21291__$1);
var state_21312__$1 = (function (){var statearr_21328 = state_21312;
(statearr_21328[(7)] = inst_21291__$1);

(statearr_21328[(11)] = inst_21293__$1);

return statearr_21328;
})();
if(cljs.core.truth_(inst_21293__$1)){
var statearr_21329_21377 = state_21312__$1;
(statearr_21329_21377[(1)] = (19));

} else {
var statearr_21330_21378 = state_21312__$1;
(statearr_21330_21378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (25))){
var inst_21302 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21331_21379 = state_21312__$1;
(statearr_21331_21379[(2)] = inst_21302);

(statearr_21331_21379[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (17))){
var inst_21267 = (state_21312[(10)]);
var inst_21276 = cljs.core.first.call(null,inst_21267);
var inst_21277 = cljs.core.async.muxch_STAR_.call(null,inst_21276);
var inst_21278 = cljs.core.async.close_BANG_.call(null,inst_21277);
var inst_21279 = cljs.core.next.call(null,inst_21267);
var inst_21253 = inst_21279;
var inst_21254 = null;
var inst_21255 = (0);
var inst_21256 = (0);
var state_21312__$1 = (function (){var statearr_21332 = state_21312;
(statearr_21332[(12)] = inst_21278);

(statearr_21332[(13)] = inst_21256);

(statearr_21332[(14)] = inst_21255);

(statearr_21332[(15)] = inst_21254);

(statearr_21332[(16)] = inst_21253);

return statearr_21332;
})();
var statearr_21333_21380 = state_21312__$1;
(statearr_21333_21380[(2)] = null);

(statearr_21333_21380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (3))){
var inst_21310 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21312__$1,inst_21310);
} else {
if((state_val_21313 === (12))){
var inst_21287 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21334_21381 = state_21312__$1;
(statearr_21334_21381[(2)] = inst_21287);

(statearr_21334_21381[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (2))){
var state_21312__$1 = state_21312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21312__$1,(4),ch);
} else {
if((state_val_21313 === (23))){
var state_21312__$1 = state_21312;
var statearr_21335_21382 = state_21312__$1;
(statearr_21335_21382[(2)] = null);

(statearr_21335_21382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (19))){
var inst_21243 = (state_21312[(8)]);
var inst_21293 = (state_21312[(11)]);
var inst_21295 = cljs.core.async.muxch_STAR_.call(null,inst_21293);
var state_21312__$1 = state_21312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21312__$1,(22),inst_21295,inst_21243);
} else {
if((state_val_21313 === (11))){
var inst_21267 = (state_21312[(10)]);
var inst_21253 = (state_21312[(16)]);
var inst_21267__$1 = cljs.core.seq.call(null,inst_21253);
var state_21312__$1 = (function (){var statearr_21336 = state_21312;
(statearr_21336[(10)] = inst_21267__$1);

return statearr_21336;
})();
if(inst_21267__$1){
var statearr_21337_21383 = state_21312__$1;
(statearr_21337_21383[(1)] = (13));

} else {
var statearr_21338_21384 = state_21312__$1;
(statearr_21338_21384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (9))){
var inst_21289 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21339_21385 = state_21312__$1;
(statearr_21339_21385[(2)] = inst_21289);

(statearr_21339_21385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (5))){
var inst_21250 = cljs.core.deref.call(null,mults);
var inst_21251 = cljs.core.vals.call(null,inst_21250);
var inst_21252 = cljs.core.seq.call(null,inst_21251);
var inst_21253 = inst_21252;
var inst_21254 = null;
var inst_21255 = (0);
var inst_21256 = (0);
var state_21312__$1 = (function (){var statearr_21340 = state_21312;
(statearr_21340[(13)] = inst_21256);

(statearr_21340[(14)] = inst_21255);

(statearr_21340[(15)] = inst_21254);

(statearr_21340[(16)] = inst_21253);

return statearr_21340;
})();
var statearr_21341_21386 = state_21312__$1;
(statearr_21341_21386[(2)] = null);

(statearr_21341_21386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (14))){
var state_21312__$1 = state_21312;
var statearr_21345_21387 = state_21312__$1;
(statearr_21345_21387[(2)] = null);

(statearr_21345_21387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (16))){
var inst_21267 = (state_21312[(10)]);
var inst_21271 = cljs.core.chunk_first.call(null,inst_21267);
var inst_21272 = cljs.core.chunk_rest.call(null,inst_21267);
var inst_21273 = cljs.core.count.call(null,inst_21271);
var inst_21253 = inst_21272;
var inst_21254 = inst_21271;
var inst_21255 = inst_21273;
var inst_21256 = (0);
var state_21312__$1 = (function (){var statearr_21346 = state_21312;
(statearr_21346[(13)] = inst_21256);

(statearr_21346[(14)] = inst_21255);

(statearr_21346[(15)] = inst_21254);

(statearr_21346[(16)] = inst_21253);

return statearr_21346;
})();
var statearr_21347_21388 = state_21312__$1;
(statearr_21347_21388[(2)] = null);

(statearr_21347_21388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (10))){
var inst_21256 = (state_21312[(13)]);
var inst_21255 = (state_21312[(14)]);
var inst_21254 = (state_21312[(15)]);
var inst_21253 = (state_21312[(16)]);
var inst_21261 = cljs.core._nth.call(null,inst_21254,inst_21256);
var inst_21262 = cljs.core.async.muxch_STAR_.call(null,inst_21261);
var inst_21263 = cljs.core.async.close_BANG_.call(null,inst_21262);
var inst_21264 = (inst_21256 + (1));
var tmp21342 = inst_21255;
var tmp21343 = inst_21254;
var tmp21344 = inst_21253;
var inst_21253__$1 = tmp21344;
var inst_21254__$1 = tmp21343;
var inst_21255__$1 = tmp21342;
var inst_21256__$1 = inst_21264;
var state_21312__$1 = (function (){var statearr_21348 = state_21312;
(statearr_21348[(13)] = inst_21256__$1);

(statearr_21348[(14)] = inst_21255__$1);

(statearr_21348[(15)] = inst_21254__$1);

(statearr_21348[(17)] = inst_21263);

(statearr_21348[(16)] = inst_21253__$1);

return statearr_21348;
})();
var statearr_21349_21389 = state_21312__$1;
(statearr_21349_21389[(2)] = null);

(statearr_21349_21389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (18))){
var inst_21282 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21350_21390 = state_21312__$1;
(statearr_21350_21390[(2)] = inst_21282);

(statearr_21350_21390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (8))){
var inst_21256 = (state_21312[(13)]);
var inst_21255 = (state_21312[(14)]);
var inst_21258 = (inst_21256 < inst_21255);
var inst_21259 = inst_21258;
var state_21312__$1 = state_21312;
if(cljs.core.truth_(inst_21259)){
var statearr_21351_21391 = state_21312__$1;
(statearr_21351_21391[(1)] = (10));

} else {
var statearr_21352_21392 = state_21312__$1;
(statearr_21352_21392[(1)] = (11));

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
});})(c__19465__auto___21364,mults,ensure_mult,p))
;
return ((function (switch__19353__auto__,c__19465__auto___21364,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19354__auto__ = null;
var cljs$core$async$state_machine__19354__auto____0 = (function (){
var statearr_21356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21356[(0)] = cljs$core$async$state_machine__19354__auto__);

(statearr_21356[(1)] = (1));

return statearr_21356;
});
var cljs$core$async$state_machine__19354__auto____1 = (function (state_21312){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_21312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e21357){if((e21357 instanceof Object)){
var ex__19357__auto__ = e21357;
var statearr_21358_21393 = state_21312;
(statearr_21358_21393[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21394 = state_21312;
state_21312 = G__21394;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$state_machine__19354__auto__ = function(state_21312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19354__auto____1.call(this,state_21312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19354__auto____0;
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19354__auto____1;
return cljs$core$async$state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___21364,mults,ensure_mult,p))
})();
var state__19467__auto__ = (function (){var statearr_21359 = f__19466__auto__.call(null);
(statearr_21359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___21364);

return statearr_21359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___21364,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21395 = [];
var len__17863__auto___21398 = arguments.length;
var i__17864__auto___21399 = (0);
while(true){
if((i__17864__auto___21399 < len__17863__auto___21398)){
args21395.push((arguments[i__17864__auto___21399]));

var G__21400 = (i__17864__auto___21399 + (1));
i__17864__auto___21399 = G__21400;
continue;
} else {
}
break;
}

var G__21397 = args21395.length;
switch (G__21397) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21395.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21402 = [];
var len__17863__auto___21405 = arguments.length;
var i__17864__auto___21406 = (0);
while(true){
if((i__17864__auto___21406 < len__17863__auto___21405)){
args21402.push((arguments[i__17864__auto___21406]));

var G__21407 = (i__17864__auto___21406 + (1));
i__17864__auto___21406 = G__21407;
continue;
} else {
}
break;
}

var G__21404 = args21402.length;
switch (G__21404) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21402.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21409 = [];
var len__17863__auto___21480 = arguments.length;
var i__17864__auto___21481 = (0);
while(true){
if((i__17864__auto___21481 < len__17863__auto___21480)){
args21409.push((arguments[i__17864__auto___21481]));

var G__21482 = (i__17864__auto___21481 + (1));
i__17864__auto___21481 = G__21482;
continue;
} else {
}
break;
}

var G__21411 = args21409.length;
switch (G__21411) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21409.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19465__auto___21484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___21484,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___21484,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21450){
var state_val_21451 = (state_21450[(1)]);
if((state_val_21451 === (7))){
var state_21450__$1 = state_21450;
var statearr_21452_21485 = state_21450__$1;
(statearr_21452_21485[(2)] = null);

(statearr_21452_21485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (1))){
var state_21450__$1 = state_21450;
var statearr_21453_21486 = state_21450__$1;
(statearr_21453_21486[(2)] = null);

(statearr_21453_21486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (4))){
var inst_21414 = (state_21450[(7)]);
var inst_21416 = (inst_21414 < cnt);
var state_21450__$1 = state_21450;
if(cljs.core.truth_(inst_21416)){
var statearr_21454_21487 = state_21450__$1;
(statearr_21454_21487[(1)] = (6));

} else {
var statearr_21455_21488 = state_21450__$1;
(statearr_21455_21488[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (15))){
var inst_21446 = (state_21450[(2)]);
var state_21450__$1 = state_21450;
var statearr_21456_21489 = state_21450__$1;
(statearr_21456_21489[(2)] = inst_21446);

(statearr_21456_21489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (13))){
var inst_21439 = cljs.core.async.close_BANG_.call(null,out);
var state_21450__$1 = state_21450;
var statearr_21457_21490 = state_21450__$1;
(statearr_21457_21490[(2)] = inst_21439);

(statearr_21457_21490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (6))){
var state_21450__$1 = state_21450;
var statearr_21458_21491 = state_21450__$1;
(statearr_21458_21491[(2)] = null);

(statearr_21458_21491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (3))){
var inst_21448 = (state_21450[(2)]);
var state_21450__$1 = state_21450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21450__$1,inst_21448);
} else {
if((state_val_21451 === (12))){
var inst_21436 = (state_21450[(8)]);
var inst_21436__$1 = (state_21450[(2)]);
var inst_21437 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21436__$1);
var state_21450__$1 = (function (){var statearr_21459 = state_21450;
(statearr_21459[(8)] = inst_21436__$1);

return statearr_21459;
})();
if(cljs.core.truth_(inst_21437)){
var statearr_21460_21492 = state_21450__$1;
(statearr_21460_21492[(1)] = (13));

} else {
var statearr_21461_21493 = state_21450__$1;
(statearr_21461_21493[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (2))){
var inst_21413 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21414 = (0);
var state_21450__$1 = (function (){var statearr_21462 = state_21450;
(statearr_21462[(7)] = inst_21414);

(statearr_21462[(9)] = inst_21413);

return statearr_21462;
})();
var statearr_21463_21494 = state_21450__$1;
(statearr_21463_21494[(2)] = null);

(statearr_21463_21494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (11))){
var inst_21414 = (state_21450[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21450,(10),Object,null,(9));
var inst_21423 = chs__$1.call(null,inst_21414);
var inst_21424 = done.call(null,inst_21414);
var inst_21425 = cljs.core.async.take_BANG_.call(null,inst_21423,inst_21424);
var state_21450__$1 = state_21450;
var statearr_21464_21495 = state_21450__$1;
(statearr_21464_21495[(2)] = inst_21425);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21450__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (9))){
var inst_21414 = (state_21450[(7)]);
var inst_21427 = (state_21450[(2)]);
var inst_21428 = (inst_21414 + (1));
var inst_21414__$1 = inst_21428;
var state_21450__$1 = (function (){var statearr_21465 = state_21450;
(statearr_21465[(7)] = inst_21414__$1);

(statearr_21465[(10)] = inst_21427);

return statearr_21465;
})();
var statearr_21466_21496 = state_21450__$1;
(statearr_21466_21496[(2)] = null);

(statearr_21466_21496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (5))){
var inst_21434 = (state_21450[(2)]);
var state_21450__$1 = (function (){var statearr_21467 = state_21450;
(statearr_21467[(11)] = inst_21434);

return statearr_21467;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21450__$1,(12),dchan);
} else {
if((state_val_21451 === (14))){
var inst_21436 = (state_21450[(8)]);
var inst_21441 = cljs.core.apply.call(null,f,inst_21436);
var state_21450__$1 = state_21450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21450__$1,(16),out,inst_21441);
} else {
if((state_val_21451 === (16))){
var inst_21443 = (state_21450[(2)]);
var state_21450__$1 = (function (){var statearr_21468 = state_21450;
(statearr_21468[(12)] = inst_21443);

return statearr_21468;
})();
var statearr_21469_21497 = state_21450__$1;
(statearr_21469_21497[(2)] = null);

(statearr_21469_21497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (10))){
var inst_21418 = (state_21450[(2)]);
var inst_21419 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21450__$1 = (function (){var statearr_21470 = state_21450;
(statearr_21470[(13)] = inst_21418);

return statearr_21470;
})();
var statearr_21471_21498 = state_21450__$1;
(statearr_21471_21498[(2)] = inst_21419);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21450__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21451 === (8))){
var inst_21432 = (state_21450[(2)]);
var state_21450__$1 = state_21450;
var statearr_21472_21499 = state_21450__$1;
(statearr_21472_21499[(2)] = inst_21432);

(statearr_21472_21499[(1)] = (5));


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
});})(c__19465__auto___21484,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19353__auto__,c__19465__auto___21484,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19354__auto__ = null;
var cljs$core$async$state_machine__19354__auto____0 = (function (){
var statearr_21476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21476[(0)] = cljs$core$async$state_machine__19354__auto__);

(statearr_21476[(1)] = (1));

return statearr_21476;
});
var cljs$core$async$state_machine__19354__auto____1 = (function (state_21450){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_21450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e21477){if((e21477 instanceof Object)){
var ex__19357__auto__ = e21477;
var statearr_21478_21500 = state_21450;
(statearr_21478_21500[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21501 = state_21450;
state_21450 = G__21501;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$state_machine__19354__auto__ = function(state_21450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19354__auto____1.call(this,state_21450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19354__auto____0;
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19354__auto____1;
return cljs$core$async$state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___21484,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19467__auto__ = (function (){var statearr_21479 = f__19466__auto__.call(null);
(statearr_21479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___21484);

return statearr_21479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___21484,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21503 = [];
var len__17863__auto___21559 = arguments.length;
var i__17864__auto___21560 = (0);
while(true){
if((i__17864__auto___21560 < len__17863__auto___21559)){
args21503.push((arguments[i__17864__auto___21560]));

var G__21561 = (i__17864__auto___21560 + (1));
i__17864__auto___21560 = G__21561;
continue;
} else {
}
break;
}

var G__21505 = args21503.length;
switch (G__21505) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21503.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19465__auto___21563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___21563,out){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___21563,out){
return (function (state_21535){
var state_val_21536 = (state_21535[(1)]);
if((state_val_21536 === (7))){
var inst_21514 = (state_21535[(7)]);
var inst_21515 = (state_21535[(8)]);
var inst_21514__$1 = (state_21535[(2)]);
var inst_21515__$1 = cljs.core.nth.call(null,inst_21514__$1,(0),null);
var inst_21516 = cljs.core.nth.call(null,inst_21514__$1,(1),null);
var inst_21517 = (inst_21515__$1 == null);
var state_21535__$1 = (function (){var statearr_21537 = state_21535;
(statearr_21537[(9)] = inst_21516);

(statearr_21537[(7)] = inst_21514__$1);

(statearr_21537[(8)] = inst_21515__$1);

return statearr_21537;
})();
if(cljs.core.truth_(inst_21517)){
var statearr_21538_21564 = state_21535__$1;
(statearr_21538_21564[(1)] = (8));

} else {
var statearr_21539_21565 = state_21535__$1;
(statearr_21539_21565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21536 === (1))){
var inst_21506 = cljs.core.vec.call(null,chs);
var inst_21507 = inst_21506;
var state_21535__$1 = (function (){var statearr_21540 = state_21535;
(statearr_21540[(10)] = inst_21507);

return statearr_21540;
})();
var statearr_21541_21566 = state_21535__$1;
(statearr_21541_21566[(2)] = null);

(statearr_21541_21566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21536 === (4))){
var inst_21507 = (state_21535[(10)]);
var state_21535__$1 = state_21535;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21535__$1,(7),inst_21507);
} else {
if((state_val_21536 === (6))){
var inst_21531 = (state_21535[(2)]);
var state_21535__$1 = state_21535;
var statearr_21542_21567 = state_21535__$1;
(statearr_21542_21567[(2)] = inst_21531);

(statearr_21542_21567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21536 === (3))){
var inst_21533 = (state_21535[(2)]);
var state_21535__$1 = state_21535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21535__$1,inst_21533);
} else {
if((state_val_21536 === (2))){
var inst_21507 = (state_21535[(10)]);
var inst_21509 = cljs.core.count.call(null,inst_21507);
var inst_21510 = (inst_21509 > (0));
var state_21535__$1 = state_21535;
if(cljs.core.truth_(inst_21510)){
var statearr_21544_21568 = state_21535__$1;
(statearr_21544_21568[(1)] = (4));

} else {
var statearr_21545_21569 = state_21535__$1;
(statearr_21545_21569[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21536 === (11))){
var inst_21507 = (state_21535[(10)]);
var inst_21524 = (state_21535[(2)]);
var tmp21543 = inst_21507;
var inst_21507__$1 = tmp21543;
var state_21535__$1 = (function (){var statearr_21546 = state_21535;
(statearr_21546[(11)] = inst_21524);

(statearr_21546[(10)] = inst_21507__$1);

return statearr_21546;
})();
var statearr_21547_21570 = state_21535__$1;
(statearr_21547_21570[(2)] = null);

(statearr_21547_21570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21536 === (9))){
var inst_21515 = (state_21535[(8)]);
var state_21535__$1 = state_21535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21535__$1,(11),out,inst_21515);
} else {
if((state_val_21536 === (5))){
var inst_21529 = cljs.core.async.close_BANG_.call(null,out);
var state_21535__$1 = state_21535;
var statearr_21548_21571 = state_21535__$1;
(statearr_21548_21571[(2)] = inst_21529);

(statearr_21548_21571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21536 === (10))){
var inst_21527 = (state_21535[(2)]);
var state_21535__$1 = state_21535;
var statearr_21549_21572 = state_21535__$1;
(statearr_21549_21572[(2)] = inst_21527);

(statearr_21549_21572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21536 === (8))){
var inst_21516 = (state_21535[(9)]);
var inst_21507 = (state_21535[(10)]);
var inst_21514 = (state_21535[(7)]);
var inst_21515 = (state_21535[(8)]);
var inst_21519 = (function (){var cs = inst_21507;
var vec__21512 = inst_21514;
var v = inst_21515;
var c = inst_21516;
return ((function (cs,vec__21512,v,c,inst_21516,inst_21507,inst_21514,inst_21515,state_val_21536,c__19465__auto___21563,out){
return (function (p1__21502_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21502_SHARP_);
});
;})(cs,vec__21512,v,c,inst_21516,inst_21507,inst_21514,inst_21515,state_val_21536,c__19465__auto___21563,out))
})();
var inst_21520 = cljs.core.filterv.call(null,inst_21519,inst_21507);
var inst_21507__$1 = inst_21520;
var state_21535__$1 = (function (){var statearr_21550 = state_21535;
(statearr_21550[(10)] = inst_21507__$1);

return statearr_21550;
})();
var statearr_21551_21573 = state_21535__$1;
(statearr_21551_21573[(2)] = null);

(statearr_21551_21573[(1)] = (2));


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
});})(c__19465__auto___21563,out))
;
return ((function (switch__19353__auto__,c__19465__auto___21563,out){
return (function() {
var cljs$core$async$state_machine__19354__auto__ = null;
var cljs$core$async$state_machine__19354__auto____0 = (function (){
var statearr_21555 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21555[(0)] = cljs$core$async$state_machine__19354__auto__);

(statearr_21555[(1)] = (1));

return statearr_21555;
});
var cljs$core$async$state_machine__19354__auto____1 = (function (state_21535){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_21535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e21556){if((e21556 instanceof Object)){
var ex__19357__auto__ = e21556;
var statearr_21557_21574 = state_21535;
(statearr_21557_21574[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21575 = state_21535;
state_21535 = G__21575;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$state_machine__19354__auto__ = function(state_21535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19354__auto____1.call(this,state_21535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19354__auto____0;
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19354__auto____1;
return cljs$core$async$state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___21563,out))
})();
var state__19467__auto__ = (function (){var statearr_21558 = f__19466__auto__.call(null);
(statearr_21558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___21563);

return statearr_21558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___21563,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21576 = [];
var len__17863__auto___21625 = arguments.length;
var i__17864__auto___21626 = (0);
while(true){
if((i__17864__auto___21626 < len__17863__auto___21625)){
args21576.push((arguments[i__17864__auto___21626]));

var G__21627 = (i__17864__auto___21626 + (1));
i__17864__auto___21626 = G__21627;
continue;
} else {
}
break;
}

var G__21578 = args21576.length;
switch (G__21578) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21576.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19465__auto___21629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___21629,out){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___21629,out){
return (function (state_21602){
var state_val_21603 = (state_21602[(1)]);
if((state_val_21603 === (7))){
var inst_21584 = (state_21602[(7)]);
var inst_21584__$1 = (state_21602[(2)]);
var inst_21585 = (inst_21584__$1 == null);
var inst_21586 = cljs.core.not.call(null,inst_21585);
var state_21602__$1 = (function (){var statearr_21604 = state_21602;
(statearr_21604[(7)] = inst_21584__$1);

return statearr_21604;
})();
if(inst_21586){
var statearr_21605_21630 = state_21602__$1;
(statearr_21605_21630[(1)] = (8));

} else {
var statearr_21606_21631 = state_21602__$1;
(statearr_21606_21631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (1))){
var inst_21579 = (0);
var state_21602__$1 = (function (){var statearr_21607 = state_21602;
(statearr_21607[(8)] = inst_21579);

return statearr_21607;
})();
var statearr_21608_21632 = state_21602__$1;
(statearr_21608_21632[(2)] = null);

(statearr_21608_21632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (4))){
var state_21602__$1 = state_21602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21602__$1,(7),ch);
} else {
if((state_val_21603 === (6))){
var inst_21597 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
var statearr_21609_21633 = state_21602__$1;
(statearr_21609_21633[(2)] = inst_21597);

(statearr_21609_21633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (3))){
var inst_21599 = (state_21602[(2)]);
var inst_21600 = cljs.core.async.close_BANG_.call(null,out);
var state_21602__$1 = (function (){var statearr_21610 = state_21602;
(statearr_21610[(9)] = inst_21599);

return statearr_21610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21602__$1,inst_21600);
} else {
if((state_val_21603 === (2))){
var inst_21579 = (state_21602[(8)]);
var inst_21581 = (inst_21579 < n);
var state_21602__$1 = state_21602;
if(cljs.core.truth_(inst_21581)){
var statearr_21611_21634 = state_21602__$1;
(statearr_21611_21634[(1)] = (4));

} else {
var statearr_21612_21635 = state_21602__$1;
(statearr_21612_21635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (11))){
var inst_21579 = (state_21602[(8)]);
var inst_21589 = (state_21602[(2)]);
var inst_21590 = (inst_21579 + (1));
var inst_21579__$1 = inst_21590;
var state_21602__$1 = (function (){var statearr_21613 = state_21602;
(statearr_21613[(10)] = inst_21589);

(statearr_21613[(8)] = inst_21579__$1);

return statearr_21613;
})();
var statearr_21614_21636 = state_21602__$1;
(statearr_21614_21636[(2)] = null);

(statearr_21614_21636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (9))){
var state_21602__$1 = state_21602;
var statearr_21615_21637 = state_21602__$1;
(statearr_21615_21637[(2)] = null);

(statearr_21615_21637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (5))){
var state_21602__$1 = state_21602;
var statearr_21616_21638 = state_21602__$1;
(statearr_21616_21638[(2)] = null);

(statearr_21616_21638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (10))){
var inst_21594 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
var statearr_21617_21639 = state_21602__$1;
(statearr_21617_21639[(2)] = inst_21594);

(statearr_21617_21639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (8))){
var inst_21584 = (state_21602[(7)]);
var state_21602__$1 = state_21602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21602__$1,(11),out,inst_21584);
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
});})(c__19465__auto___21629,out))
;
return ((function (switch__19353__auto__,c__19465__auto___21629,out){
return (function() {
var cljs$core$async$state_machine__19354__auto__ = null;
var cljs$core$async$state_machine__19354__auto____0 = (function (){
var statearr_21621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21621[(0)] = cljs$core$async$state_machine__19354__auto__);

(statearr_21621[(1)] = (1));

return statearr_21621;
});
var cljs$core$async$state_machine__19354__auto____1 = (function (state_21602){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_21602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e21622){if((e21622 instanceof Object)){
var ex__19357__auto__ = e21622;
var statearr_21623_21640 = state_21602;
(statearr_21623_21640[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21641 = state_21602;
state_21602 = G__21641;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$state_machine__19354__auto__ = function(state_21602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19354__auto____1.call(this,state_21602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19354__auto____0;
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19354__auto____1;
return cljs$core$async$state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___21629,out))
})();
var state__19467__auto__ = (function (){var statearr_21624 = f__19466__auto__.call(null);
(statearr_21624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___21629);

return statearr_21624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___21629,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21649 = (function (map_LT_,f,ch,meta21650){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21650 = meta21650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21651,meta21650__$1){
var self__ = this;
var _21651__$1 = this;
return (new cljs.core.async.t_cljs$core$async21649(self__.map_LT_,self__.f,self__.ch,meta21650__$1));
});

cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21651){
var self__ = this;
var _21651__$1 = this;
return self__.meta21650;
});

cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21652 = (function (map_LT_,f,ch,meta21650,_,fn1,meta21653){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21650 = meta21650;
this._ = _;
this.fn1 = fn1;
this.meta21653 = meta21653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21654,meta21653__$1){
var self__ = this;
var _21654__$1 = this;
return (new cljs.core.async.t_cljs$core$async21652(self__.map_LT_,self__.f,self__.ch,self__.meta21650,self__._,self__.fn1,meta21653__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21654){
var self__ = this;
var _21654__$1 = this;
return self__.meta21653;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21652.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21642_SHARP_){
return f1.call(null,(((p1__21642_SHARP_ == null))?null:self__.f.call(null,p1__21642_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21652.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21650","meta21650",-1674432396,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21649","cljs.core.async/t_cljs$core$async21649",-1194704352,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21653","meta21653",-992458536,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21652";

cljs.core.async.t_cljs$core$async21652.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21652");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21652 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21652(map_LT___$1,f__$1,ch__$1,meta21650__$1,___$2,fn1__$1,meta21653){
return (new cljs.core.async.t_cljs$core$async21652(map_LT___$1,f__$1,ch__$1,meta21650__$1,___$2,fn1__$1,meta21653));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21652(self__.map_LT_,self__.f,self__.ch,self__.meta21650,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16793__auto__ = ret;
if(cljs.core.truth_(and__16793__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16793__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21649.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21650","meta21650",-1674432396,null)], null);
});

cljs.core.async.t_cljs$core$async21649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21649";

cljs.core.async.t_cljs$core$async21649.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21649");
});

cljs.core.async.__GT_t_cljs$core$async21649 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21649(map_LT___$1,f__$1,ch__$1,meta21650){
return (new cljs.core.async.t_cljs$core$async21649(map_LT___$1,f__$1,ch__$1,meta21650));
});

}

return (new cljs.core.async.t_cljs$core$async21649(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21658 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21658 = (function (map_GT_,f,ch,meta21659){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21659 = meta21659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21660,meta21659__$1){
var self__ = this;
var _21660__$1 = this;
return (new cljs.core.async.t_cljs$core$async21658(self__.map_GT_,self__.f,self__.ch,meta21659__$1));
});

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21660){
var self__ = this;
var _21660__$1 = this;
return self__.meta21659;
});

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21658.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21659","meta21659",-37399482,null)], null);
});

cljs.core.async.t_cljs$core$async21658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21658";

cljs.core.async.t_cljs$core$async21658.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21658");
});

cljs.core.async.__GT_t_cljs$core$async21658 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21658(map_GT___$1,f__$1,ch__$1,meta21659){
return (new cljs.core.async.t_cljs$core$async21658(map_GT___$1,f__$1,ch__$1,meta21659));
});

}

return (new cljs.core.async.t_cljs$core$async21658(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21664 = (function (filter_GT_,p,ch,meta21665){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21665 = meta21665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21666,meta21665__$1){
var self__ = this;
var _21666__$1 = this;
return (new cljs.core.async.t_cljs$core$async21664(self__.filter_GT_,self__.p,self__.ch,meta21665__$1));
});

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21666){
var self__ = this;
var _21666__$1 = this;
return self__.meta21665;
});

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21665","meta21665",-2143355308,null)], null);
});

cljs.core.async.t_cljs$core$async21664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21664";

cljs.core.async.t_cljs$core$async21664.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21664");
});

cljs.core.async.__GT_t_cljs$core$async21664 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21664(filter_GT___$1,p__$1,ch__$1,meta21665){
return (new cljs.core.async.t_cljs$core$async21664(filter_GT___$1,p__$1,ch__$1,meta21665));
});

}

return (new cljs.core.async.t_cljs$core$async21664(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21667 = [];
var len__17863__auto___21711 = arguments.length;
var i__17864__auto___21712 = (0);
while(true){
if((i__17864__auto___21712 < len__17863__auto___21711)){
args21667.push((arguments[i__17864__auto___21712]));

var G__21713 = (i__17864__auto___21712 + (1));
i__17864__auto___21712 = G__21713;
continue;
} else {
}
break;
}

var G__21669 = args21667.length;
switch (G__21669) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21667.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19465__auto___21715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___21715,out){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___21715,out){
return (function (state_21690){
var state_val_21691 = (state_21690[(1)]);
if((state_val_21691 === (7))){
var inst_21686 = (state_21690[(2)]);
var state_21690__$1 = state_21690;
var statearr_21692_21716 = state_21690__$1;
(statearr_21692_21716[(2)] = inst_21686);

(statearr_21692_21716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21691 === (1))){
var state_21690__$1 = state_21690;
var statearr_21693_21717 = state_21690__$1;
(statearr_21693_21717[(2)] = null);

(statearr_21693_21717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21691 === (4))){
var inst_21672 = (state_21690[(7)]);
var inst_21672__$1 = (state_21690[(2)]);
var inst_21673 = (inst_21672__$1 == null);
var state_21690__$1 = (function (){var statearr_21694 = state_21690;
(statearr_21694[(7)] = inst_21672__$1);

return statearr_21694;
})();
if(cljs.core.truth_(inst_21673)){
var statearr_21695_21718 = state_21690__$1;
(statearr_21695_21718[(1)] = (5));

} else {
var statearr_21696_21719 = state_21690__$1;
(statearr_21696_21719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21691 === (6))){
var inst_21672 = (state_21690[(7)]);
var inst_21677 = p.call(null,inst_21672);
var state_21690__$1 = state_21690;
if(cljs.core.truth_(inst_21677)){
var statearr_21697_21720 = state_21690__$1;
(statearr_21697_21720[(1)] = (8));

} else {
var statearr_21698_21721 = state_21690__$1;
(statearr_21698_21721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21691 === (3))){
var inst_21688 = (state_21690[(2)]);
var state_21690__$1 = state_21690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21690__$1,inst_21688);
} else {
if((state_val_21691 === (2))){
var state_21690__$1 = state_21690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21690__$1,(4),ch);
} else {
if((state_val_21691 === (11))){
var inst_21680 = (state_21690[(2)]);
var state_21690__$1 = state_21690;
var statearr_21699_21722 = state_21690__$1;
(statearr_21699_21722[(2)] = inst_21680);

(statearr_21699_21722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21691 === (9))){
var state_21690__$1 = state_21690;
var statearr_21700_21723 = state_21690__$1;
(statearr_21700_21723[(2)] = null);

(statearr_21700_21723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21691 === (5))){
var inst_21675 = cljs.core.async.close_BANG_.call(null,out);
var state_21690__$1 = state_21690;
var statearr_21701_21724 = state_21690__$1;
(statearr_21701_21724[(2)] = inst_21675);

(statearr_21701_21724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21691 === (10))){
var inst_21683 = (state_21690[(2)]);
var state_21690__$1 = (function (){var statearr_21702 = state_21690;
(statearr_21702[(8)] = inst_21683);

return statearr_21702;
})();
var statearr_21703_21725 = state_21690__$1;
(statearr_21703_21725[(2)] = null);

(statearr_21703_21725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21691 === (8))){
var inst_21672 = (state_21690[(7)]);
var state_21690__$1 = state_21690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21690__$1,(11),out,inst_21672);
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
});})(c__19465__auto___21715,out))
;
return ((function (switch__19353__auto__,c__19465__auto___21715,out){
return (function() {
var cljs$core$async$state_machine__19354__auto__ = null;
var cljs$core$async$state_machine__19354__auto____0 = (function (){
var statearr_21707 = [null,null,null,null,null,null,null,null,null];
(statearr_21707[(0)] = cljs$core$async$state_machine__19354__auto__);

(statearr_21707[(1)] = (1));

return statearr_21707;
});
var cljs$core$async$state_machine__19354__auto____1 = (function (state_21690){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_21690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e21708){if((e21708 instanceof Object)){
var ex__19357__auto__ = e21708;
var statearr_21709_21726 = state_21690;
(statearr_21709_21726[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21727 = state_21690;
state_21690 = G__21727;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$state_machine__19354__auto__ = function(state_21690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19354__auto____1.call(this,state_21690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19354__auto____0;
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19354__auto____1;
return cljs$core$async$state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___21715,out))
})();
var state__19467__auto__ = (function (){var statearr_21710 = f__19466__auto__.call(null);
(statearr_21710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___21715);

return statearr_21710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___21715,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21728 = [];
var len__17863__auto___21731 = arguments.length;
var i__17864__auto___21732 = (0);
while(true){
if((i__17864__auto___21732 < len__17863__auto___21731)){
args21728.push((arguments[i__17864__auto___21732]));

var G__21733 = (i__17864__auto___21732 + (1));
i__17864__auto___21732 = G__21733;
continue;
} else {
}
break;
}

var G__21730 = args21728.length;
switch (G__21730) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21728.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto__){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto__){
return (function (state_21900){
var state_val_21901 = (state_21900[(1)]);
if((state_val_21901 === (7))){
var inst_21896 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21902_21943 = state_21900__$1;
(statearr_21902_21943[(2)] = inst_21896);

(statearr_21902_21943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (20))){
var inst_21866 = (state_21900[(7)]);
var inst_21877 = (state_21900[(2)]);
var inst_21878 = cljs.core.next.call(null,inst_21866);
var inst_21852 = inst_21878;
var inst_21853 = null;
var inst_21854 = (0);
var inst_21855 = (0);
var state_21900__$1 = (function (){var statearr_21903 = state_21900;
(statearr_21903[(8)] = inst_21877);

(statearr_21903[(9)] = inst_21853);

(statearr_21903[(10)] = inst_21855);

(statearr_21903[(11)] = inst_21852);

(statearr_21903[(12)] = inst_21854);

return statearr_21903;
})();
var statearr_21904_21944 = state_21900__$1;
(statearr_21904_21944[(2)] = null);

(statearr_21904_21944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (1))){
var state_21900__$1 = state_21900;
var statearr_21905_21945 = state_21900__$1;
(statearr_21905_21945[(2)] = null);

(statearr_21905_21945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (4))){
var inst_21841 = (state_21900[(13)]);
var inst_21841__$1 = (state_21900[(2)]);
var inst_21842 = (inst_21841__$1 == null);
var state_21900__$1 = (function (){var statearr_21906 = state_21900;
(statearr_21906[(13)] = inst_21841__$1);

return statearr_21906;
})();
if(cljs.core.truth_(inst_21842)){
var statearr_21907_21946 = state_21900__$1;
(statearr_21907_21946[(1)] = (5));

} else {
var statearr_21908_21947 = state_21900__$1;
(statearr_21908_21947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (15))){
var state_21900__$1 = state_21900;
var statearr_21912_21948 = state_21900__$1;
(statearr_21912_21948[(2)] = null);

(statearr_21912_21948[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (21))){
var state_21900__$1 = state_21900;
var statearr_21913_21949 = state_21900__$1;
(statearr_21913_21949[(2)] = null);

(statearr_21913_21949[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (13))){
var inst_21853 = (state_21900[(9)]);
var inst_21855 = (state_21900[(10)]);
var inst_21852 = (state_21900[(11)]);
var inst_21854 = (state_21900[(12)]);
var inst_21862 = (state_21900[(2)]);
var inst_21863 = (inst_21855 + (1));
var tmp21909 = inst_21853;
var tmp21910 = inst_21852;
var tmp21911 = inst_21854;
var inst_21852__$1 = tmp21910;
var inst_21853__$1 = tmp21909;
var inst_21854__$1 = tmp21911;
var inst_21855__$1 = inst_21863;
var state_21900__$1 = (function (){var statearr_21914 = state_21900;
(statearr_21914[(14)] = inst_21862);

(statearr_21914[(9)] = inst_21853__$1);

(statearr_21914[(10)] = inst_21855__$1);

(statearr_21914[(11)] = inst_21852__$1);

(statearr_21914[(12)] = inst_21854__$1);

return statearr_21914;
})();
var statearr_21915_21950 = state_21900__$1;
(statearr_21915_21950[(2)] = null);

(statearr_21915_21950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (22))){
var state_21900__$1 = state_21900;
var statearr_21916_21951 = state_21900__$1;
(statearr_21916_21951[(2)] = null);

(statearr_21916_21951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (6))){
var inst_21841 = (state_21900[(13)]);
var inst_21850 = f.call(null,inst_21841);
var inst_21851 = cljs.core.seq.call(null,inst_21850);
var inst_21852 = inst_21851;
var inst_21853 = null;
var inst_21854 = (0);
var inst_21855 = (0);
var state_21900__$1 = (function (){var statearr_21917 = state_21900;
(statearr_21917[(9)] = inst_21853);

(statearr_21917[(10)] = inst_21855);

(statearr_21917[(11)] = inst_21852);

(statearr_21917[(12)] = inst_21854);

return statearr_21917;
})();
var statearr_21918_21952 = state_21900__$1;
(statearr_21918_21952[(2)] = null);

(statearr_21918_21952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (17))){
var inst_21866 = (state_21900[(7)]);
var inst_21870 = cljs.core.chunk_first.call(null,inst_21866);
var inst_21871 = cljs.core.chunk_rest.call(null,inst_21866);
var inst_21872 = cljs.core.count.call(null,inst_21870);
var inst_21852 = inst_21871;
var inst_21853 = inst_21870;
var inst_21854 = inst_21872;
var inst_21855 = (0);
var state_21900__$1 = (function (){var statearr_21919 = state_21900;
(statearr_21919[(9)] = inst_21853);

(statearr_21919[(10)] = inst_21855);

(statearr_21919[(11)] = inst_21852);

(statearr_21919[(12)] = inst_21854);

return statearr_21919;
})();
var statearr_21920_21953 = state_21900__$1;
(statearr_21920_21953[(2)] = null);

(statearr_21920_21953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (3))){
var inst_21898 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21900__$1,inst_21898);
} else {
if((state_val_21901 === (12))){
var inst_21886 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21921_21954 = state_21900__$1;
(statearr_21921_21954[(2)] = inst_21886);

(statearr_21921_21954[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (2))){
var state_21900__$1 = state_21900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21900__$1,(4),in$);
} else {
if((state_val_21901 === (23))){
var inst_21894 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21922_21955 = state_21900__$1;
(statearr_21922_21955[(2)] = inst_21894);

(statearr_21922_21955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (19))){
var inst_21881 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21923_21956 = state_21900__$1;
(statearr_21923_21956[(2)] = inst_21881);

(statearr_21923_21956[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (11))){
var inst_21866 = (state_21900[(7)]);
var inst_21852 = (state_21900[(11)]);
var inst_21866__$1 = cljs.core.seq.call(null,inst_21852);
var state_21900__$1 = (function (){var statearr_21924 = state_21900;
(statearr_21924[(7)] = inst_21866__$1);

return statearr_21924;
})();
if(inst_21866__$1){
var statearr_21925_21957 = state_21900__$1;
(statearr_21925_21957[(1)] = (14));

} else {
var statearr_21926_21958 = state_21900__$1;
(statearr_21926_21958[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (9))){
var inst_21888 = (state_21900[(2)]);
var inst_21889 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21900__$1 = (function (){var statearr_21927 = state_21900;
(statearr_21927[(15)] = inst_21888);

return statearr_21927;
})();
if(cljs.core.truth_(inst_21889)){
var statearr_21928_21959 = state_21900__$1;
(statearr_21928_21959[(1)] = (21));

} else {
var statearr_21929_21960 = state_21900__$1;
(statearr_21929_21960[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (5))){
var inst_21844 = cljs.core.async.close_BANG_.call(null,out);
var state_21900__$1 = state_21900;
var statearr_21930_21961 = state_21900__$1;
(statearr_21930_21961[(2)] = inst_21844);

(statearr_21930_21961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (14))){
var inst_21866 = (state_21900[(7)]);
var inst_21868 = cljs.core.chunked_seq_QMARK_.call(null,inst_21866);
var state_21900__$1 = state_21900;
if(inst_21868){
var statearr_21931_21962 = state_21900__$1;
(statearr_21931_21962[(1)] = (17));

} else {
var statearr_21932_21963 = state_21900__$1;
(statearr_21932_21963[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (16))){
var inst_21884 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21933_21964 = state_21900__$1;
(statearr_21933_21964[(2)] = inst_21884);

(statearr_21933_21964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (10))){
var inst_21853 = (state_21900[(9)]);
var inst_21855 = (state_21900[(10)]);
var inst_21860 = cljs.core._nth.call(null,inst_21853,inst_21855);
var state_21900__$1 = state_21900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21900__$1,(13),out,inst_21860);
} else {
if((state_val_21901 === (18))){
var inst_21866 = (state_21900[(7)]);
var inst_21875 = cljs.core.first.call(null,inst_21866);
var state_21900__$1 = state_21900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21900__$1,(20),out,inst_21875);
} else {
if((state_val_21901 === (8))){
var inst_21855 = (state_21900[(10)]);
var inst_21854 = (state_21900[(12)]);
var inst_21857 = (inst_21855 < inst_21854);
var inst_21858 = inst_21857;
var state_21900__$1 = state_21900;
if(cljs.core.truth_(inst_21858)){
var statearr_21934_21965 = state_21900__$1;
(statearr_21934_21965[(1)] = (10));

} else {
var statearr_21935_21966 = state_21900__$1;
(statearr_21935_21966[(1)] = (11));

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
});})(c__19465__auto__))
;
return ((function (switch__19353__auto__,c__19465__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19354__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19354__auto____0 = (function (){
var statearr_21939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21939[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19354__auto__);

(statearr_21939[(1)] = (1));

return statearr_21939;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19354__auto____1 = (function (state_21900){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_21900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e21940){if((e21940 instanceof Object)){
var ex__19357__auto__ = e21940;
var statearr_21941_21967 = state_21900;
(statearr_21941_21967[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21968 = state_21900;
state_21900 = G__21968;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19354__auto__ = function(state_21900){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19354__auto____1.call(this,state_21900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19354__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19354__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto__))
})();
var state__19467__auto__ = (function (){var statearr_21942 = f__19466__auto__.call(null);
(statearr_21942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto__);

return statearr_21942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto__))
);

return c__19465__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21969 = [];
var len__17863__auto___21972 = arguments.length;
var i__17864__auto___21973 = (0);
while(true){
if((i__17864__auto___21973 < len__17863__auto___21972)){
args21969.push((arguments[i__17864__auto___21973]));

var G__21974 = (i__17864__auto___21973 + (1));
i__17864__auto___21973 = G__21974;
continue;
} else {
}
break;
}

var G__21971 = args21969.length;
switch (G__21971) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21969.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21976 = [];
var len__17863__auto___21979 = arguments.length;
var i__17864__auto___21980 = (0);
while(true){
if((i__17864__auto___21980 < len__17863__auto___21979)){
args21976.push((arguments[i__17864__auto___21980]));

var G__21981 = (i__17864__auto___21980 + (1));
i__17864__auto___21980 = G__21981;
continue;
} else {
}
break;
}

var G__21978 = args21976.length;
switch (G__21978) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21976.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21983 = [];
var len__17863__auto___22034 = arguments.length;
var i__17864__auto___22035 = (0);
while(true){
if((i__17864__auto___22035 < len__17863__auto___22034)){
args21983.push((arguments[i__17864__auto___22035]));

var G__22036 = (i__17864__auto___22035 + (1));
i__17864__auto___22035 = G__22036;
continue;
} else {
}
break;
}

var G__21985 = args21983.length;
switch (G__21985) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21983.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19465__auto___22038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___22038,out){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___22038,out){
return (function (state_22009){
var state_val_22010 = (state_22009[(1)]);
if((state_val_22010 === (7))){
var inst_22004 = (state_22009[(2)]);
var state_22009__$1 = state_22009;
var statearr_22011_22039 = state_22009__$1;
(statearr_22011_22039[(2)] = inst_22004);

(statearr_22011_22039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22010 === (1))){
var inst_21986 = null;
var state_22009__$1 = (function (){var statearr_22012 = state_22009;
(statearr_22012[(7)] = inst_21986);

return statearr_22012;
})();
var statearr_22013_22040 = state_22009__$1;
(statearr_22013_22040[(2)] = null);

(statearr_22013_22040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22010 === (4))){
var inst_21989 = (state_22009[(8)]);
var inst_21989__$1 = (state_22009[(2)]);
var inst_21990 = (inst_21989__$1 == null);
var inst_21991 = cljs.core.not.call(null,inst_21990);
var state_22009__$1 = (function (){var statearr_22014 = state_22009;
(statearr_22014[(8)] = inst_21989__$1);

return statearr_22014;
})();
if(inst_21991){
var statearr_22015_22041 = state_22009__$1;
(statearr_22015_22041[(1)] = (5));

} else {
var statearr_22016_22042 = state_22009__$1;
(statearr_22016_22042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22010 === (6))){
var state_22009__$1 = state_22009;
var statearr_22017_22043 = state_22009__$1;
(statearr_22017_22043[(2)] = null);

(statearr_22017_22043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22010 === (3))){
var inst_22006 = (state_22009[(2)]);
var inst_22007 = cljs.core.async.close_BANG_.call(null,out);
var state_22009__$1 = (function (){var statearr_22018 = state_22009;
(statearr_22018[(9)] = inst_22006);

return statearr_22018;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22009__$1,inst_22007);
} else {
if((state_val_22010 === (2))){
var state_22009__$1 = state_22009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22009__$1,(4),ch);
} else {
if((state_val_22010 === (11))){
var inst_21989 = (state_22009[(8)]);
var inst_21998 = (state_22009[(2)]);
var inst_21986 = inst_21989;
var state_22009__$1 = (function (){var statearr_22019 = state_22009;
(statearr_22019[(10)] = inst_21998);

(statearr_22019[(7)] = inst_21986);

return statearr_22019;
})();
var statearr_22020_22044 = state_22009__$1;
(statearr_22020_22044[(2)] = null);

(statearr_22020_22044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22010 === (9))){
var inst_21989 = (state_22009[(8)]);
var state_22009__$1 = state_22009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22009__$1,(11),out,inst_21989);
} else {
if((state_val_22010 === (5))){
var inst_21989 = (state_22009[(8)]);
var inst_21986 = (state_22009[(7)]);
var inst_21993 = cljs.core._EQ_.call(null,inst_21989,inst_21986);
var state_22009__$1 = state_22009;
if(inst_21993){
var statearr_22022_22045 = state_22009__$1;
(statearr_22022_22045[(1)] = (8));

} else {
var statearr_22023_22046 = state_22009__$1;
(statearr_22023_22046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22010 === (10))){
var inst_22001 = (state_22009[(2)]);
var state_22009__$1 = state_22009;
var statearr_22024_22047 = state_22009__$1;
(statearr_22024_22047[(2)] = inst_22001);

(statearr_22024_22047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22010 === (8))){
var inst_21986 = (state_22009[(7)]);
var tmp22021 = inst_21986;
var inst_21986__$1 = tmp22021;
var state_22009__$1 = (function (){var statearr_22025 = state_22009;
(statearr_22025[(7)] = inst_21986__$1);

return statearr_22025;
})();
var statearr_22026_22048 = state_22009__$1;
(statearr_22026_22048[(2)] = null);

(statearr_22026_22048[(1)] = (2));


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
});})(c__19465__auto___22038,out))
;
return ((function (switch__19353__auto__,c__19465__auto___22038,out){
return (function() {
var cljs$core$async$state_machine__19354__auto__ = null;
var cljs$core$async$state_machine__19354__auto____0 = (function (){
var statearr_22030 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22030[(0)] = cljs$core$async$state_machine__19354__auto__);

(statearr_22030[(1)] = (1));

return statearr_22030;
});
var cljs$core$async$state_machine__19354__auto____1 = (function (state_22009){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_22009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e22031){if((e22031 instanceof Object)){
var ex__19357__auto__ = e22031;
var statearr_22032_22049 = state_22009;
(statearr_22032_22049[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22050 = state_22009;
state_22009 = G__22050;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$state_machine__19354__auto__ = function(state_22009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19354__auto____1.call(this,state_22009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19354__auto____0;
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19354__auto____1;
return cljs$core$async$state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___22038,out))
})();
var state__19467__auto__ = (function (){var statearr_22033 = f__19466__auto__.call(null);
(statearr_22033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___22038);

return statearr_22033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___22038,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22051 = [];
var len__17863__auto___22121 = arguments.length;
var i__17864__auto___22122 = (0);
while(true){
if((i__17864__auto___22122 < len__17863__auto___22121)){
args22051.push((arguments[i__17864__auto___22122]));

var G__22123 = (i__17864__auto___22122 + (1));
i__17864__auto___22122 = G__22123;
continue;
} else {
}
break;
}

var G__22053 = args22051.length;
switch (G__22053) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22051.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19465__auto___22125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___22125,out){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___22125,out){
return (function (state_22091){
var state_val_22092 = (state_22091[(1)]);
if((state_val_22092 === (7))){
var inst_22087 = (state_22091[(2)]);
var state_22091__$1 = state_22091;
var statearr_22093_22126 = state_22091__$1;
(statearr_22093_22126[(2)] = inst_22087);

(statearr_22093_22126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (1))){
var inst_22054 = (new Array(n));
var inst_22055 = inst_22054;
var inst_22056 = (0);
var state_22091__$1 = (function (){var statearr_22094 = state_22091;
(statearr_22094[(7)] = inst_22056);

(statearr_22094[(8)] = inst_22055);

return statearr_22094;
})();
var statearr_22095_22127 = state_22091__$1;
(statearr_22095_22127[(2)] = null);

(statearr_22095_22127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (4))){
var inst_22059 = (state_22091[(9)]);
var inst_22059__$1 = (state_22091[(2)]);
var inst_22060 = (inst_22059__$1 == null);
var inst_22061 = cljs.core.not.call(null,inst_22060);
var state_22091__$1 = (function (){var statearr_22096 = state_22091;
(statearr_22096[(9)] = inst_22059__$1);

return statearr_22096;
})();
if(inst_22061){
var statearr_22097_22128 = state_22091__$1;
(statearr_22097_22128[(1)] = (5));

} else {
var statearr_22098_22129 = state_22091__$1;
(statearr_22098_22129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (15))){
var inst_22081 = (state_22091[(2)]);
var state_22091__$1 = state_22091;
var statearr_22099_22130 = state_22091__$1;
(statearr_22099_22130[(2)] = inst_22081);

(statearr_22099_22130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (13))){
var state_22091__$1 = state_22091;
var statearr_22100_22131 = state_22091__$1;
(statearr_22100_22131[(2)] = null);

(statearr_22100_22131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (6))){
var inst_22056 = (state_22091[(7)]);
var inst_22077 = (inst_22056 > (0));
var state_22091__$1 = state_22091;
if(cljs.core.truth_(inst_22077)){
var statearr_22101_22132 = state_22091__$1;
(statearr_22101_22132[(1)] = (12));

} else {
var statearr_22102_22133 = state_22091__$1;
(statearr_22102_22133[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (3))){
var inst_22089 = (state_22091[(2)]);
var state_22091__$1 = state_22091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22091__$1,inst_22089);
} else {
if((state_val_22092 === (12))){
var inst_22055 = (state_22091[(8)]);
var inst_22079 = cljs.core.vec.call(null,inst_22055);
var state_22091__$1 = state_22091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22091__$1,(15),out,inst_22079);
} else {
if((state_val_22092 === (2))){
var state_22091__$1 = state_22091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22091__$1,(4),ch);
} else {
if((state_val_22092 === (11))){
var inst_22071 = (state_22091[(2)]);
var inst_22072 = (new Array(n));
var inst_22055 = inst_22072;
var inst_22056 = (0);
var state_22091__$1 = (function (){var statearr_22103 = state_22091;
(statearr_22103[(10)] = inst_22071);

(statearr_22103[(7)] = inst_22056);

(statearr_22103[(8)] = inst_22055);

return statearr_22103;
})();
var statearr_22104_22134 = state_22091__$1;
(statearr_22104_22134[(2)] = null);

(statearr_22104_22134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (9))){
var inst_22055 = (state_22091[(8)]);
var inst_22069 = cljs.core.vec.call(null,inst_22055);
var state_22091__$1 = state_22091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22091__$1,(11),out,inst_22069);
} else {
if((state_val_22092 === (5))){
var inst_22056 = (state_22091[(7)]);
var inst_22055 = (state_22091[(8)]);
var inst_22064 = (state_22091[(11)]);
var inst_22059 = (state_22091[(9)]);
var inst_22063 = (inst_22055[inst_22056] = inst_22059);
var inst_22064__$1 = (inst_22056 + (1));
var inst_22065 = (inst_22064__$1 < n);
var state_22091__$1 = (function (){var statearr_22105 = state_22091;
(statearr_22105[(12)] = inst_22063);

(statearr_22105[(11)] = inst_22064__$1);

return statearr_22105;
})();
if(cljs.core.truth_(inst_22065)){
var statearr_22106_22135 = state_22091__$1;
(statearr_22106_22135[(1)] = (8));

} else {
var statearr_22107_22136 = state_22091__$1;
(statearr_22107_22136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (14))){
var inst_22084 = (state_22091[(2)]);
var inst_22085 = cljs.core.async.close_BANG_.call(null,out);
var state_22091__$1 = (function (){var statearr_22109 = state_22091;
(statearr_22109[(13)] = inst_22084);

return statearr_22109;
})();
var statearr_22110_22137 = state_22091__$1;
(statearr_22110_22137[(2)] = inst_22085);

(statearr_22110_22137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (10))){
var inst_22075 = (state_22091[(2)]);
var state_22091__$1 = state_22091;
var statearr_22111_22138 = state_22091__$1;
(statearr_22111_22138[(2)] = inst_22075);

(statearr_22111_22138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22092 === (8))){
var inst_22055 = (state_22091[(8)]);
var inst_22064 = (state_22091[(11)]);
var tmp22108 = inst_22055;
var inst_22055__$1 = tmp22108;
var inst_22056 = inst_22064;
var state_22091__$1 = (function (){var statearr_22112 = state_22091;
(statearr_22112[(7)] = inst_22056);

(statearr_22112[(8)] = inst_22055__$1);

return statearr_22112;
})();
var statearr_22113_22139 = state_22091__$1;
(statearr_22113_22139[(2)] = null);

(statearr_22113_22139[(1)] = (2));


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
});})(c__19465__auto___22125,out))
;
return ((function (switch__19353__auto__,c__19465__auto___22125,out){
return (function() {
var cljs$core$async$state_machine__19354__auto__ = null;
var cljs$core$async$state_machine__19354__auto____0 = (function (){
var statearr_22117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22117[(0)] = cljs$core$async$state_machine__19354__auto__);

(statearr_22117[(1)] = (1));

return statearr_22117;
});
var cljs$core$async$state_machine__19354__auto____1 = (function (state_22091){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_22091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e22118){if((e22118 instanceof Object)){
var ex__19357__auto__ = e22118;
var statearr_22119_22140 = state_22091;
(statearr_22119_22140[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22141 = state_22091;
state_22091 = G__22141;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$state_machine__19354__auto__ = function(state_22091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19354__auto____1.call(this,state_22091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19354__auto____0;
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19354__auto____1;
return cljs$core$async$state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___22125,out))
})();
var state__19467__auto__ = (function (){var statearr_22120 = f__19466__auto__.call(null);
(statearr_22120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___22125);

return statearr_22120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___22125,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22142 = [];
var len__17863__auto___22216 = arguments.length;
var i__17864__auto___22217 = (0);
while(true){
if((i__17864__auto___22217 < len__17863__auto___22216)){
args22142.push((arguments[i__17864__auto___22217]));

var G__22218 = (i__17864__auto___22217 + (1));
i__17864__auto___22217 = G__22218;
continue;
} else {
}
break;
}

var G__22144 = args22142.length;
switch (G__22144) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22142.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19465__auto___22220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19465__auto___22220,out){
return (function (){
var f__19466__auto__ = (function (){var switch__19353__auto__ = ((function (c__19465__auto___22220,out){
return (function (state_22186){
var state_val_22187 = (state_22186[(1)]);
if((state_val_22187 === (7))){
var inst_22182 = (state_22186[(2)]);
var state_22186__$1 = state_22186;
var statearr_22188_22221 = state_22186__$1;
(statearr_22188_22221[(2)] = inst_22182);

(statearr_22188_22221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22187 === (1))){
var inst_22145 = [];
var inst_22146 = inst_22145;
var inst_22147 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22186__$1 = (function (){var statearr_22189 = state_22186;
(statearr_22189[(7)] = inst_22147);

(statearr_22189[(8)] = inst_22146);

return statearr_22189;
})();
var statearr_22190_22222 = state_22186__$1;
(statearr_22190_22222[(2)] = null);

(statearr_22190_22222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22187 === (4))){
var inst_22150 = (state_22186[(9)]);
var inst_22150__$1 = (state_22186[(2)]);
var inst_22151 = (inst_22150__$1 == null);
var inst_22152 = cljs.core.not.call(null,inst_22151);
var state_22186__$1 = (function (){var statearr_22191 = state_22186;
(statearr_22191[(9)] = inst_22150__$1);

return statearr_22191;
})();
if(inst_22152){
var statearr_22192_22223 = state_22186__$1;
(statearr_22192_22223[(1)] = (5));

} else {
var statearr_22193_22224 = state_22186__$1;
(statearr_22193_22224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22187 === (15))){
var inst_22176 = (state_22186[(2)]);
var state_22186__$1 = state_22186;
var statearr_22194_22225 = state_22186__$1;
(statearr_22194_22225[(2)] = inst_22176);

(statearr_22194_22225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22187 === (13))){
var state_22186__$1 = state_22186;
var statearr_22195_22226 = state_22186__$1;
(statearr_22195_22226[(2)] = null);

(statearr_22195_22226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22187 === (6))){
var inst_22146 = (state_22186[(8)]);
var inst_22171 = inst_22146.length;
var inst_22172 = (inst_22171 > (0));
var state_22186__$1 = state_22186;
if(cljs.core.truth_(inst_22172)){
var statearr_22196_22227 = state_22186__$1;
(statearr_22196_22227[(1)] = (12));

} else {
var statearr_22197_22228 = state_22186__$1;
(statearr_22197_22228[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22187 === (3))){
var inst_22184 = (state_22186[(2)]);
var state_22186__$1 = state_22186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22186__$1,inst_22184);
} else {
if((state_val_22187 === (12))){
var inst_22146 = (state_22186[(8)]);
var inst_22174 = cljs.core.vec.call(null,inst_22146);
var state_22186__$1 = state_22186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22186__$1,(15),out,inst_22174);
} else {
if((state_val_22187 === (2))){
var state_22186__$1 = state_22186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22186__$1,(4),ch);
} else {
if((state_val_22187 === (11))){
var inst_22154 = (state_22186[(10)]);
var inst_22150 = (state_22186[(9)]);
var inst_22164 = (state_22186[(2)]);
var inst_22165 = [];
var inst_22166 = inst_22165.push(inst_22150);
var inst_22146 = inst_22165;
var inst_22147 = inst_22154;
var state_22186__$1 = (function (){var statearr_22198 = state_22186;
(statearr_22198[(11)] = inst_22164);

(statearr_22198[(7)] = inst_22147);

(statearr_22198[(12)] = inst_22166);

(statearr_22198[(8)] = inst_22146);

return statearr_22198;
})();
var statearr_22199_22229 = state_22186__$1;
(statearr_22199_22229[(2)] = null);

(statearr_22199_22229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22187 === (9))){
var inst_22146 = (state_22186[(8)]);
var inst_22162 = cljs.core.vec.call(null,inst_22146);
var state_22186__$1 = state_22186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22186__$1,(11),out,inst_22162);
} else {
if((state_val_22187 === (5))){
var inst_22147 = (state_22186[(7)]);
var inst_22154 = (state_22186[(10)]);
var inst_22150 = (state_22186[(9)]);
var inst_22154__$1 = f.call(null,inst_22150);
var inst_22155 = cljs.core._EQ_.call(null,inst_22154__$1,inst_22147);
var inst_22156 = cljs.core.keyword_identical_QMARK_.call(null,inst_22147,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22157 = (inst_22155) || (inst_22156);
var state_22186__$1 = (function (){var statearr_22200 = state_22186;
(statearr_22200[(10)] = inst_22154__$1);

return statearr_22200;
})();
if(cljs.core.truth_(inst_22157)){
var statearr_22201_22230 = state_22186__$1;
(statearr_22201_22230[(1)] = (8));

} else {
var statearr_22202_22231 = state_22186__$1;
(statearr_22202_22231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22187 === (14))){
var inst_22179 = (state_22186[(2)]);
var inst_22180 = cljs.core.async.close_BANG_.call(null,out);
var state_22186__$1 = (function (){var statearr_22204 = state_22186;
(statearr_22204[(13)] = inst_22179);

return statearr_22204;
})();
var statearr_22205_22232 = state_22186__$1;
(statearr_22205_22232[(2)] = inst_22180);

(statearr_22205_22232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22187 === (10))){
var inst_22169 = (state_22186[(2)]);
var state_22186__$1 = state_22186;
var statearr_22206_22233 = state_22186__$1;
(statearr_22206_22233[(2)] = inst_22169);

(statearr_22206_22233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22187 === (8))){
var inst_22154 = (state_22186[(10)]);
var inst_22150 = (state_22186[(9)]);
var inst_22146 = (state_22186[(8)]);
var inst_22159 = inst_22146.push(inst_22150);
var tmp22203 = inst_22146;
var inst_22146__$1 = tmp22203;
var inst_22147 = inst_22154;
var state_22186__$1 = (function (){var statearr_22207 = state_22186;
(statearr_22207[(7)] = inst_22147);

(statearr_22207[(8)] = inst_22146__$1);

(statearr_22207[(14)] = inst_22159);

return statearr_22207;
})();
var statearr_22208_22234 = state_22186__$1;
(statearr_22208_22234[(2)] = null);

(statearr_22208_22234[(1)] = (2));


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
});})(c__19465__auto___22220,out))
;
return ((function (switch__19353__auto__,c__19465__auto___22220,out){
return (function() {
var cljs$core$async$state_machine__19354__auto__ = null;
var cljs$core$async$state_machine__19354__auto____0 = (function (){
var statearr_22212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22212[(0)] = cljs$core$async$state_machine__19354__auto__);

(statearr_22212[(1)] = (1));

return statearr_22212;
});
var cljs$core$async$state_machine__19354__auto____1 = (function (state_22186){
while(true){
var ret_value__19355__auto__ = (function (){try{while(true){
var result__19356__auto__ = switch__19353__auto__.call(null,state_22186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19356__auto__;
}
break;
}
}catch (e22213){if((e22213 instanceof Object)){
var ex__19357__auto__ = e22213;
var statearr_22214_22235 = state_22186;
(statearr_22214_22235[(5)] = ex__19357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22236 = state_22186;
state_22186 = G__22236;
continue;
} else {
return ret_value__19355__auto__;
}
break;
}
});
cljs$core$async$state_machine__19354__auto__ = function(state_22186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19354__auto____1.call(this,state_22186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19354__auto____0;
cljs$core$async$state_machine__19354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19354__auto____1;
return cljs$core$async$state_machine__19354__auto__;
})()
;})(switch__19353__auto__,c__19465__auto___22220,out))
})();
var state__19467__auto__ = (function (){var statearr_22215 = f__19466__auto__.call(null);
(statearr_22215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19465__auto___22220);

return statearr_22215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19467__auto__);
});})(c__19465__auto___22220,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1456613031392