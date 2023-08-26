OLED.init(128, 64)
basic.clearScreen()
basic.forever(function () {
    if (Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P16) < 3) {
        OLED.writeNumNewLine(Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P16))
        basic.showIcon(IconNames.Asleep)
        for (let index = 0; index < 3; index++) {
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        }
    } else {
        basic.clearScreen()
    }
    basic.pause(1000)
})
