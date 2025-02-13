<?php

namespace tests\K7_HowManyEmailsWeSentToday;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_HowManyEmailsWeSentToday\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve(int $sent, int $limit = 1000): string {
        if (!$sent) { return 'No e-mails sent'; }
        if ($sent >= $limit) { return 'Daily limit is reached'; }
        return sprintf('%1$d%%', intval($sent * 100 / $limit));
    }
}
