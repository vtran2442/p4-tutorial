serial.setBaudRate(BaudRate.BaudRate115200)
basic.clearScreen()

/* CHANGE HUMIDITY COLOR */
input.onButtonPressed(Button.A, function () {
    // serial.writeLine("a: " + input.temperature());
    serial.writeLine("a")
    // basic.showNumber(input.temperature())
    // basic.clearScreen()
})

/* CHANGE BUNNY SIZE */
input.onButtonPressed(Button.B, function () {
    serial.writeLine("b")
    // basic.showIcon(IconNames.Rabbit)
    // basic.pause(100)
    // basic.clearScreen()
})

input.onButtonPressed(Button.AB, function () {
    serial.writeLine("c")
})

/* RESET */
input.onGesture(Gesture.Shake, function () {
    serial.writeLine("d")
    basic.showAnimation(`
    . . . . . . . . . . . . . . . . . . . . . . . . .
    . . # . . . . . # . . . . . . . # . . . . . # . .
    . . # . . . . # . . . # # # . . . # . . . . # . .
    . . # . . . # . . . . . . . . . . . # . . . # . .
    . . . . . . . . . . . . . . . . . . . . . . . . .
    `, 500)
    basic.clearScreen();
})

/**
 * basic.showNumber(weatherbit.temperature())
 * 
 * basic.showNumber(weatherbit.pressure())
 * 
 * basic.showNumber(weatherbit.humidity())
 * 
 * basic.showNumber(weatherbit.altitude())
 * 
 * serial.writeNumber(weatherbit.temperature()/100);
 */
/**
 * input.onButtonPressed(TouchButtonEvent.Pressed, function () {
 * 
 * serial.writeLine("n")
 * 
 * })
 */
// serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
//     if (serial.readLine().includes("m1")) {
//         console.log("m1 movement")
//     } else if (serial.readLine().includes("m2")) {
//         console.log("m2 movement");
//     }
// })
// serial.setBaudRate(BaudRate.BaudRate115200)
// basic.clearScreen()
