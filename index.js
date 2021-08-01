
//Плагин это класс CountdownTimer, экземпляр которого создает новый таймер
//с настройками.

//new CountdownTimer({
 //   selector: '#timer-1',
  //  targetDate: new Date('Aug 31, 2021'),
//});


const refs = {

    clockface: document.querySelector('.js-clockface'),

};

const timer = {

    intervalId: null,
    
   
    
    start() {
        const targetDate = new Date('Aug 31, 2021');
        this.isActive = true; 
        this.intervalId = setInterval(() => {
            const currentDate = Date.now();
            const deltaTime = targetDate - currentDate;
            const date = getDateComponents(deltaTime);
        
            updateClockFace(date);
       
       
            
        }, 1000);
    },
    stop() {
       clearInterval(this.intervalId);
        
    }, 
};

timer.start();


function pad (value) {
    return String(value).padStart(2, '0');
};

function getDateComponents(time) {
const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
}

function updateClockFace({ days, hours, mins, secs }) {
    refs.clockface.textContent = `${days} days : ${hours} hours : ${mins} mins : ${secs} secs `
}