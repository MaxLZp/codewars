def arrange(arr):
    def key(val):
        import re
        return int(re.sub(r'[^\d]', '', val)) * (1000000 if 'T' in val else 1000 if 'KG' in val else 1)
    return sorted(arr, key=key)


def test_order_of_weighf():
    assert arrange(["200G","300G","150G","100KG"]) == ["150G","200G","300G","100KG"]
    assert arrange(["400G","100T","150KG","100G"]) == ["100G","400G","150KG","100T"]
    assert arrange(["4T","300G","450G","900KG"]) == ["300G","450G","900KG","4T"]
    assert arrange(["400T","100T","1T","100G"]) == ["100G","1T","100T","400T"]
    assert arrange(["1G","2KG","3T","100KG"]) == ["1G","2KG","100KG","3T"]
    assert arrange(["100KG","100G","150T","150KG"]) == ["100G","100KG","150KG","150T"]
    assert arrange(["3T","2900000G","2950KG"]) == ["2900000G","2950KG","3T"]
    assert arrange(["3T","3000001G","2950KG"]) == ["2950KG","3T","3000001G"]
    assert arrange(["1T"]) == ["1T"]
    assert arrange([]) == []
