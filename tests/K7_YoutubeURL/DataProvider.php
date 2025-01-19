<?php

namespace tests\K7_YoutubeURL;

class DataProvider
{
    public function data()
    {
        return [
            ['https://www.youtube.com/embed/L3JxAuUyjzY', "https://www.youtube.com/embed/L3JxAuUyjzY"],
            ['https://www.youtube.com/watch?v=L3JxAuUyjzY', "https://www.youtube.com/embed/L3JxAuUyjzY"],
            ['http://youtu.be/WORE7528z6z', "https://www.youtube.com/embed/WORE7528z6z"],
        ];
    }
}
