<?php

namespace tests\K7_ExclamationMarksSeries9_RemoveOrAddAEsclamationMarkAtTheEndOfWordsOfTheSentence;

class DataProvider
{
    public function data()
    {
        return [
            ["Hi!", "Hi", ],
            ["Hi! Hi!","Hi Hi", ],
            ["Hi! Hi", "Hi Hi!", ],
            ["Hi! Hi Hi!!", "Hi Hi! Hi!!", ],
            ["!Hi! !Hi !Hi!!", "!Hi !Hi! !Hi!!", ],
        ];
    }
}