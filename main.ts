namespace SpriteKind {
    export const wall = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -150
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.showLongText("You found a hidden Cinnamon roll", DialogLayout.Bottom)
    sprites.destroy(otherSprite, effects.spray, 500)
    info.changeScoreBy(1)
    if (info.score() == 5) {
        game.gameOver(true)
    }
})
let mySprite3: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 . 1 1 1 . . 
    . . . 1 1 . 8 1 8 . . . 1 1 . . 
    . . . 1 1 . 3 2 3 . . . . . . . 
    . . . . . 1 8 1 8 1 . . . . . . 
    . . . . 1 . 1 8 1 . 1 . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(randint(20, 200), randint(20, 200))
for (let index = 0; index <= 4; index++) {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e 1 1 1 e e . . . . . 
        . . . . e e 1 e 1 e e . . . . . 
        . . . . e e 1 1 1 e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    mySprite3.setPosition(randint(20, 200), randint(20, 200))
}
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
