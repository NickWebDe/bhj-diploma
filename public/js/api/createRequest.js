const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    if (options.method === 'GET') {
        xhr.open('GET', `${options.url}`);
        xhr.send();
        xhr.onreadystatechange = () => {
            if(xhr.readyState === xhr.DONE && xhr.status === 200) {
                options.callback(null, xhr.response)
            }
            console.log('Сработала ошибка')
            options.callback(xhr.status)
        }
    } else if (options.method === 'POST') {
        const dataForm = new FormData();
        dataForm.append('mail', options.data.mail);
        dataForm.append('password', options.data.password);
        xhr.responseType = 'json';
        xhr.open('POST', `${options.url}`);
        xhr.send(dataForm);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                const err = null;
                options.callback(err, xhr.response);
            } else if (xhr.status > 400) {
                options.callback(` Ошибка ${xhr.status}`)
            }
        }
    }
};
