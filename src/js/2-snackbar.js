import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
let delayEl = 0;
let radioStatus = '';

formEl.addEventListener('input', () => {
    delayEl = parseInt(formEl.elements.delay.value);
});

formEl.addEventListener('change', () => {
    radioStatus = formEl.elements.state.value;
});

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const promiseMessage = value => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (value === 'fulfilled') {
                    iziToast.show({
                        title: '✅ OK',
                        messageColor: '#fff',
                        titleColor: '#fff',
                        backgroundColor: '#59a10d',
                        message: `Fulfilled promise in ${delayEl}ms`,
                    });
                    resolve(`Fulfilled promise in ${delayEl}ms`);
                } else {
                    iziToast.show({
                        title: '❌ ERROR',
                        messageColor: '#fff',
                        titleColor: '#fff',
                        backgroundColor: '#ef4040',
                        message: `Rejected promise in ${delayEl}ms`,
                    });
                    reject(`Rejected promise in ${delayEl}ms`);
                }
            }, delayEl);
        });
    };

    promiseMessage(radioStatus)
        .then(value => console.log(value))
        .catch(error => console.log(error));
});