'use strict';

const empoyees = [...document.querySelectorAll('li')];

const dataAtributToNumber = (string) => {
  const arr = string.split('');

  arr.shift();

  const strNormalized = arr.filter((el) => el !== ',').join('');

  return +strNormalized;
};

const sortList = (list) => {
  const parentElement = list[0].closest('ul');

  list
    .sort((value1, value2) => {
      return (
        dataAtributToNumber(value2.dataset.salary) -
        dataAtributToNumber(value1.dataset.salary)
      );
    })
    .forEach((employee) => parentElement.appendChild(employee));
};

const getEmployees = (list) => {
  return list.map((employee) => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: dataAtributToNumber(employee.dataset.salary),
      age: +employee.dataset.age,
    };
  });
};

sortList(empoyees);
getEmployees(empoyees);
