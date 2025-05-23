var assert = require('assert');

describe('Kyu 7: Katastrophe!', function () {

  it("Solution 1 Tests", () => {

    /**
     * To calculate the **strength left after $N$ years** with **1% exponential decay per year**, we can use the standard exponential decay formula:
     * S(N) = S_0 \cdot e^{-kN}
     *
     * Where:
     *
     * - S(N) is the strength after N years,
     * - S_0 = 1000$ is the initial strength,
     * - k is the decay constant,
     * - N is the number of years,
     * - e is Euler's number (approximately 2.71828).
     *
     *
     * ### Step 1: Find the decay constant k
     *
     * Since the decay is 1% per year, we know that after 1 year, the strength becomes:
     *
     * S(1) = S_0 * 0.99 = 1000 * 0.99
     *
     * Using the exponential decay model:
     *
     * S(1) = S_0 * e^{-k}
     *
     * Set these equal and solve for k:
     *
     * S_0 * 0.99 = S_0 * e^{-k}
     * 0.99 = e^{-k}
     * ln(0.99) = -k
     * k = -ln(0.99)    =>    0.0100503
     *
     *
     * ### Final Formula
     *
     * S(N) = 1000 * e^{-0.0100503 * N}
     *
     * Alternatively, using the percentage decay base directly:
     *
     * S(N) = 1000 * (0.99)^N
     *
     * This second version is more intuitive when you're working with decay expressed in percentage terms.
     */
    function strongEnough(earthquake, age) {
      return Math.pow(0.99, age) * 1000 > earthquake.reduce((c,e) => c * e.reduce((ci, ei) => ci + ei, 0), 1)
        ? 'Safe!'
        : 'Needs Reinforcement!';
    }

    assert.equal(strongEnough([[2,3,1],[3,1,1],[1,1,2]], 2), "Safe!")
    assert.equal(strongEnough([[5,8,7],[3,3,1],[4,1,2]], 2), "Safe!")
    assert.equal(strongEnough([[5,8,7],[3,3,1],[4,1,2]], 3), "Needs Reinforcement!")

  });

});
