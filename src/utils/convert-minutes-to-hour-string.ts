export function convertMinutesToHourString(minutesAmount: string){
    var minutesAmount1 = parseInt(minutesAmount);
    const hours = Math.floor(minutesAmount1 / 60);

    const minutes = minutesAmount1 % 60;

    return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`;
  }