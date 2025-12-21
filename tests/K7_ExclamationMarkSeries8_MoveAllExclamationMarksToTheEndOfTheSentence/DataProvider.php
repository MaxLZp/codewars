<?php

namespace tests\K7_ExclamationMarkSeries8_MoveAllExclamationMarksToTheEndOfTheSentence;

class DataProvider
{
    public function data()
    {
        return [
            ["Hi!", "Hi!", ],
            ["Hi! Hi!", "Hi Hi!!", ],
            ["Hi! Hi! Hi!", "Hi Hi Hi!!!", ],
            ["Hi! !Hi Hi!", "Hi Hi Hi!!!", ],
            ["Hi! Hi!! Hi!", "Hi Hi Hi!!!!", ],
        ];
    }
}
