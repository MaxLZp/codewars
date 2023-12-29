<?php

namespace tests\K6_EaseTheStockBrocker;

class DataProvider
{
    public function data()
    {
        return [
            [
                "GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S",
                "Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B ;",
            ],
            [
                "GOOG 90 160.45 B, JPMC 67 12.8 S, MYSPACE 24.0 210 B, CITI 50 450 B, CSCO 100 55.5 S",
                "Buy: 14440 Sell: 6408; Badly formed 2: MYSPACE 24.0 210 B ;CITI 50 450 B ;",
            ],
            [
                "",
                "Buy: 0 Sell: 0",
            ],
        ];
    }
}