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

/* NOTE: Serial drops some data; thus, a lot of Micro:bit functionality occurs
when the Micro:bit writes instead of receives from p5. The only functionality
that occurs when Micro:bit receives is when the rabbit resizes - mostly because 
the music is annoying to hear all the time so hearing it only a couple times when
the rabbit resizes is alright. */
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    console.log(serial.readLine())
    if (serial.readLine().includes("b")) { // CHANGE RABBIT SIZE
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    }
})