def match(job, candidates):
    def matches(job, candidate):
        locations = candidate['desired_locations'] + [candidate['current_location']]
        locations = list(set(locations).intersection(job['locations']))
        return len(locations) and (not candidate['desires_equity'] or job['equity_max'] > 0)    
    
    return [candidate for candidate in candidates if matches(job, candidate)]


def test_job_matching():
    candidates = [{
        'desires_equity': True, 
        'current_location': 'New York',
        'desired_locations': ['San Francisco', 'Los Angeles']
    }, {
        'desires_equity': False, 
        'current_location': 'San Francisco',
        'desired_locations': ['Kentucky', 'New Mexico'] 
    }]
    job1 = { 'equity_max': 0, 'locations': ['Los Angeles', 'New York'] }
    job2 = { 'equity_max': 1.2, 'locations': ['New York', 'Kentucky'] }
    assert len(match(job1, candidates)) == 0
    assert len(match(job2, candidates)) == 2
