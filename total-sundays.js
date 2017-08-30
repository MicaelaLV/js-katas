function getTotalSundays (from, to) {
  var counter=0;
  
  if(to === undefined) to = from;
  
  for(var year = from; year <= to; year++){
  for(var month = 0; month < 12; month++) {
     var d = new Date(year, month, 1);
     if (d.getDay() === 0) counter ++; // it's Sunday
    }  
  }
  return counter;
}