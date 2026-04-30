def enough_ink(image, r, g, b):
    for row in image:
        for pixel in row:
            # Other
            r -= 255 - int(pixel[0:2], 16)
            g -= 255 - int(pixel[2:4], 16)
            b -= 255 - int(pixel[4:6], 16)
            # My
            # consumption = [255 - int(num, 16)for num in re.findall('[0-9a-f]{2}', pixel.lower())]
            # r -= consumption[0]
            # g -= consumption[1]
            # b -= consumption[2]
            if r < 0 or g < 0 or b < 0:
                return False
    return True

def test_is_there_enough_ink():
    assert enough_ink([["ffffff"]], 0, 0, 0) == True
    assert enough_ink([["000000"]], 255, 255, 254) == False
    assert enough_ink([["000000"]], 256, 256, 256) == True
    assert enough_ink([["000000"]], 400, 526, 612) == True
    assert enough_ink([["eeeeee"]], 1, 2, 3) == False
    assert enough_ink([["ffffff", "ffffff", "ffffff"]], 0, 0, 0) == True
    assert enough_ink([["000000", "000000", "000000"]], 255, 255, 254) == False
    assert enough_ink([["000000", "000000", "000000"]], 768, 768, 768) == True
    assert enough_ink([["fefefe", "fefefe", "fefefe"], ["fefefe", "fefefe", "fefefe"], ["fefefe", "fefefe", "fefefe"]], 9, 8, 9) == False
    assert enough_ink([["fefefe", "fefefe", "fefefe"], ["fefefe", "fefefe", "fefefe"], ["fefefe", "fefefe", "fefefe"]], 9, 9, 9) == True
