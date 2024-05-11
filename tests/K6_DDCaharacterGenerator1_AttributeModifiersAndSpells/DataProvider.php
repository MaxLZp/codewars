<?php

namespace tests\K6_DDCaharacterGenerator1_AttributeModifiersAndSpells;

class DataProvider
{
    public function data()
    {
        return [
            [0, ['modifier' => 0, 'maximum_spell_level' => -1, 'extra_spells' => []], ],
            [1, ['modifier' => -5, 'maximum_spell_level' => -1, 'extra_spells' => []], ],
            [5, ['modifier' => -3, 'maximum_spell_level' => -1, 'extra_spells' => []], ],
            [10, ['modifier' => 0, 'maximum_spell_level' => 0, 'extra_spells' => []], ],
            [20, ['modifier' => +5, 'maximum_spell_level' => 9, 'extra_spells' => [2, 1, 1, 1, 1]], ],

            [17, ['modifier' => +3, 'maximum_spell_level' => 7, 'extra_spells' => [1, 1, 1,]], ],
            [39, ['modifier' => +14, 'maximum_spell_level' => 9, 'extra_spells' => [4, 4, 3, 3, 3, 3, 2, 2, 2,]], ],

        ];
    }
}