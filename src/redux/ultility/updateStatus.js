
export default function updateStatus(currentStats, newStats) {
  const statsExchanger = {
    "all": {
      "all": 'all',
      "none": 'some',
      "some": 'some'
    },
    "none": {
      "all": 'some',
      "none": 'none',
      "some": 'some'
    },
    "some": {
      "all": 'some',
      "none": 'some',
      "some": 'some'
    },
  }
  if(newStats === true) newStats = 'all'
  if(newStats === false) newStats = 'none'
  
  if(currentStats !== undefined)
    return statsExchanger[currentStats][newStats]
  else 
    return newStats
}