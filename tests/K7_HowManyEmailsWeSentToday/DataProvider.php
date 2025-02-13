<?php

namespace tests\K7_HowManyEmailsWeSentToday;

class DataProvider
{
    public function data() {
        return [
            [[101, 1000], "10%"],
            [[256, 500], "51%"],
            [[256, 300], "85%"],
            [[259], "25%"],

            [[0], "No e-mails sent"],
            [[1000, 1000], "Daily limit is reached"],
        ];
    }
}
