<?php

namespace tests\K7_SumOfABeach;

class DataProvider
{
    public function data()
    {
        return [
            ["SanD", 1],
            ["sunshine", 1],
            ["sunsunsunsun", 4],
            ["123FISH321", 1],
            ["weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn", 4],
            ["sAnDsandwaTerwatErfishFishsunsunsandwater", 10],
            ["joifjepiojfoiejfoajoijawoeifjowejfjoiwaefjiaowefjaofjwoj fawojef ", 0],
            ["jwefjwjfsandsandwaterwaterfishfishsunsunsandwateriojwhefa;jawof;jawio;f", 10],
            ["saNdsandwaterwAterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwater", 100],
            ["sununsu", 1],
            ["sandandndsansa", 1],
            ["wateratertererwatewatwa", 1],
            ["fishishshfisfi", 1],
        ];
    }
}
