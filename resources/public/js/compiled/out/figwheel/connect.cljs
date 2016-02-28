(ns figwheel.connect (:require [robowars.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/robowars.core.on-js-reload (apply js/robowars.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'robowars.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

