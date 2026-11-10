def check_root(strng):
    try:
        nums = [int(n) for n in strng.split(',')]
        if len(nums) != 4: 
            raise ValueError
        
        prod = 1
        for i, num in enumerate(nums):
            if i > 0 and nums[i-1] != nums[i] - 1:
                return 'not consecutive'
            prod *= num
        
        # return f'{prod + 1}, {int((prod + 1) ** 0.5)}'
        # or use formatting instead on type conversion
        return f'{prod + 1}, {((prod + 1) ** 0.5):.0f}'
    
    except ValueError:
        return 'incorrect input'
        

    
def test_always_perfect():
        assert check_root('4,5,6,7') == '841, 29'
        assert check_root('3,s,5,6') == 'incorrect input'
        assert check_root('11,13,14,15') == 'not consecutive'
        assert check_root('10,11,12,13,15') == 'incorrect input'
        assert check_root('10,11,12,13') == '17161, 131'
        assert check_root('ad,d,q,tt,v') == 'incorrect input'
        assert check_root('//,;;,/,..,') == 'incorrect input'
        assert check_root('1,2,3,4') == '25, 5'
        assert check_root('1015,1016,1017,1018') == '1067648959441, 1033271'
        assert check_root('555,777,444,111') == 'not consecutive'
        assert check_root('20,21,22,24') == 'not consecutive'
        assert check_root('9,10,10,11') == 'not consecutive'
        assert check_root('11254,11255,11256,11258') == 'not consecutive'
        assert check_root('25000,25001,25002,25003') == '390718756875150001, 625075001'
        assert check_root('2000000,2000001,2000002,2000003') == '16000048000044000012000001, 4000006000001'
        assert check_root('4,5,6,q') == 'incorrect input'
        assert check_root('5,6,7') == 'incorrect input'
        assert check_root('3,5,6,7') == 'not consecutive'
        assert check_root('-4,-3,-2,-1') == '25, 5'
        assert check_root('-1,0,1,2') == '1, 1'
    