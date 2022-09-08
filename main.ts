input.onButtonPressed(Button.A, function () {
    long_nailt1 += 1
    basic.showNumber(long_nailt1)
    basic.pause(500)
    basic.showString("long nails")
})
input.onButtonPressed(Button.AB, function () {
    tie += 1
    basic.showNumber(tie)
    basic.pause(500)
    basic.showString("long nails")
})
input.onButtonPressed(Button.B, function () {
    short_nailst2 += 1
    basic.showNumber(short_nailst2)
    basic.pause(500)
    basic.showString("long nails")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("long nails")
    basic.showNumber(long_nailt1)
    basic.pause(500)
    basic.clearScreen()
    basic.showString("short nails")
    basic.showNumber(short_nailst2)
    basic.pause(500)
    basic.clearScreen()
    basic.showString("tie")
    basic.showNumber(tie)
    basic.clearScreen()
})
let tie = 0
let short_nailst2 = 0
let long_nailt1 = 0
long_nailt1 = 0
short_nailst2 = 0
tie = 0
