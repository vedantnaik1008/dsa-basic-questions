for(let year= 2014;year<=2050; year++){
    let day = new Date(year, 0, 1)
    if(day.getDay() === 0){
        console.log(`sunday on the first day of january:: ${day}`)
    }
}

