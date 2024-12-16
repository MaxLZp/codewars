<?php

namespace tests\K7_ForKids_DayOfTheWeek;

class DataProvider
{
    public function data()
    {
        return [
            ["02/06/1940", "Sunday"],
            ["20/02/2045", "Monday"],
            ["24/01/2017", "Tuesday"],
            ["05/08/2015", "Wednesday"],
            ["07/12/2000", "Thursday"],
            ["16/09/2016", "Friday"],
            ["30/12/2017", "Saturday"],
        ];
    }
}
