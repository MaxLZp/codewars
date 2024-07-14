<?php

namespace tests\K6_DivideAndConquer;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_DivideAndConquer\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    /**
     * Sort input.
     * Create groups ($grp) where keys are unique and consecutive while removing item used from input $arr( by setting to null and filtering ).
     * Skip non unique $grp keys while creating $grp.
     * If it's impossible to create such group then  it's impossible to divide the set - return false.
     */
    public function solve(array $arr, int $groupLen): bool 
    {
        if (count($arr) % $groupLen != 0) {
            return false;
        }
        $groups = intval(count($arr) / $groupLen);
        sort($arr);

        for($i = 0; $i < $groups; $i++) {
            $grp = [];
            foreach ($arr as $key => $value) {
                // skip if $value already present in $grp
                if (!array_key_exists($value, $grp)) {
                    $grpKeys = array_keys($grp);
                    if (
                        count($grp) == 0 // new group
                        || 
                        $value == 1 + $grp[$grpKeys[count(array_keys($grp)) - 1]] // new and consequent $grp key
                    ) {
                        $grp[$value] = $value;
                        $arr[$key] = null;
                    } else {
                        // no more unique and consequent $grp keys
                        break;
                    }
                }
                if (count($grp) >= $groupLen) { break; }
            }
            if (count($grp) < $groupLen) {
                // It's impossible to create new $grp and this means set cannot be divided too.
                return false;
            }
            $arr = array_filter($arr, function($item) { return $item !== null; });
        }

        return true;
    }
}
