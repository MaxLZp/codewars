<?php

namespace tests\K5_ResistorColorCodes_Part2;

class DataProvider
{
    public function data()
    {
        return [
            ["10 ohms", "brown black black gold", ],
            ["47 ohms", "yellow violet black gold", ],
            ["100 ohms", "brown black brown gold", ],
            ["220 ohms", "red red brown gold", ],
            ["330 ohms", "orange orange brown gold", ],
            ["470 ohms", "yellow violet brown gold", ],
            ["680 ohms", "blue gray brown gold", ],
            ["1k ohms", "brown black red gold", ],
            ["4.7k ohms", "yellow violet red gold", ],
            ["10k ohms", "brown black orange gold", ],
            ["22k ohms", "red red orange gold", ],
            ["47k ohms", "yellow violet orange gold", ],
            ["100k ohms", "brown black yellow gold", ],
            ["330k ohms", "orange orange yellow gold", ],
            ["1M ohms", "brown black green gold", ],
            ["2M ohms", "red black green gold", ],
        ];
    }
}