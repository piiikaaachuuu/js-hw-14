//* Створіть клас "Клієнт" з властивостями "ім'я", "прізвище", "баланс" та методом "повна назва", який повертає повне ім'я клієнта (ім'я та прізвище). Також, створіть геттер та сеттер для властивості "баланс", який забезпечує можливість читання та зміни значення балансу.

class Client {
  constructor(name, surname, balance) {
    this.name = name;
    this.surname = surname;
    this._balance = balance;
  }
  fullName() {
    return this.name + " " + this.surname;
  }
  get balance() {
    return this._balance;
  }
  set balance(newBalance) {
    this._balance = newBalance;
  }
}

const client1 = new Client("John", "Doe", 1000);

console.log(client1.fullName()); // виведе "John Doe"
console.log(client1.balance); // виведе 1000
client1.balance = 500;
console.log(client1.balance); // виведе 500
