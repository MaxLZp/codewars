from datetime import datetime

def check_coupon(entered_code, correct_code, current_date: str, expiration_date: str) -> bool:
    return type(entered_code) is type(correct_code) and entered_code == correct_code and datetime.strptime(current_date, '%B %d, %Y').timestamp() <= datetime.strptime(expiration_date, '%B %d, %Y').timestamp()

def test_the_coupon_code():
        assert check_coupon('123','123','September 5, 2014','October 1, 2014') == True
        assert check_coupon('123a','123','September 5, 2014','October 1, 2014') == False
        assert check_coupon('12abcd3','12abcd3','January 5, 2014','January 1, 2014') == False
        assert check_coupon('123ablqc0','123ablqc0','July 5, 2000','July 5, 2000') == True
        assert check_coupon('abc','abc','November 8, 2013','November 5, 2014') == True
        assert check_coupon(0,False,'September 5, 2014','September 25, 2014') == False
        assert check_coupon('0',False,'September 5, 2014','September 25, 2014') == False
        assert check_coupon('1',True,'September 5, 2014','September 25, 2014') == False
        assert check_coupon(1+1,'2','September 5, 2014','September 25, 2014') == False
        assert check_coupon('a12v564','a12v564','March 5, 1998','March 25, 1998') == True
        assert check_coupon('0a12bc64','0a12bc64','March 6, 2005','March 5, 2006') == True
        assert check_coupon(1,True,'September 5, 2014','September 25, 2014') == False
        # catch wrong solution that would check (entered_code is correct_code)
        assert check_coupon("blah","blahblah"[:4],'September 5, 2014','September 25, 2014') == True