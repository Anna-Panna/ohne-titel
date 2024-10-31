input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(100)
            led.unplot(x, y)
        }
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
	
})
