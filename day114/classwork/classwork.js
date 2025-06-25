class PersianGuineaPig {
  constructor(color, size, birthYear, birthMonth, birthDay) {
    this.color = color;
    this.size = size;
    this.birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  }
  getAge() {
    const today = new Date();
    let years = today.getFullYear() - this.birthDate.getFullYear();
    let months = today.getMonth() - this.birthDate.getMonth();
    let days = today.getDate() - this.birthDate.getDate();
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    return {
      years,
      months,
      days,
    };
  }
}
const guineaPig = new PersianGuineaPig("white", "medium", 2022, 5, 12);
const age = guineaPig.getAge();

console.log(
  `ეს პერსუსული ზღვის გოჭი არის ${age.years} წლის, ${age.months} თვის და ${age.days} დღის.`
);
