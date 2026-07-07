def to_12_hour_time(time_string):
    hrs = int(time_string[:2])
    return f"{hrs % 12 or 12}:{time_string[-2:]} {'am' if hrs < 12 else 'pm'}"
    # The timestring will always be four digits using
    # "hhmm" format.
    # return 'h:mm am' or 'h:mm pm'


def test_converting_24hour_time_to_12hour_time():
    assert to_12_hour_time('0100') == '1:00 am'
    assert to_12_hour_time('1300') == '1:00 pm'
    assert to_12_hour_time('0630') == '6:30 am'
    assert to_12_hour_time('2145') == '9:45 pm'
    
    assert to_12_hour_time('1224') == '12:24 pm'
    assert to_12_hour_time('0020') == '12:20 am'