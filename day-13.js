// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript

function match(candidate, job) {
  if(!candidate.minSalary || !job.maxSalary)
    throw "new Error!!";
  return (candidate.minSalary * 0.9) <= job.maxSalary;
}

// https://www.codewars.com/kata/56c2578be8b139bd5c001bd8

function match(job, candidates) {
  let matching = [];
  
  candidates.forEach(item => {
      const equity = item.desiresEquity == false || job.equityMax > 0;
      let location = false;
    
      job.locations.forEach(loc => {
        if(loc == item.currentLocation || item.desiredLocations.includes(loc)) {
          location = true;
        }
      })
      if(equity && location) matching.push(item);
    })
  return matching;
  }
