def battle_outcome(attacker, defender):
    """My 2"""
    tuple = zip(sorted(attacker, reverse=True), sorted(defender, reverse=True))
    ra, rd = 0, 0
    for a, d in tuple:
        if a <= d:
            ra += 1
        else:
            rd += 1
    return ra, rd


# def battle_outcome(attacker, defender):
#     """My 1"""
#     sa  = sorted(attacker, reverse=True)
#     sd  = sorted(defender, reverse=True)
    
#     i = 0
#     ra, rd = 0, 0
#     while len(sa) > i and len(sd) > i:
#         ra += 1 if sa[i] <= sd[i] else 0
#         rd += 1 if sa[i] > sd[i] else 0
#         i += 1
#     return ra, rd

  
def test_risk_game_battle_outcome():
    sample_test_cases = [
        #  attacker defender  expected    description
        
        ('Simple battles: both players roll a single die', [
            ([1],     [4],     (1,0),    'Defender rolls higher.'),
            ([5],     [5],     (1,0),    'Attacker and defender roll equal.'),
            ([6],     [3],     (0,1),    'Attacker rolls higher.'),
        ]),
        ('Typical battles: attacker rolls three dice, defender rolls one or two dice', [
            ([1,6,2], [5],     (0,1),    'Attacker rolls higher.'),
            ([2,3,4], [3,2],   (0,2),    'Attacker rolls higher twice.'),
            ([5,2,4], [4,4],   (1,1),    'Attacker and defender both roll higher'),
        ]),
    ]
    for name, test_cases in sample_test_cases:
        for attacker, defender, expected, description in test_cases:
                print(f'battle_outcome({attacker}, {defender})')
                assert battle_outcome(attacker, defender) == expected