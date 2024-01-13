<?php

namespace tests\K6_ExtractPortionOfFileName;

class DataProvider
{
    public function data()
    {
        return [
            ["1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION", "FILE_NAME.EXTENSION", ],
            ["1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34", "This_is_an_otherExample.mpg", ],
            ["1231231223123131_myFile.tar.gz2", "myFile.tar", ],
            ["1705137870_q3F1zsK-IP.hsO.Cj5C-", "q3F1zsK-IP.hsO", ],
        ];
    }
}