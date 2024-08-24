<?php

namespace tests\K7_ExclamationMarkSeries5_RemoveAllExclamationMarksFromTheEndOfWords;

class DataProvider
{
    public function data()
    {
        return [
            ["Hi!", "Hi",],
            ["Hi!!!", "Hi",],
            ["!Hi", "!Hi",],
            ["!Hi!", "!Hi",],
            ["Hi! Hi!", "Hi Hi",],
            ["!!!Hi !!hi!!! !hi", "!!!Hi !!hi !hi",],

            ["Hello myjinxin2015!,!!! my! name!! is Donald.!!!", "Hello myjinxin2015!, my name is Donald.",],
            ["Hk7EP!GCV44o Vb.Eu K!VZ!I 3.hRxyD5XJ !!PPU E!!oNuXh!CxO? 2!N N0cD6VbQ39!e4 vao!nTe!px!?QD", "Hk7EP!GCV44o Vb.Eu K!VZ!I 3.hRxyD5XJ !!PPU E!!oNuXh!CxO? 2!N N0cD6VbQ39!e4 vao!nTe!px!?QD",],
        ];
    }
}
