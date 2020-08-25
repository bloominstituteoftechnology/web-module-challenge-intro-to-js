var studentGrades
function letterGrade(studentGrades){
    for(var  i=0; i< studentGrades.length; i++);
    if (studentGrades[i]>= 90){
        return 'A';
    }if (studentGrades[i]>= 80){
        return 'B';
    }if(studentGrades[i]>= 70){
        return 'C';
    }if(studentGrades[i]>=60){
        return 'D';
    }if(studentGrades[i]>=50){
        return 'F'
    }
  }
}
console.log(studentGrades);
