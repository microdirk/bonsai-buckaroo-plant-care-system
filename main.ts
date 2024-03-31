let reading = 0
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
led.setBrightness(6)
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (reading < 710) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(670)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(2000)
})
