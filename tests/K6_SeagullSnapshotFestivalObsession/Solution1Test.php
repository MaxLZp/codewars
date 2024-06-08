<?php

namespace tests\K6_SeagullSnapshotFestivalObsession;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SeagullSnapshotFestivalObsession\DataProvider::data
     */
    public function execute($frameRIndexnput, $expected) {
        $this->assertEquals($expected, $this->solve($frameRIndexnput));
    }

    public function solve(string $scene) : string
    {
        $frameLength = mb_strlen('[[   x   ]]');
        $sceneLength = mb_strlen($scene);

        if (
            $frameLength > $sceneLength
            ||
            !preg_match('/[seagul]+/i', $scene, $matches)
        ) {
            return $scene;
        }

        $start = mb_strpos($scene, $matches[0]);
        $end = $start + mb_strlen($matches[0]);

        $frameRIndex = min($sceneLength, max($end + 2, $frameLength));
        $sceneCaptured = mb_substr($scene, $frameRIndex - $frameLength, $frameLength);

        return mb_substr($scene, 0, $frameRIndex - $frameLength)
            . '[[' . mb_substr($sceneCaptured, 2, 3) . 'x' . mb_substr($sceneCaptured, 6, 3). ']]'
            . mb_substr($scene, $frameRIndex);
    }
}
