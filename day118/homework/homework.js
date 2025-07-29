class Manager extends Employee {
  constructor(id, firstName, lastName, monthSalary, department) {
    super(id, firstName, lastName, monthSalary);
    this.department = department;
  }
  set changeDepartment([newDepartment, newSalary]) {
    if (typeof newDepartment === 'string' && newSalary > this.monthSalary) {
      this.department = newDepartment;
      this.monthSalary = newSalary;
    } else {
      throw new Error('New department must be a string and salary must be higher than current.');
    }
  }
  get yearSalary() {
    return super.yearSalary * 1.2;
  }
  info() {
    return `ID: ${this.id}, Name: ${this.fullName}, Department: ${this.department}, Monthly Salary: ${this.monthSalary}, Yearly Salary: ${this.yearSalary}`;
  }
}
