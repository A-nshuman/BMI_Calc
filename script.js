document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.getElementById('calcBtn');
    const resultArea = document.getElementById('result');
    const bmiResult = document.getElementById('bmi');
    const statusResult = document.getElementById('status');
    const popup = document.getElementById('popup');

    calcBtn.addEventListener('click', () => {
        calcBtn.classList.add('active');
        setTimeout(() => {
            calcBtn.classList.remove('active');
        }, 500);

        resultArea.style.color = 'white';

        const heightInput = document.getElementById('height');
        const weightInput = document.getElementById('weight');
        
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        let category = '';
        let bgColor = '';

        if (isNaN(height) || isNaN(weight)) {
            popup.style.display = 'flex';
            popup.style.animation = 'popupAnim 2s ease-in-out forwards';
            popup.innerHTML = 'Please enter height and weight!';
            setTimeout(() => {
                popup.style.display = 'none';
            }, 2400);

            popup.addEventListener('animationend', () => {
                popup.style.animation = 'none';
            });

            category = '';
            bmi = '';
        }

        const bmi = weight / ((height / 100) ** 2);

        if (bmi < 18.5) {
            category = 'UNDERWEIGHT';
            bgColor = 'orange';
        } else if (bmi < 25) {
            category = 'Normal weight';
            bgColor = 'green';
        } else if (bmi < 30) {
            category = 'OVERWEIGHT';
            bgColor = 'orangered';
        } else if (bmi >= 30) {
            category = 'OBESE';
            bgColor = 'crimson';
        }

        bmiResult.innerHTML = bmi.toFixed(2);
        statusResult.innerHTML = category;
        resultArea.style.backgroundColor = bgColor;
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            calcBtn.click();
        }
    });
});