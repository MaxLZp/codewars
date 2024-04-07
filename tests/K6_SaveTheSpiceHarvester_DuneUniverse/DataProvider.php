<?php

namespace tests\K6_SaveTheSpiceHarvester_DuneUniverse;

class DataProvider
{
    public function data()
    {
        return [
            [
                [
                    'harvester' => [345, 600],
                    'worm' => [[200, 100], 25],
                    'carryall' => [[350, 200], 32]
                ],
                'The spice must flow! Rescue the harvester!',
            ],
            [
                [
                    'harvester' => [200, 400],
                    'worm' => [[200, 0], 40],
                    'carryall' => [[500, 100], 45]
                ],
                "Damn the spice! I'll rescue the miners!",
            ],
            [
                [
                    'harvester' => [555, 287],
                    'worm' => [[733, -372], 38],
                    'carryall' => [[408, 550], 44]
                ],
                "The spice must flow! Rescue the harvester!",
            ],
        ];
    }
}