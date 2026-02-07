def fly_by(lamps, drone):
    return f"{'o'*min(len(drone), len(lamps))}{'x'*(len(lamps) - len(drone))}"
	# other
	# return lamps.replace('x', 'o', len(drone))

def test_drone_fly_by():
	assert fly_by('xxxxxx', '====T') == 'ooooox'
	assert fly_by('xxxxxxxxx', '==T') == 'oooxxxxxx'
	assert fly_by('xxxxxxxxxxxxxxx', '=========T') == 'ooooooooooxxxxx'
 
	assert fly_by('xx', '==T') == 'oo'
