

class Employee {
    empId;

    getDetails() {
        setInterval(() =>{
            console.log(this.empId)
        }, 2000)
    }
}