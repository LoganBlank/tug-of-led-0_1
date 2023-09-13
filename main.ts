input.onButtonPressed(Button.A, function () {
    rope += -0.2
})
input.onPinPressed(TouchPin.P2, function () {
    rope += 0.2
})
input.onButtonPressed(Button.B, function () {
    rope += 0.2
})
input.onPinPressed(TouchPin.P1, function () {
    rope += -0.2
})
let RightScore = 0
let LeftScore = 0
basic.showIcon(IconNames.Yes)
basic.pause(200)
let rope = 2
basic.clearScreen()
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(rope), 2)
    if (rope < 0) {
        LeftScore += 1
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(200)
        basic.showNumber(LeftScore)
        basic.pause(200)
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        rope = 2
        led.plot(Math.round(rope), 2)
    } else if (rope > 4) {
        RightScore += 1
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.pause(200)
        basic.showNumber(RightScore)
        basic.pause(200)
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        rope = 2
        led.plot(Math.round(rope), 2)
    }
})
