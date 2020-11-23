input.onButtonPressed(Button.A, function () {
    radio.sendString("Ola")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
	
})
radio.setGroup(7)
