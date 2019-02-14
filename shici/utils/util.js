const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-') ;
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const weekDays = current =>{
  const week = new Array();
  current.setDate((current.getDate() - current.getDay()+1));

  for(var i = 0;i<7;i++){
    week.push(
      new Date(current)
    );
    current.setDate(current.getDate() + 1);
  }
  return week
}

const weekNumber = d =>{
  d = new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));
  d.setUTCDate(d.getUTCDate()+4-(d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getFullYear(),0,1));
  var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return [d.getUTCFullYear(), weekNo];
}
const datediff = (first, second) => {
  return Math.abs(Math.round((second - first) / (1000 * 60 * 60 * 24)));
}

const getProgress = current => {
  var today = new Date(current.lYear, current.lMonth - 1, current.lDay)
  var firstDay = new Date(current.lYear, 0, 1)
  var endDay = new Date(current.lYear, 11, 31)

  return datediff(today, firstDay) / datediff(endDay, firstDay) * 100;
}

module.exports = {
  formatDate: formatTime,
  weekDays: weekDays,
  weekNumber: weekNumber,
  getProgress: getProgress
}


