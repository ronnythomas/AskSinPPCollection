# Dauersender / Babbling Idiot

Abschaltung oder Dauersender/-störer trotz fast voller Batterien

Um die garantierten Spezifikationen des ATMega328P einzuhalten, ist ab Werk die so genannte 
[Brown-Out-Detection (BOD)](https://www.mikrocontroller.net/articles/Brownout) bei **2.7V** aktiviert. 
Sinkt die Eingangsspannung unter diesen Wert, fällt der µC in einen RESET-Zustand. 
Das _kann_ ungewollte Nebenfolgen haben 
(siehe ["Babbling Idiot"](https://github.com/TomMajor/AskSinPP_Examples/tree/master/Info/Babbling%20Idiot%20Protection))!
Weiterhin werden die Batterien dadurch auch nur sehr ineffektiv genutzt.

Bei der BOD handelt es sich um ein sogenanntes ["Fuse-Bit"](https://de.wikipedia.org/wiki/Fuse-Bit).

Fuse-Bits können nur mithilfe eines ISP (In-System-Programmer) 
(z.B. [USBasp](https://www.ebay.de/i/232496093834) oder 
[Diamex Programmer](https://www.diamex.de/dxshop/USB-ISP-Programmer-fuer-Atmel-AVR-Rev2)) 
verändert werden. Es lässt sich auch ein 
[Arduino UNO als ISP](https://www.arduino.cc/en/Tutorial/ArduinoISP) verwenden!

Der ISP ist 1:1 mit 6 Leitungen an den Pro Mini zu verbinden:

| Pro Mini | ISP |
|----|----|
| VCC | VCC |
| GND  | GND |
| RESET | RESET |
| 11 | MOSI |
| 12 | MISO |
| 13 | SCK |

Das Setzen der Fuse-Bits erfolgt mit dem Tool `avrdude`.
Es befindet sich bei installierter **Arduino IDE** und Boardunterstützung **Arduino AVR Boards** 
- in Windows:
  - `C:\Users\<Benutzer>\AppData\Local\Arduino15\packages\arduino\tools\avrdude\6.3.0-arduino14\bin\`
- auf dem Mac:
  - `~/Library/Arduino15/packages/arduino/tools/avrdude/6.3.0-arduino14/bin/`
- bei Linux:
  - `~/.arduino15/packages/arduino/tools/avrdude/6.3.0-arduino14/bin/`

_(Der Ordner `6.3.0-arduino14` kann je nach Version abweichen.)_

Der Aufruf erfolgt dann bei Verwendung des USBasp in der Eingabeaufforderung/Kommandozeile mit:
```bash
<Pfadangabe>/avrdude -v -pm328p -cusbasp -Ulfuse:w:0xFF:m -Uhfuse:w:0xD2:m -Uefuse:w:0xFF:m
```

_(USBasp benötigt einen [speziellen USB-Treiber "libusb"](http://zadig.akeo.ie)!)_

Bei Verwendung eines Diamex oder Arduino UNO as ISP sieht der Aufruf so aus _(com11 ggf. ändern!)_:
```bash
<Pfadangabe>/avrdude -v -pm328p -P com11 -c stk500v1 -b 19200 -Ulfuse:w:0xFF:m -Uhfuse:w:0xD2:m -Uefuse:w:0xFF:m
```

