<?php

namespace tests\K6_FruitMachine;

class DataProvider
{
    public function data()
    {
        return [
            [
                [
                    [
                        ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"],
                        ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"],
                        ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"],
                    ],
                    [0,0,0]
                ],
                100,
            ],
            [
                [
                    [
                        ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"],
                        ["Bar", "Wild", "Queen", "Bell", "King", "Seven", "Cherry", "Jack", "Star", "Shell"],
                        ["Bell", "King", "Wild", "Bar", "Seven", "Jack", "Shell", "Cherry", "Queen", "Star"],
                    ],
                    [5,4,3],
                ], 0,
            ],
            [
                [
                    [
                        ["King", "Cherry", "Bar", "Jack", "Seven", "Queen", "Star", "Shell", "Bell", "Wild"],
                        ["Bell", "Seven", "Jack", "Queen", "Bar", "Star", "Shell", "Wild", "Cherry", "King"],
                        ["Wild", "King", "Queen", "Seven", "Star", "Bar", "Shell", "Cherry", "Jack", "Bell"],
                    ],
                    [0,0,1],
                ], 3,
            ],
            [
                [
                    [
                        ["King", "Jack", "Wild", "Bell", "Star", "Seven", "Queen", "Cherry", "Shell", "Bar"],
                        ["Star", "Bar", "Jack", "Seven", "Queen", "Wild", "King", "Bell", "Cherry", "Shell"],
                        ["King", "Bell", "Jack", "Shell", "Star", "Cherry", "Queen", "Bar", "Wild", "Seven"],
                    ],
                    [0,5,0],
                ], 6,
            ],

            [
                [
                    [
                        ['Seven', 'Wild', 'Bell', 'Star', 'Cherry', 'Jack', 'Shell', 'Bar', 'King', 'Queen'],
                        ['Bar', 'King', 'Queen', 'Seven', 'Star', 'Jack', 'Wild', 'Shell', 'Bell', 'Cherry'],
                        ['Bar', 'Shell', 'Seven', 'Jack', 'Bell', 'Wild', 'Star', 'Cherry', 'King', 'Queen'],
                    ],
                    [4, 6, 5],
                ], 10,
            ],
        ];
    }
}