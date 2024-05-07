

const handleSubmit = async (e) => {
    e.preventDefault();
    // отправка данных на сервер и получение токенов
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });


    if (response.ok) {
      console.log('Данные успешно отправлены на сервер!');
      const data = await response.json();

      // сохранение токенов в localStorage
      localStorage.setItem('accessToken', data.access_token);

      // перенаправление на нужную страницу
      window.location.href = '/auto/reg/inf';
    return data;
    } else {
      console.error('Ошибка при отправке данных на сервер.');
  }
}

export default handleSubmit;