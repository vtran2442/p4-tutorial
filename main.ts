serial.setBaudRate(BaudRate.BaudRate115200)

/* CHANGE HUMIDITY COLOR */
input.onButtonPressed(Button.A, function () {
    serial.writeLine("a: " + input.temperature());
    basic.showNumber(input.temperature())
    basic.clearScreen()
})

/* CHANGE BUNNY SIZE */
input.onButtonPressed(Button.B, function () {
    serial.writeLine("b")
    // music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
})

/* ADD MOTION BALLS */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    serial.writeLine("c")
})

/* RESET */
input.onGesture(Gesture.Shake, function () {
    serial.writeLine("d")
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    basic.showAnimation(`
    . . . . . . . . . . . . . . . . . . . . . . . . .
    . . # . . . . . # . . . . . . . # . . . . . # . .
    . . # . . . . # . . . # # # . . . # . . . . # . .
    . . # . . . # . . . . . . . . . . . # . . . # . .
    . . . . . . . . . . . . . . . . . . . . . . . . .
    `, 100)

    basic.clearScreen();
})

serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    console.log(serial.readLine())
    if (serial.readLine().includes("b")) { // CHANGE RABBIT SIZE
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    }
})