def get_rectangle_string(width, height):
    return (f'{"*"*width}\r\n'
        + f'*{" "*(width-2)}*\r\n'*(height - 2)
        + f'{"*"*width}\r\n')
        

def test_print_a_rectangle_using_asteriks():
    assert get_rectangle_string(3, 3) == "***\r\n* *\r\n***\r\n"
    assert get_rectangle_string(4, 5) == "****\r\n*  *\r\n*  *\r\n*  *\r\n****\r\n"
    assert get_rectangle_string(1, 2) == "*\r\n*\r\n"
    