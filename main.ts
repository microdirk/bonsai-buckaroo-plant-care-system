let reading = 0
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
led.setBrightness(6)
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P1)
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (reading < 250) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(2500)
})
