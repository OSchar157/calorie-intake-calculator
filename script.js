const thisManyCalsEl = document.getElementById('this-many-calories');
const thisManyCalsPara = document.querySelector('.how-much');
const radioBtns = document.querySelectorAll('input[type="radio"]');

const ageEl = document.getElementById('age');
const weightEl = document.getElementById('weight');
const feetEl = document.getElementById('feet');
const inchesEl = document.getElementById('inches');

const calculateBtn = document.querySelector('.calculate-button');
const resetBtn = document.querySelector('.reset-button');


const activityLevels = [1.2, 1.375, 1.55, 1.725, 1.9];


function calcCaloricIntake(sex, weight, height, age, activityLevel) {

    let bmr =
        sex === 'male' ?
            66.47 + 13.75 * weight + 5.003 * height - 6.755 * age :
            655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;

    return bmr * activityLevels[activityLevel];
};

const calcHeight = (feet, inch) => (feet * 12 + inch) * 2.54;


calculateBtn.addEventListener('click', () => {

    const age = Number(ageEl.value);
    const sex = document.querySelector('input[name="sex"]:checked').value;
    const height = calcHeight(Number(feetEl.value), Number(inchesEl.value));
    const weight = Number(weightEl.value) / 2.205;
    const activityLevel = document.querySelector('input[name="activity-level"]:checked').value;

    const caloricIntake = Math.trunc(calcCaloricIntake(sex, weight, height, age, activityLevel));

    thisManyCalsEl.textContent = caloricIntake;
    thisManyCalsPara.classList.remove('hidden');
});

resetBtn.addEventListener('click', () => {

    for (const btn of radioBtns) btn.checked = false;
    ageEl.value = '';
    weightEl.value = '';
    feetEl.selectedIndex = 0;
    inchesEl.selectedIndex = 0;
    thisManyCalsPara.classList.add('hidden');
});