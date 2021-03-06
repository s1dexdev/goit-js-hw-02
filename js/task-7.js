const isLoginValid = function (login) {
    if (login.length >= 4 && login.length <= 16) {
        return true;
    }

    return false;
};

const isLoginUnique = function (allLogins, login) {
    if (allLogins.includes(login)) {
        return false;
    }

    return true;
};

const addLogin = function (allLogins, login) {
    if (isLoginValid(login)) {
        if (isLoginUnique(allLogins, login)) {
            logins.push(login);
            return 'Логин успешно добавлен!';
        } else {
            return 'Такой логин уже используется!';
        }
    } else {
        return 'Ошибка! Логин должен быть от 4 до 16 символов';
    }
}


const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

