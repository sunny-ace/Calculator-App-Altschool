const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '0';
buttons.forEach(button => {
    button.addEventListener('click', () => handleInput(button.textContent));
});

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (/[0-9+\-*/.=]/.test(key)) {
        handleInput(key === '*' ? '×' : key === '/' ? '÷' : key);
    } else if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Escape') {
        handleInput('C');
    } else if (key === 'Backspace') {
        currentInput = currentInput === '0' || currentInput === 'Error' ? '0' :
            currentInput.length === 1 ? '0' : currentInput.slice(0, -1);
        display.textContent = currentInput;
    }
});

function handleInput(value) {
    if (value === 'C') {
        currentInput = '0';
    } else if (value === '=') {
        try {
            currentInput = eval(currentInput.replace('×', '*').replace('÷', '/'));
            if (!Number.isFinite(currentInput)) throw new Error('Invalid');
        } catch {
            currentInput = 'Error';
        }

     } else if (value === '⬅') {
            currentInput = currentInput === '0' || currentInput === 'Error' ? '0' :
            currentInput.length === 1 ? '0' : currentInput.slice(0, -1);
        }

     else {
        if (currentInput === '0' || currentInput === 'Error') {
            currentInput = value;
        } else {
            currentInput += value;
        }
    }
    display.textContent = currentInput;
}

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;

//         if (value === 'C') {
//             currentInput = '0';
//         } else if (value === '=') {
//             try {
//                 currentInput = eval(currentInput.replace('×', '*').replace('÷', '/'));
//                 if (!Number.isFinite(currentInput)) throw new Error('Invalid');
//             } catch {
//                 currentInput = 'Error';
//             }
//         } else {
//             if (currentInput === '0' || currentInput === 'Error') {
//                 currentInput = value;
//             } else {
//                 currentInput += value;
//             }
//         }

//         display.textContent = currentInput;
//     });
// });