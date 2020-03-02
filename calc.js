const getSleepHours=day=>{
day=day.toLowerCase();
  
switch(day){
  case 'monday':
  return 7;
    break;
  case 'tuesday':
    return 7;
    break;
  case 'wednesday':
    return 7;
    break;
  case 'thursday':
    return 7;
    break;
  case 'friday':
    return 32;
    break;
  case 'saturday':
    return 7;
    break;
  case 'sunday':
    return 7;
    break;
}
};

// Here it`s a classic implement hours, from switch case.

/*const getActualSleepHours=()=>
getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');*/

//In this sequence we`ll implement more simple hours sleeping hours for all week

const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 2;


/*const getIdealSleepHours=()=>{
let idealHours=7;
return idealHours*7;
};*/

//Or we can type:
const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt=()=>{
  const actualSleepHours=getActualSleepHours();
  const idealSleepHours=getIdealSleepHours();
  if (actualSleepHours===idealSleepHours)
    console.log('Congrats! You slept very well!');
    else if(actualSleepHours>=idealSleepHours)
    console.log(`Try to sleep less. Life is not just made for it! Try to sleep ${actualSleepHours-idealSleepHours} less hours`);
  else if(actualSleepHours<=idealSleepHours)
    console.log('You are human. You need more sleep. Try to remedy that.' + `You need to sleep ${idealSleepHours - actualSleepHours} more hours`);
  
  
};
calculateSleepDebt();
