
class CalendarService {
  constructor(){
  }

  getDate() {
    let date = new Date();
    const month = date.toLocaleString('en-us', { month: 'long' });
    return date.getDate() + month + ' ' +  date.getFullYear();
  }
}

module.exports = CalendarService;
