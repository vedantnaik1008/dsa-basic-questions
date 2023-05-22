function ToCheck(total_marks, final_exam) {
    if(final_exam){
        return total_marks >=90;
    }
    return (total_marks >= 89 && total_marks <= 100)
        
}

console.log(ToCheck("99", "true"))