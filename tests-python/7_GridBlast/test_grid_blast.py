def fire(x, y):
    grid = ["top left",    "top middle",    "top right",
            "middle left", "center",        "middle right",
            "bottom left", "bottom middle", "bottom right"]
    return grid[y*3 + x]


def test_grid_blast():
    assert fire(0,0) == "top left"
    assert fire(1,1) == "center"
    assert fire(1,2) == "bottom middle"
