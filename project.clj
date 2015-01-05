(defproject LeagueApp "0.0.1-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [om "0.7.3"]
                 [com.facebook/react "0.11.2"]
                 [sablono "0.2.22"]
                 [prismatic/om-tools "0.3.6"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :profiles {:dev {:source-paths ["src"]}}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:output-to "dist/js/leagueapp-dev.js"
                                   :output-dir "dist/js/leagueapp-dev"
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map "dist/js/leagueapp-dev.js.map"}}]})
