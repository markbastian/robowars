(ns robowars.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state
         (atom {:text         "Hello world!"
                :active-robot :twonky
                :robots       {:twonky {:pos       [2 2] :dir 0
                                        :registers [:move-1
                                                    :rotate-right
                                                    :move-1
                                                    :rotate-right
                                                    :move-1]}
                               :beep   {:pos [4 2] :dir 0
                                        :registers [:move-1
                                                    :rotate-right
                                                    :move-1
                                                    :rotate-right
                                                    :move-1]}
                               :gonk   {:pos [2 8] :dir 0
                                        :registers [:move-1
                                                    :rotate-right
                                                    :move-1
                                                    :rotate-right
                                                    :move-1]}
                               :r2     {:pos [6 6] :dir 0
                                        :registers [:move-1
                                                    :rotate-right
                                                    :move-1
                                                    :rotate-right
                                                    :move-1]}}}))

(defn next-player [{:keys [active-robot robots] :as state}]
  (assoc state :active-robot
               (->> robots keys cycle
                    (partition 2 1)
                    (some (fn [[r n]] (when (= r active-robot) n))))))

(def x {:move-1 18
         :move-2 12
         :move-3 6
         :back-up 6
         :rotate-right 18
         :rotate-left 18
         :u-turn 6})

(defn gen-hands[]
  (->> x
       (map (fn [[k v]] (repeat v k)))
       flatten
       shuffle
       (partition 9)
       (map sort)))

(defn deg->vec [deg]
  (let [rads (/ (* Math/PI deg) 180)]
    [(int (Math/round (Math/cos rads))) (int (Math/round (Math/sin rads)))]))

(defn push [push-pos dir state]
  (if-let [occupant (some (fn [[k {:keys [pos]}]] (when (= pos push-pos) k)) (state :robots))]
    (let [pushed-pos (mapv + push-pos dir)]
      (assoc-in (push pushed-pos dir state) [:robots occupant :pos] pushed-pos))
    state))

(defn move-forward [robot state]
  (push (get-in state [:robots robot :pos])
        (deg->vec (get-in state [:robots robot :dir]))
        state))

(defn rotate-left [state] (update-in state [:dir] - 90))
(defn rotate-right [state] (update-in state [:dir] + 90))
(defn u-turn [state] (update-in state [:dir] + 180))

(defn hello-world []
  (let [cell-dim 20
        ncells 12
        {:keys [active-robot robots]} @app-state]
    [:div
     [:h1 (:text @app-state)]
     [:h3 (str "Current player is " (:active-robot @app-state))]
     ;[:h3 (str "Next player is " (next-player @app-state))]
     [:svg {:width (* ncells cell-dim) :height (* ncells cell-dim)}
      (doall (for [i (range ncells) j (range ncells)]
               [:rect { :key (str i ":" j) :x (* i cell-dim) :y (* j cell-dim)
                       :width cell-dim :height cell-dim
                       :stroke :red :fill :black }]))

      (doall (for [[nm {:keys [pos dir]}] robots
                   :let [trans (map #(* % cell-dim) pos)]]
               [:polygon {:key nm
                          :points [[0 0] [0 cell-dim] [cell-dim (* cell-dim 0.5)]]
                          :stroke :green :fill (if (= nm active-robot) :green :yellow)
                          :transform
                                  (str "translate("
                                       (first trans) " "
                                       (second trans)  ") rotate("
                                       dir " 10 10)")}]))]
     [:div
      [:button
       {:on-click
        #(swap!
          app-state
          (partial move-forward (:active-robot @app-state)))}
       "Move 1"]
      [:button {:on-click #(swap! app-state update-in [:robots (:active-robot @app-state)] rotate-right)} "Rotate right"]
      [:button {:on-click #(swap! app-state update-in [:robots (:active-robot @app-state)] rotate-left)} "Rotate left"]
      [:button {:on-click #(swap! app-state update-in [:robots (:active-robot @app-state)] u-turn)} "U-turn"]
      [:button {:on-click #(swap! app-state next-player)} "next"]]]))

(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
