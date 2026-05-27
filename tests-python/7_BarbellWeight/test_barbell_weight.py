# def barbell_weight(barbell):
#     weights = {
#         'c': 2.5,
#         'R': 25,
#         'B': 20,
#         'Y': 15,
#         'G': 10,
#         'W': 5,
#         'r': 2.5,
#         'b': 2,
#         'y': 1.5,
#         'g': 1,
#         'w': 0.5,
#     }
#     result = 20
#     for c in barbell:
#         result += weights.get(c, 0)
    
#     return result

from functools import reduce

def barbell_weight(barbell):
    """ My 2 """
    weights = {
        'c': 2.5,
        'R': 25,
        'B': 20,
        'Y': 15,
        'G': 10,
        'W': 5,
        'r': 2.5,
        'b': 2,
        'y': 1.5,
        'g': 1,
        'w': 0.5,
    }
    return reduce(lambda carry, item: carry + weights.get(item, 0), barbell, 20)

  
def test_barbell_weight():
    # Feel free to add more barbells with their corresponding weights below
    barbells = {
        "---------c--------------------c---------": 25,
        "--------wc--------------------cw--------": 26,
        "-------bcr--------------------rcb-------": 34,
        "--------cW--------------------Wc--------": 35,
        "-------gcG--------------------Gcg-------": 47,
        "-------ycY--------------------Ycy-------": 58,
        "-----bcrBR--------------------RBrcb-----": 124,
        "-----cRRRR--------------------RRRRc-----": 225,
        "---gcBRRRR--------------------RRRRBcg---": 267
    }
    for barbell, weight in barbells.items():
        assert barbell_weight(barbell) == weight
