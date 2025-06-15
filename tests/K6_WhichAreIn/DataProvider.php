<?php

namespace tests\K6_WhichAreIn;

class DataProvider
{
    public function data()
    {
        return [
            [[
                ["arp", "live", "strong"], 
                ["lively", "alive", "harp", "sharp", "armstrong"]
            ], ["arp", "live", "strong"]],
            [[
                ["xyz", "live", "strong"], 
                ["lively", "alive", "harp", "sharp", "armstrong"]
            ], ["live", "strong"]],
            [[
                ["live", "strong", "arp"], 
                ["lively", "alive", "harp", "sharp", "armstrong"]
            ], ["arp", "live", "strong"]],
        ];
    }
}