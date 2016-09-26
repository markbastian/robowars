// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args38600 = [];
var len__27580__auto___38606 = arguments.length;
var i__27581__auto___38607 = (0);
while(true){
if((i__27581__auto___38607 < len__27580__auto___38606)){
args38600.push((arguments[i__27581__auto___38607]));

var G__38608 = (i__27581__auto___38607 + (1));
i__27581__auto___38607 = G__38608;
continue;
} else {
}
break;
}

var G__38602 = args38600.length;
switch (G__38602) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38600.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38603 = (function (f,blockable,meta38604){
this.f = f;
this.blockable = blockable;
this.meta38604 = meta38604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38605,meta38604__$1){
var self__ = this;
var _38605__$1 = this;
return (new cljs.core.async.t_cljs$core$async38603(self__.f,self__.blockable,meta38604__$1));
});

cljs.core.async.t_cljs$core$async38603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38605){
var self__ = this;
var _38605__$1 = this;
return self__.meta38604;
});

cljs.core.async.t_cljs$core$async38603.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38603.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38604","meta38604",1107275287,null)], null);
});

cljs.core.async.t_cljs$core$async38603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38603";

cljs.core.async.t_cljs$core$async38603.cljs$lang$ctorPrWriter = (function (this__27049__auto__,writer__27050__auto__,opt__27051__auto__){
return cljs.core._write.call(null,writer__27050__auto__,"cljs.core.async/t_cljs$core$async38603");
});

cljs.core.async.__GT_t_cljs$core$async38603 = (function cljs$core$async$__GT_t_cljs$core$async38603(f__$1,blockable__$1,meta38604){
return (new cljs.core.async.t_cljs$core$async38603(f__$1,blockable__$1,meta38604));
});

}

return (new cljs.core.async.t_cljs$core$async38603(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args38612 = [];
var len__27580__auto___38615 = arguments.length;
var i__27581__auto___38616 = (0);
while(true){
if((i__27581__auto___38616 < len__27580__auto___38615)){
args38612.push((arguments[i__27581__auto___38616]));

var G__38617 = (i__27581__auto___38616 + (1));
i__27581__auto___38616 = G__38617;
continue;
} else {
}
break;
}

var G__38614 = args38612.length;
switch (G__38614) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38612.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args38619 = [];
var len__27580__auto___38622 = arguments.length;
var i__27581__auto___38623 = (0);
while(true){
if((i__27581__auto___38623 < len__27580__auto___38622)){
args38619.push((arguments[i__27581__auto___38623]));

var G__38624 = (i__27581__auto___38623 + (1));
i__27581__auto___38623 = G__38624;
continue;
} else {
}
break;
}

var G__38621 = args38619.length;
switch (G__38621) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38619.length)].join('')));

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
var args38626 = [];
var len__27580__auto___38629 = arguments.length;
var i__27581__auto___38630 = (0);
while(true){
if((i__27581__auto___38630 < len__27580__auto___38629)){
args38626.push((arguments[i__27581__auto___38630]));

var G__38631 = (i__27581__auto___38630 + (1));
i__27581__auto___38630 = G__38631;
continue;
} else {
}
break;
}

var G__38628 = args38626.length;
switch (G__38628) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38626.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38633 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38633);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38633,ret){
return (function (){
return fn1.call(null,val_38633);
});})(val_38633,ret))
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
var args38634 = [];
var len__27580__auto___38637 = arguments.length;
var i__27581__auto___38638 = (0);
while(true){
if((i__27581__auto___38638 < len__27580__auto___38637)){
args38634.push((arguments[i__27581__auto___38638]));

var G__38639 = (i__27581__auto___38638 + (1));
i__27581__auto___38638 = G__38639;
continue;
} else {
}
break;
}

var G__38636 = args38634.length;
switch (G__38636) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38634.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6501__auto__)){
var ret = temp__6501__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6501__auto__)){
var retb = temp__6501__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6501__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6501__auto__))
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
var n__27410__auto___38641 = n;
var x_38642 = (0);
while(true){
if((x_38642 < n__27410__auto___38641)){
(a[x_38642] = (0));

var G__38643 = (x_38642 + (1));
x_38642 = G__38643;
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

var G__38644 = (i + (1));
i = G__38644;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async38648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38648 = (function (alt_flag,flag,meta38649){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta38649 = meta38649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38650,meta38649__$1){
var self__ = this;
var _38650__$1 = this;
return (new cljs.core.async.t_cljs$core$async38648(self__.alt_flag,self__.flag,meta38649__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38650){
var self__ = this;
var _38650__$1 = this;
return self__.meta38649;
});})(flag))
;

cljs.core.async.t_cljs$core$async38648.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38648.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38648.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38649","meta38649",457508010,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38648";

cljs.core.async.t_cljs$core$async38648.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27049__auto__,writer__27050__auto__,opt__27051__auto__){
return cljs.core._write.call(null,writer__27050__auto__,"cljs.core.async/t_cljs$core$async38648");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async38648 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38648(alt_flag__$1,flag__$1,meta38649){
return (new cljs.core.async.t_cljs$core$async38648(alt_flag__$1,flag__$1,meta38649));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38648(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async38654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38654 = (function (alt_handler,flag,cb,meta38655){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta38655 = meta38655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38656,meta38655__$1){
var self__ = this;
var _38656__$1 = this;
return (new cljs.core.async.t_cljs$core$async38654(self__.alt_handler,self__.flag,self__.cb,meta38655__$1));
});

cljs.core.async.t_cljs$core$async38654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38656){
var self__ = this;
var _38656__$1 = this;
return self__.meta38655;
});

cljs.core.async.t_cljs$core$async38654.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async38654.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38655","meta38655",-364363093,null)], null);
});

cljs.core.async.t_cljs$core$async38654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38654";

cljs.core.async.t_cljs$core$async38654.cljs$lang$ctorPrWriter = (function (this__27049__auto__,writer__27050__auto__,opt__27051__auto__){
return cljs.core._write.call(null,writer__27050__auto__,"cljs.core.async/t_cljs$core$async38654");
});

cljs.core.async.__GT_t_cljs$core$async38654 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38654(alt_handler__$1,flag__$1,cb__$1,meta38655){
return (new cljs.core.async.t_cljs$core$async38654(alt_handler__$1,flag__$1,cb__$1,meta38655));
});

}

