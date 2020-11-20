function Student(idNumber, First, Last) {
    this.idNumber = idNumber;
    this.First = First;
    this.Last = Last;
    this.fullname = function() {
        console.log(this.First+ " "+this.Last)
    }  
}
const S1 = new Student(1904, 'Brian','Ngeywo')
S1.fullname()