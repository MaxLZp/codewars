<?php

namespace tests\K6_DDCaharacterGenerator1_AttributeModifiersAndSpells;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_DDCaharacterGenerator1_AttributeModifiersAndSpells\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $score): array
    {
        $result = [
            'modifier' => 0,
            'maximum_spell_level' => -1,
            'extra_spells' => []
        ];
        if ($score <= 0) {
            return $result;
        }

        $result['modifier'] = intval(floor(($score-10)/2));

        if ($score == 10) {
            $result['maximum_spell_level'] = 0;
        }
        if ($score > 10 && $score < 20) {
            $result['maximum_spell_level'] = $score - 10;
        }
        if ($score >= 20) {
            $result['maximum_spell_level'] = 9;
        }

        if ($result['modifier'] > 0) {
            for ($i = $result['modifier'] - 1; $i >= 0 && $i >= $result['modifier'] - 9 ; $i--) {
                $result['extra_spells'][] = 1 + intval($i / 4);
            }
        }

        return $result;
    }
}
