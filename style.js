
let time = 1000;

let objectProject = [];
let ids = 0;
let projects = document.querySelectorAll('.our-projects .project');
let dataSetDeadLine;
let dataSetStart;


projects.forEach(e => { 
    // children of our projects
    let dataWeWant = e.children[1].children;
    dataWeWant = [...dataWeWant];

    dataWeWant.forEach(e => {
        e.classList.contains('start-span') ? dataSetStart = e.dataset.start : dataSetDeadLine = e.dataset.deadline;
    });

    ids++;
    // object of our projects 
    objectProject = [...objectProject, {id:ids , startDateProject:dataSetStart , endDateProject:dataSetDeadLine}]
})

let listCircleProject = document.querySelectorAll('.project .circle');
listCircleProject = [...listCircleProject];

let contentProject = document.querySelectorAll('.project .content-project');
contentProject = [...contentProject];


let spanCompeleted = document.querySelectorAll('.project .content-project .precentage span');
spanCompeleted = [...spanCompeleted];


let timerDiv = document.querySelectorAll('.time');
timerDiv = [...timerDiv];

objectProject.map((e,i) => {

    let startDate = new Date(e.startDateProject).getTime();
    let endDate = new Date(e.endDateProject).getTime();
    console.log(endDate);
    countRemindTime(listCircleProject[i], startDate, endDate, contentProject[i],spanCompeleted[i],timerDiv[i]);
    console.log(e.startDateProject)
    console.log(e.endDateProject)
    getDate (timerDiv[i].children,endDate);

})


function countRemindTime(Project, startDate, endDate,contentProject,spanCompeleted,timerDiv) {

    console.log(endDate);
        let projectCountDown = setInterval(() => {
    let todayDate = new Date().getTime();

    // get the total time to count the precentage
            let totalDate = endDate - startDate;

    // get the finish time to count the precentage
    let compDate = todayDate - startDate;
    
            let CompletePrecentage = Math.floor((compDate / totalDate) * 100);
            console.log(CompletePrecentage);
    // circle presentage
    let progressValue =   CompletePrecentage;
    let progressEndValue = 100;
    progressValue++;
            Project.style.background = `
                conic-gradient(
                    #cf5e6e ${(progressValue * 360) / 100}deg ,
                    #5ec7ae  ${(progressValue * 360) / 100}deg )`;
            spanCompeleted.innerHTML =`${progressValue}%`;
            if (progressValue >= progressEndValue) {
                clearInterval(projectCountDown);
                contentProject.innerHTML = '';
                contentProject.classList.add('done');
                contentProject.style.backgroundImage = `url(images/im-1.png)`;
                timerDiv.classList.add('done');
                timerDiv.innerHTML = `Done`;
            }
            
}, time)
}

// Timer 
// handle p to show the date Remind
let spanDays     = document.querySelectorAll('.days');
let spanHours    = document.querySelectorAll('.hours');
let spanMinutes  = document.querySelectorAll('.minutes');
let spanSecounds = document.querySelectorAll('.secounds');


function printDaysHOurs(days) {
    timerDiv.map(e => { 
        
    })
}
printDaysHOurs()
// the end day of task 
function getDate(element ,endDate) {
    console.log(endDate);
    
    console.log(element);
    let dateInterval = setInterval(() => {

        // the date of now
        let dateNow = new Date().getTime();

        // Find the Date Difference Between Now And Countdown Date
        let dateDiff = endDate - dateNow;
        
        console.log(dateDiff);

        // Get Date Unites
        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

        let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60))

        let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));

        element = [...element]
        element.forEach(i => {
            if (i.classList.contains('days')) {
                i.innerHTML = days;
            } else if (i.classList.contains('hours')) {
                i.innerHTML = hours;
            } else if (i.classList.contains('minutes')) {
                i.innerHTML = minutes;
            } else if (i.classList.contains('secounds')) {
                i.innerHTML = seconds;
            }
        });
    }, 1000);
    setInterval(() => { 
          // the date of now
        let dateNow = new Date().getTime();

        // Find the Date Difference Between Now And Countdown Date
        let dateDiff = endDate - dateNow;
        if (dateDiff <= 0) { 
            clearInterval(dateInterval);
        }
    },1000)
}
