(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{171:function(e,r,t){e.exports=t.p+"assets/img/arduino-pro-mini.35fc58fe.jpg"},172:function(e,r,t){e.exports=t.p+"assets/img/cc1101.a73ddda2.jpg"},173:function(e,r,t){e.exports=t.p+"assets/img/wiring_arduino_cc1101.a0cca605.png"},174:function(e,r,t){e.exports=t.p+"assets/img/arduino-pro-mini-removed-parts.f97cd75b.jpg"},175:function(e,r,t){e.exports=t.p+"assets/img/arduino_cc1101_bottom.bd73fde2.jpg"},176:function(e,r,t){e.exports=t.p+"assets/img/arduino_cc1101_top.80438d9e.jpg"},200:function(e,r,t){"use strict";t.r(r);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},i=t(6),a=Object(i.a)(n,function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[n("h1",{attrs:{id:"hardware"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hardware","aria-hidden":"true"}},[e._v("#")]),e._v(" Hardware")]),e._v(" "),n("h2",{attrs:{id:"microcontroller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#microcontroller","aria-hidden":"true"}},[e._v("#")]),e._v(" Microcontroller")]),e._v(" "),n("p",[e._v("Als Microcontroller kommt meistens der Arduini Pro Mini zum Einsatz.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(171),alt:"Arduino Pro Mini"}})]),e._v(" "),n("p",[e._v("Die AskSinPP Lib unterstützt zudem folgende Kontroller:")]),e._v(" "),n("ul",[n("li",[e._v("ATMega328P")]),e._v(" "),n("li",[e._v("ATMega32")]),e._v(" "),n("li",[e._v("ATMega644")]),e._v(" "),n("li",[e._v("ATMega1284")]),e._v(" "),n("li",[e._v("STM32F1")])]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Es gibt verschiedene Ausführungen des Arduino Pro Mini."),n("br"),e._v("\nEs ist darauf zu achten, dass man eine Version mit "),n("code",[e._v("ATmega328P")]),e._v(" und "),n("code",[e._v("3,3V / 8Mhz")]),e._v(" verwendet.")])]),e._v(" "),n("h2",{attrs:{id:"funkmodul"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#funkmodul","aria-hidden":"true"}},[e._v("#")]),e._v(" Funkmodul")]),e._v(" "),n("p",[e._v("Als Funkmodul wird ein CC1101 868Mhz verwendet.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(172),alt:"CC1101"}})]),e._v(" "),n("p",[e._v("Das Modul wird über den "),n("a",{attrs:{href:"https://de.wikipedia.org/wiki/Serial_Peripheral_Interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("SPI Bus"),n("OutboundLink")],1),e._v("\nan den Mikrocontroller angeschlossen."),n("br"),e._v("\nDa das "),n("a",{attrs:{href:"http://www.ti.com/lit/ds/symlink/cc1101.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC1101"),n("OutboundLink")],1),e._v("\nmit einer Betriebsspannung von 1,8V bis 3,9V arbeitet, kann es direkt an 3,3V (VCC) Arduino betrieben werden. Für Kontroller\nmit höherer Arbeitsspannung ist ein "),n("a",{attrs:{href:"https://de.wikipedia.org/wiki/Pegelumsetzer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pegelwandler"),n("OutboundLink")],1),e._v(" nötig.")]),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("Anstatt der mitgelieferten Spiralantenne empfiehlt sich ein Draht mit "),n("strong",[e._v("8,3cm")]),e._v(" Länge."),n("br"),e._v("\nDieser sollte nach Möglichkeit mit Abstand zu den elektronischen Bauteilen verlegt werden.")])]),e._v(" "),n("h2",{attrs:{id:"verdrahtung"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#verdrahtung","aria-hidden":"true"}},[e._v("#")]),e._v(" Verdrahtung")]),e._v(" "),n("p",[n("img",{attrs:{src:t(173),alt:"Allgemeingültige Verdrahtung Arduino Pro Mini und CC1101"}})]),e._v(" "),n("p",[e._v("Hier dargestellt die allgemeingültige Verdrahtung des Pro Mini mit dem CC1101 Funkmodul."),n("br"),e._v("\nDieser Aufbau ist für alle AskSinPP Projekte mit Arduino Pro Mini gültig.")]),e._v(" "),n("p",[e._v("Um die Komponente z.B. in den Anlern-Modus zu versetzen wird ein ein Config-Taster verbaut\nwelcher an "),n("code",[e._v("PIN 8")]),e._v(" und "),n("code",[e._v("GND")]),e._v(" angeschlossen wird.")]),e._v(" "),n("p",[e._v("Zusätzlich kann/sollte eine Status-LED verbaut werden.\nIm Sketch ist zu diesem Zweck entweder eine "),n("code",[e._v("StatusLed")]),e._v(" oder "),n("code",[e._v("DualStatusLed")]),e._v(" definiert."),n("br"),e._v("\nBeispiel Dual LED: "),n("code",[e._v("typedef DualStatusLed<LED2_PIN,LED1_PIN> LedType;")]),n("br"),e._v("\nBeispiel Single LED: "),n("code",[e._v("typedef StatusLed<LED_PIN> LedType;")]),n("br"),e._v("\nDer Anschluss-PIN der LED ergibt sich aus der Definition im Sketch:\n"),n("code",[e._v("#define LED_PIN 4")]),e._v("\nDie LED(s) werden über einen 330 Ohm Vorwiderstand mit dem jeweiligen Arduino-PIN verbunden.")]),e._v(" "),n("h2",{attrs:{id:"stromversorgung"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stromversorgung","aria-hidden":"true"}},[e._v("#")]),e._v(" Stromversorgung")]),e._v(" "),n("h3",{attrs:{id:"netzteil"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#netzteil","aria-hidden":"true"}},[e._v("#")]),e._v(" Netzteil")]),e._v(" "),n("p",[e._v("Wird der Arduino über ein Netzteil (oder > 2x 1,5V Batterien) betrieben ist die Spannung für die Wahl des Pins der Einspeisung entscheidend:")]),e._v(" "),n("ul",[n("li",[e._v("Für eine Spannung zwischen 4V und 12V wird der "),n("code",[e._v("RAW")]),e._v(" Pin verwendet da der Arduino Pro Mini\neinen Spannungsregler hat.")]),e._v(" "),n("li",[e._v("Für eine Spannung von 3.3V wird "),n("code",[e._v("VCC")]),e._v(" benutzt.")]),e._v(" "),n("li",[e._v("Bei höheren Spannungen muss diese über einen Festspannungsregler oder Step-Down Modul heruntergesetzt werden.")])]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Es gibt einige Versionen des Pro Mini deren Spannungsregler keine 12V aushalten."),n("br"),e._v("\nHier sollte auf jeden Fall der verbaute LDO kontrolliert werden.\nEr ist auf dem Bild zur Verdrahtung mit einem roten X markiert.")])]),e._v(" "),n("h3",{attrs:{id:"batteriebetrieb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#batteriebetrieb","aria-hidden":"true"}},[e._v("#")]),e._v(" Batteriebetrieb")]),e._v(" "),n("p",[e._v("Der Anschluss der Batterien (2x 1,5V) erfolgt an "),n("code",[e._v("VCC")]),e._v(" und "),n("code",[e._v("GND")]),e._v(".")]),e._v(" "),n("p",[e._v("Da bei Batteriebetrieb mit 2 x 1,5V der Spannungsregler (LDO) nicht benötigt wird und auch die Power LED sowie die LED_BUILTIN nur unnötig Strom verbrauchen, können diese Bauteile (X) ganz unproblematisch entfernt werden.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(174),alt:"Arduino Pro Mini Bauteilkennzeichung"}})]),e._v(" "),n("div",{staticClass:"danger custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Fällt die Batteriespannung zu weit ab kann es zu einem Dauersender / Babbling Idiot kommen."),n("br"),e._v("\nErklärung und Lösung "),n("strong",[n("router-link",{attrs:{to:"/Grundlagen/FAQ/babbling_idiot.html"}},[e._v("HIER")])],1),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"stromverbrauch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stromverbrauch","aria-hidden":"true"}},[e._v("#")]),e._v(" Stromverbrauch")]),e._v(" "),n("p",[e._v("Informationen zum Stromverbrauch findet ihr "),n("a",{attrs:{href:"https://github.com/TomMajor/AskSinPP_Examples/tree/master/Info/Ruhestrom",target:"_blank",rel:"noopener noreferrer"}},[e._v("hier"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"aufbau"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aufbau","aria-hidden":"true"}},[e._v("#")]),e._v(" Aufbau")]),e._v(" "),n("p",[e._v("Mithilfe von Kupferlackdraht kann das Funkmodul platzspared unter dem Arduino Pro Mini angeschlossen werden.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(175),alt:"CC1101 mit Kupferlackdraht am Arduino Pro Mini"}})]),e._v(" "),n("p",[n("img",{attrs:{src:t(176),alt:"Arduino Pro Mini von oben"}})]),e._v(" "),n("p",[e._v("Von der Community gibt es mittlerweile verschiedene "),n("router-link",{attrs:{to:"/Platinen/"}},[e._v("Platinen")]),e._v(" und "),n("router-link",{attrs:{to:"/Gehaeuse/"}},[e._v("Gehäuse")]),e._v(".")],1)])},[],!1,null,null,null);a.options.__file="01_hardware.md";r.default=a.exports}}]);