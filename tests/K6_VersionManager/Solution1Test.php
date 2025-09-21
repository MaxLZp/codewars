<?php

namespace tests\K6_VersionManager;

use PHPUnit\Framework\TestCase;
use tests\K6_VersionManager\VersionManager;

class Solution1Test extends TestCase
{

    // /**
    //  * @test
    //  * @dataProvider \tests\K6_VersionManager\DataProvider::data
    //  */
    // public function execute($input, $expected)
    // {
    //     try {
    //         $this->assertSame($expected, (new VersionManager($input))->release());
    //     } catch (\Exception $e) {
    //         $this->fail();
    //     }   
    // }

    /**
     * @test
     */
    public function manual(): void
    {
        // $manager = new VersionManager("16.d.6.5");
        // $manager = new VersionManager("0.0.1");
        $manager = new VersionManager("1");
        $current = $manager->major()->release();
        echo $current;
    }
}
