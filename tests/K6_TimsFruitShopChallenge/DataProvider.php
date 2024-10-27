<?php

namespace tests\K6_TimsFruitShopChallenge;

class DataProvider
{
    public function data()
    {
        return [
            [
                ["63a21b"],
                [
                    [
                        '-(aaa)(b)',
                        '{a}{b}{b}',
                        '------[a]'
                    ]
                ]
            ],
            [
                ['10a'],
                [
                    [
                        '---',
                        '{a}',
                        '---'
                    ]
                ]
            ],
            [
                ['10a3b', '64j1k92i'],
                [
                    [
                        '(bbb)',
                        '--{a}',
                        '-----'
                    ],
                    [
                        '--(jjjj)(k)(ii)',
                        '{j}{i}{i}{i}{i}',
                        '---------[j][i]'
                    ]
                ],
            ],
        ];
    }
}
