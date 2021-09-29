const getSleepHours = day => {
  switch (day) {
    case 'monday' :
    return 8
    break
    case 'tuesday' :
    return 7
    break
    case 'wednesday' :
    return 8
    break
    case 'thursday':
    return 5
    break
    case 'friday':
    return 6
    break
    case 'saturday':
    return 8
    break
    case 'sunday':
    return 8
    break
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


//console.log(getSleepHours('friday'))
//console.log(getActualSleepHours())

/* contoh 1
const getIdealSleepHours = () => {
  idealHours = 8
  return idealHours * 7
}
*/

// contoh 2
const getIdealSleepHours = (hours) => {
  return hours * 7
}
console.log(getIdealSleepHours(8))

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours(8)
  const selisihSleepHours = idealSleepHours - actualSleepHours
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You get more sleep than needed')
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You get ${selisihSleepHours} hours less than ideal sleep than you needed this week. Get some rest`)
  }
}

calculateSleepDebt()
