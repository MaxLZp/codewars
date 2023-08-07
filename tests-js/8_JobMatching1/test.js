var assert = require('assert');

describe('Kyu 8: Job Matching #1', function () {

  function match(candidate, job) {
    if (!candidate.minSalary || !job.maxSalary) {
      throw new Error('Error');
    }
    return candidate.minSalary*0.9 <= job.maxSalary;
  }

  it(`Testing for "apple ban"`, () => {
    let candidate1 = { minSalary: 120000 },
    job1 = { maxSalary: 130000 },
    job2 = { maxSalary: 80000 };

    assert.equal(match(candidate1, job1), true);
    assert.equal(match(candidate1, job2), false);
  });


});
