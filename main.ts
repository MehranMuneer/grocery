input.onButtonPressed(Button.A, function () {
    list += -1
    basic.showString("" + (text_list[list]))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (text_list[list]))
})
input.onButtonPressed(Button.B, function () {
    list += 1
    basic.showString("" + (text_list[list]))
})
let text_list: string[] = []
let list = 0
list = 0
text_list = [
"Bread",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p"
]
basic.showString("" + (text_list.length))
