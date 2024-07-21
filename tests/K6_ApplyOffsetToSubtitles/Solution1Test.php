<?php

namespace tests\K6_ApplyOffsetToSubtitles;

use DateTime;
use DateInterval;
use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ApplyOffsetToSubtitles\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($string, $offset): string
    {
        $offsetStr = "$offset";
        $interval = DateInterval::createFromDateString($offsetStr.' milliseconds');

        preg_match('/(\d\d:\d\d:\d\d,\d\d\d) --> (\d\d:\d\d:\d\d,\d\d\d) (.*)/', $string, $matches);
        $t1 = DateTime::createFromFormat('H:i:s,v', $matches[1]);
        $t2 = DateTime::createFromFormat('H:i:s,v', $matches[2]);
        $ts = DateTime::createFromFormat('H:i:s', '00:00:00');

        $t1is = $t1->diff($ts);
        $t1isl = 1000 * (($t1is->d*24 + $t1is->h) * 3600 + $t1is->i * 60 +  $t1is->s) + $t1is->f * 1000;
        $t2is = $t2->diff($ts);
        $t2isl = 1000 * (($t2is->d*24 + $t2is->h) * 3600 + $t2is->i * 60 +  $t2is->s) + $t2is->f * 1000;
        $limitl = 1000 * (99 * 3600 + 59 * 60 + 59) + 999;

        if (
          $interval === false
          ||
          ($offset < 0 && $t1isl < abs($offset))
          ||
          ($offset > 0 && $t2isl + $offset > $limitl)
         ) {
          return "Invalid offset";
        }

        $t1 = $t1->add($interval);
        $t1i = $t1->diff($ts);
        $t2 = $t2->add($interval);
        $t2i = $t2->diff($ts);

        $t1is = sprintf('%02d:%02d:%02d,%03d', $t1i->d*24 + $t1i->h, $t1i->i, $t1i->s, $t1i->f*1000);
        $t2is = sprintf('%02d:%02d:%02d,%03d', $t2i->d*24 + $t2i->h, $t2i->i, $t2i->s, $t2i->f*1000);

        return sprintf('%s --> %s %s', $t1is, $t2is, $matches[3]);
    }
}
