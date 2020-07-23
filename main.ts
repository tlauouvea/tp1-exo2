input.onButtonPressed(Button.A, function () {
    led.unplot(posX, posY)
    posX = Math.max(0, posX - 1)
    led.plot(posX, posY)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, posY)
    posX = Math.min(4, posX + 1)
    led.plot(posX, posY)
})
let posX = 0
let posY = 0
let direction = 1
posY = 0
posX = 0
led.plot(0, posY)
basic.forever(function () {
    basic.pause(500)
    led.unplot(posX, posY)
    posY += direction
    if (posY == 4) {
        direction += -1
    } else if (posY == 0) {
        direction += 1
    }
    led.plot(posX, posY)
})
