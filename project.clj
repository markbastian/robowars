(defproject robowars "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.3"

  :dependencies [[org.clojure/clojure "1.9.0-alpha10"]
                 [org.clojure/clojurescript "1.9.229"]
                 [org.clojure/core.async "0.2.385"
                  :exclusions [org.clojure/tools.reader]]
                 [reagent "0.5.1"]
                 [figwheel-sidecar "0.5.7"]]

  :plugins [[lein-figwheel "0.5.7"]
            [lein-cljsbuild "1.1.4" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src/main/clj" "src/main/cljc"]
  :resource-paths ["src/main/resources"]
  :test-paths ["src/test/clj" "src/test/cljc"]
  :java-source-paths ["src/main/java"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/main/cljs" "src/main/cljc" "src/test/cljs"]
                :test-paths ["src/test/cljs" "src/test/cljc"]
                :resource-paths ["src/main/resources" "src/test/resources"]

                ;; If no code is to be run, set :figwheel true for continued automagical reloading
                :figwheel {:on-jsload "robowars.core/on-js-reload"}

                :compiler {:main robowars.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/robowars.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true}}
               ;; This next build is an compressed minified build for
               ;; production. You can build this with:
               ;; lein cljsbuild once min
               {:id "min"
                :source-paths ["src/main/cljs" "src/main/cljc"]
                :resource-paths ["src/main/resources"]
                :compiler {:output-to "resources/public/js/compiled/robowars.js"
                           :main robowars.core
                           :optimizations :advanced
                           :pretty-print false}}]}

  :profiles {:dev {:resource-paths ["src/main/resources" "src/test/resources"]
                   :dependencies []}
             :test {:resource-paths ["src/main/resources" "src/test/resources"]}
             :uberjar {:aot :all}}

  :figwheel {:css-dirs ["resources/public/css"]})
