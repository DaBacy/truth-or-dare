input.onButtonPressed(Button.A, function () {
    random_number = randint(0, 1)
    basic.clearScreen()
    if (random_number == 0) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    random_number = randint(0, 3)
    basic.clearScreen()
    if (random_number == 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (random_number == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # . # .
            . . # . .
            `)
    } else if (random_number == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
    } else if (random_number == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
    }
})
let random_number = 0
basic.showString("Hello!")
basic.forever(function () {
	
})
