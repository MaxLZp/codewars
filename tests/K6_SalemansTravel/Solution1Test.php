<?php

namespace tests\K6_SalemansTravel;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    /**
     * @test
     * @dataProvider tests\K6_SalemansTravel\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($r, $zipcode): string
    {
        $addresses = array_map(function($address) {
            preg_match('/^(\d+) (.+) ([a-zA-Z]{2} \d{5})$/', $address, $matches);
            return [
                'zip' => $matches[3],
                'house' => $matches[1],
                'street' => $matches[2],
            ];
        }, explode(',', $r));
        $streets = [];
        $houses = [];
        foreach ($addresses as $address) {
            if ($zipcode !== $address['zip']) {continue;}
            $streets[] = $address['street'];
            $houses[] = $address['house'];
        }
        return $zipcode.':'.implode(',', $streets).'/'.implode(',', $houses);
    }
}