return (new cljs.core.async.t_cljs$core$async38654(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__38657_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38657_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38658_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38658_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26397__auto__ = wport;
if(cljs.core.truth_(or__26397__auto__)){
return or__26397__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38659 = (i + (1));
i = G__38659;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26397__auto__ = ret;
if(cljs.core.truth_(or__26397__auto__)){
return or__26397__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6503__auto__ = (function (){var and__26385__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26385__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26385__auto__;
}
})();
if(cljs.core.truth_(temp__6503__auto__)){
var got = temp__6503__auto__;
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
var args__27587__auto__ = [];
var len__27580__auto___38665 = arguments.length;
var i__27581__auto___38666 = (0);
while(true){
if((i__27581__auto___38666 < len__27580__auto___38665)){
args__27587__auto__.push((arguments[i__27581__auto___38666]));

var G__38667 = (i__27581__auto___38666 + (1));
i__27581__auto___38666 = G__38667;
continue;
} else {
}
break;
}

var argseq__27588__auto__ = ((((1) < args__27587__auto__.length))?(new cljs.core.IndexedSeq(args__27587__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27588__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38662){
var map__38663 = p__38662;
var map__38663__$1 = ((((!((map__38663 == null)))?((((map__38663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38663):map__38663);
var opts = map__38663__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38660){
var G__38661 = cljs.core.first.call(null,seq38660);
var seq38660__$1 = cljs.core.next.call(null,seq38660);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38661,seq38660__$1);
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
var args38668 = [];
var len__27580__auto___38718 = arguments.length;
var i__27581__auto___38719 = (0);
while(true){
if((i__27581__auto___38719 < len__27580__auto___38718)){
args38668.push((arguments[i__27581__auto___38719]));

var G__38720 = (i__27581__auto___38719 + (1));
i__27581__auto___38719 = G__38720;
continue;
} else {
}
break;
}

var G__38670 = args38668.length;
switch (G__38670) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38668.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30370__auto___38722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___38722){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___38722){
return (function (state_38694){
var state_val_38695 = (state_38694[(1)]);
if((state_val_38695 === (7))){
var inst_38690 = (state_38694[(2)]);
var state_38694__$1 = state_38694;
var statearr_38696_38723 = state_38694__$1;
(statearr_38696_38723[(2)] = inst_38690);

(statearr_38696_38723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38695 === (1))){
var state_38694__$1 = state_38694;
var statearr_38697_38724 = state_38694__$1;
(statearr_38697_38724[(2)] = null);

(statearr_38697_38724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38695 === (4))){
var inst_38673 = (state_38694[(7)]);
var inst_38673__$1 = (state_38694[(2)]);
var inst_38674 = (inst_38673__$1 == null);
var state_38694__$1 = (function (){var statearr_38698 = state_38694;
(statearr_38698[(7)] = inst_38673__$1);

return statearr_38698;
})();
if(cljs.core.truth_(inst_38674)){
var statearr_38699_38725 = state_38694__$1;
(statearr_38699_38725[(1)] = (5));

} else {
var statearr_38700_38726 = state_38694__$1;
(statearr_38700_38726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38695 === (13))){
var state_38694__$1 = state_38694;
var statearr_38701_38727 = state_38694__$1;
(statearr_38701_38727[(2)] = null);

(statearr_38701_38727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38695 === (6))){
var inst_38673 = (state_38694[(7)]);
var state_38694__$1 = state_38694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38694__$1,(11),to,inst_38673);
} else {
if((state_val_38695 === (3))){
var inst_38692 = (state_38694[(2)]);
var state_38694__$1 = state_38694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38694__$1,inst_38692);
} else {
if((state_val_38695 === (12))){
var state_38694__$1 = state_38694;
var statearr_38702_38728 = state_38694__$1;
(statearr_38702_38728[(2)] = null);

(statearr_38702_38728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38695 === (2))){
var state_38694__$1 = state_38694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38694__$1,(4),from);
} else {
if((state_val_38695 === (11))){
var inst_38683 = (state_38694[(2)]);
var state_38694__$1 = state_38694;
if(cljs.core.truth_(inst_38683)){
var statearr_38703_38729 = state_38694__$1;
(statearr_38703_38729[(1)] = (12));

} else {
var statearr_38704_38730 = state_38694__$1;
(statearr_38704_38730[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38695 === (9))){
var state_38694__$1 = state_38694;
var statearr_38705_38731 = state_38694__$1;
(statearr_38705_38731[(2)] = null);

(statearr_38705_38731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38695 === (5))){
var state_38694__$1 = state_38694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38706_38732 = state_38694__$1;
(statearr_38706_38732[(1)] = (8));

} else {
var statearr_38707_38733 = state_38694__$1;
(statearr_38707_38733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38695 === (14))){
var inst_38688 = (state_38694[(2)]);
var state_38694__$1 = state_38694;
var statearr_38708_38734 = state_38694__$1;
(statearr_38708_38734[(2)] = inst_38688);

(statearr_38708_38734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38695 === (10))){
var inst_38680 = (state_38694[(2)]);
var state_38694__$1 = state_38694;
var statearr_38709_38735 = state_38694__$1;
(statearr_38709_38735[(2)] = inst_38680);

(statearr_38709_38735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38695 === (8))){
var inst_38677 = cljs.core.async.close_BANG_.call(null,to);
var state_38694__$1 = state_38694;
var statearr_38710_38736 = state_38694__$1;
(statearr_38710_38736[(2)] = inst_38677);

(statearr_38710_38736[(1)] = (10));


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
});})(c__30370__auto___38722))
;
return ((function (switch__30303__auto__,c__30370__auto___38722){
return (function() {
var cljs$core$async$state_machine__30304__auto__ = null;
var cljs$core$async$state_machine__30304__auto____0 = (function (){
var statearr_38714 = [null,null,null,null,null,null,null,null];
(statearr_38714[(0)] = cljs$core$async$state_machine__30304__auto__);

(statearr_38714[(1)] = (1));

return statearr_38714;
});
var cljs$core$async$state_machine__30304__auto____1 = (function (state_38694){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_38694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e38715){if((e38715 instanceof Object)){
var ex__30307__auto__ = e38715;
var statearr_38716_38737 = state_38694;
(statearr_38716_38737[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38738 = state_38694;
state_38694 = G__38738;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$state_machine__30304__auto__ = function(state_38694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30304__auto____1.call(this,state_38694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30304__auto____0;
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30304__auto____1;
return cljs$core$async$state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___38722))
})();
var state__30372__auto__ = (function (){var statearr_38717 = f__30371__auto__.call(null);
(statearr_38717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___38722);

return statearr_38717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___38722))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__38926){
var vec__38927 = p__38926;
var v = cljs.core.nth.call(null,vec__38927,(0),null);
var p = cljs.core.nth.call(null,vec__38927,(1),null);
var job = vec__38927;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30370__auto___39113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___39113,res,vec__38927,v,p,job,jobs,results){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___39113,res,vec__38927,v,p,job,jobs,results){
return (function (state_38934){
var state_val_38935 = (state_38934[(1)]);
if((state_val_38935 === (1))){
var state_38934__$1 = state_38934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38934__$1,(2),res,v);
} else {
if((state_val_38935 === (2))){
var inst_38931 = (state_38934[(2)]);
var inst_38932 = cljs.core.async.close_BANG_.call(null,res);
var state_38934__$1 = (function (){var statearr_38936 = state_38934;
(statearr_38936[(7)] = inst_38931);

return statearr_38936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38934__$1,inst_38932);
} else {
return null;
}
}
});})(c__30370__auto___39113,res,vec__38927,v,p,job,jobs,results))
;
return ((function (switch__30303__auto__,c__30370__auto___39113,res,vec__38927,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0 = (function (){
var statearr_38940 = [null,null,null,null,null,null,null,null];
(statearr_38940[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__);

(statearr_38940[(1)] = (1));

return statearr_38940;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1 = (function (state_38934){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_38934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e38941){if((e38941 instanceof Object)){
var ex__30307__auto__ = e38941;
var statearr_38942_39114 = state_38934;
(statearr_38942_39114[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39115 = state_38934;
state_38934 = G__39115;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__ = function(state_38934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1.call(this,state_38934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___39113,res,vec__38927,v,p,job,jobs,results))
})();
var state__30372__auto__ = (function (){var statearr_38943 = f__30371__auto__.call(null);
(statearr_38943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___39113);

return statearr_38943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___39113,res,vec__38927,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38944){
var vec__38945 = p__38944;
var v = cljs.core.nth.call(null,vec__38945,(0),null);
var p = cljs.core.nth.call(null,vec__38945,(1),null);
var job = vec__38945;
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
var n__27410__auto___39116 = n;
var __39117 = (0);
while(true){
if((__39117 < n__27410__auto___39116)){
var G__38948_39118 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38948_39118) {
case "compute":
var c__30370__auto___39120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39117,c__30370__auto___39120,G__38948_39118,n__27410__auto___39116,jobs,results,process,async){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (__39117,c__30370__auto___39120,G__38948_39118,n__27410__auto___39116,jobs,results,process,async){
return (function (state_38961){
var state_val_38962 = (state_38961[(1)]);
if((state_val_38962 === (1))){
var state_38961__$1 = state_38961;
var statearr_38963_39121 = state_38961__$1;
(statearr_38963_39121[(2)] = null);

(statearr_38963_39121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (2))){
var state_38961__$1 = state_38961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38961__$1,(4),jobs);
} else {
if((state_val_38962 === (3))){
var inst_38959 = (state_38961[(2)]);
var state_38961__$1 = state_38961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38961__$1,inst_38959);
} else {
if((state_val_38962 === (4))){
var inst_38951 = (state_38961[(2)]);
var inst_38952 = process.call(null,inst_38951);
var state_38961__$1 = state_38961;
if(cljs.core.truth_(inst_38952)){
var statearr_38964_39122 = state_38961__$1;
(statearr_38964_39122[(1)] = (5));

} else {
var statearr_38965_39123 = state_38961__$1;
(statearr_38965_39123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (5))){
var state_38961__$1 = state_38961;
var statearr_38966_39124 = state_38961__$1;
(statearr_38966_39124[(2)] = null);

(statearr_38966_39124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (6))){
var state_38961__$1 = state_38961;
var statearr_38967_39125 = state_38961__$1;
(statearr_38967_39125[(2)] = null);

(statearr_38967_39125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (7))){
var inst_38957 = (state_38961[(2)]);
var state_38961__$1 = state_38961;
var statearr_38968_39126 = state_38961__$1;
(statearr_38968_39126[(2)] = inst_38957);

(statearr_38968_39126[(1)] = (3));


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
});})(__39117,c__30370__auto___39120,G__38948_39118,n__27410__auto___39116,jobs,results,process,async))
;
return ((function (__39117,switch__30303__auto__,c__30370__auto___39120,G__38948_39118,n__27410__auto___39116,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0 = (function (){
var statearr_38972 = [null,null,null,null,null,null,null];
(statearr_38972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__);

(statearr_38972[(1)] = (1));

return statearr_38972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1 = (function (state_38961){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_38961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e38973){if((e38973 instanceof Object)){
var ex__30307__auto__ = e38973;
var statearr_38974_39127 = state_38961;
(statearr_38974_39127[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39128 = state_38961;
state_38961 = G__39128;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__ = function(state_38961){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1.call(this,state_38961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__;
})()
;})(__39117,switch__30303__auto__,c__30370__auto___39120,G__38948_39118,n__27410__auto___39116,jobs,results,process,async))
})();
var state__30372__auto__ = (function (){var statearr_38975 = f__30371__auto__.call(null);
(statearr_38975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___39120);

return statearr_38975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(__39117,c__30370__auto___39120,G__38948_39118,n__27410__auto___39116,jobs,results,process,async))
);


break;
case "async":
var c__30370__auto___39129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39117,c__30370__auto___39129,G__38948_39118,n__27410__auto___39116,jobs,results,process,async){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (__39117,c__30370__auto___39129,G__38948_39118,n__27410__auto___39116,jobs,results,process,async){
return (function (state_38988){
var state_val_38989 = (state_38988[(1)]);
if((state_val_38989 === (1))){
var state_38988__$1 = state_38988;
var statearr_38990_39130 = state_38988__$1;
(statearr_38990_39130[(2)] = null);

(statearr_38990_39130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (2))){
var state_38988__$1 = state_38988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38988__$1,(4),jobs);
} else {
if((state_val_38989 === (3))){
var inst_38986 = (state_38988[(2)]);
var state_38988__$1 = state_38988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38988__$1,inst_38986);
} else {
if((state_val_38989 === (4))){
var inst_38978 = (state_38988[(2)]);
var inst_38979 = async.call(null,inst_38978);
var state_38988__$1 = state_38988;
if(cljs.core.truth_(inst_38979)){
var statearr_38991_39131 = state_38988__$1;
(statearr_38991_39131[(1)] = (5));

} else {
var statearr_38992_39132 = state_38988__$1;
(statearr_38992_39132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (5))){
var state_38988__$1 = state_38988;
var statearr_38993_39133 = state_38988__$1;
(statearr_38993_39133[(2)] = null);

(statearr_38993_39133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (6))){
var state_38988__$1 = state_38988;
var statearr_38994_39134 = state_38988__$1;
(statearr_38994_39134[(2)] = null);

(statearr_38994_39134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (7))){
var inst_38984 = (state_38988[(2)]);
var state_38988__$1 = state_38988;
var statearr_38995_39135 = state_38988__$1;
(statearr_38995_39135[(2)] = inst_38984);

(statearr_38995_39135[(1)] = (3));


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
});})(__39117,c__30370__auto___39129,G__38948_39118,n__27410__auto___39116,jobs,results,process,async))
;
return ((function (__39117,switch__30303__auto__,c__30370__auto___39129,G__38948_39118,n__27410__auto___39116,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0 = (function (){
var statearr_38999 = [null,null,null,null,null,null,null];
(statearr_38999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__);

(statearr_38999[(1)] = (1));

return statearr_38999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1 = (function (state_38988){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_38988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e39000){if((e39000 instanceof Object)){
var ex__30307__auto__ = e39000;
var statearr_39001_39136 = state_38988;
(statearr_39001_39136[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39137 = state_38988;
state_38988 = G__39137;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__ = function(state_38988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1.call(this,state_38988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__;
})()
;})(__39117,switch__30303__auto__,c__30370__auto___39129,G__38948_39118,n__27410__auto___39116,jobs,results,process,async))
})();
var state__30372__auto__ = (function (){var statearr_39002 = f__30371__auto__.call(null);
(statearr_39002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___39129);

return statearr_39002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(__39117,c__30370__auto___39129,G__38948_39118,n__27410__auto___39116,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__39138 = (__39117 + (1));
__39117 = G__39138;
continue;
} else {
}
break;
}

var c__30370__auto___39139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___39139,jobs,results,process,async){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___39139,jobs,results,process,async){
return (function (state_39024){
var state_val_39025 = (state_39024[(1)]);
if((state_val_39025 === (1))){
var state_39024__$1 = state_39024;
var statearr_39026_39140 = state_39024__$1;
(statearr_39026_39140[(2)] = null);

(statearr_39026_39140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (2))){
var state_39024__$1 = state_39024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39024__$1,(4),from);
} else {
if((state_val_39025 === (3))){
var inst_39022 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39024__$1,inst_39022);
} else {
if((state_val_39025 === (4))){
var inst_39005 = (state_39024[(7)]);
var inst_39005__$1 = (state_39024[(2)]);
var inst_39006 = (inst_39005__$1 == null);
var state_39024__$1 = (function (){var statearr_39027 = state_39024;
(statearr_39027[(7)] = inst_39005__$1);

return statearr_39027;
})();
if(cljs.core.truth_(inst_39006)){
var statearr_39028_39141 = state_39024__$1;
(statearr_39028_39141[(1)] = (5));

} else {
var statearr_39029_39142 = state_39024__$1;
(statearr_39029_39142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (5))){
var inst_39008 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39024__$1 = state_39024;
var statearr_39030_39143 = state_39024__$1;
(statearr_39030_39143[(2)] = inst_39008);

(statearr_39030_39143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (6))){
var inst_39010 = (state_39024[(8)]);
var inst_39005 = (state_39024[(7)]);
var inst_39010__$1 = cljs.core.async.chan.call(null,(1));
var inst_39011 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39012 = [inst_39005,inst_39010__$1];
var inst_39013 = (new cljs.core.PersistentVector(null,2,(5),inst_39011,inst_39012,null));
var state_39024__$1 = (function (){var statearr_39031 = state_39024;
(statearr_39031[(8)] = inst_39010__$1);

return statearr_39031;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39024__$1,(8),jobs,inst_39013);
} else {
if((state_val_39025 === (7))){
var inst_39020 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
var statearr_39032_39144 = state_39024__$1;
(statearr_39032_39144[(2)] = inst_39020);

(statearr_39032_39144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (8))){
var inst_39010 = (state_39024[(8)]);
var inst_39015 = (state_39024[(2)]);
var state_39024__$1 = (function (){var statearr_39033 = state_39024;
(statearr_39033[(9)] = inst_39015);

return statearr_39033;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39024__$1,(9),results,inst_39010);
} else {
if((state_val_39025 === (9))){
var inst_39017 = (state_39024[(2)]);
var state_39024__$1 = (function (){var statearr_39034 = state_39024;
(statearr_39034[(10)] = inst_39017);

return statearr_39034;
})();
var statearr_39035_39145 = state_39024__$1;
(statearr_39035_39145[(2)] = null);

(statearr_39035_39145[(1)] = (2));


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
});})(c__30370__auto___39139,jobs,results,process,async))
;
return ((function (switch__30303__auto__,c__30370__auto___39139,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0 = (function (){
var statearr_39039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__);

(statearr_39039[(1)] = (1));

return statearr_39039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1 = (function (state_39024){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_39024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e39040){if((e39040 instanceof Object)){
var ex__30307__auto__ = e39040;
var statearr_39041_39146 = state_39024;
(statearr_39041_39146[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39147 = state_39024;
state_39024 = G__39147;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__ = function(state_39024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1.call(this,state_39024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___39139,jobs,results,process,async))
})();
var state__30372__auto__ = (function (){var statearr_39042 = f__30371__auto__.call(null);
(statearr_39042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___39139);

return statearr_39042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___39139,jobs,results,process,async))
);


var c__30370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto__,jobs,results,process,async){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto__,jobs,results,process,async){
return (function (state_39080){
var state_val_39081 = (state_39080[(1)]);
if((state_val_39081 === (7))){
var inst_39076 = (state_39080[(2)]);
var state_39080__$1 = state_39080;
var statearr_39082_39148 = state_39080__$1;
(statearr_39082_39148[(2)] = inst_39076);

(statearr_39082_39148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (20))){
var state_39080__$1 = state_39080;
var statearr_39083_39149 = state_39080__$1;
(statearr_39083_39149[(2)] = null);

(statearr_39083_39149[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (1))){
var state_39080__$1 = state_39080;
var statearr_39084_39150 = state_39080__$1;
(statearr_39084_39150[(2)] = null);

(statearr_39084_39150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (4))){
var inst_39045 = (state_39080[(7)]);
var inst_39045__$1 = (state_39080[(2)]);
var inst_39046 = (inst_39045__$1 == null);
var state_39080__$1 = (function (){var statearr_39085 = state_39080;
(statearr_39085[(7)] = inst_39045__$1);

return statearr_39085;
})();
if(cljs.core.truth_(inst_39046)){
var statearr_39086_39151 = state_39080__$1;
(statearr_39086_39151[(1)] = (5));

} else {
var statearr_39087_39152 = state_39080__$1;
(statearr_39087_39152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (15))){
var inst_39058 = (state_39080[(8)]);
var state_39080__$1 = state_39080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39080__$1,(18),to,inst_39058);
} else {
if((state_val_39081 === (21))){
var inst_39071 = (state_39080[(2)]);
var state_39080__$1 = state_39080;
var statearr_39088_39153 = state_39080__$1;
(statearr_39088_39153[(2)] = inst_39071);

(statearr_39088_39153[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (13))){
var inst_39073 = (state_39080[(2)]);
var state_39080__$1 = (function (){var statearr_39089 = state_39080;
(statearr_39089[(9)] = inst_39073);

return statearr_39089;
})();
var statearr_39090_39154 = state_39080__$1;
(statearr_39090_39154[(2)] = null);

(statearr_39090_39154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (6))){
var inst_39045 = (state_39080[(7)]);
var state_39080__$1 = state_39080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39080__$1,(11),inst_39045);
} else {
if((state_val_39081 === (17))){
var inst_39066 = (state_39080[(2)]);
var state_39080__$1 = state_39080;
if(cljs.core.truth_(inst_39066)){
var statearr_39091_39155 = state_39080__$1;
(statearr_39091_39155[(1)] = (19));

} else {
var statearr_39092_39156 = state_39080__$1;
(statearr_39092_39156[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (3))){
var inst_39078 = (state_39080[(2)]);
var state_39080__$1 = state_39080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39080__$1,inst_39078);
} else {
if((state_val_39081 === (12))){
var inst_39055 = (state_39080[(10)]);
var state_39080__$1 = state_39080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39080__$1,(14),inst_39055);
} else {
if((state_val_39081 === (2))){
var state_39080__$1 = state_39080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39080__$1,(4),results);
} else {
if((state_val_39081 === (19))){
var state_39080__$1 = state_39080;
var statearr_39093_39157 = state_39080__$1;
(statearr_39093_39157[(2)] = null);

(statearr_39093_39157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (11))){
var inst_39055 = (state_39080[(2)]);
var state_39080__$1 = (function (){var statearr_39094 = state_39080;
(statearr_39094[(10)] = inst_39055);

return statearr_39094;
})();
var statearr_39095_39158 = state_39080__$1;
(statearr_39095_39158[(2)] = null);

(statearr_39095_39158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (9))){
var state_39080__$1 = state_39080;
var statearr_39096_39159 = state_39080__$1;
(statearr_39096_39159[(2)] = null);

(statearr_39096_39159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (5))){
var state_39080__$1 = state_39080;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39097_39160 = state_39080__$1;
(statearr_39097_39160[(1)] = (8));

} else {
var statearr_39098_39161 = state_39080__$1;
(statearr_39098_39161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (14))){
var inst_39058 = (state_39080[(8)]);
var inst_39060 = (state_39080[(11)]);
var inst_39058__$1 = (state_39080[(2)]);
var inst_39059 = (inst_39058__$1 == null);
var inst_39060__$1 = cljs.core.not.call(null,inst_39059);
var state_39080__$1 = (function (){var statearr_39099 = state_39080;
(statearr_39099[(8)] = inst_39058__$1);

(statearr_39099[(11)] = inst_39060__$1);

return statearr_39099;
})();
if(inst_39060__$1){
var statearr_39100_39162 = state_39080__$1;
(statearr_39100_39162[(1)] = (15));

} else {
var statearr_39101_39163 = state_39080__$1;
(statearr_39101_39163[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (16))){
var inst_39060 = (state_39080[(11)]);
var state_39080__$1 = state_39080;
var statearr_39102_39164 = state_39080__$1;
(statearr_39102_39164[(2)] = inst_39060);

(statearr_39102_39164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (10))){
var inst_39052 = (state_39080[(2)]);
var state_39080__$1 = state_39080;
var statearr_39103_39165 = state_39080__$1;
(statearr_39103_39165[(2)] = inst_39052);

(statearr_39103_39165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (18))){
var inst_39063 = (state_39080[(2)]);
var state_39080__$1 = state_39080;
var statearr_39104_39166 = state_39080__$1;
(statearr_39104_39166[(2)] = inst_39063);

(statearr_39104_39166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39081 === (8))){
var inst_39049 = cljs.core.async.close_BANG_.call(null,to);
var state_39080__$1 = state_39080;
var statearr_39105_39167 = state_39080__$1;
(statearr_39105_39167[(2)] = inst_39049);

(statearr_39105_39167[(1)] = (10));


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
});})(c__30370__auto__,jobs,results,process,async))
;
return ((function (switch__30303__auto__,c__30370__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0 = (function (){
var statearr_39109 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39109[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__);

(statearr_39109[(1)] = (1));

return statearr_39109;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1 = (function (state_39080){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_39080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e39110){if((e39110 instanceof Object)){
var ex__30307__auto__ = e39110;
var statearr_39111_39168 = state_39080;
(statearr_39111_39168[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39169 = state_39080;
state_39080 = G__39169;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__ = function(state_39080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1.call(this,state_39080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto__,jobs,results,process,async))
})();
var state__30372__auto__ = (function (){var statearr_39112 = f__30371__auto__.call(null);
(statearr_39112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto__);

return statearr_39112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto__,jobs,results,process,async))
);

return c__30370__auto__;
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
var args39170 = [];
var len__27580__auto___39173 = arguments.length;
var i__27581__auto___39174 = (0);
while(true){
if((i__27581__auto___39174 < len__27580__auto___39173)){
args39170.push((arguments[i__27581__auto___39174]));

var G__39175 = (i__27581__auto___39174 + (1));
i__27581__auto___39174 = G__39175;
continue;
} else {
}
break;
}

var G__39172 = args39170.length;
switch (G__39172) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39170.length)].join('')));

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
var args39177 = [];
var len__27580__auto___39180 = arguments.length;
var i__27581__auto___39181 = (0);
while(true){
if((i__27581__auto___39181 < len__27580__auto___39180)){
args39177.push((arguments[i__27581__auto___39181]));

var G__39182 = (i__27581__auto___39181 + (1));
i__27581__auto___39181 = G__39182;
continue;
} else {
}
break;
}

var G__39179 = args39177.length;
switch (G__39179) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39177.length)].join('')));

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
var args39184 = [];
var len__27580__auto___39237 = arguments.length;
var i__27581__auto___39238 = (0);
while(true){
if((i__27581__auto___39238 < len__27580__auto___39237)){
args39184.push((arguments[i__27581__auto___39238]));

var G__39239 = (i__27581__auto___39238 + (1));
i__27581__auto___39238 = G__39239;
continue;
} else {
}
break;
}

var G__39186 = args39184.length;
switch (G__39186) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39184.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30370__auto___39241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___39241,tc,fc){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___39241,tc,fc){
return (function (state_39212){
var state_val_39213 = (state_39212[(1)]);
if((state_val_39213 === (7))){
var inst_39208 = (state_39212[(2)]);
var state_39212__$1 = state_39212;
var statearr_39214_39242 = state_39212__$1;
(statearr_39214_39242[(2)] = inst_39208);

(statearr_39214_39242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (1))){
var state_39212__$1 = state_39212;
var statearr_39215_39243 = state_39212__$1;
(statearr_39215_39243[(2)] = null);

(statearr_39215_39243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (4))){
var inst_39189 = (state_39212[(7)]);
var inst_39189__$1 = (state_39212[(2)]);
var inst_39190 = (inst_39189__$1 == null);
var state_39212__$1 = (function (){var statearr_39216 = state_39212;
(statearr_39216[(7)] = inst_39189__$1);

return statearr_39216;
})();
if(cljs.core.truth_(inst_39190)){
var statearr_39217_39244 = state_39212__$1;
(statearr_39217_39244[(1)] = (5));

} else {
var statearr_39218_39245 = state_39212__$1;
(statearr_39218_39245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (13))){
var state_39212__$1 = state_39212;
var statearr_39219_39246 = state_39212__$1;
(statearr_39219_39246[(2)] = null);

(statearr_39219_39246[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (6))){
var inst_39189 = (state_39212[(7)]);
var inst_39195 = p.call(null,inst_39189);
var state_39212__$1 = state_39212;
if(cljs.core.truth_(inst_39195)){
var statearr_39220_39247 = state_39212__$1;
(statearr_39220_39247[(1)] = (9));

} else {
var statearr_39221_39248 = state_39212__$1;
(statearr_39221_39248[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (3))){
var inst_39210 = (state_39212[(2)]);
var state_39212__$1 = state_39212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39212__$1,inst_39210);
} else {
if((state_val_39213 === (12))){
var state_39212__$1 = state_39212;
var statearr_39222_39249 = state_39212__$1;
(statearr_39222_39249[(2)] = null);

(statearr_39222_39249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (2))){
var state_39212__$1 = state_39212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39212__$1,(4),ch);
} else {
if((state_val_39213 === (11))){
var inst_39189 = (state_39212[(7)]);
var inst_39199 = (state_39212[(2)]);
var state_39212__$1 = state_39212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39212__$1,(8),inst_39199,inst_39189);
} else {
if((state_val_39213 === (9))){
var state_39212__$1 = state_39212;
var statearr_39223_39250 = state_39212__$1;
(statearr_39223_39250[(2)] = tc);

(statearr_39223_39250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (5))){
var inst_39192 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39193 = cljs.core.async.close_BANG_.call(null,fc);
var state_39212__$1 = (function (){var statearr_39224 = state_39212;
(statearr_39224[(8)] = inst_39192);

return statearr_39224;
})();
var statearr_39225_39251 = state_39212__$1;
(statearr_39225_39251[(2)] = inst_39193);

(statearr_39225_39251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (14))){
var inst_39206 = (state_39212[(2)]);
var state_39212__$1 = state_39212;
var statearr_39226_39252 = state_39212__$1;
(statearr_39226_39252[(2)] = inst_39206);

(statearr_39226_39252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (10))){
var state_39212__$1 = state_39212;
var statearr_39227_39253 = state_39212__$1;
(statearr_39227_39253[(2)] = fc);

(statearr_39227_39253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (8))){
var inst_39201 = (state_39212[(2)]);
var state_39212__$1 = state_39212;
if(cljs.core.truth_(inst_39201)){
var statearr_39228_39254 = state_39212__$1;
(statearr_39228_39254[(1)] = (12));

} else {
var statearr_39229_39255 = state_39212__$1;
(statearr_39229_39255[(1)] = (13));

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
});})(c__30370__auto___39241,tc,fc))
;
return ((function (switch__30303__auto__,c__30370__auto___39241,tc,fc){
return (function() {
var cljs$core$async$state_machine__30304__auto__ = null;
var cljs$core$async$state_machine__30304__auto____0 = (function (){
var statearr_39233 = [null,null,null,null,null,null,null,null,null];
(statearr_39233[(0)] = cljs$core$async$state_machine__30304__auto__);

(statearr_39233[(1)] = (1));

return statearr_39233;
});
var cljs$core$async$state_machine__30304__auto____1 = (function (state_39212){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_39212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e39234){if((e39234 instanceof Object)){
var ex__30307__auto__ = e39234;
var statearr_39235_39256 = state_39212;
(statearr_39235_39256[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39257 = state_39212;
state_39212 = G__39257;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$state_machine__30304__auto__ = function(state_39212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30304__auto____1.call(this,state_39212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30304__auto____0;
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30304__auto____1;
return cljs$core$async$state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___39241,tc,fc))
})();
var state__30372__auto__ = (function (){var statearr_39236 = f__30371__auto__.call(null);
(statearr_39236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___39241);

return statearr_39236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___39241,tc,fc))
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
var c__30370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto__){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto__){
return (function (state_39321){
var state_val_39322 = (state_39321[(1)]);
if((state_val_39322 === (7))){
var inst_39317 = (state_39321[(2)]);
var state_39321__$1 = state_39321;
var statearr_39323_39344 = state_39321__$1;
(statearr_39323_39344[(2)] = inst_39317);

(statearr_39323_39344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39322 === (1))){
var inst_39301 = init;
var state_39321__$1 = (function (){var statearr_39324 = state_39321;
(statearr_39324[(7)] = inst_39301);

return statearr_39324;
})();
var statearr_39325_39345 = state_39321__$1;
(statearr_39325_39345[(2)] = null);

(statearr_39325_39345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39322 === (4))){
var inst_39304 = (state_39321[(8)]);
var inst_39304__$1 = (state_39321[(2)]);
var inst_39305 = (inst_39304__$1 == null);
var state_39321__$1 = (function (){var statearr_39326 = state_39321;
(statearr_39326[(8)] = inst_39304__$1);

return statearr_39326;
})();
if(cljs.core.truth_(inst_39305)){
var statearr_39327_39346 = state_39321__$1;
(statearr_39327_39346[(1)] = (5));

} else {
var statearr_39328_39347 = state_39321__$1;
(statearr_39328_39347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39322 === (6))){
var inst_39304 = (state_39321[(8)]);
var inst_39301 = (state_39321[(7)]);
var inst_39308 = (state_39321[(9)]);
var inst_39308__$1 = f.call(null,inst_39301,inst_39304);
var inst_39309 = cljs.core.reduced_QMARK_.call(null,inst_39308__$1);
var state_39321__$1 = (function (){var statearr_39329 = state_39321;
(statearr_39329[(9)] = inst_39308__$1);

return statearr_39329;
})();
if(inst_39309){
var statearr_39330_39348 = state_39321__$1;
(statearr_39330_39348[(1)] = (8));

} else {
var statearr_39331_39349 = state_39321__$1;
(statearr_39331_39349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39322 === (3))){
var inst_39319 = (state_39321[(2)]);
var state_39321__$1 = state_39321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39321__$1,inst_39319);
} else {
if((state_val_39322 === (2))){
var state_39321__$1 = state_39321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39321__$1,(4),ch);
} else {
if((state_val_39322 === (9))){
var inst_39308 = (state_39321[(9)]);
var inst_39301 = inst_39308;
var state_39321__$1 = (function (){var statearr_39332 = state_39321;
(statearr_39332[(7)] = inst_39301);

return statearr_39332;
})();
var statearr_39333_39350 = state_39321__$1;
(statearr_39333_39350[(2)] = null);

(statearr_39333_39350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39322 === (5))){
var inst_39301 = (state_39321[(7)]);
var state_39321__$1 = state_39321;
var statearr_39334_39351 = state_39321__$1;
(statearr_39334_39351[(2)] = inst_39301);

(statearr_39334_39351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39322 === (10))){
var inst_39315 = (state_39321[(2)]);
var state_39321__$1 = state_39321;
var statearr_39335_39352 = state_39321__$1;
(statearr_39335_39352[(2)] = inst_39315);

(statearr_39335_39352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39322 === (8))){
var inst_39308 = (state_39321[(9)]);
var inst_39311 = cljs.core.deref.call(null,inst_39308);
var state_39321__$1 = state_39321;
var statearr_39336_39353 = state_39321__$1;
(statearr_39336_39353[(2)] = inst_39311);

(statearr_39336_39353[(1)] = (10));


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
});})(c__30370__auto__))
;
return ((function (switch__30303__auto__,c__30370__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30304__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30304__auto____0 = (function (){
var statearr_39340 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39340[(0)] = cljs$core$async$reduce_$_state_machine__30304__auto__);

(statearr_39340[(1)] = (1));

return statearr_39340;
});
var cljs$core$async$reduce_$_state_machine__30304__auto____1 = (function (state_39321){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_39321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e39341){if((e39341 instanceof Object)){
var ex__30307__auto__ = e39341;
var statearr_39342_39354 = state_39321;
(statearr_39342_39354[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39355 = state_39321;
state_39321 = G__39355;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30304__auto__ = function(state_39321){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30304__auto____1.call(this,state_39321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30304__auto____0;
cljs$core$async$reduce_$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30304__auto____1;
return cljs$core$async$reduce_$_state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto__))
})();
var state__30372__auto__ = (function (){var statearr_39343 = f__30371__auto__.call(null);
(statearr_39343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto__);

return statearr_39343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto__))
);

return c__30370__auto__;
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
var args39356 = [];
var len__27580__auto___39408 = arguments.length;
var i__27581__auto___39409 = (0);
while(true){
if((i__27581__auto___39409 < len__27580__auto___39408)){
args39356.push((arguments[i__27581__auto___39409]));

var G__39410 = (i__27581__auto___39409 + (1));
i__27581__auto___39409 = G__39410;
continue;
} else {
}
break;
}

var G__39358 = args39356.length;
switch (G__39358) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39356.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto__){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto__){
return (function (state_39383){
var state_val_39384 = (state_39383[(1)]);
if((state_val_39384 === (7))){
var inst_39365 = (state_39383[(2)]);
var state_39383__$1 = state_39383;
var statearr_39385_39412 = state_39383__$1;
(statearr_39385_39412[(2)] = inst_39365);

(statearr_39385_39412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (1))){
var inst_39359 = cljs.core.seq.call(null,coll);
var inst_39360 = inst_39359;
var state_39383__$1 = (function (){var statearr_39386 = state_39383;
(statearr_39386[(7)] = inst_39360);

return statearr_39386;
})();
var statearr_39387_39413 = state_39383__$1;
(statearr_39387_39413[(2)] = null);

(statearr_39387_39413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (4))){
var inst_39360 = (state_39383[(7)]);
var inst_39363 = cljs.core.first.call(null,inst_39360);
var state_39383__$1 = state_39383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39383__$1,(7),ch,inst_39363);
} else {
if((state_val_39384 === (13))){
var inst_39377 = (state_39383[(2)]);
var state_39383__$1 = state_39383;
var statearr_39388_39414 = state_39383__$1;
(statearr_39388_39414[(2)] = inst_39377);

(statearr_39388_39414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (6))){
var inst_39368 = (state_39383[(2)]);
var state_39383__$1 = state_39383;
if(cljs.core.truth_(inst_39368)){
var statearr_39389_39415 = state_39383__$1;
(statearr_39389_39415[(1)] = (8));

} else {
var statearr_39390_39416 = state_39383__$1;
(statearr_39390_39416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (3))){
var inst_39381 = (state_39383[(2)]);
var state_39383__$1 = state_39383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39383__$1,inst_39381);
} else {
if((state_val_39384 === (12))){
var state_39383__$1 = state_39383;
var statearr_39391_39417 = state_39383__$1;
(statearr_39391_39417[(2)] = null);

(statearr_39391_39417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (2))){
var inst_39360 = (state_39383[(7)]);
var state_39383__$1 = state_39383;
if(cljs.core.truth_(inst_39360)){
var statearr_39392_39418 = state_39383__$1;
(statearr_39392_39418[(1)] = (4));

} else {
var statearr_39393_39419 = state_39383__$1;
(statearr_39393_39419[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (11))){
var inst_39374 = cljs.core.async.close_BANG_.call(null,ch);
var state_39383__$1 = state_39383;
var statearr_39394_39420 = state_39383__$1;
(statearr_39394_39420[(2)] = inst_39374);

(statearr_39394_39420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (9))){
var state_39383__$1 = state_39383;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39395_39421 = state_39383__$1;
(statearr_39395_39421[(1)] = (11));

} else {
var statearr_39396_39422 = state_39383__$1;
(statearr_39396_39422[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (5))){
var inst_39360 = (state_39383[(7)]);
var state_39383__$1 = state_39383;
var statearr_39397_39423 = state_39383__$1;
(statearr_39397_39423[(2)] = inst_39360);

(statearr_39397_39423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (10))){
var inst_39379 = (state_39383[(2)]);
var state_39383__$1 = state_39383;
var statearr_39398_39424 = state_39383__$1;
(statearr_39398_39424[(2)] = inst_39379);

(statearr_39398_39424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (8))){
var inst_39360 = (state_39383[(7)]);
var inst_39370 = cljs.core.next.call(null,inst_39360);
var inst_39360__$1 = inst_39370;
var state_39383__$1 = (function (){var statearr_39399 = state_39383;
(statearr_39399[(7)] = inst_39360__$1);

return statearr_39399;
})();
var statearr_39400_39425 = state_39383__$1;
(statearr_39400_39425[(2)] = null);

(statearr_39400_39425[(1)] = (2));


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
});})(c__30370__auto__))
;
return ((function (switch__30303__auto__,c__30370__auto__){
return (function() {
var cljs$core$async$state_machine__30304__auto__ = null;
var cljs$core$async$state_machine__30304__auto____0 = (function (){
var statearr_39404 = [null,null,null,null,null,null,null,null];
(statearr_39404[(0)] = cljs$core$async$state_machine__30304__auto__);

(statearr_39404[(1)] = (1));

return statearr_39404;
});
var cljs$core$async$state_machine__30304__auto____1 = (function (state_39383){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_39383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e39405){if((e39405 instanceof Object)){
var ex__30307__auto__ = e39405;
var statearr_39406_39426 = state_39383;
(statearr_39406_39426[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39427 = state_39383;
state_39383 = G__39427;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$state_machine__30304__auto__ = function(state_39383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30304__auto____1.call(this,state_39383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30304__auto____0;
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30304__auto____1;
return cljs$core$async$state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto__))
})();
var state__30372__auto__ = (function (){var statearr_39407 = f__30371__auto__.call(null);
(statearr_39407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto__);

return statearr_39407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto__))
);

return c__30370__auto__;
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
var x__27110__auto__ = (((_ == null))?null:_);
var m__27111__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27110__auto__)]);
if(!((m__27111__auto__ == null))){
return m__27111__auto__.call(null,_);
} else {
var m__27111__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27111__auto____$1 == null))){
return m__27111__auto____$1.call(null,_);
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
var x__27110__auto__ = (((m == null))?null:m);
var m__27111__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27110__auto__)]);
if(!((m__27111__auto__ == null))){
return m__27111__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27111__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27111__auto____$1 == null))){
return m__27111__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__27110__auto__ = (((m == null))?null:m);
var m__27111__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27110__auto__)]);
if(!((m__27111__auto__ == null))){
return m__27111__auto__.call(null,m,ch);
} else {
var m__27111__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27111__auto____$1 == null))){
return m__27111__auto____$1.call(null,m,ch);
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
var x__27110__auto__ = (((m == null))?null:m);
var m__27111__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27110__auto__)]);
if(!((m__27111__auto__ == null))){
return m__27111__auto__.call(null,m);
} else {
var m__27111__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27111__auto____$1 == null))){
return m__27111__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async39653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39653 = (function (mult,ch,cs,meta39654){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta39654 = meta39654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39655,meta39654__$1){
var self__ = this;
var _39655__$1 = this;
return (new cljs.core.async.t_cljs$core$async39653(self__.mult,self__.ch,self__.cs,meta39654__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39655){
var self__ = this;
var _39655__$1 = this;
return self__.meta39654;
});})(cs))
;

cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39653.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39654","meta39654",-22102884,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39653";

cljs.core.async.t_cljs$core$async39653.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27049__auto__,writer__27050__auto__,opt__27051__auto__){
return cljs.core._write.call(null,writer__27050__auto__,"cljs.core.async/t_cljs$core$async39653");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39653 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39653(mult__$1,ch__$1,cs__$1,meta39654){
return (new cljs.core.async.t_cljs$core$async39653(mult__$1,ch__$1,cs__$1,meta39654));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39653(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30370__auto___39878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___39878,cs,m,dchan,dctr,done){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___39878,cs,m,dchan,dctr,done){
return (function (state_39790){
var state_val_39791 = (state_39790[(1)]);
if((state_val_39791 === (7))){
var inst_39786 = (state_39790[(2)]);
var state_39790__$1 = state_39790;
var statearr_39792_39879 = state_39790__$1;
(statearr_39792_39879[(2)] = inst_39786);

(statearr_39792_39879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (20))){
var inst_39689 = (state_39790[(7)]);
var inst_39701 = cljs.core.first.call(null,inst_39689);
var inst_39702 = cljs.core.nth.call(null,inst_39701,(0),null);
var inst_39703 = cljs.core.nth.call(null,inst_39701,(1),null);
var state_39790__$1 = (function (){var statearr_39793 = state_39790;
(statearr_39793[(8)] = inst_39702);

return statearr_39793;
})();
if(cljs.core.truth_(inst_39703)){
var statearr_39794_39880 = state_39790__$1;
(statearr_39794_39880[(1)] = (22));

} else {
var statearr_39795_39881 = state_39790__$1;
(statearr_39795_39881[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (27))){
var inst_39733 = (state_39790[(9)]);
var inst_39738 = (state_39790[(10)]);
var inst_39731 = (state_39790[(11)]);
var inst_39658 = (state_39790[(12)]);
var inst_39738__$1 = cljs.core._nth.call(null,inst_39731,inst_39733);
var inst_39739 = cljs.core.async.put_BANG_.call(null,inst_39738__$1,inst_39658,done);
var state_39790__$1 = (function (){var statearr_39796 = state_39790;
(statearr_39796[(10)] = inst_39738__$1);

return statearr_39796;
})();
if(cljs.core.truth_(inst_39739)){
var statearr_39797_39882 = state_39790__$1;
(statearr_39797_39882[(1)] = (30));

} else {
var statearr_39798_39883 = state_39790__$1;
(statearr_39798_39883[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (1))){
var state_39790__$1 = state_39790;
var statearr_39799_39884 = state_39790__$1;
(statearr_39799_39884[(2)] = null);

(statearr_39799_39884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (24))){
var inst_39689 = (state_39790[(7)]);
var inst_39708 = (state_39790[(2)]);
var inst_39709 = cljs.core.next.call(null,inst_39689);
var inst_39667 = inst_39709;
var inst_39668 = null;
var inst_39669 = (0);
var inst_39670 = (0);
var state_39790__$1 = (function (){var statearr_39800 = state_39790;
(statearr_39800[(13)] = inst_39708);

(statearr_39800[(14)] = inst_39668);

(statearr_39800[(15)] = inst_39670);

(statearr_39800[(16)] = inst_39669);

(statearr_39800[(17)] = inst_39667);

return statearr_39800;
})();
var statearr_39801_39885 = state_39790__$1;
(statearr_39801_39885[(2)] = null);

(statearr_39801_39885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (39))){
var state_39790__$1 = state_39790;
var statearr_39805_39886 = state_39790__$1;
(statearr_39805_39886[(2)] = null);

(statearr_39805_39886[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (4))){
var inst_39658 = (state_39790[(12)]);
var inst_39658__$1 = (state_39790[(2)]);
var inst_39659 = (inst_39658__$1 == null);
var state_39790__$1 = (function (){var statearr_39806 = state_39790;
(statearr_39806[(12)] = inst_39658__$1);

return statearr_39806;
})();
if(cljs.core.truth_(inst_39659)){
var statearr_39807_39887 = state_39790__$1;
(statearr_39807_39887[(1)] = (5));

} else {
var statearr_39808_39888 = state_39790__$1;
(statearr_39808_39888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (15))){
var inst_39668 = (state_39790[(14)]);
var inst_39670 = (state_39790[(15)]);
var inst_39669 = (state_39790[(16)]);
var inst_39667 = (state_39790[(17)]);
var inst_39685 = (state_39790[(2)]);
var inst_39686 = (inst_39670 + (1));
var tmp39802 = inst_39668;
var tmp39803 = inst_39669;
var tmp39804 = inst_39667;
var inst_39667__$1 = tmp39804;
var inst_39668__$1 = tmp39802;
var inst_39669__$1 = tmp39803;
var inst_39670__$1 = inst_39686;
var state_39790__$1 = (function (){var statearr_39809 = state_39790;
(statearr_39809[(14)] = inst_39668__$1);

(statearr_39809[(15)] = inst_39670__$1);

(statearr_39809[(18)] = inst_39685);

(statearr_39809[(16)] = inst_39669__$1);

(statearr_39809[(17)] = inst_39667__$1);

return statearr_39809;
})();
var statearr_39810_39889 = state_39790__$1;
(statearr_39810_39889[(2)] = null);

(statearr_39810_39889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (21))){
var inst_39712 = (state_39790[(2)]);
var state_39790__$1 = state_39790;
var statearr_39814_39890 = state_39790__$1;
(statearr_39814_39890[(2)] = inst_39712);

(statearr_39814_39890[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (31))){
var inst_39738 = (state_39790[(10)]);
var inst_39742 = done.call(null,null);
var inst_39743 = cljs.core.async.untap_STAR_.call(null,m,inst_39738);
var state_39790__$1 = (function (){var statearr_39815 = state_39790;
(statearr_39815[(19)] = inst_39742);

return statearr_39815;
})();
var statearr_39816_39891 = state_39790__$1;
(statearr_39816_39891[(2)] = inst_39743);

(statearr_39816_39891[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (32))){
var inst_39730 = (state_39790[(20)]);
var inst_39733 = (state_39790[(9)]);
var inst_39732 = (state_39790[(21)]);
var inst_39731 = (state_39790[(11)]);
var inst_39745 = (state_39790[(2)]);
var inst_39746 = (inst_39733 + (1));
var tmp39811 = inst_39730;
var tmp39812 = inst_39732;
var tmp39813 = inst_39731;
var inst_39730__$1 = tmp39811;
var inst_39731__$1 = tmp39813;
var inst_39732__$1 = tmp39812;
var inst_39733__$1 = inst_39746;
var state_39790__$1 = (function (){var statearr_39817 = state_39790;
(statearr_39817[(22)] = inst_39745);

(statearr_39817[(20)] = inst_39730__$1);

(statearr_39817[(9)] = inst_39733__$1);

(statearr_39817[(21)] = inst_39732__$1);

(statearr_39817[(11)] = inst_39731__$1);

return statearr_39817;
})();
var statearr_39818_39892 = state_39790__$1;
(statearr_39818_39892[(2)] = null);

(statearr_39818_39892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (40))){
var inst_39758 = (state_39790[(23)]);
var inst_39762 = done.call(null,null);
var inst_39763 = cljs.core.async.untap_STAR_.call(null,m,inst_39758);
var state_39790__$1 = (function (){var statearr_39819 = state_39790;
(statearr_39819[(24)] = inst_39762);

return statearr_39819;
})();
var statearr_39820_39893 = state_39790__$1;
(statearr_39820_39893[(2)] = inst_39763);

(statearr_39820_39893[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (33))){
var inst_39749 = (state_39790[(25)]);
var inst_39751 = cljs.core.chunked_seq_QMARK_.call(null,inst_39749);
var state_39790__$1 = state_39790;
if(inst_39751){
var statearr_39821_39894 = state_39790__$1;
(statearr_39821_39894[(1)] = (36));

} else {
var statearr_39822_39895 = state_39790__$1;
(statearr_39822_39895[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (13))){
var inst_39679 = (state_39790[(26)]);
var inst_39682 = cljs.core.async.close_BANG_.call(null,inst_39679);
var state_39790__$1 = state_39790;
var statearr_39823_39896 = state_39790__$1;
(statearr_39823_39896[(2)] = inst_39682);

(statearr_39823_39896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (22))){
var inst_39702 = (state_39790[(8)]);
var inst_39705 = cljs.core.async.close_BANG_.call(null,inst_39702);
var state_39790__$1 = state_39790;
var statearr_39824_39897 = state_39790__$1;
(statearr_39824_39897[(2)] = inst_39705);

(statearr_39824_39897[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (36))){
var inst_39749 = (state_39790[(25)]);
var inst_39753 = cljs.core.chunk_first.call(null,inst_39749);
var inst_39754 = cljs.core.chunk_rest.call(null,inst_39749);
var inst_39755 = cljs.core.count.call(null,inst_39753);
var inst_39730 = inst_39754;
var inst_39731 = inst_39753;
var inst_39732 = inst_39755;
var inst_39733 = (0);
var state_39790__$1 = (function (){var statearr_39825 = state_39790;
(statearr_39825[(20)] = inst_39730);

(statearr_39825[(9)] = inst_39733);

(statearr_39825[(21)] = inst_39732);

(statearr_39825[(11)] = inst_39731);

return statearr_39825;
})();
var statearr_39826_39898 = state_39790__$1;
(statearr_39826_39898[(2)] = null);

(statearr_39826_39898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (41))){
var inst_39749 = (state_39790[(25)]);
var inst_39765 = (state_39790[(2)]);
var inst_39766 = cljs.core.next.call(null,inst_39749);
var inst_39730 = inst_39766;
var inst_39731 = null;
var inst_39732 = (0);
var inst_39733 = (0);
var state_39790__$1 = (function (){var statearr_39827 = state_39790;
(statearr_39827[(27)] = inst_39765);

(statearr_39827[(20)] = inst_39730);

(statearr_39827[(9)] = inst_39733);

(statearr_39827[(21)] = inst_39732);

(statearr_39827[(11)] = inst_39731);

return statearr_39827;
})();
var statearr_39828_39899 = state_39790__$1;
(statearr_39828_39899[(2)] = null);

(statearr_39828_39899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (43))){
var state_39790__$1 = state_39790;
var statearr_39829_39900 = state_39790__$1;
(statearr_39829_39900[(2)] = null);

(statearr_39829_39900[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (29))){
var inst_39774 = (state_39790[(2)]);
var state_39790__$1 = state_39790;
var statearr_39830_39901 = state_39790__$1;
(statearr_39830_39901[(2)] = inst_39774);

(statearr_39830_39901[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (44))){
var inst_39783 = (state_39790[(2)]);
var state_39790__$1 = (function (){var statearr_39831 = state_39790;
(statearr_39831[(28)] = inst_39783);

return statearr_39831;
})();
var statearr_39832_39902 = state_39790__$1;
(statearr_39832_39902[(2)] = null);

(statearr_39832_39902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (6))){
var inst_39722 = (state_39790[(29)]);
var inst_39721 = cljs.core.deref.call(null,cs);
var inst_39722__$1 = cljs.core.keys.call(null,inst_39721);
var inst_39723 = cljs.core.count.call(null,inst_39722__$1);
var inst_39724 = cljs.core.reset_BANG_.call(null,dctr,inst_39723);
var inst_39729 = cljs.core.seq.call(null,inst_39722__$1);
var inst_39730 = inst_39729;
var inst_39731 = null;
var inst_39732 = (0);
var inst_39733 = (0);
var state_39790__$1 = (function (){var statearr_39833 = state_39790;
(statearr_39833[(29)] = inst_39722__$1);

(statearr_39833[(20)] = inst_39730);

(statearr_39833[(9)] = inst_39733);

(statearr_39833[(21)] = inst_39732);

(statearr_39833[(11)] = inst_39731);

(statearr_39833[(30)] = inst_39724);

return statearr_39833;
})();
var statearr_39834_39903 = state_39790__$1;
(statearr_39834_39903[(2)] = null);

(statearr_39834_39903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (28))){
var inst_39730 = (state_39790[(20)]);
var inst_39749 = (state_39790[(25)]);
var inst_39749__$1 = cljs.core.seq.call(null,inst_39730);
var state_39790__$1 = (function (){var statearr_39835 = state_39790;
(statearr_39835[(25)] = inst_39749__$1);

return statearr_39835;
})();
if(inst_39749__$1){
var statearr_39836_39904 = state_39790__$1;
(statearr_39836_39904[(1)] = (33));

} else {
var statearr_39837_39905 = state_39790__$1;
(statearr_39837_39905[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (25))){
var inst_39733 = (state_39790[(9)]);
var inst_39732 = (state_39790[(21)]);
var inst_39735 = (inst_39733 < inst_39732);
var inst_39736 = inst_39735;
var state_39790__$1 = state_39790;
if(cljs.core.truth_(inst_39736)){
var statearr_39838_39906 = state_39790__$1;
(statearr_39838_39906[(1)] = (27));

} else {
var statearr_39839_39907 = state_39790__$1;
(statearr_39839_39907[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (34))){
var state_39790__$1 = state_39790;
var statearr_39840_39908 = state_39790__$1;
(statearr_39840_39908[(2)] = null);

(statearr_39840_39908[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (17))){
var state_39790__$1 = state_39790;
var statearr_39841_39909 = state_39790__$1;
(statearr_39841_39909[(2)] = null);

(statearr_39841_39909[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (3))){
var inst_39788 = (state_39790[(2)]);
var state_39790__$1 = state_39790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39790__$1,inst_39788);
} else {
if((state_val_39791 === (12))){
var inst_39717 = (state_39790[(2)]);
var state_39790__$1 = state_39790;
var statearr_39842_39910 = state_39790__$1;
(statearr_39842_39910[(2)] = inst_39717);

(statearr_39842_39910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (2))){
var state_39790__$1 = state_39790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39790__$1,(4),ch);
} else {
if((state_val_39791 === (23))){
var state_39790__$1 = state_39790;
var statearr_39843_39911 = state_39790__$1;
(statearr_39843_39911[(2)] = null);

(statearr_39843_39911[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (35))){
var inst_39772 = (state_39790[(2)]);
var state_39790__$1 = state_39790;
var statearr_39844_39912 = state_39790__$1;
(statearr_39844_39912[(2)] = inst_39772);

(statearr_39844_39912[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (19))){
var inst_39689 = (state_39790[(7)]);
var inst_39693 = cljs.core.chunk_first.call(null,inst_39689);
var inst_39694 = cljs.core.chunk_rest.call(null,inst_39689);
var inst_39695 = cljs.core.count.call(null,inst_39693);
var inst_39667 = inst_39694;
var inst_39668 = inst_39693;
var inst_39669 = inst_39695;
var inst_39670 = (0);
var state_39790__$1 = (function (){var statearr_39845 = state_39790;
(statearr_39845[(14)] = inst_39668);

(statearr_39845[(15)] = inst_39670);

(statearr_39845[(16)] = inst_39669);

(statearr_39845[(17)] = inst_39667);

return statearr_39845;
})();
var statearr_39846_39913 = state_39790__$1;
(statearr_39846_39913[(2)] = null);

(statearr_39846_39913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (11))){
var inst_39667 = (state_39790[(17)]);
var inst_39689 = (state_39790[(7)]);
var inst_39689__$1 = cljs.core.seq.call(null,inst_39667);
var state_39790__$1 = (function (){var statearr_39847 = state_39790;
(statearr_39847[(7)] = inst_39689__$1);

return statearr_39847;
})();
if(inst_39689__$1){
var statearr_39848_39914 = state_39790__$1;
(statearr_39848_39914[(1)] = (16));

} else {
var statearr_39849_39915 = state_39790__$1;
(statearr_39849_39915[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (9))){
var inst_39719 = (state_39790[(2)]);
var state_39790__$1 = state_39790;
var statearr_39850_39916 = state_39790__$1;
(statearr_39850_39916[(2)] = inst_39719);

(statearr_39850_39916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (5))){
var inst_39665 = cljs.core.deref.call(null,cs);
var inst_39666 = cljs.core.seq.call(null,inst_39665);
var inst_39667 = inst_39666;
var inst_39668 = null;
var inst_39669 = (0);
var inst_39670 = (0);
var state_39790__$1 = (function (){var statearr_39851 = state_39790;
(statearr_39851[(14)] = inst_39668);

(statearr_39851[(15)] = inst_39670);

(statearr_39851[(16)] = inst_39669);

(statearr_39851[(17)] = inst_39667);

return statearr_39851;
})();
var statearr_39852_39917 = state_39790__$1;
(statearr_39852_39917[(2)] = null);

(statearr_39852_39917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (14))){
var state_39790__$1 = state_39790;
var statearr_39853_39918 = state_39790__$1;
(statearr_39853_39918[(2)] = null);

(statearr_39853_39918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (45))){
var inst_39780 = (state_39790[(2)]);
var state_39790__$1 = state_39790;
var statearr_39854_39919 = state_39790__$1;
(statearr_39854_39919[(2)] = inst_39780);

(statearr_39854_39919[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (26))){
var inst_39722 = (state_39790[(29)]);
var inst_39776 = (state_39790[(2)]);
var inst_39777 = cljs.core.seq.call(null,inst_39722);
var state_39790__$1 = (function (){var statearr_39855 = state_39790;
(statearr_39855[(31)] = inst_39776);

return statearr_39855;
})();
if(inst_39777){
var statearr_39856_39920 = state_39790__$1;
(statearr_39856_39920[(1)] = (42));

} else {
var statearr_39857_39921 = state_39790__$1;
(statearr_39857_39921[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (16))){
var inst_39689 = (state_39790[(7)]);
var inst_39691 = cljs.core.chunked_seq_QMARK_.call(null,inst_39689);
var state_39790__$1 = state_39790;
if(inst_39691){
var statearr_39858_39922 = state_39790__$1;
(statearr_39858_39922[(1)] = (19));

} else {
var statearr_39859_39923 = state_39790__$1;
(statearr_39859_39923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (38))){
var inst_39769 = (state_39790[(2)]);
var state_39790__$1 = state_39790;
var statearr_39860_39924 = state_39790__$1;
(statearr_39860_39924[(2)] = inst_39769);

(statearr_39860_39924[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (30))){
var state_39790__$1 = state_39790;
var statearr_39861_39925 = state_39790__$1;
(statearr_39861_39925[(2)] = null);

(statearr_39861_39925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (10))){
var inst_39668 = (state_39790[(14)]);
var inst_39670 = (state_39790[(15)]);
var inst_39678 = cljs.core._nth.call(null,inst_39668,inst_39670);
var inst_39679 = cljs.core.nth.call(null,inst_39678,(0),null);
var inst_39680 = cljs.core.nth.call(null,inst_39678,(1),null);
var state_39790__$1 = (function (){var statearr_39862 = state_39790;
(statearr_39862[(26)] = inst_39679);

return statearr_39862;
})();
if(cljs.core.truth_(inst_39680)){
var statearr_39863_39926 = state_39790__$1;
(statearr_39863_39926[(1)] = (13));

} else {
var statearr_39864_39927 = state_39790__$1;
(statearr_39864_39927[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (18))){
var inst_39715 = (state_39790[(2)]);
var state_39790__$1 = state_39790;
var statearr_39865_39928 = state_39790__$1;
(statearr_39865_39928[(2)] = inst_39715);

(statearr_39865_39928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (42))){
var state_39790__$1 = state_39790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39790__$1,(45),dchan);
} else {
if((state_val_39791 === (37))){
var inst_39749 = (state_39790[(25)]);
var inst_39658 = (state_39790[(12)]);
var inst_39758 = (state_39790[(23)]);
var inst_39758__$1 = cljs.core.first.call(null,inst_39749);
var inst_39759 = cljs.core.async.put_BANG_.call(null,inst_39758__$1,inst_39658,done);
var state_39790__$1 = (function (){var statearr_39866 = state_39790;
(statearr_39866[(23)] = inst_39758__$1);

return statearr_39866;
})();
if(cljs.core.truth_(inst_39759)){
var statearr_39867_39929 = state_39790__$1;
(statearr_39867_39929[(1)] = (39));

} else {
var statearr_39868_39930 = state_39790__$1;
(statearr_39868_39930[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39791 === (8))){
var inst_39670 = (state_39790[(15)]);
var inst_39669 = (state_39790[(16)]);
var inst_39672 = (inst_39670 < inst_39669);
var inst_39673 = inst_39672;
var state_39790__$1 = state_39790;
if(cljs.core.truth_(inst_39673)){
var statearr_39869_39931 = state_39790__$1;
(statearr_39869_39931[(1)] = (10));

} else {
var statearr_39870_39932 = state_39790__$1;
(statearr_39870_39932[(1)] = (11));

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
});})(c__30370__auto___39878,cs,m,dchan,dctr,done))
;
return ((function (switch__30303__auto__,c__30370__auto___39878,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30304__auto__ = null;
var cljs$core$async$mult_$_state_machine__30304__auto____0 = (function (){
var statearr_39874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39874[(0)] = cljs$core$async$mult_$_state_machine__30304__auto__);

(statearr_39874[(1)] = (1));

return statearr_39874;
});
var cljs$core$async$mult_$_state_machine__30304__auto____1 = (function (state_39790){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_39790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e39875){if((e39875 instanceof Object)){
var ex__30307__auto__ = e39875;
var statearr_39876_39933 = state_39790;
(statearr_39876_39933[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39934 = state_39790;
state_39790 = G__39934;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30304__auto__ = function(state_39790){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30304__auto____1.call(this,state_39790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30304__auto____0;
cljs$core$async$mult_$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30304__auto____1;
return cljs$core$async$mult_$_state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___39878,cs,m,dchan,dctr,done))
})();
var state__30372__auto__ = (function (){var statearr_39877 = f__30371__auto__.call(null);
(statearr_39877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___39878);

return statearr_39877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___39878,cs,m,dchan,dctr,done))
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
var args39935 = [];
var len__27580__auto___39938 = arguments.length;
var i__27581__auto___39939 = (0);
while(true){
if((i__27581__auto___39939 < len__27580__auto___39938)){
args39935.push((arguments[i__27581__auto___39939]));

var G__39940 = (i__27581__auto___39939 + (1));
i__27581__auto___39939 = G__39940;
continue;
} else {
}
break;
}

var G__39937 = args39935.length;
switch (G__39937) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39935.length)].join('')));

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
var x__27110__auto__ = (((m == null))?null:m);
var m__27111__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27110__auto__)]);
if(!((m__27111__auto__ == null))){
return m__27111__auto__.call(null,m,ch);
} else {
var m__27111__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27111__auto____$1 == null))){
return m__27111__auto____$1.call(null,m,ch);
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
var x__27110__auto__ = (((m == null))?null:m);
var m__27111__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27110__auto__)]);
if(!((m__27111__auto__ == null))){
return m__27111__auto__.call(null,m,ch);
} else {
var m__27111__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27111__auto____$1 == null))){
return m__27111__auto____$1.call(null,m,ch);
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
var x__27110__auto__ = (((m == null))?null:m);
var m__27111__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27110__auto__)]);
if(!((m__27111__auto__ == null))){
return m__27111__auto__.call(null,m);
} else {
var m__27111__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27111__auto____$1 == null))){
return m__27111__auto____$1.call(null,m);
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
var x__27110__auto__ = (((m == null))?null:m);
var m__27111__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27110__auto__)]);
if(!((m__27111__auto__ == null))){
return m__27111__auto__.call(null,m,state_map);
} else {
var m__27111__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27111__auto____$1 == null))){
return m__27111__auto____$1.call(null,m,state_map);
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
var x__27110__auto__ = (((m == null))?null:m);
var m__27111__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27110__auto__)]);
if(!((m__27111__auto__ == null))){
return m__27111__auto__.call(null,m,mode);
} else {
var m__27111__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27111__auto____$1 == null))){
return m__27111__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27587__auto__ = [];
var len__27580__auto___39952 = arguments.length;
var i__27581__auto___39953 = (0);
while(true){
if((i__27581__auto___39953 < len__27580__auto___39952)){
args__27587__auto__.push((arguments[i__27581__auto___39953]));

var G__39954 = (i__27581__auto___39953 + (1));
i__27581__auto___39953 = G__39954;
continue;
} else {
}
break;
}

var argseq__27588__auto__ = ((((3) < args__27587__auto__.length))?(new cljs.core.IndexedSeq(args__27587__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27588__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39946){
var map__39947 = p__39946;
var map__39947__$1 = ((((!((map__39947 == null)))?((((map__39947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39947):map__39947);
var opts = map__39947__$1;
var statearr_39949_39955 = state;
(statearr_39949_39955[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6503__auto__ = cljs.core.async.do_alts.call(null,((function (map__39947,map__39947__$1,opts){
return (function (val){
var statearr_39950_39956 = state;
(statearr_39950_39956[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39947,map__39947__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6503__auto__)){
var cb = temp__6503__auto__;
var statearr_39951_39957 = state;
(statearr_39951_39957[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39942){
var G__39943 = cljs.core.first.call(null,seq39942);
var seq39942__$1 = cljs.core.next.call(null,seq39942);
var G__39944 = cljs.core.first.call(null,seq39942__$1);
var seq39942__$2 = cljs.core.next.call(null,seq39942__$1);
var G__39945 = cljs.core.first.call(null,seq39942__$2);
var seq39942__$3 = cljs.core.next.call(null,seq39942__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39943,G__39944,G__39945,seq39942__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40123 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40124){
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
this.meta40124 = meta40124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40125,meta40124__$1){
var self__ = this;
var _40125__$1 = this;
return (new cljs.core.async.t_cljs$core$async40123(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40124__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40125){
var self__ = this;
var _40125__$1 = this;
return self__.meta40124;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40123.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40123.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40123.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async40123.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40123.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40123.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40123.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40123.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40123.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40124","meta40124",-496443896,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40123";

cljs.core.async.t_cljs$core$async40123.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27049__auto__,writer__27050__auto__,opt__27051__auto__){
return cljs.core._write.call(null,writer__27050__auto__,"cljs.core.async/t_cljs$core$async40123");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40123 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40123(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40124){
return (new cljs.core.async.t_cljs$core$async40123(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40124));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40123(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30370__auto___40288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___40288,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___40288,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40225){
var state_val_40226 = (state_40225[(1)]);
if((state_val_40226 === (7))){
var inst_40141 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
var statearr_40227_40289 = state_40225__$1;
(statearr_40227_40289[(2)] = inst_40141);

(statearr_40227_40289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (20))){
var inst_40153 = (state_40225[(7)]);
var state_40225__$1 = state_40225;
var statearr_40228_40290 = state_40225__$1;
(statearr_40228_40290[(2)] = inst_40153);

(statearr_40228_40290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (27))){
var state_40225__$1 = state_40225;
var statearr_40229_40291 = state_40225__$1;
(statearr_40229_40291[(2)] = null);

(statearr_40229_40291[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (1))){
var inst_40129 = (state_40225[(8)]);
var inst_40129__$1 = calc_state.call(null);
var inst_40131 = (inst_40129__$1 == null);
var inst_40132 = cljs.core.not.call(null,inst_40131);
var state_40225__$1 = (function (){var statearr_40230 = state_40225;
(statearr_40230[(8)] = inst_40129__$1);

return statearr_40230;
})();
if(inst_40132){
var statearr_40231_40292 = state_40225__$1;
(statearr_40231_40292[(1)] = (2));

} else {
var statearr_40232_40293 = state_40225__$1;
(statearr_40232_40293[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (24))){
var inst_40185 = (state_40225[(9)]);
var inst_40199 = (state_40225[(10)]);
var inst_40176 = (state_40225[(11)]);
var inst_40199__$1 = inst_40176.call(null,inst_40185);
var state_40225__$1 = (function (){var statearr_40233 = state_40225;
(statearr_40233[(10)] = inst_40199__$1);

return statearr_40233;
})();
if(cljs.core.truth_(inst_40199__$1)){
var statearr_40234_40294 = state_40225__$1;
(statearr_40234_40294[(1)] = (29));

} else {
var statearr_40235_40295 = state_40225__$1;
(statearr_40235_40295[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (4))){
var inst_40144 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
if(cljs.core.truth_(inst_40144)){
var statearr_40236_40296 = state_40225__$1;
(statearr_40236_40296[(1)] = (8));

} else {
var statearr_40237_40297 = state_40225__$1;
(statearr_40237_40297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (15))){
var inst_40170 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
if(cljs.core.truth_(inst_40170)){
var statearr_40238_40298 = state_40225__$1;
(statearr_40238_40298[(1)] = (19));

} else {
var statearr_40239_40299 = state_40225__$1;
(statearr_40239_40299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (21))){
var inst_40175 = (state_40225[(12)]);
var inst_40175__$1 = (state_40225[(2)]);
var inst_40176 = cljs.core.get.call(null,inst_40175__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40177 = cljs.core.get.call(null,inst_40175__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40178 = cljs.core.get.call(null,inst_40175__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40225__$1 = (function (){var statearr_40240 = state_40225;
(statearr_40240[(12)] = inst_40175__$1);

(statearr_40240[(11)] = inst_40176);

(statearr_40240[(13)] = inst_40177);

return statearr_40240;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40225__$1,(22),inst_40178);
} else {
if((state_val_40226 === (31))){
var inst_40207 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
if(cljs.core.truth_(inst_40207)){
var statearr_40241_40300 = state_40225__$1;
(statearr_40241_40300[(1)] = (32));

} else {
var statearr_40242_40301 = state_40225__$1;
(statearr_40242_40301[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (32))){
var inst_40184 = (state_40225[(14)]);
var state_40225__$1 = state_40225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40225__$1,(35),out,inst_40184);
} else {
if((state_val_40226 === (33))){
var inst_40175 = (state_40225[(12)]);
var inst_40153 = inst_40175;
var state_40225__$1 = (function (){var statearr_40243 = state_40225;
(statearr_40243[(7)] = inst_40153);

return statearr_40243;
})();
var statearr_40244_40302 = state_40225__$1;
(statearr_40244_40302[(2)] = null);

(statearr_40244_40302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (13))){
var inst_40153 = (state_40225[(7)]);
var inst_40160 = inst_40153.cljs$lang$protocol_mask$partition0$;
var inst_40161 = (inst_40160 & (64));
var inst_40162 = inst_40153.cljs$core$ISeq$;
var inst_40163 = (inst_40161) || (inst_40162);
var state_40225__$1 = state_40225;
if(cljs.core.truth_(inst_40163)){
var statearr_40245_40303 = state_40225__$1;
(statearr_40245_40303[(1)] = (16));

} else {
var statearr_40246_40304 = state_40225__$1;
(statearr_40246_40304[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (22))){
var inst_40185 = (state_40225[(9)]);
var inst_40184 = (state_40225[(14)]);
var inst_40183 = (state_40225[(2)]);
var inst_40184__$1 = cljs.core.nth.call(null,inst_40183,(0),null);
var inst_40185__$1 = cljs.core.nth.call(null,inst_40183,(1),null);
var inst_40186 = (inst_40184__$1 == null);
var inst_40187 = cljs.core._EQ_.call(null,inst_40185__$1,change);
var inst_40188 = (inst_40186) || (inst_40187);
var state_40225__$1 = (function (){var statearr_40247 = state_40225;
(statearr_40247[(9)] = inst_40185__$1);

(statearr_40247[(14)] = inst_40184__$1);

return statearr_40247;
})();
if(cljs.core.truth_(inst_40188)){
var statearr_40248_40305 = state_40225__$1;
(statearr_40248_40305[(1)] = (23));

} else {
var statearr_40249_40306 = state_40225__$1;
(statearr_40249_40306[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (36))){
var inst_40175 = (state_40225[(12)]);
var inst_40153 = inst_40175;
var state_40225__$1 = (function (){var statearr_40250 = state_40225;
(statearr_40250[(7)] = inst_40153);

return statearr_40250;
})();
var statearr_40251_40307 = state_40225__$1;
(statearr_40251_40307[(2)] = null);

(statearr_40251_40307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (29))){
var inst_40199 = (state_40225[(10)]);
var state_40225__$1 = state_40225;
var statearr_40252_40308 = state_40225__$1;
(statearr_40252_40308[(2)] = inst_40199);

(statearr_40252_40308[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (6))){
var state_40225__$1 = state_40225;
var statearr_40253_40309 = state_40225__$1;
(statearr_40253_40309[(2)] = false);

(statearr_40253_40309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (28))){
var inst_40195 = (state_40225[(2)]);
var inst_40196 = calc_state.call(null);
var inst_40153 = inst_40196;
var state_40225__$1 = (function (){var statearr_40254 = state_40225;
(statearr_40254[(15)] = inst_40195);

(statearr_40254[(7)] = inst_40153);

return statearr_40254;
})();
var statearr_40255_40310 = state_40225__$1;
(statearr_40255_40310[(2)] = null);

(statearr_40255_40310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (25))){
var inst_40221 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
var statearr_40256_40311 = state_40225__$1;
(statearr_40256_40311[(2)] = inst_40221);

(statearr_40256_40311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (34))){
var inst_40219 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
var statearr_40257_40312 = state_40225__$1;
(statearr_40257_40312[(2)] = inst_40219);

(statearr_40257_40312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (17))){
var state_40225__$1 = state_40225;
var statearr_40258_40313 = state_40225__$1;
(statearr_40258_40313[(2)] = false);

(statearr_40258_40313[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (3))){
var state_40225__$1 = state_40225;
var statearr_40259_40314 = state_40225__$1;
(statearr_40259_40314[(2)] = false);

(statearr_40259_40314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (12))){
var inst_40223 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40225__$1,inst_40223);
} else {
if((state_val_40226 === (2))){
var inst_40129 = (state_40225[(8)]);
var inst_40134 = inst_40129.cljs$lang$protocol_mask$partition0$;
var inst_40135 = (inst_40134 & (64));
var inst_40136 = inst_40129.cljs$core$ISeq$;
var inst_40137 = (inst_40135) || (inst_40136);
var state_40225__$1 = state_40225;
if(cljs.core.truth_(inst_40137)){
var statearr_40260_40315 = state_40225__$1;
(statearr_40260_40315[(1)] = (5));

} else {
var statearr_40261_40316 = state_40225__$1;
(statearr_40261_40316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (23))){
var inst_40184 = (state_40225[(14)]);
var inst_40190 = (inst_40184 == null);
var state_40225__$1 = state_40225;
if(cljs.core.truth_(inst_40190)){
var statearr_40262_40317 = state_40225__$1;
(statearr_40262_40317[(1)] = (26));

} else {
var statearr_40263_40318 = state_40225__$1;
(statearr_40263_40318[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (35))){
var inst_40210 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
if(cljs.core.truth_(inst_40210)){
var statearr_40264_40319 = state_40225__$1;
(statearr_40264_40319[(1)] = (36));

} else {
var statearr_40265_40320 = state_40225__$1;
(statearr_40265_40320[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (19))){
var inst_40153 = (state_40225[(7)]);
var inst_40172 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40153);
var state_40225__$1 = state_40225;
var statearr_40266_40321 = state_40225__$1;
(statearr_40266_40321[(2)] = inst_40172);

(statearr_40266_40321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (11))){
var inst_40153 = (state_40225[(7)]);
var inst_40157 = (inst_40153 == null);
var inst_40158 = cljs.core.not.call(null,inst_40157);
var state_40225__$1 = state_40225;
if(inst_40158){
var statearr_40267_40322 = state_40225__$1;
(statearr_40267_40322[(1)] = (13));

} else {
var statearr_40268_40323 = state_40225__$1;
(statearr_40268_40323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (9))){
var inst_40129 = (state_40225[(8)]);
var state_40225__$1 = state_40225;
var statearr_40269_40324 = state_40225__$1;
(statearr_40269_40324[(2)] = inst_40129);

(statearr_40269_40324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (5))){
var state_40225__$1 = state_40225;
var statearr_40270_40325 = state_40225__$1;
(statearr_40270_40325[(2)] = true);

(statearr_40270_40325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (14))){
var state_40225__$1 = state_40225;
var statearr_40271_40326 = state_40225__$1;
(statearr_40271_40326[(2)] = false);

(statearr_40271_40326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (26))){
var inst_40185 = (state_40225[(9)]);
var inst_40192 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40185);
var state_40225__$1 = state_40225;
var statearr_40272_40327 = state_40225__$1;
(statearr_40272_40327[(2)] = inst_40192);

(statearr_40272_40327[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (16))){
var state_40225__$1 = state_40225;
var statearr_40273_40328 = state_40225__$1;
(statearr_40273_40328[(2)] = true);

(statearr_40273_40328[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (38))){
var inst_40215 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
var statearr_40274_40329 = state_40225__$1;
(statearr_40274_40329[(2)] = inst_40215);

(statearr_40274_40329[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (30))){
var inst_40185 = (state_40225[(9)]);
var inst_40176 = (state_40225[(11)]);
var inst_40177 = (state_40225[(13)]);
var inst_40202 = cljs.core.empty_QMARK_.call(null,inst_40176);
var inst_40203 = inst_40177.call(null,inst_40185);
var inst_40204 = cljs.core.not.call(null,inst_40203);
var inst_40205 = (inst_40202) && (inst_40204);
var state_40225__$1 = state_40225;
var statearr_40275_40330 = state_40225__$1;
(statearr_40275_40330[(2)] = inst_40205);

(statearr_40275_40330[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (10))){
var inst_40129 = (state_40225[(8)]);
var inst_40149 = (state_40225[(2)]);
var inst_40150 = cljs.core.get.call(null,inst_40149,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40151 = cljs.core.get.call(null,inst_40149,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40152 = cljs.core.get.call(null,inst_40149,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40153 = inst_40129;
var state_40225__$1 = (function (){var statearr_40276 = state_40225;
(statearr_40276[(16)] = inst_40152);

(statearr_40276[(17)] = inst_40151);

(statearr_40276[(18)] = inst_40150);

(statearr_40276[(7)] = inst_40153);

return statearr_40276;
})();
var statearr_40277_40331 = state_40225__$1;
(statearr_40277_40331[(2)] = null);

(statearr_40277_40331[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (18))){
var inst_40167 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
var statearr_40278_40332 = state_40225__$1;
(statearr_40278_40332[(2)] = inst_40167);

(statearr_40278_40332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (37))){
var state_40225__$1 = state_40225;
var statearr_40279_40333 = state_40225__$1;
(statearr_40279_40333[(2)] = null);

(statearr_40279_40333[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (8))){
var inst_40129 = (state_40225[(8)]);
var inst_40146 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40129);
var state_40225__$1 = state_40225;
var statearr_40280_40334 = state_40225__$1;
(statearr_40280_40334[(2)] = inst_40146);

(statearr_40280_40334[(1)] = (10));


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
});})(c__30370__auto___40288,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30303__auto__,c__30370__auto___40288,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30304__auto__ = null;
var cljs$core$async$mix_$_state_machine__30304__auto____0 = (function (){
var statearr_40284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40284[(0)] = cljs$core$async$mix_$_state_machine__30304__auto__);

(statearr_40284[(1)] = (1));

return statearr_40284;
});
var cljs$core$async$mix_$_state_machine__30304__auto____1 = (function (state_40225){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_40225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e40285){if((e40285 instanceof Object)){
var ex__30307__auto__ = e40285;
var statearr_40286_40335 = state_40225;
(statearr_40286_40335[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40336 = state_40225;
state_40225 = G__40336;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30304__auto__ = function(state_40225){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30304__auto____1.call(this,state_40225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30304__auto____0;
cljs$core$async$mix_$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30304__auto____1;
return cljs$core$async$mix_$_state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___40288,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30372__auto__ = (function (){var statearr_40287 = f__30371__auto__.call(null);
(statearr_40287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___40288);

return statearr_40287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___40288,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__27110__auto__ = (((p == null))?null:p);
var m__27111__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27110__auto__)]);
if(!((m__27111__auto__ == null))){
return m__27111__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27111__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27111__auto____$1 == null))){
return m__27111__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__27110__auto__ = (((p == null))?null:p);
var m__27111__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27110__auto__)]);
if(!((m__27111__auto__ == null))){
return m__27111__auto__.call(null,p,v,ch);
} else {
var m__27111__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27111__auto____$1 == null))){
return m__27111__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args40337 = [];
var len__27580__auto___40340 = arguments.length;
var i__27581__auto___40341 = (0);
while(true){
if((i__27581__auto___40341 < len__27580__auto___40340)){
args40337.push((arguments[i__27581__auto___40341]));

var G__40342 = (i__27581__auto___40341 + (1));
i__27581__auto___40341 = G__40342;
continue;
} else {
}
break;
}

var G__40339 = args40337.length;
switch (G__40339) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40337.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27110__auto__ = (((p == null))?null:p);
var m__27111__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27110__auto__)]);
if(!((m__27111__auto__ == null))){
return m__27111__auto__.call(null,p);
} else {
var m__27111__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27111__auto____$1 == null))){
return m__27111__auto____$1.call(null,p);
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
var x__27110__auto__ = (((p == null))?null:p);
var m__27111__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27110__auto__)]);
if(!((m__27111__auto__ == null))){
return m__27111__auto__.call(null,p,v);
} else {
var m__27111__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27111__auto____$1 == null))){
return m__27111__auto____$1.call(null,p,v);
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
var args40345 = [];
var len__27580__auto___40470 = arguments.length;
var i__27581__auto___40471 = (0);
while(true){
if((i__27581__auto___40471 < len__27580__auto___40470)){
args40345.push((arguments[i__27581__auto___40471]));

var G__40472 = (i__27581__auto___40471 + (1));
i__27581__auto___40471 = G__40472;
continue;
} else {
}
break;
}

var G__40347 = args40345.length;
switch (G__40347) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40345.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26397__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26397__auto__)){
return or__26397__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26397__auto__,mults){
return (function (p1__40344_SHARP_){
if(cljs.core.truth_(p1__40344_SHARP_.call(null,topic))){
return p1__40344_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40344_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26397__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40348 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40349){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40349 = meta40349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40350,meta40349__$1){
var self__ = this;
var _40350__$1 = this;
return (new cljs.core.async.t_cljs$core$async40348(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40349__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40350){
var self__ = this;
var _40350__$1 = this;
return self__.meta40349;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40348.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40348.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async40348.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40348.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6503__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6503__auto__)){
var m = temp__6503__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40348.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40348.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40348.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40349","meta40349",-1346360004,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40348";

cljs.core.async.t_cljs$core$async40348.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27049__auto__,writer__27050__auto__,opt__27051__auto__){
return cljs.core._write.call(null,writer__27050__auto__,"cljs.core.async/t_cljs$core$async40348");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40348 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40348(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40349){
return (new cljs.core.async.t_cljs$core$async40348(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40349));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40348(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30370__auto___40474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___40474,mults,ensure_mult,p){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___40474,mults,ensure_mult,p){
return (function (state_40422){
var state_val_40423 = (state_40422[(1)]);
if((state_val_40423 === (7))){
var inst_40418 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
var statearr_40424_40475 = state_40422__$1;
(statearr_40424_40475[(2)] = inst_40418);

(statearr_40424_40475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (20))){
var state_40422__$1 = state_40422;
var statearr_40425_40476 = state_40422__$1;
(statearr_40425_40476[(2)] = null);

(statearr_40425_40476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (1))){
var state_40422__$1 = state_40422;
var statearr_40426_40477 = state_40422__$1;
(statearr_40426_40477[(2)] = null);

(statearr_40426_40477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (24))){
var inst_40401 = (state_40422[(7)]);
var inst_40410 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40401);
var state_40422__$1 = state_40422;
var statearr_40427_40478 = state_40422__$1;
(statearr_40427_40478[(2)] = inst_40410);

(statearr_40427_40478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (4))){
var inst_40353 = (state_40422[(8)]);
var inst_40353__$1 = (state_40422[(2)]);
var inst_40354 = (inst_40353__$1 == null);
var state_40422__$1 = (function (){var statearr_40428 = state_40422;
(statearr_40428[(8)] = inst_40353__$1);

return statearr_40428;
})();
if(cljs.core.truth_(inst_40354)){
var statearr_40429_40479 = state_40422__$1;
(statearr_40429_40479[(1)] = (5));

} else {
var statearr_40430_40480 = state_40422__$1;
(statearr_40430_40480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (15))){
var inst_40395 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
var statearr_40431_40481 = state_40422__$1;
(statearr_40431_40481[(2)] = inst_40395);

(statearr_40431_40481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (21))){
var inst_40415 = (state_40422[(2)]);
var state_40422__$1 = (function (){var statearr_40432 = state_40422;
(statearr_40432[(9)] = inst_40415);

return statearr_40432;
})();
var statearr_40433_40482 = state_40422__$1;
(statearr_40433_40482[(2)] = null);

(statearr_40433_40482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (13))){
var inst_40377 = (state_40422[(10)]);
var inst_40379 = cljs.core.chunked_seq_QMARK_.call(null,inst_40377);
var state_40422__$1 = state_40422;
if(inst_40379){
var statearr_40434_40483 = state_40422__$1;
(statearr_40434_40483[(1)] = (16));

} else {
var statearr_40435_40484 = state_40422__$1;
(statearr_40435_40484[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (22))){
var inst_40407 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
if(cljs.core.truth_(inst_40407)){
var statearr_40436_40485 = state_40422__$1;
(statearr_40436_40485[(1)] = (23));

} else {
var statearr_40437_40486 = state_40422__$1;
(statearr_40437_40486[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (6))){
var inst_40353 = (state_40422[(8)]);
var inst_40401 = (state_40422[(7)]);
var inst_40403 = (state_40422[(11)]);
var inst_40401__$1 = topic_fn.call(null,inst_40353);
var inst_40402 = cljs.core.deref.call(null,mults);
var inst_40403__$1 = cljs.core.get.call(null,inst_40402,inst_40401__$1);
var state_40422__$1 = (function (){var statearr_40438 = state_40422;
(statearr_40438[(7)] = inst_40401__$1);

(statearr_40438[(11)] = inst_40403__$1);

return statearr_40438;
})();
if(cljs.core.truth_(inst_40403__$1)){
var statearr_40439_40487 = state_40422__$1;
(statearr_40439_40487[(1)] = (19));

} else {
var statearr_40440_40488 = state_40422__$1;
(statearr_40440_40488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (25))){
var inst_40412 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
var statearr_40441_40489 = state_40422__$1;
(statearr_40441_40489[(2)] = inst_40412);

(statearr_40441_40489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (17))){
var inst_40377 = (state_40422[(10)]);
var inst_40386 = cljs.core.first.call(null,inst_40377);
var inst_40387 = cljs.core.async.muxch_STAR_.call(null,inst_40386);
var inst_40388 = cljs.core.async.close_BANG_.call(null,inst_40387);
var inst_40389 = cljs.core.next.call(null,inst_40377);
var inst_40363 = inst_40389;
var inst_40364 = null;
var inst_40365 = (0);
var inst_40366 = (0);
var state_40422__$1 = (function (){var statearr_40442 = state_40422;
(statearr_40442[(12)] = inst_40364);

(statearr_40442[(13)] = inst_40365);

(statearr_40442[(14)] = inst_40366);

(statearr_40442[(15)] = inst_40388);

(statearr_40442[(16)] = inst_40363);

return statearr_40442;
})();
var statearr_40443_40490 = state_40422__$1;
(statearr_40443_40490[(2)] = null);

(statearr_40443_40490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (3))){
var inst_40420 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40422__$1,inst_40420);
} else {
if((state_val_40423 === (12))){
var inst_40397 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
var statearr_40444_40491 = state_40422__$1;
(statearr_40444_40491[(2)] = inst_40397);

(statearr_40444_40491[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (2))){
var state_40422__$1 = state_40422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40422__$1,(4),ch);
} else {
if((state_val_40423 === (23))){
var state_40422__$1 = state_40422;
var statearr_40445_40492 = state_40422__$1;
(statearr_40445_40492[(2)] = null);

(statearr_40445_40492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (19))){
var inst_40353 = (state_40422[(8)]);
var inst_40403 = (state_40422[(11)]);
var inst_40405 = cljs.core.async.muxch_STAR_.call(null,inst_40403);
var state_40422__$1 = state_40422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40422__$1,(22),inst_40405,inst_40353);
} else {
if((state_val_40423 === (11))){
var inst_40377 = (state_40422[(10)]);
var inst_40363 = (state_40422[(16)]);
var inst_40377__$1 = cljs.core.seq.call(null,inst_40363);
var state_40422__$1 = (function (){var statearr_40446 = state_40422;
(statearr_40446[(10)] = inst_40377__$1);

return statearr_40446;
})();
if(inst_40377__$1){
var statearr_40447_40493 = state_40422__$1;
(statearr_40447_40493[(1)] = (13));

} else {
var statearr_40448_40494 = state_40422__$1;
(statearr_40448_40494[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (9))){
var inst_40399 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
var statearr_40449_40495 = state_40422__$1;
(statearr_40449_40495[(2)] = inst_40399);

(statearr_40449_40495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (5))){
var inst_40360 = cljs.core.deref.call(null,mults);
var inst_40361 = cljs.core.vals.call(null,inst_40360);
var inst_40362 = cljs.core.seq.call(null,inst_40361);
var inst_40363 = inst_40362;
var inst_40364 = null;
var inst_40365 = (0);
var inst_40366 = (0);
var state_40422__$1 = (function (){var statearr_40450 = state_40422;
(statearr_40450[(12)] = inst_40364);

(statearr_40450[(13)] = inst_40365);

(statearr_40450[(14)] = inst_40366);

(statearr_40450[(16)] = inst_40363);

return statearr_40450;
})();
var statearr_40451_40496 = state_40422__$1;
(statearr_40451_40496[(2)] = null);

(statearr_40451_40496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (14))){
var state_40422__$1 = state_40422;
var statearr_40455_40497 = state_40422__$1;
(statearr_40455_40497[(2)] = null);

(statearr_40455_40497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (16))){
var inst_40377 = (state_40422[(10)]);
var inst_40381 = cljs.core.chunk_first.call(null,inst_40377);
var inst_40382 = cljs.core.chunk_rest.call(null,inst_40377);
var inst_40383 = cljs.core.count.call(null,inst_40381);
var inst_40363 = inst_40382;
var inst_40364 = inst_40381;
var inst_40365 = inst_40383;
var inst_40366 = (0);
var state_40422__$1 = (function (){var statearr_40456 = state_40422;
(statearr_40456[(12)] = inst_40364);

(statearr_40456[(13)] = inst_40365);

(statearr_40456[(14)] = inst_40366);

(statearr_40456[(16)] = inst_40363);

return statearr_40456;
})();
var statearr_40457_40498 = state_40422__$1;
(statearr_40457_40498[(2)] = null);

(statearr_40457_40498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (10))){
var inst_40364 = (state_40422[(12)]);
var inst_40365 = (state_40422[(13)]);
var inst_40366 = (state_40422[(14)]);
var inst_40363 = (state_40422[(16)]);
var inst_40371 = cljs.core._nth.call(null,inst_40364,inst_40366);
var inst_40372 = cljs.core.async.muxch_STAR_.call(null,inst_40371);
var inst_40373 = cljs.core.async.close_BANG_.call(null,inst_40372);
var inst_40374 = (inst_40366 + (1));
var tmp40452 = inst_40364;
var tmp40453 = inst_40365;
var tmp40454 = inst_40363;
var inst_40363__$1 = tmp40454;
var inst_40364__$1 = tmp40452;
var inst_40365__$1 = tmp40453;
var inst_40366__$1 = inst_40374;
var state_40422__$1 = (function (){var statearr_40458 = state_40422;
(statearr_40458[(12)] = inst_40364__$1);

(statearr_40458[(17)] = inst_40373);

(statearr_40458[(13)] = inst_40365__$1);

(statearr_40458[(14)] = inst_40366__$1);

(statearr_40458[(16)] = inst_40363__$1);

return statearr_40458;
})();
var statearr_40459_40499 = state_40422__$1;
(statearr_40459_40499[(2)] = null);

(statearr_40459_40499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (18))){
var inst_40392 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
var statearr_40460_40500 = state_40422__$1;
(statearr_40460_40500[(2)] = inst_40392);

(statearr_40460_40500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (8))){
var inst_40365 = (state_40422[(13)]);
var inst_40366 = (state_40422[(14)]);
var inst_40368 = (inst_40366 < inst_40365);
var inst_40369 = inst_40368;
var state_40422__$1 = state_40422;
if(cljs.core.truth_(inst_40369)){
var statearr_40461_40501 = state_40422__$1;
(statearr_40461_40501[(1)] = (10));

} else {
var statearr_40462_40502 = state_40422__$1;
(statearr_40462_40502[(1)] = (11));

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
});})(c__30370__auto___40474,mults,ensure_mult,p))
;
return ((function (switch__30303__auto__,c__30370__auto___40474,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30304__auto__ = null;
var cljs$core$async$state_machine__30304__auto____0 = (function (){
var statearr_40466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40466[(0)] = cljs$core$async$state_machine__30304__auto__);

(statearr_40466[(1)] = (1));

return statearr_40466;
});
var cljs$core$async$state_machine__30304__auto____1 = (function (state_40422){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_40422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e40467){if((e40467 instanceof Object)){
var ex__30307__auto__ = e40467;
var statearr_40468_40503 = state_40422;
(statearr_40468_40503[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40504 = state_40422;
state_40422 = G__40504;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$state_machine__30304__auto__ = function(state_40422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30304__auto____1.call(this,state_40422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30304__auto____0;
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30304__auto____1;
return cljs$core$async$state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___40474,mults,ensure_mult,p))
})();
var state__30372__auto__ = (function (){var statearr_40469 = f__30371__auto__.call(null);
(statearr_40469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___40474);

return statearr_40469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___40474,mults,ensure_mult,p))
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
var args40505 = [];
var len__27580__auto___40508 = arguments.length;
var i__27581__auto___40509 = (0);
while(true){
if((i__27581__auto___40509 < len__27580__auto___40508)){
args40505.push((arguments[i__27581__auto___40509]));

var G__40510 = (i__27581__auto___40509 + (1));
i__27581__auto___40509 = G__40510;
continue;
} else {
}
break;
}

var G__40507 = args40505.length;
switch (G__40507) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40505.length)].join('')));

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
var args40512 = [];
var len__27580__auto___40515 = arguments.length;
var i__27581__auto___40516 = (0);
while(true){
if((i__27581__auto___40516 < len__27580__auto___40515)){
args40512.push((arguments[i__27581__auto___40516]));

var G__40517 = (i__27581__auto___40516 + (1));
i__27581__auto___40516 = G__40517;
continue;
} else {
}
break;
}

var G__40514 = args40512.length;
switch (G__40514) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40512.length)].join('')));

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
var args40519 = [];
var len__27580__auto___40590 = arguments.length;
var i__27581__auto___40591 = (0);
while(true){
if((i__27581__auto___40591 < len__27580__auto___40590)){
args40519.push((arguments[i__27581__auto___40591]));

var G__40592 = (i__27581__auto___40591 + (1));
i__27581__auto___40591 = G__40592;
continue;
} else {
}
break;
}

var G__40521 = args40519.length;
switch (G__40521) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40519.length)].join('')));

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
var c__30370__auto___40594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___40594,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___40594,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40560){
var state_val_40561 = (state_40560[(1)]);
if((state_val_40561 === (7))){
var state_40560__$1 = state_40560;
var statearr_40562_40595 = state_40560__$1;
(statearr_40562_40595[(2)] = null);

(statearr_40562_40595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40561 === (1))){
var state_40560__$1 = state_40560;
var statearr_40563_40596 = state_40560__$1;
(statearr_40563_40596[(2)] = null);

(statearr_40563_40596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40561 === (4))){
var inst_40524 = (state_40560[(7)]);
var inst_40526 = (inst_40524 < cnt);
var state_40560__$1 = state_40560;
if(cljs.core.truth_(inst_40526)){
var statearr_40564_40597 = state_40560__$1;
(statearr_40564_40597[(1)] = (6));

} else {
var statearr_40565_40598 = state_40560__$1;
(statearr_40565_40598[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40561 === (15))){
var inst_40556 = (state_40560[(2)]);
var state_40560__$1 = state_40560;
var statearr_40566_40599 = state_40560__$1;
(statearr_40566_40599[(2)] = inst_40556);

(statearr_40566_40599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40561 === (13))){
var inst_40549 = cljs.core.async.close_BANG_.call(null,out);
var state_40560__$1 = state_40560;
var statearr_40567_40600 = state_40560__$1;
(statearr_40567_40600[(2)] = inst_40549);

(statearr_40567_40600[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40561 === (6))){
var state_40560__$1 = state_40560;
var statearr_40568_40601 = state_40560__$1;
(statearr_40568_40601[(2)] = null);

(statearr_40568_40601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40561 === (3))){
var inst_40558 = (state_40560[(2)]);
var state_40560__$1 = state_40560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40560__$1,inst_40558);
} else {
if((state_val_40561 === (12))){
var inst_40546 = (state_40560[(8)]);
var inst_40546__$1 = (state_40560[(2)]);
var inst_40547 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40546__$1);
var state_40560__$1 = (function (){var statearr_40569 = state_40560;
(statearr_40569[(8)] = inst_40546__$1);

return statearr_40569;
})();
if(cljs.core.truth_(inst_40547)){
var statearr_40570_40602 = state_40560__$1;
(statearr_40570_40602[(1)] = (13));

} else {
var statearr_40571_40603 = state_40560__$1;
(statearr_40571_40603[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40561 === (2))){
var inst_40523 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40524 = (0);
var state_40560__$1 = (function (){var statearr_40572 = state_40560;
(statearr_40572[(7)] = inst_40524);

(statearr_40572[(9)] = inst_40523);

return statearr_40572;
})();
var statearr_40573_40604 = state_40560__$1;
(statearr_40573_40604[(2)] = null);

(statearr_40573_40604[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40561 === (11))){
var inst_40524 = (state_40560[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40560,(10),Object,null,(9));
var inst_40533 = chs__$1.call(null,inst_40524);
var inst_40534 = done.call(null,inst_40524);
var inst_40535 = cljs.core.async.take_BANG_.call(null,inst_40533,inst_40534);
var state_40560__$1 = state_40560;
var statearr_40574_40605 = state_40560__$1;
(statearr_40574_40605[(2)] = inst_40535);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40560__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40561 === (9))){
var inst_40524 = (state_40560[(7)]);
var inst_40537 = (state_40560[(2)]);
var inst_40538 = (inst_40524 + (1));
var inst_40524__$1 = inst_40538;
var state_40560__$1 = (function (){var statearr_40575 = state_40560;
(statearr_40575[(10)] = inst_40537);

(statearr_40575[(7)] = inst_40524__$1);

return statearr_40575;
})();
var statearr_40576_40606 = state_40560__$1;
(statearr_40576_40606[(2)] = null);

(statearr_40576_40606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40561 === (5))){
var inst_40544 = (state_40560[(2)]);
var state_40560__$1 = (function (){var statearr_40577 = state_40560;
(statearr_40577[(11)] = inst_40544);

return statearr_40577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40560__$1,(12),dchan);
} else {
if((state_val_40561 === (14))){
var inst_40546 = (state_40560[(8)]);
var inst_40551 = cljs.core.apply.call(null,f,inst_40546);
var state_40560__$1 = state_40560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40560__$1,(16),out,inst_40551);
} else {
if((state_val_40561 === (16))){
var inst_40553 = (state_40560[(2)]);
var state_40560__$1 = (function (){var statearr_40578 = state_40560;
(statearr_40578[(12)] = inst_40553);

return statearr_40578;
})();
var statearr_40579_40607 = state_40560__$1;
(statearr_40579_40607[(2)] = null);

(statearr_40579_40607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40561 === (10))){
var inst_40528 = (state_40560[(2)]);
var inst_40529 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40560__$1 = (function (){var statearr_40580 = state_40560;
(statearr_40580[(13)] = inst_40528);

return statearr_40580;
})();
var statearr_40581_40608 = state_40560__$1;
(statearr_40581_40608[(2)] = inst_40529);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40560__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40561 === (8))){
var inst_40542 = (state_40560[(2)]);
var state_40560__$1 = state_40560;
var statearr_40582_40609 = state_40560__$1;
(statearr_40582_40609[(2)] = inst_40542);

(statearr_40582_40609[(1)] = (5));


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
});})(c__30370__auto___40594,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30303__auto__,c__30370__auto___40594,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30304__auto__ = null;
var cljs$core$async$state_machine__30304__auto____0 = (function (){
var statearr_40586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40586[(0)] = cljs$core$async$state_machine__30304__auto__);

(statearr_40586[(1)] = (1));

return statearr_40586;
});
var cljs$core$async$state_machine__30304__auto____1 = (function (state_40560){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_40560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e40587){if((e40587 instanceof Object)){
var ex__30307__auto__ = e40587;
var statearr_40588_40610 = state_40560;
(statearr_40588_40610[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40611 = state_40560;
state_40560 = G__40611;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$state_machine__30304__auto__ = function(state_40560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30304__auto____1.call(this,state_40560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30304__auto____0;
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30304__auto____1;
return cljs$core$async$state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___40594,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30372__auto__ = (function (){var statearr_40589 = f__30371__auto__.call(null);
(statearr_40589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___40594);

return statearr_40589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___40594,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args40613 = [];
var len__27580__auto___40671 = arguments.length;
var i__27581__auto___40672 = (0);
while(true){
if((i__27581__auto___40672 < len__27580__auto___40671)){
args40613.push((arguments[i__27581__auto___40672]));

var G__40673 = (i__27581__auto___40672 + (1));
i__27581__auto___40672 = G__40673;
continue;
} else {
}
break;
}

var G__40615 = args40613.length;
switch (G__40615) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40613.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30370__auto___40675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___40675,out){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___40675,out){
return (function (state_40647){
var state_val_40648 = (state_40647[(1)]);
if((state_val_40648 === (7))){
var inst_40627 = (state_40647[(7)]);
var inst_40626 = (state_40647[(8)]);
var inst_40626__$1 = (state_40647[(2)]);
var inst_40627__$1 = cljs.core.nth.call(null,inst_40626__$1,(0),null);
var inst_40628 = cljs.core.nth.call(null,inst_40626__$1,(1),null);
var inst_40629 = (inst_40627__$1 == null);
var state_40647__$1 = (function (){var statearr_40649 = state_40647;
(statearr_40649[(9)] = inst_40628);

(statearr_40649[(7)] = inst_40627__$1);

(statearr_40649[(8)] = inst_40626__$1);

return statearr_40649;
})();
if(cljs.core.truth_(inst_40629)){
var statearr_40650_40676 = state_40647__$1;
(statearr_40650_40676[(1)] = (8));

} else {
var statearr_40651_40677 = state_40647__$1;
(statearr_40651_40677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (1))){
var inst_40616 = cljs.core.vec.call(null,chs);
var inst_40617 = inst_40616;
var state_40647__$1 = (function (){var statearr_40652 = state_40647;
(statearr_40652[(10)] = inst_40617);

return statearr_40652;
})();
var statearr_40653_40678 = state_40647__$1;
(statearr_40653_40678[(2)] = null);

(statearr_40653_40678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (4))){
var inst_40617 = (state_40647[(10)]);
var state_40647__$1 = state_40647;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40647__$1,(7),inst_40617);
} else {
if((state_val_40648 === (6))){
var inst_40643 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
var statearr_40654_40679 = state_40647__$1;
(statearr_40654_40679[(2)] = inst_40643);

(statearr_40654_40679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (3))){
var inst_40645 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40647__$1,inst_40645);
} else {
if((state_val_40648 === (2))){
var inst_40617 = (state_40647[(10)]);
var inst_40619 = cljs.core.count.call(null,inst_40617);
var inst_40620 = (inst_40619 > (0));
var state_40647__$1 = state_40647;
if(cljs.core.truth_(inst_40620)){
var statearr_40656_40680 = state_40647__$1;
(statearr_40656_40680[(1)] = (4));

} else {
var statearr_40657_40681 = state_40647__$1;
(statearr_40657_40681[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (11))){
var inst_40617 = (state_40647[(10)]);
var inst_40636 = (state_40647[(2)]);
var tmp40655 = inst_40617;
var inst_40617__$1 = tmp40655;
var state_40647__$1 = (function (){var statearr_40658 = state_40647;
(statearr_40658[(10)] = inst_40617__$1);

(statearr_40658[(11)] = inst_40636);

return statearr_40658;
})();
var statearr_40659_40682 = state_40647__$1;
(statearr_40659_40682[(2)] = null);

(statearr_40659_40682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (9))){
var inst_40627 = (state_40647[(7)]);
var state_40647__$1 = state_40647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40647__$1,(11),out,inst_40627);
} else {
if((state_val_40648 === (5))){
var inst_40641 = cljs.core.async.close_BANG_.call(null,out);
var state_40647__$1 = state_40647;
var statearr_40660_40683 = state_40647__$1;
(statearr_40660_40683[(2)] = inst_40641);

(statearr_40660_40683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (10))){
var inst_40639 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
var statearr_40661_40684 = state_40647__$1;
(statearr_40661_40684[(2)] = inst_40639);

(statearr_40661_40684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (8))){
var inst_40617 = (state_40647[(10)]);
var inst_40628 = (state_40647[(9)]);
var inst_40627 = (state_40647[(7)]);
var inst_40626 = (state_40647[(8)]);
var inst_40631 = (function (){var cs = inst_40617;
var vec__40622 = inst_40626;
var v = inst_40627;
var c = inst_40628;
return ((function (cs,vec__40622,v,c,inst_40617,inst_40628,inst_40627,inst_40626,state_val_40648,c__30370__auto___40675,out){
return (function (p1__40612_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40612_SHARP_);
});
;})(cs,vec__40622,v,c,inst_40617,inst_40628,inst_40627,inst_40626,state_val_40648,c__30370__auto___40675,out))
})();
var inst_40632 = cljs.core.filterv.call(null,inst_40631,inst_40617);
var inst_40617__$1 = inst_40632;
var state_40647__$1 = (function (){var statearr_40662 = state_40647;
(statearr_40662[(10)] = inst_40617__$1);

return statearr_40662;
})();
var statearr_40663_40685 = state_40647__$1;
(statearr_40663_40685[(2)] = null);

(statearr_40663_40685[(1)] = (2));


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
});})(c__30370__auto___40675,out))
;
return ((function (switch__30303__auto__,c__30370__auto___40675,out){
return (function() {
var cljs$core$async$state_machine__30304__auto__ = null;
var cljs$core$async$state_machine__30304__auto____0 = (function (){
var statearr_40667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40667[(0)] = cljs$core$async$state_machine__30304__auto__);

(statearr_40667[(1)] = (1));

return statearr_40667;
});
var cljs$core$async$state_machine__30304__auto____1 = (function (state_40647){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_40647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e40668){if((e40668 instanceof Object)){
var ex__30307__auto__ = e40668;
var statearr_40669_40686 = state_40647;
(statearr_40669_40686[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40687 = state_40647;
state_40647 = G__40687;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$state_machine__30304__auto__ = function(state_40647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30304__auto____1.call(this,state_40647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30304__auto____0;
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30304__auto____1;
return cljs$core$async$state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___40675,out))
})();
var state__30372__auto__ = (function (){var statearr_40670 = f__30371__auto__.call(null);
(statearr_40670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___40675);

return statearr_40670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___40675,out))
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
var args40688 = [];
var len__27580__auto___40737 = arguments.length;
var i__27581__auto___40738 = (0);
while(true){
if((i__27581__auto___40738 < len__27580__auto___40737)){
args40688.push((arguments[i__27581__auto___40738]));

var G__40739 = (i__27581__auto___40738 + (1));
i__27581__auto___40738 = G__40739;
continue;
} else {
}
break;
}

var G__40690 = args40688.length;
switch (G__40690) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40688.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30370__auto___40741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___40741,out){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___40741,out){
return (function (state_40714){
var state_val_40715 = (state_40714[(1)]);
if((state_val_40715 === (7))){
var inst_40696 = (state_40714[(7)]);
var inst_40696__$1 = (state_40714[(2)]);
var inst_40697 = (inst_40696__$1 == null);
var inst_40698 = cljs.core.not.call(null,inst_40697);
var state_40714__$1 = (function (){var statearr_40716 = state_40714;
(statearr_40716[(7)] = inst_40696__$1);

return statearr_40716;
})();
if(inst_40698){
var statearr_40717_40742 = state_40714__$1;
(statearr_40717_40742[(1)] = (8));

} else {
var statearr_40718_40743 = state_40714__$1;
(statearr_40718_40743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40715 === (1))){
var inst_40691 = (0);
var state_40714__$1 = (function (){var statearr_40719 = state_40714;
(statearr_40719[(8)] = inst_40691);

return statearr_40719;
})();
var statearr_40720_40744 = state_40714__$1;
(statearr_40720_40744[(2)] = null);

(statearr_40720_40744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40715 === (4))){
var state_40714__$1 = state_40714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40714__$1,(7),ch);
} else {
if((state_val_40715 === (6))){
var inst_40709 = (state_40714[(2)]);
var state_40714__$1 = state_40714;
var statearr_40721_40745 = state_40714__$1;
(statearr_40721_40745[(2)] = inst_40709);

(statearr_40721_40745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40715 === (3))){
var inst_40711 = (state_40714[(2)]);
var inst_40712 = cljs.core.async.close_BANG_.call(null,out);
var state_40714__$1 = (function (){var statearr_40722 = state_40714;
(statearr_40722[(9)] = inst_40711);

return statearr_40722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40714__$1,inst_40712);
} else {
if((state_val_40715 === (2))){
var inst_40691 = (state_40714[(8)]);
var inst_40693 = (inst_40691 < n);
var state_40714__$1 = state_40714;
if(cljs.core.truth_(inst_40693)){
var statearr_40723_40746 = state_40714__$1;
(statearr_40723_40746[(1)] = (4));

} else {
var statearr_40724_40747 = state_40714__$1;
(statearr_40724_40747[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40715 === (11))){
var inst_40691 = (state_40714[(8)]);
var inst_40701 = (state_40714[(2)]);
var inst_40702 = (inst_40691 + (1));
var inst_40691__$1 = inst_40702;
var state_40714__$1 = (function (){var statearr_40725 = state_40714;
(statearr_40725[(8)] = inst_40691__$1);

(statearr_40725[(10)] = inst_40701);

return statearr_40725;
})();
var statearr_40726_40748 = state_40714__$1;
(statearr_40726_40748[(2)] = null);

(statearr_40726_40748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40715 === (9))){
var state_40714__$1 = state_40714;
var statearr_40727_40749 = state_40714__$1;
(statearr_40727_40749[(2)] = null);

(statearr_40727_40749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40715 === (5))){
var state_40714__$1 = state_40714;
var statearr_40728_40750 = state_40714__$1;
(statearr_40728_40750[(2)] = null);

(statearr_40728_40750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40715 === (10))){
var inst_40706 = (state_40714[(2)]);
var state_40714__$1 = state_40714;
var statearr_40729_40751 = state_40714__$1;
(statearr_40729_40751[(2)] = inst_40706);

(statearr_40729_40751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40715 === (8))){
var inst_40696 = (state_40714[(7)]);
var state_40714__$1 = state_40714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40714__$1,(11),out,inst_40696);
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
});})(c__30370__auto___40741,out))
;
return ((function (switch__30303__auto__,c__30370__auto___40741,out){
return (function() {
var cljs$core$async$state_machine__30304__auto__ = null;
var cljs$core$async$state_machine__30304__auto____0 = (function (){
var statearr_40733 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40733[(0)] = cljs$core$async$state_machine__30304__auto__);

(statearr_40733[(1)] = (1));

return statearr_40733;
});
var cljs$core$async$state_machine__30304__auto____1 = (function (state_40714){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_40714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e40734){if((e40734 instanceof Object)){
var ex__30307__auto__ = e40734;
var statearr_40735_40752 = state_40714;
(statearr_40735_40752[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40753 = state_40714;
state_40714 = G__40753;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$state_machine__30304__auto__ = function(state_40714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30304__auto____1.call(this,state_40714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30304__auto____0;
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30304__auto____1;
return cljs$core$async$state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___40741,out))
})();
var state__30372__auto__ = (function (){var statearr_40736 = f__30371__auto__.call(null);
(statearr_40736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___40741);

return statearr_40736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___40741,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40761 = (function (map_LT_,f,ch,meta40762){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40762 = meta40762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40763,meta40762__$1){
var self__ = this;
var _40763__$1 = this;
return (new cljs.core.async.t_cljs$core$async40761(self__.map_LT_,self__.f,self__.ch,meta40762__$1));
});

cljs.core.async.t_cljs$core$async40761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40763){
var self__ = this;
var _40763__$1 = this;
return self__.meta40762;
});

cljs.core.async.t_cljs$core$async40761.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40761.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40761.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40761.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40761.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40764 = (function (map_LT_,f,ch,meta40762,_,fn1,meta40765){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40762 = meta40762;
this._ = _;
this.fn1 = fn1;
this.meta40765 = meta40765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40766,meta40765__$1){
var self__ = this;
var _40766__$1 = this;
return (new cljs.core.async.t_cljs$core$async40764(self__.map_LT_,self__.f,self__.ch,self__.meta40762,self__._,self__.fn1,meta40765__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40766){
var self__ = this;
var _40766__$1 = this;
return self__.meta40765;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40764.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40764.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40754_SHARP_){
return f1.call(null,(((p1__40754_SHARP_ == null))?null:self__.f.call(null,p1__40754_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40764.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40762","meta40762",1447636068,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40761","cljs.core.async/t_cljs$core$async40761",-712032234,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40765","meta40765",-1358554666,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40764";

cljs.core.async.t_cljs$core$async40764.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27049__auto__,writer__27050__auto__,opt__27051__auto__){
return cljs.core._write.call(null,writer__27050__auto__,"cljs.core.async/t_cljs$core$async40764");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40764 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40764(map_LT___$1,f__$1,ch__$1,meta40762__$1,___$2,fn1__$1,meta40765){
return (new cljs.core.async.t_cljs$core$async40764(map_LT___$1,f__$1,ch__$1,meta40762__$1,___$2,fn1__$1,meta40765));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40764(self__.map_LT_,self__.f,self__.ch,self__.meta40762,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26385__auto__ = ret;
if(cljs.core.truth_(and__26385__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26385__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40761.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40761.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40762","meta40762",1447636068,null)], null);
});

cljs.core.async.t_cljs$core$async40761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40761";

cljs.core.async.t_cljs$core$async40761.cljs$lang$ctorPrWriter = (function (this__27049__auto__,writer__27050__auto__,opt__27051__auto__){
return cljs.core._write.call(null,writer__27050__auto__,"cljs.core.async/t_cljs$core$async40761");
});

cljs.core.async.__GT_t_cljs$core$async40761 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40761(map_LT___$1,f__$1,ch__$1,meta40762){
return (new cljs.core.async.t_cljs$core$async40761(map_LT___$1,f__$1,ch__$1,meta40762));
});

}

return (new cljs.core.async.t_cljs$core$async40761(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40770 = (function (map_GT_,f,ch,meta40771){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta40771 = meta40771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40772,meta40771__$1){
var self__ = this;
var _40772__$1 = this;
return (new cljs.core.async.t_cljs$core$async40770(self__.map_GT_,self__.f,self__.ch,meta40771__$1));
});

cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40772){
var self__ = this;
var _40772__$1 = this;
return self__.meta40771;
});

cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40770.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40771","meta40771",-927384936,null)], null);
});

cljs.core.async.t_cljs$core$async40770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40770";

cljs.core.async.t_cljs$core$async40770.cljs$lang$ctorPrWriter = (function (this__27049__auto__,writer__27050__auto__,opt__27051__auto__){
return cljs.core._write.call(null,writer__27050__auto__,"cljs.core.async/t_cljs$core$async40770");
});

cljs.core.async.__GT_t_cljs$core$async40770 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40770(map_GT___$1,f__$1,ch__$1,meta40771){
return (new cljs.core.async.t_cljs$core$async40770(map_GT___$1,f__$1,ch__$1,meta40771));
});

}

return (new cljs.core.async.t_cljs$core$async40770(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40776 = (function (filter_GT_,p,ch,meta40777){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta40777 = meta40777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40778,meta40777__$1){
var self__ = this;
var _40778__$1 = this;
return (new cljs.core.async.t_cljs$core$async40776(self__.filter_GT_,self__.p,self__.ch,meta40777__$1));
});

cljs.core.async.t_cljs$core$async40776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40778){
var self__ = this;
var _40778__$1 = this;
return self__.meta40777;
});

cljs.core.async.t_cljs$core$async40776.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40776.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40776.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40776.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40777","meta40777",-1911835800,null)], null);
});

cljs.core.async.t_cljs$core$async40776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40776";

cljs.core.async.t_cljs$core$async40776.cljs$lang$ctorPrWriter = (function (this__27049__auto__,writer__27050__auto__,opt__27051__auto__){
return cljs.core._write.call(null,writer__27050__auto__,"cljs.core.async/t_cljs$core$async40776");
});

cljs.core.async.__GT_t_cljs$core$async40776 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40776(filter_GT___$1,p__$1,ch__$1,meta40777){
return (new cljs.core.async.t_cljs$core$async40776(filter_GT___$1,p__$1,ch__$1,meta40777));
});

}

return (new cljs.core.async.t_cljs$core$async40776(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args40779 = [];
var len__27580__auto___40823 = arguments.length;
var i__27581__auto___40824 = (0);
while(true){
if((i__27581__auto___40824 < len__27580__auto___40823)){
args40779.push((arguments[i__27581__auto___40824]));

var G__40825 = (i__27581__auto___40824 + (1));
i__27581__auto___40824 = G__40825;
continue;
} else {
}
break;
}

var G__40781 = args40779.length;
switch (G__40781) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40779.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30370__auto___40827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___40827,out){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___40827,out){
return (function (state_40802){
var state_val_40803 = (state_40802[(1)]);
if((state_val_40803 === (7))){
var inst_40798 = (state_40802[(2)]);
var state_40802__$1 = state_40802;
var statearr_40804_40828 = state_40802__$1;
(statearr_40804_40828[(2)] = inst_40798);

(statearr_40804_40828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (1))){
var state_40802__$1 = state_40802;
var statearr_40805_40829 = state_40802__$1;
(statearr_40805_40829[(2)] = null);

(statearr_40805_40829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (4))){
var inst_40784 = (state_40802[(7)]);
var inst_40784__$1 = (state_40802[(2)]);
var inst_40785 = (inst_40784__$1 == null);
var state_40802__$1 = (function (){var statearr_40806 = state_40802;
(statearr_40806[(7)] = inst_40784__$1);

return statearr_40806;
})();
if(cljs.core.truth_(inst_40785)){
var statearr_40807_40830 = state_40802__$1;
(statearr_40807_40830[(1)] = (5));

} else {
var statearr_40808_40831 = state_40802__$1;
(statearr_40808_40831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (6))){
var inst_40784 = (state_40802[(7)]);
var inst_40789 = p.call(null,inst_40784);
var state_40802__$1 = state_40802;
if(cljs.core.truth_(inst_40789)){
var statearr_40809_40832 = state_40802__$1;
(statearr_40809_40832[(1)] = (8));

} else {
var statearr_40810_40833 = state_40802__$1;
(statearr_40810_40833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (3))){
var inst_40800 = (state_40802[(2)]);
var state_40802__$1 = state_40802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40802__$1,inst_40800);
} else {
if((state_val_40803 === (2))){
var state_40802__$1 = state_40802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40802__$1,(4),ch);
} else {
if((state_val_40803 === (11))){
var inst_40792 = (state_40802[(2)]);
var state_40802__$1 = state_40802;
var statearr_40811_40834 = state_40802__$1;
(statearr_40811_40834[(2)] = inst_40792);

(statearr_40811_40834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (9))){
var state_40802__$1 = state_40802;
var statearr_40812_40835 = state_40802__$1;
(statearr_40812_40835[(2)] = null);

(statearr_40812_40835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (5))){
var inst_40787 = cljs.core.async.close_BANG_.call(null,out);
var state_40802__$1 = state_40802;
var statearr_40813_40836 = state_40802__$1;
(statearr_40813_40836[(2)] = inst_40787);

(statearr_40813_40836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (10))){
var inst_40795 = (state_40802[(2)]);
var state_40802__$1 = (function (){var statearr_40814 = state_40802;
(statearr_40814[(8)] = inst_40795);

return statearr_40814;
})();
var statearr_40815_40837 = state_40802__$1;
(statearr_40815_40837[(2)] = null);

(statearr_40815_40837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (8))){
var inst_40784 = (state_40802[(7)]);
var state_40802__$1 = state_40802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40802__$1,(11),out,inst_40784);
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
});})(c__30370__auto___40827,out))
;
return ((function (switch__30303__auto__,c__30370__auto___40827,out){
return (function() {
var cljs$core$async$state_machine__30304__auto__ = null;
var cljs$core$async$state_machine__30304__auto____0 = (function (){
var statearr_40819 = [null,null,null,null,null,null,null,null,null];
(statearr_40819[(0)] = cljs$core$async$state_machine__30304__auto__);

(statearr_40819[(1)] = (1));

return statearr_40819;
});
var cljs$core$async$state_machine__30304__auto____1 = (function (state_40802){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_40802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e40820){if((e40820 instanceof Object)){
var ex__30307__auto__ = e40820;
var statearr_40821_40838 = state_40802;
(statearr_40821_40838[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40839 = state_40802;
state_40802 = G__40839;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$state_machine__30304__auto__ = function(state_40802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30304__auto____1.call(this,state_40802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30304__auto____0;
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30304__auto____1;
return cljs$core$async$state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___40827,out))
})();
var state__30372__auto__ = (function (){var statearr_40822 = f__30371__auto__.call(null);
(statearr_40822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___40827);

return statearr_40822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___40827,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args40840 = [];
var len__27580__auto___40843 = arguments.length;
var i__27581__auto___40844 = (0);
while(true){
if((i__27581__auto___40844 < len__27580__auto___40843)){
args40840.push((arguments[i__27581__auto___40844]));

var G__40845 = (i__27581__auto___40844 + (1));
i__27581__auto___40844 = G__40845;
continue;
} else {
}
break;
}

var G__40842 = args40840.length;
switch (G__40842) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40840.length)].join('')));

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
var c__30370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto__){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto__){
return (function (state_41012){
var state_val_41013 = (state_41012[(1)]);
if((state_val_41013 === (7))){
var inst_41008 = (state_41012[(2)]);
var state_41012__$1 = state_41012;
var statearr_41014_41055 = state_41012__$1;
(statearr_41014_41055[(2)] = inst_41008);

(statearr_41014_41055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (20))){
var inst_40978 = (state_41012[(7)]);
var inst_40989 = (state_41012[(2)]);
var inst_40990 = cljs.core.next.call(null,inst_40978);
var inst_40964 = inst_40990;
var inst_40965 = null;
var inst_40966 = (0);
var inst_40967 = (0);
var state_41012__$1 = (function (){var statearr_41015 = state_41012;
(statearr_41015[(8)] = inst_40965);

(statearr_41015[(9)] = inst_40989);

(statearr_41015[(10)] = inst_40964);

(statearr_41015[(11)] = inst_40967);

(statearr_41015[(12)] = inst_40966);

return statearr_41015;
})();
var statearr_41016_41056 = state_41012__$1;
(statearr_41016_41056[(2)] = null);

(statearr_41016_41056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (1))){
var state_41012__$1 = state_41012;
var statearr_41017_41057 = state_41012__$1;
(statearr_41017_41057[(2)] = null);

(statearr_41017_41057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (4))){
var inst_40953 = (state_41012[(13)]);
var inst_40953__$1 = (state_41012[(2)]);
var inst_40954 = (inst_40953__$1 == null);
var state_41012__$1 = (function (){var statearr_41018 = state_41012;
(statearr_41018[(13)] = inst_40953__$1);

return statearr_41018;
})();
if(cljs.core.truth_(inst_40954)){
var statearr_41019_41058 = state_41012__$1;
(statearr_41019_41058[(1)] = (5));

} else {
var statearr_41020_41059 = state_41012__$1;
(statearr_41020_41059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (15))){
var state_41012__$1 = state_41012;
var statearr_41024_41060 = state_41012__$1;
(statearr_41024_41060[(2)] = null);

(statearr_41024_41060[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (21))){
var state_41012__$1 = state_41012;
var statearr_41025_41061 = state_41012__$1;
(statearr_41025_41061[(2)] = null);

(statearr_41025_41061[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (13))){
var inst_40965 = (state_41012[(8)]);
var inst_40964 = (state_41012[(10)]);
var inst_40967 = (state_41012[(11)]);
var inst_40966 = (state_41012[(12)]);
var inst_40974 = (state_41012[(2)]);
var inst_40975 = (inst_40967 + (1));
var tmp41021 = inst_40965;
var tmp41022 = inst_40964;
var tmp41023 = inst_40966;
var inst_40964__$1 = tmp41022;
var inst_40965__$1 = tmp41021;
var inst_40966__$1 = tmp41023;
var inst_40967__$1 = inst_40975;
var state_41012__$1 = (function (){var statearr_41026 = state_41012;
(statearr_41026[(8)] = inst_40965__$1);

(statearr_41026[(10)] = inst_40964__$1);

(statearr_41026[(11)] = inst_40967__$1);

(statearr_41026[(14)] = inst_40974);

(statearr_41026[(12)] = inst_40966__$1);

return statearr_41026;
})();
var statearr_41027_41062 = state_41012__$1;
(statearr_41027_41062[(2)] = null);

(statearr_41027_41062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (22))){
var state_41012__$1 = state_41012;
var statearr_41028_41063 = state_41012__$1;
(statearr_41028_41063[(2)] = null);

(statearr_41028_41063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (6))){
var inst_40953 = (state_41012[(13)]);
var inst_40962 = f.call(null,inst_40953);
var inst_40963 = cljs.core.seq.call(null,inst_40962);
var inst_40964 = inst_40963;
var inst_40965 = null;
var inst_40966 = (0);
var inst_40967 = (0);
var state_41012__$1 = (function (){var statearr_41029 = state_41012;
(statearr_41029[(8)] = inst_40965);

(statearr_41029[(10)] = inst_40964);

(statearr_41029[(11)] = inst_40967);

(statearr_41029[(12)] = inst_40966);

return statearr_41029;
})();
var statearr_41030_41064 = state_41012__$1;
(statearr_41030_41064[(2)] = null);

(statearr_41030_41064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (17))){
var inst_40978 = (state_41012[(7)]);
var inst_40982 = cljs.core.chunk_first.call(null,inst_40978);
var inst_40983 = cljs.core.chunk_rest.call(null,inst_40978);
var inst_40984 = cljs.core.count.call(null,inst_40982);
var inst_40964 = inst_40983;
var inst_40965 = inst_40982;
var inst_40966 = inst_40984;
var inst_40967 = (0);
var state_41012__$1 = (function (){var statearr_41031 = state_41012;
(statearr_41031[(8)] = inst_40965);

(statearr_41031[(10)] = inst_40964);

(statearr_41031[(11)] = inst_40967);

(statearr_41031[(12)] = inst_40966);

return statearr_41031;
})();
var statearr_41032_41065 = state_41012__$1;
(statearr_41032_41065[(2)] = null);

(statearr_41032_41065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (3))){
var inst_41010 = (state_41012[(2)]);
var state_41012__$1 = state_41012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41012__$1,inst_41010);
} else {
if((state_val_41013 === (12))){
var inst_40998 = (state_41012[(2)]);
var state_41012__$1 = state_41012;
var statearr_41033_41066 = state_41012__$1;
(statearr_41033_41066[(2)] = inst_40998);

(statearr_41033_41066[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (2))){
var state_41012__$1 = state_41012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41012__$1,(4),in$);
} else {
if((state_val_41013 === (23))){
var inst_41006 = (state_41012[(2)]);
var state_41012__$1 = state_41012;
var statearr_41034_41067 = state_41012__$1;
(statearr_41034_41067[(2)] = inst_41006);

(statearr_41034_41067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (19))){
var inst_40993 = (state_41012[(2)]);
var state_41012__$1 = state_41012;
var statearr_41035_41068 = state_41012__$1;
(statearr_41035_41068[(2)] = inst_40993);

(statearr_41035_41068[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (11))){
var inst_40964 = (state_41012[(10)]);
var inst_40978 = (state_41012[(7)]);
var inst_40978__$1 = cljs.core.seq.call(null,inst_40964);
var state_41012__$1 = (function (){var statearr_41036 = state_41012;
(statearr_41036[(7)] = inst_40978__$1);

return statearr_41036;
})();
if(inst_40978__$1){
var statearr_41037_41069 = state_41012__$1;
(statearr_41037_41069[(1)] = (14));

} else {
var statearr_41038_41070 = state_41012__$1;
(statearr_41038_41070[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (9))){
var inst_41000 = (state_41012[(2)]);
var inst_41001 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41012__$1 = (function (){var statearr_41039 = state_41012;
(statearr_41039[(15)] = inst_41000);

return statearr_41039;
})();
if(cljs.core.truth_(inst_41001)){
var statearr_41040_41071 = state_41012__$1;
(statearr_41040_41071[(1)] = (21));

} else {
var statearr_41041_41072 = state_41012__$1;
(statearr_41041_41072[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (5))){
var inst_40956 = cljs.core.async.close_BANG_.call(null,out);
var state_41012__$1 = state_41012;
var statearr_41042_41073 = state_41012__$1;
(statearr_41042_41073[(2)] = inst_40956);

(statearr_41042_41073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (14))){
var inst_40978 = (state_41012[(7)]);
var inst_40980 = cljs.core.chunked_seq_QMARK_.call(null,inst_40978);
var state_41012__$1 = state_41012;
if(inst_40980){
var statearr_41043_41074 = state_41012__$1;
(statearr_41043_41074[(1)] = (17));

} else {
var statearr_41044_41075 = state_41012__$1;
(statearr_41044_41075[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (16))){
var inst_40996 = (state_41012[(2)]);
var state_41012__$1 = state_41012;
var statearr_41045_41076 = state_41012__$1;
(statearr_41045_41076[(2)] = inst_40996);

(statearr_41045_41076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41013 === (10))){
var inst_40965 = (state_41012[(8)]);
var inst_40967 = (state_41012[(11)]);
var inst_40972 = cljs.core._nth.call(null,inst_40965,inst_40967);
var state_41012__$1 = state_41012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41012__$1,(13),out,inst_40972);
} else {
if((state_val_41013 === (18))){
var inst_40978 = (state_41012[(7)]);
var inst_40987 = cljs.core.first.call(null,inst_40978);
var state_41012__$1 = state_41012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41012__$1,(20),out,inst_40987);
} else {
if((state_val_41013 === (8))){
var inst_40967 = (state_41012[(11)]);
var inst_40966 = (state_41012[(12)]);
var inst_40969 = (inst_40967 < inst_40966);
var inst_40970 = inst_40969;
var state_41012__$1 = state_41012;
if(cljs.core.truth_(inst_40970)){
var statearr_41046_41077 = state_41012__$1;
(statearr_41046_41077[(1)] = (10));

} else {
var statearr_41047_41078 = state_41012__$1;
(statearr_41047_41078[(1)] = (11));

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
});})(c__30370__auto__))
;
return ((function (switch__30303__auto__,c__30370__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30304__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30304__auto____0 = (function (){
var statearr_41051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41051[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30304__auto__);

(statearr_41051[(1)] = (1));

return statearr_41051;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30304__auto____1 = (function (state_41012){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_41012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e41052){if((e41052 instanceof Object)){
var ex__30307__auto__ = e41052;
var statearr_41053_41079 = state_41012;
(statearr_41053_41079[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41080 = state_41012;
state_41012 = G__41080;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30304__auto__ = function(state_41012){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30304__auto____1.call(this,state_41012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30304__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30304__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto__))
})();
var state__30372__auto__ = (function (){var statearr_41054 = f__30371__auto__.call(null);
(statearr_41054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto__);

return statearr_41054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto__))
);

return c__30370__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args41081 = [];
var len__27580__auto___41084 = arguments.length;
var i__27581__auto___41085 = (0);
while(true){
if((i__27581__auto___41085 < len__27580__auto___41084)){
args41081.push((arguments[i__27581__auto___41085]));

var G__41086 = (i__27581__auto___41085 + (1));
i__27581__auto___41085 = G__41086;
continue;
} else {
}
break;
}

var G__41083 = args41081.length;
switch (G__41083) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41081.length)].join('')));

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
var args41088 = [];
var len__27580__auto___41091 = arguments.length;
var i__27581__auto___41092 = (0);
while(true){
if((i__27581__auto___41092 < len__27580__auto___41091)){
args41088.push((arguments[i__27581__auto___41092]));

var G__41093 = (i__27581__auto___41092 + (1));
i__27581__auto___41092 = G__41093;
continue;
} else {
}
break;
}

var G__41090 = args41088.length;
switch (G__41090) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41088.length)].join('')));

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
var args41095 = [];
var len__27580__auto___41146 = arguments.length;
var i__27581__auto___41147 = (0);
while(true){
if((i__27581__auto___41147 < len__27580__auto___41146)){
args41095.push((arguments[i__27581__auto___41147]));

var G__41148 = (i__27581__auto___41147 + (1));
i__27581__auto___41147 = G__41148;
continue;
} else {
}
break;
}

var G__41097 = args41095.length;
switch (G__41097) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41095.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30370__auto___41150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___41150,out){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___41150,out){
return (function (state_41121){
var state_val_41122 = (state_41121[(1)]);
if((state_val_41122 === (7))){
var inst_41116 = (state_41121[(2)]);
var state_41121__$1 = state_41121;
var statearr_41123_41151 = state_41121__$1;
(statearr_41123_41151[(2)] = inst_41116);

(statearr_41123_41151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (1))){
var inst_41098 = null;
var state_41121__$1 = (function (){var statearr_41124 = state_41121;
(statearr_41124[(7)] = inst_41098);

return statearr_41124;
})();
var statearr_41125_41152 = state_41121__$1;
(statearr_41125_41152[(2)] = null);

(statearr_41125_41152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (4))){
var inst_41101 = (state_41121[(8)]);
var inst_41101__$1 = (state_41121[(2)]);
var inst_41102 = (inst_41101__$1 == null);
var inst_41103 = cljs.core.not.call(null,inst_41102);
var state_41121__$1 = (function (){var statearr_41126 = state_41121;
(statearr_41126[(8)] = inst_41101__$1);

return statearr_41126;
})();
if(inst_41103){
var statearr_41127_41153 = state_41121__$1;
(statearr_41127_41153[(1)] = (5));

} else {
var statearr_41128_41154 = state_41121__$1;
(statearr_41128_41154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (6))){
var state_41121__$1 = state_41121;
var statearr_41129_41155 = state_41121__$1;
(statearr_41129_41155[(2)] = null);

(statearr_41129_41155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (3))){
var inst_41118 = (state_41121[(2)]);
var inst_41119 = cljs.core.async.close_BANG_.call(null,out);
var state_41121__$1 = (function (){var statearr_41130 = state_41121;
(statearr_41130[(9)] = inst_41118);

return statearr_41130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41121__$1,inst_41119);
} else {
if((state_val_41122 === (2))){
var state_41121__$1 = state_41121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41121__$1,(4),ch);
} else {
if((state_val_41122 === (11))){
var inst_41101 = (state_41121[(8)]);
var inst_41110 = (state_41121[(2)]);
var inst_41098 = inst_41101;
var state_41121__$1 = (function (){var statearr_41131 = state_41121;
(statearr_41131[(7)] = inst_41098);

(statearr_41131[(10)] = inst_41110);

return statearr_41131;
})();
var statearr_41132_41156 = state_41121__$1;
(statearr_41132_41156[(2)] = null);

(statearr_41132_41156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (9))){
var inst_41101 = (state_41121[(8)]);
var state_41121__$1 = state_41121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41121__$1,(11),out,inst_41101);
} else {
if((state_val_41122 === (5))){
var inst_41098 = (state_41121[(7)]);
var inst_41101 = (state_41121[(8)]);
var inst_41105 = cljs.core._EQ_.call(null,inst_41101,inst_41098);
var state_41121__$1 = state_41121;
if(inst_41105){
var statearr_41134_41157 = state_41121__$1;
(statearr_41134_41157[(1)] = (8));

} else {
var statearr_41135_41158 = state_41121__$1;
(statearr_41135_41158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (10))){
var inst_41113 = (state_41121[(2)]);
var state_41121__$1 = state_41121;
var statearr_41136_41159 = state_41121__$1;
(statearr_41136_41159[(2)] = inst_41113);

(statearr_41136_41159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (8))){
var inst_41098 = (state_41121[(7)]);
var tmp41133 = inst_41098;
var inst_41098__$1 = tmp41133;
var state_41121__$1 = (function (){var statearr_41137 = state_41121;
(statearr_41137[(7)] = inst_41098__$1);

return statearr_41137;
})();
var statearr_41138_41160 = state_41121__$1;
(statearr_41138_41160[(2)] = null);

(statearr_41138_41160[(1)] = (2));


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
});})(c__30370__auto___41150,out))
;
return ((function (switch__30303__auto__,c__30370__auto___41150,out){
return (function() {
var cljs$core$async$state_machine__30304__auto__ = null;
var cljs$core$async$state_machine__30304__auto____0 = (function (){
var statearr_41142 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41142[(0)] = cljs$core$async$state_machine__30304__auto__);

(statearr_41142[(1)] = (1));

return statearr_41142;
});
var cljs$core$async$state_machine__30304__auto____1 = (function (state_41121){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_41121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e41143){if((e41143 instanceof Object)){
var ex__30307__auto__ = e41143;
var statearr_41144_41161 = state_41121;
(statearr_41144_41161[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41162 = state_41121;
state_41121 = G__41162;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$state_machine__30304__auto__ = function(state_41121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30304__auto____1.call(this,state_41121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30304__auto____0;
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30304__auto____1;
return cljs$core$async$state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___41150,out))
})();
var state__30372__auto__ = (function (){var statearr_41145 = f__30371__auto__.call(null);
(statearr_41145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___41150);

return statearr_41145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___41150,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args41163 = [];
var len__27580__auto___41233 = arguments.length;
var i__27581__auto___41234 = (0);
while(true){
if((i__27581__auto___41234 < len__27580__auto___41233)){
args41163.push((arguments[i__27581__auto___41234]));

var G__41235 = (i__27581__auto___41234 + (1));
i__27581__auto___41234 = G__41235;
continue;
} else {
}
break;
}

var G__41165 = args41163.length;
switch (G__41165) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41163.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30370__auto___41237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___41237,out){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___41237,out){
return (function (state_41203){
var state_val_41204 = (state_41203[(1)]);
if((state_val_41204 === (7))){
var inst_41199 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
var statearr_41205_41238 = state_41203__$1;
(statearr_41205_41238[(2)] = inst_41199);

(statearr_41205_41238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (1))){
var inst_41166 = (new Array(n));
var inst_41167 = inst_41166;
var inst_41168 = (0);
var state_41203__$1 = (function (){var statearr_41206 = state_41203;
(statearr_41206[(7)] = inst_41168);

(statearr_41206[(8)] = inst_41167);

return statearr_41206;
})();
var statearr_41207_41239 = state_41203__$1;
(statearr_41207_41239[(2)] = null);

(statearr_41207_41239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (4))){
var inst_41171 = (state_41203[(9)]);
var inst_41171__$1 = (state_41203[(2)]);
var inst_41172 = (inst_41171__$1 == null);
var inst_41173 = cljs.core.not.call(null,inst_41172);
var state_41203__$1 = (function (){var statearr_41208 = state_41203;
(statearr_41208[(9)] = inst_41171__$1);

return statearr_41208;
})();
if(inst_41173){
var statearr_41209_41240 = state_41203__$1;
(statearr_41209_41240[(1)] = (5));

} else {
var statearr_41210_41241 = state_41203__$1;
(statearr_41210_41241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (15))){
var inst_41193 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
var statearr_41211_41242 = state_41203__$1;
(statearr_41211_41242[(2)] = inst_41193);

(statearr_41211_41242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (13))){
var state_41203__$1 = state_41203;
var statearr_41212_41243 = state_41203__$1;
(statearr_41212_41243[(2)] = null);

(statearr_41212_41243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (6))){
var inst_41168 = (state_41203[(7)]);
var inst_41189 = (inst_41168 > (0));
var state_41203__$1 = state_41203;
if(cljs.core.truth_(inst_41189)){
var statearr_41213_41244 = state_41203__$1;
(statearr_41213_41244[(1)] = (12));

} else {
var statearr_41214_41245 = state_41203__$1;
(statearr_41214_41245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (3))){
var inst_41201 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41203__$1,inst_41201);
} else {
if((state_val_41204 === (12))){
var inst_41167 = (state_41203[(8)]);
var inst_41191 = cljs.core.vec.call(null,inst_41167);
var state_41203__$1 = state_41203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41203__$1,(15),out,inst_41191);
} else {
if((state_val_41204 === (2))){
var state_41203__$1 = state_41203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41203__$1,(4),ch);
} else {
if((state_val_41204 === (11))){
var inst_41183 = (state_41203[(2)]);
var inst_41184 = (new Array(n));
var inst_41167 = inst_41184;
var inst_41168 = (0);
var state_41203__$1 = (function (){var statearr_41215 = state_41203;
(statearr_41215[(10)] = inst_41183);

(statearr_41215[(7)] = inst_41168);

(statearr_41215[(8)] = inst_41167);

return statearr_41215;
})();
var statearr_41216_41246 = state_41203__$1;
(statearr_41216_41246[(2)] = null);

(statearr_41216_41246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (9))){
var inst_41167 = (state_41203[(8)]);
var inst_41181 = cljs.core.vec.call(null,inst_41167);
var state_41203__$1 = state_41203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41203__$1,(11),out,inst_41181);
} else {
if((state_val_41204 === (5))){
var inst_41176 = (state_41203[(11)]);
var inst_41171 = (state_41203[(9)]);
var inst_41168 = (state_41203[(7)]);
var inst_41167 = (state_41203[(8)]);
var inst_41175 = (inst_41167[inst_41168] = inst_41171);
var inst_41176__$1 = (inst_41168 + (1));
var inst_41177 = (inst_41176__$1 < n);
var state_41203__$1 = (function (){var statearr_41217 = state_41203;
(statearr_41217[(12)] = inst_41175);

(statearr_41217[(11)] = inst_41176__$1);

return statearr_41217;
})();
if(cljs.core.truth_(inst_41177)){
var statearr_41218_41247 = state_41203__$1;
(statearr_41218_41247[(1)] = (8));

} else {
var statearr_41219_41248 = state_41203__$1;
(statearr_41219_41248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (14))){
var inst_41196 = (state_41203[(2)]);
var inst_41197 = cljs.core.async.close_BANG_.call(null,out);
var state_41203__$1 = (function (){var statearr_41221 = state_41203;
(statearr_41221[(13)] = inst_41196);

return statearr_41221;
})();
var statearr_41222_41249 = state_41203__$1;
(statearr_41222_41249[(2)] = inst_41197);

(statearr_41222_41249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (10))){
var inst_41187 = (state_41203[(2)]);
var state_41203__$1 = state_41203;
var statearr_41223_41250 = state_41203__$1;
(statearr_41223_41250[(2)] = inst_41187);

(statearr_41223_41250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41204 === (8))){
var inst_41176 = (state_41203[(11)]);
var inst_41167 = (state_41203[(8)]);
var tmp41220 = inst_41167;
var inst_41167__$1 = tmp41220;
var inst_41168 = inst_41176;
var state_41203__$1 = (function (){var statearr_41224 = state_41203;
(statearr_41224[(7)] = inst_41168);

(statearr_41224[(8)] = inst_41167__$1);

return statearr_41224;
})();
var statearr_41225_41251 = state_41203__$1;
(statearr_41225_41251[(2)] = null);

(statearr_41225_41251[(1)] = (2));


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
});})(c__30370__auto___41237,out))
;
return ((function (switch__30303__auto__,c__30370__auto___41237,out){
return (function() {
var cljs$core$async$state_machine__30304__auto__ = null;
var cljs$core$async$state_machine__30304__auto____0 = (function (){
var statearr_41229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41229[(0)] = cljs$core$async$state_machine__30304__auto__);

(statearr_41229[(1)] = (1));

return statearr_41229;
});
var cljs$core$async$state_machine__30304__auto____1 = (function (state_41203){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_41203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e41230){if((e41230 instanceof Object)){
var ex__30307__auto__ = e41230;
var statearr_41231_41252 = state_41203;
(statearr_41231_41252[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41253 = state_41203;
state_41203 = G__41253;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$state_machine__30304__auto__ = function(state_41203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30304__auto____1.call(this,state_41203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30304__auto____0;
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30304__auto____1;
return cljs$core$async$state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___41237,out))
})();
var state__30372__auto__ = (function (){var statearr_41232 = f__30371__auto__.call(null);
(statearr_41232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___41237);

return statearr_41232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___41237,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args41254 = [];
var len__27580__auto___41328 = arguments.length;
var i__27581__auto___41329 = (0);
while(true){
if((i__27581__auto___41329 < len__27580__auto___41328)){
args41254.push((arguments[i__27581__auto___41329]));

var G__41330 = (i__27581__auto___41329 + (1));
i__27581__auto___41329 = G__41330;
continue;
} else {
}
break;
}

var G__41256 = args41254.length;
switch (G__41256) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41254.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30370__auto___41332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30370__auto___41332,out){
return (function (){
var f__30371__auto__ = (function (){var switch__30303__auto__ = ((function (c__30370__auto___41332,out){
return (function (state_41298){
var state_val_41299 = (state_41298[(1)]);
if((state_val_41299 === (7))){
var inst_41294 = (state_41298[(2)]);
var state_41298__$1 = state_41298;
var statearr_41300_41333 = state_41298__$1;
(statearr_41300_41333[(2)] = inst_41294);

(statearr_41300_41333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (1))){
var inst_41257 = [];
var inst_41258 = inst_41257;
var inst_41259 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41298__$1 = (function (){var statearr_41301 = state_41298;
(statearr_41301[(7)] = inst_41259);

(statearr_41301[(8)] = inst_41258);

return statearr_41301;
})();
var statearr_41302_41334 = state_41298__$1;
(statearr_41302_41334[(2)] = null);

(statearr_41302_41334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (4))){
var inst_41262 = (state_41298[(9)]);
var inst_41262__$1 = (state_41298[(2)]);
var inst_41263 = (inst_41262__$1 == null);
var inst_41264 = cljs.core.not.call(null,inst_41263);
var state_41298__$1 = (function (){var statearr_41303 = state_41298;
(statearr_41303[(9)] = inst_41262__$1);

return statearr_41303;
})();
if(inst_41264){
var statearr_41304_41335 = state_41298__$1;
(statearr_41304_41335[(1)] = (5));

} else {
var statearr_41305_41336 = state_41298__$1;
(statearr_41305_41336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (15))){
var inst_41288 = (state_41298[(2)]);
var state_41298__$1 = state_41298;
var statearr_41306_41337 = state_41298__$1;
(statearr_41306_41337[(2)] = inst_41288);

(statearr_41306_41337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (13))){
var state_41298__$1 = state_41298;
var statearr_41307_41338 = state_41298__$1;
(statearr_41307_41338[(2)] = null);

(statearr_41307_41338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (6))){
var inst_41258 = (state_41298[(8)]);
var inst_41283 = inst_41258.length;
var inst_41284 = (inst_41283 > (0));
var state_41298__$1 = state_41298;
if(cljs.core.truth_(inst_41284)){
var statearr_41308_41339 = state_41298__$1;
(statearr_41308_41339[(1)] = (12));

} else {
var statearr_41309_41340 = state_41298__$1;
(statearr_41309_41340[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (3))){
var inst_41296 = (state_41298[(2)]);
var state_41298__$1 = state_41298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41298__$1,inst_41296);
} else {
if((state_val_41299 === (12))){
var inst_41258 = (state_41298[(8)]);
var inst_41286 = cljs.core.vec.call(null,inst_41258);
var state_41298__$1 = state_41298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41298__$1,(15),out,inst_41286);
} else {
if((state_val_41299 === (2))){
var state_41298__$1 = state_41298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41298__$1,(4),ch);
} else {
if((state_val_41299 === (11))){
var inst_41266 = (state_41298[(10)]);
var inst_41262 = (state_41298[(9)]);
var inst_41276 = (state_41298[(2)]);
var inst_41277 = [];
var inst_41278 = inst_41277.push(inst_41262);
var inst_41258 = inst_41277;
var inst_41259 = inst_41266;
var state_41298__$1 = (function (){var statearr_41310 = state_41298;
(statearr_41310[(11)] = inst_41278);

(statearr_41310[(7)] = inst_41259);

(statearr_41310[(12)] = inst_41276);

(statearr_41310[(8)] = inst_41258);

return statearr_41310;
})();
var statearr_41311_41341 = state_41298__$1;
(statearr_41311_41341[(2)] = null);

(statearr_41311_41341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (9))){
var inst_41258 = (state_41298[(8)]);
var inst_41274 = cljs.core.vec.call(null,inst_41258);
var state_41298__$1 = state_41298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41298__$1,(11),out,inst_41274);
} else {
if((state_val_41299 === (5))){
var inst_41266 = (state_41298[(10)]);
var inst_41259 = (state_41298[(7)]);
var inst_41262 = (state_41298[(9)]);
var inst_41266__$1 = f.call(null,inst_41262);
var inst_41267 = cljs.core._EQ_.call(null,inst_41266__$1,inst_41259);
var inst_41268 = cljs.core.keyword_identical_QMARK_.call(null,inst_41259,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41269 = (inst_41267) || (inst_41268);
var state_41298__$1 = (function (){var statearr_41312 = state_41298;
(statearr_41312[(10)] = inst_41266__$1);

return statearr_41312;
})();
if(cljs.core.truth_(inst_41269)){
var statearr_41313_41342 = state_41298__$1;
(statearr_41313_41342[(1)] = (8));

} else {
var statearr_41314_41343 = state_41298__$1;
(statearr_41314_41343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (14))){
var inst_41291 = (state_41298[(2)]);
var inst_41292 = cljs.core.async.close_BANG_.call(null,out);
var state_41298__$1 = (function (){var statearr_41316 = state_41298;
(statearr_41316[(13)] = inst_41291);

return statearr_41316;
})();
var statearr_41317_41344 = state_41298__$1;
(statearr_41317_41344[(2)] = inst_41292);

(statearr_41317_41344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (10))){
var inst_41281 = (state_41298[(2)]);
var state_41298__$1 = state_41298;
var statearr_41318_41345 = state_41298__$1;
(statearr_41318_41345[(2)] = inst_41281);

(statearr_41318_41345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41299 === (8))){
var inst_41266 = (state_41298[(10)]);
var inst_41262 = (state_41298[(9)]);
var inst_41258 = (state_41298[(8)]);
var inst_41271 = inst_41258.push(inst_41262);
var tmp41315 = inst_41258;
var inst_41258__$1 = tmp41315;
var inst_41259 = inst_41266;
var state_41298__$1 = (function (){var statearr_41319 = state_41298;
(statearr_41319[(14)] = inst_41271);

(statearr_41319[(7)] = inst_41259);

(statearr_41319[(8)] = inst_41258__$1);

return statearr_41319;
})();
var statearr_41320_41346 = state_41298__$1;
(statearr_41320_41346[(2)] = null);

(statearr_41320_41346[(1)] = (2));


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
});})(c__30370__auto___41332,out))
;
return ((function (switch__30303__auto__,c__30370__auto___41332,out){
return (function() {
var cljs$core$async$state_machine__30304__auto__ = null;
var cljs$core$async$state_machine__30304__auto____0 = (function (){
var statearr_41324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41324[(0)] = cljs$core$async$state_machine__30304__auto__);

(statearr_41324[(1)] = (1));

return statearr_41324;
});
var cljs$core$async$state_machine__30304__auto____1 = (function (state_41298){
while(true){
var ret_value__30305__auto__ = (function (){try{while(true){
var result__30306__auto__ = switch__30303__auto__.call(null,state_41298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30306__auto__;
}
break;
}
}catch (e41325){if((e41325 instanceof Object)){
var ex__30307__auto__ = e41325;
var statearr_41326_41347 = state_41298;
(statearr_41326_41347[(5)] = ex__30307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41348 = state_41298;
state_41298 = G__41348;
continue;
} else {
return ret_value__30305__auto__;
}
break;
}
});
cljs$core$async$state_machine__30304__auto__ = function(state_41298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30304__auto____1.call(this,state_41298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30304__auto____0;
cljs$core$async$state_machine__30304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30304__auto____1;
return cljs$core$async$state_machine__30304__auto__;
})()
;})(switch__30303__auto__,c__30370__auto___41332,out))
})();
var state__30372__auto__ = (function (){var statearr_41327 = f__30371__auto__.call(null);
(statearr_41327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30370__auto___41332);

return statearr_41327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30372__auto__);
});})(c__30370__auto___41332,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1474693970964