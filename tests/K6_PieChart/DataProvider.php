<?php

namespace tests\K6_PieChart;

class DataProvider
{

    public function data()
    {
        return [
            ['{"Hausa": 4, "Yoruba" : 5, "Igbo" : 6, "Efik" : 1, "Edo" : 4}', '{"Hausa":72,"Yoruba":90,"Igbo":108,"Efik":18,"Edo":72}', ],
            ['{"English": 4, "Polish" : 12, "Russian" : 10, "Spanish" : 2}', '{"English":51.43,"Polish":154.29,"Russian":128.57,"Spanish":25.71}', ],
            ['{"Android": 500, "iOS" : 270, "Microsoft" : 230}', '{"Android":180,"iOS":97.2,"Microsoft":82.8}', ],
        ];
    }
}