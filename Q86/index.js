function toCheck(angle){
    if( angle >= 0 && angle < 90){
        return "Acute angle"
    }else if (angle === 90) {
        return "right angle"
    }else if (angle >= 90 && angle < 180) {
        return "obtuse angle"       
    }else if(angle === 180){
        return "straight angle"
    }
}

console.log(toCheck(180))