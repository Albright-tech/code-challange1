let marks =prompt('Enter student marks :')
let grade =67

validateMarks(marks)
if (marks > 79){
    grade + 'A'
}else if(marks >= 60 && marks <= 79){
    grade = 'B'
}else if(marks > 49 && marks <=59){
    grade = 'C'
}else if(marks >=40 && marks <= 59){
    grade = 'D'
}else{
    grade = 'E'
}
console.log(`Grade is ${grade}`);
function validateMarks(studentMarks) {
    if (studentMarks.length === 0 || Number.isNaN(Number(studentMarks)) || studentMarks < 0 || studentMarks > 100) {
        if (confirm('Invalid input. Enter valid student marks (between 0-100). Try again?')) {
            marks = prompt('Enter valid student marks (between 0-100) :')
            validateMarks(marks)
        }
    }else{
        marks = parseInt(studentMarks, 10)
    }
}



