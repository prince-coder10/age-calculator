let form = document.getElementById("form");
let dayInput = document.getElementById("day-input");
let monthInput = document.getElementById("month-input");
let yearInput = document.getElementById("year-input");
let dayLabel = document.getElementById("day-label");
let monthLabel = document.getElementById("month-label");
let yearLabel = document.getElementById("year-label");
let submit = document.getElementById("button");
let yearDisplay = document.getElementById("year-display");
let monthDisplay = document.getElementById("month-display");
let dayDisplay = document.getElementById("day-display");

let dayError = document.getElementById("day-error");
let monthError = document.getElementById("month-error");
let yearError = document.getElementById("year-error");

let formError = document.getElementById("form-error");

// let pDate = new Date();

formIsValid = false;
yearIsValid = false;
monthIsValid = false;
dayIsValid = false;

const presentYear = 2023;

let months = [
  null,
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

months[1] = 01;
months[2] = 02;
months[3] = 03;
months[4] = 04;
months[5] = 05;
months[6] = 06;
months[7] = 07;
months[8] = 08;
months[9] = 09;
months[10] = 10;
months[11] = 11;
months[12] = 12;

monthInput.addEventListener("input", () => {
  months.forEach((month) => {
    // console.log(month);
    if (monthInput.value.match(month)) {
      //   monthDisplay.innerHTML = 12 - monthInput.value;
      monthError.innerHTML = "";
      monthLabel.style.color = "hsl(0, 1%, 44%)";
      monthInput.style.border = " 1px solid hsl(0, 0%, 86%)";
      monthIsValid = true;
      if (monthIsValid == true && yearIsValid == true && dayIsValid == true) {
        formIsValid = true;
      }
    } else if (monthInput.value > 12) {
      monthError.innerHTML = "Must be a valid month";
      monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
      monthLabel.style.color = "red";
    } else if (monthInput.value === "") {
      monthError.innerHTML = "This field is required";
      monthLabel.style.color = "red";
      monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    } else if (monthInput.value <= 0) {
      monthError.innerHTML = "Must be a valid month";
      monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
      monthLabel.style.color = "red";
      formIsValid = false;
      monthIsValid = false;
    }
  });
});

dayInput.addEventListener("input", () => {
  //  else
  if (dayInput.value === "") {
    dayError.innerHTML = "This field is required";
    dayLabel.style.color = "red";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    formIsValid = false;
  } else if (dayInput.value > 31) {
    dayError.innerHTML = "Must be a valid day";
    dayLabel.style.color = "red";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    formIsValid = false;
  } else if (
    monthInput.value == months[4] ||
    monthInput.value == months[6] ||
    monthInput.value == months[9] ||
    monthInput.value == months[11]
  ) {
    dayInput.value <= 30;
    dayError.innerHTML = "";
    if (dayInput.value > 30) {
      formError.innerHTML = "Must be a valid date";
      dayLabel.style.color = "red";
      monthLabel.style.color = "red";
      yearLabel.style.color = "red";
      dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
      monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
      yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
      formIsValid = false;
    } else {
      formError.innerHTML = "";
      dayInput.style.border = " 1px solid hsl(0, 0%, 86%)";
      monthInput.style.border = " 1px solid hsl(0, 0%, 86%)";
      yearInput.style.border = " 1px solid hsl(0, 0%, 86%)";
      dayLabel.style.color = "hsl(0, 1%, 44%)";
      monthLabel.style.color = "hsl(0, 1%, 44%)";
      yearLabel.style.color = "hsl(0, 1%, 44%)";
      dayIsValid = true;
      if (monthIsValid == true && yearIsValid == true && dayIsValid == true) {
        formIsValid = true;
      }
    }
  } else if (monthInput.value == months[2]) {
    dayInput.value <= 28;
    if (dayInput.value > 28) {
      formError.innerHTML = "Must be a valid date";
      dayLabel.style.color = "red";
      monthLabel.style.color = "red";
      yearLabel.style.color = "red";
      dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
      monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
      yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
      formIsValid = false;
    } else {
      formError.innerHTML = "";
      dayInput.style.border = " 1px solid hsl(0, 0%, 86%)";
      monthInput.style.border = " 1px solid hsl(0, 0%, 86%)";
      yearInput.style.border = " 1px solid hsl(0, 0%, 86%)";
      dayLabel.style.color = "hsl(0, 1%, 44%)";
      monthLabel.style.color = "hsl(0, 1%, 44%)";
      yearLabel.style.color = "hsl(0, 1%, 44%)";
      dayIsValid = true;
      if (monthIsValid == true && yearIsValid == true && dayIsValid == true) {
        formIsValid = true;
      }
    }
  } else if (dayInput.value <= 0) {
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    dayError.innerHTML = "must be a valid date";
    dayLabel.style.color = "red";
    formIsValid = false;
    dayIsValid = false;
  } else {
    dayError.innerHTML = "";
    dayInput.style.border = " 1px solid hsl(0, 0%, 86%)";
    dayLabel.style.color = "hsl(0, 1%, 44%)";
    dayIsValid = true;
    if (monthIsValid == true && yearIsValid == true && dayIsValid == true) {
      formIsValid = true;
    }
  }
  // validateMonth();
  // validateMth30();
  // validateFeb();
});

yearInput.addEventListener("input", () => {
  if (yearInput.value > presentYear) {
    yearError.innerHTML = "Must be  in the past";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearLabel.style.color = "red";
  } else if (yearInput.value === "") {
    yearError.innerHTML = "This feild is required";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearLabel.style.color = "red";
  } else if (yearInput.value <= 0) {
    yearError.innerHTML = "Must be a valid year";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearLabel.style.color = "red";
    formIsValid = false;
  } else {
    yearError.innerHTML = "";
    yearInput.style.border = " 1px solid hsl(0, 0%, 86%)";
    yearLabel.style.color = "hsl(0, 1%, 44%)";
    yearIsValid = true;
    if (monthIsValid == true && yearIsValid == true && dayIsValid == true) {
      formIsValid = true;
    }

    // yearDisplay.innerHTML = presentYear - yearInput.value;
  }
});

// animation
// const numberEl = document.getElementById('number');

// let counter = 0;
//

window.onload = () => {
  // let validateMonth = () => {
  //   if (
  //     monthInput.value == months[1] ||
  //     monthInput.value == months[3] ||
  //     monthInput.value == months[5] ||
  //     monthInput.value == months[7] ||
  //     monthInput.value == months[8] ||
  //     monthInput.value == months[10] ||
  //     monthInput.value == months[12]
  //   ) {
  //     dayInput.value <= 31;
  //     if (dayInput.value > 31) {
  //       formError.innerHTML = "Must be a valid date";
  //       dayLabel.style.color = "red";
  //       dayInput.style.border = "1px solid red";
  //     }
  //   } else {
  //     dayError.innerHTML = "";
  //     dayLabel.style.color = "hsl(0, 1%, 44%)";
  //     dayInput.style.border = " 1px solid hsl(0, 1%, 44%)";
  //   }
  // };
  // let validateMth30 = () => {
  //   } else {
  //     formError.innerHTML = "";
  //     dayLabel.style.color = "hsl(0, 1%, 44%)";
  //   }
  // };
  // let validateFeb = () => {
  //else {
  //     formError.innerHTML = "";
  //     dayLabel.style.color = "hsl(0, 1%, 44%)";
  //   }
  // };
  // validateMth30();
  // validateFeb();
};

submit.addEventListener("click", (e) => {
  if (formIsValid == true) {
    e.preventDefault();
    var birthdate = new Date(
      yearInput.value,
      monthInput.value - 1,
      dayInput.value
    );

    var today = new Date();

    var difference = today.getTime() - birthdate.getTime();

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));

    var years = Math.floor(days / 365);

    var remDays = days % 365;

    var months = Math.floor(remDays / 30);

    var days = remDays % 30;

    if (days > 0) {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        dayDisplay.innerText = counter.toString();
        if (counter === days) {
          clearInterval(interval);
        }
      }, 100);
    } else {
      dayDisplay.innerHTML = days;
    }

    if (years > 0) {
      let yearCounter = 0;
      const Yinterval = setInterval(() => {
        yearCounter++;
        yearDisplay.innerText = yearCounter.toString();
        if (yearCounter === years) {
          clearInterval(Yinterval);
        }
      }, 100);
    } else {
      yearDisplay.innerHTML = years;
    }

    if (months > 0) {
      let monthCounter = 0;
      const Minterval = setInterval(() => {
        monthCounter++;
        monthDisplay.innerText = monthCounter.toString();
        if (monthCounter === months) {
          clearInterval(Minterval);
        }
      }, 100);
    } else {
      monthDisplay.innerHTML = months;
    }
  } else {
    e.preventDefault();
  }
});
