
const handleSubmit3 = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, city, study, phone, vK })
        });

        if (response.ok) {
            console.log('Данные успешно отправлены на сервер!');
            const data = await response.json();
  
            // сохранение токенов в localStorage
            localStorage.setItem('accessToken', data.access_token);

            // перенаправление на нужную страницу
            window.location.href = '/auto/my-page';
            return data;
        } else {
            console.error('Ошибка при отправке данных на сервер.');
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
};

export default handleSubmit3;
