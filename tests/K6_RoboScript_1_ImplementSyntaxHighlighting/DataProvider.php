<?php

namespace tests\K6_RoboScript_1_ImplementSyntaxHighlighting;

class DataProvider
{
    public function data()
    {
        return [
            ['F3RF5LF7', '<span style="color: pink">F</span><span style="color: orange">3</span><span style="color: green">R</span><span style="color: pink">F</span><span style="color: orange">5</span><span style="color: red">L</span><span style="color: pink">F</span><span style="color: orange">7</span>', ],
            ['FFFR345F2LL', '<span style="color: pink">FFF</span><span style="color: green">R</span><span style="color: orange">345</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">LL</span>', ],
        ];
    }
}