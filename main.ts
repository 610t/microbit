input.onButtonPressed(Button.A, function () {
    basic.showNumber(歩数)
})
input.onButtonPressed(Button.B, function () {
    歩数 = 0
})
let 前の状態 = false
let 状態 = false
let 加速度 = 0
let 歩数 = 0
歩数 = 0
let 合計 = 0
let 回数 = 0
let 平均 = 1024
let 幅 = Math.idiv(平均, 10)
basic.forever(function () {
    加速度 = input.acceleration(Dimension.Strength)
    if (回数 < 100) {
        合計 += 加速度
        回数 += 1
    } else {
        平均 = Math.idiv(合計, 回数)
        幅 = Math.idiv(平均, 10)
        合計 = 0
        回数 = 0
    }
    if (加速度 > 平均 + 幅) {
        状態 = true
    } else {
        if (加速度 < 平均 - 幅) {
            状態 = false
        }
    }
    if (!(前の状態) && 状態) {
        歩数 += 1
    }
    前の状態 = 状態
})
