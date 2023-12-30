const incomes = document.querySelectorAll(".income");
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const toggle = document.getElementById('button-theme');
const errorMessage = document.getElementById('error-message');

let amountBox = 1;
let isDarkTheme = false;

incomes.forEach((income) => {
     income.addEventListener('input', calculate);
});

toggle.addEventListener('click', () => {
     if (isDarkTheme) {
          //do light theme
          document.body.style.background = '';
          document.querySelector('.form').style.backgroundColor = 'rgb(254, 254, 254)';
          document.querySelector('.form').style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px';
          document.getElementsByTagName("h1")[0].style.color = 'black';
          toggle.style.backgroundColor = 'saddlebrown';
          toggle.style.color = 'whitesmoke'
          toggle.style.border = '1px solid saddlebrown';
          toggle.innerHTML = 'Toggle light mode';
          document.querySelectorAll('.tag-name').forEach((tag) => {
               tag.style.color = 'black';
          });
          document.querySelectorAll('.button-changeBox').forEach((button) => {
               button.style.backgroundColor = 'chocolate'
          });
          document.querySelectorAll('.button-changeBox').forEach((button) => {
               button.style.color = 'whitesmoke'
          });
          document.querySelectorAll('.button-changeBox').forEach((button) => {
               button.style.border = '1px solid chocolate'
          });
          document.querySelectorAll('.input').forEach((input) => {
               input.style.border = '1px solid rgb(31, 31, 31)'
          });
          document.querySelectorAll('.input').forEach((input) => {
               input.style.backgroundColor = 'white'
          });
          document.querySelectorAll('.input').forEach((input) => {
               input.style.color = 'black'
          });
          
          isDarkTheme = false;
     } else {
          //do dark theme
          document.body.style.background = 'linear-gradient(black 60%, darkblue)';
          document.querySelector('.form').style.backgroundColor = '#02000f7e';
          document.querySelector('.form').style.boxShadow = 'rgba(255, 255, 255, 0.2) 0px 7px 29px 0px';
          document.getElementsByTagName("h1")[0].style.color = 'aliceblue';
          toggle.style.backgroundColor = 'antiquewhite';
          toggle.style.color = 'chocolate'
          toggle.style.border = '1px solid goldenrod';
          toggle.innerHTML = 'Toggle dark mode';
          document.querySelectorAll('.tag-name').forEach((tag) => {
               tag.style.color = 'aliceblue';
          });
          document.querySelectorAll('.button-changeBox').forEach((button) => {
               button.style.backgroundColor = 'midnightblue'
          });
          document.querySelectorAll('.button-changeBox').forEach((button) => {
               button.style.color = 'whitesmoke'
          });
          document.querySelectorAll('.button-changeBox').forEach((button) => {
               button.style.border = '1px solid midnightblue'
          });
          document.querySelectorAll('.input').forEach((input) => {
               input.style.border = '2px solid goldenrod'
          });
          document.querySelectorAll('.input').forEach((input) => {
               input.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
          });
          document.querySelectorAll('.input').forEach((input) => {
               input.style.color = 'whitesmoke'
          });
          
          isDarkTheme = true;
     }
});

plus.addEventListener('click', () => {
     if (amountBox < 3) {
          amountBox++;
     }
     displayIncomeBox();
     calculate();
});

minus.addEventListener('click', () => {
     if (amountBox > 1) {
          amountBox--;
     }
     displayIncomeBox();
     calculate();
});

function displayIncomeBox() {
     if (amountBox >= 2) {
          document.getElementById('box2').style.display = 'block';
     }
     if (amountBox >= 3) {
          document.getElementById('box3').style.display = 'block';
     }
     if (amountBox <= 1) {
          document.getElementById('box2').style.display = 'none';
          incomes[1].value = 0;
     }
     if (amountBox <= 2) {
          document.getElementById('box3').style.display = 'none';
          incomes[2].value = 0;
     }
}

function calculate() {
     let sumIncome = 0;
     let sumTax = 0;
     let errorMessages = [];
     let tax;

     incomes.forEach((income, index) => {
          if (!isNaN(income.value) && Number(income.value) >= 0) {
               sumIncome += Number(income.value);
          } else if (Number(income.value) <= 0) {
               errorMessages.push(`the number of box${index+1} can not be negative numbers`);
          } else {
               errorMessages.push('the value is NaN');
          }
     });
     
     // check errors
     errorMessage.innerHTML = errorMessages.join('<br>');
     if (errorMessages.length > 0) {
          document.getElementById("allIncome").value = 0;
          document.getElementById("tax-rate").value = 0;
          document.getElementById("tax").value = 0;
          return;
     }

     if (sumIncome > 5000000) {
          tax = 35;
     } else if (sumIncome > 2000000) {
          tax = 30;
     } else if (sumIncome > 1000000) {
          tax = 25;
     } else if (sumIncome > 750000) {
          tax = 20;
     } else if (sumIncome > 500000) {
          tax = 15
     } else if (sumIncome > 300000) {
          tax = 10
     } else if (sumIncome > 150000) {
          tax = 5
     } else{
          tax = 0
     }
     
     sumTax = sumIncome * tax / 100
     
     document.getElementById("allIncome").value = sumIncome;
     document.getElementById("tax-rate").value = tax;
     document.getElementById("tax").value = sumTax;
}



