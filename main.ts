serial.setBaudRate(BaudRate.BaudRate115200)

input.onButtonPressed(Button.A, function () {
    serial.writeLine("a")
})

input.onButtonPressed(Button.B, function() {
    serial.writeLine("b")
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    serial.writeLine("n")
})

serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    led.toggle(0,0)
})