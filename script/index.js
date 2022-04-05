const a = document.getElementById("A");
const b = document.getElementById("B");
const c = document.getElementById("C");
const discriminant = document.getElementById('discriminant');
const x1 = document.getElementById("x1");
const x2 = document.getElementById("x2");
let result = 0;

const btnMain = document.getElementById("btnMain");

function getDiscriminant() {

    if ((isNaN(+a.value)) || (isNaN(+b.value)) || (isNaN(+c.value))) {
        alert ('Данные должны быть числами. Проверьте введенные данные');
        return
    };

    if (+a.value === 0) {
        a.value = 1;
    }
    if (+b.value === 0) {
        b.value = 1;
    }
    if (+c.value === 0) {
        c.value = 0;
    }

    result = b.value ** 2 - 4 * a.value * c.value;
    discriminant.innerHTML = result;

    if (result > 0) {
        let solOne = (-b.value + Math.sqrt(result) ) / (2 * a.value);
        let solTwo = (-b.value - Math.sqrt(result) ) / (2 * a.value);
        x1.innerHTML = solOne;
        x2.innerHTML = solTwo;
    } else if (result = 0) {
        let solOne = -b / (2 * a.value);
        let solTwo = solOne;
        x1.innerHTML = solOne;
        x2.innerHTML = solTwo;
    } else {
        alert ('Решение не найдено. Дискриминант не может быть отрицательным')
    }
};

btnMain.addEventListener("click", getDiscriminant);

window.addEventListener("keydown", (keyPressed) => {
    if (keyPressed.key === 'Enter') {
        getDiscriminant();
    }
});