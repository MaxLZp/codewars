<?php

namespace tests\K6_RegexTicTacToeWinChecker;

class DataProvider
{
    public function data()
    {
        return [
            ["XXX-O-O-O", true],
            ["X--OOOX-X", true],
            ["O--OO-XXX", true],
            ["O-XOX-O-X", true],
            ["OXOOXOXX-", true],
            ["X-O-OOXXO", true],
            ["XO--X-OOX", true],
            ["X-OXOOOXX", true],
            ["XO-------", false],
            ["XX-XOO---", false],
            ["-XX-OO-O-", false],
            ["OXO--XXO-", false],
            ["OOXXXO---", false],
            ["OXXX-XOO-", false],
            ["OOXXX----", false],
            ["XXOOXXOO-", false],
            ["OXOXOX---", false],
        ];
    }
}
