<?php

namespace tests\K6_WeirdStringCase;

class DataProvider
{
    public function data()
    {
        return [
            ['Hello world foo bar baz', 'HeLlO WoRlD FoO BaR BaZ'],
            ['wEll i GuesS you passed', 'WeLl I GuEsS YoU PaSsEd'],
        ];
    }
}