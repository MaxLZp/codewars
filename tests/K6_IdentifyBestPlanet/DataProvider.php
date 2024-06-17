<?php

namespace tests\K6_IdentifyBestPlanet;

class DataProvider
{
    public function data()
    {
        return [
            [[['OHNCCaP_100', 'OHC_200', 'OCa_50', 'OHCCaP_400', 'OHNCCaP_225'],  250],   'OHNCCaP_225'],
            [[['OHNCCaP_225', 'OHC_200', 'OCa_50', 'OHCCaP_400', 'OUNCCaP_250'],  250],   'OHNCCaP_225'],
            [[['OHNCCaP_225', 'OHC_200', 'OCa_350', 'OHCCaP_400', 'OHUNCCaP_225'], 50],   ''],
            [[['OHNCCaP_225', 'OHC_200', 'OCa_50', 'OHCCaP_400', 'OUNCCaP_250'],   50],   ''],
        ];
    }
}