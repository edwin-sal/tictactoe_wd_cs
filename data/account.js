class Account {
  userAccounts = [];

  constructor() {
    this.loadAccounts();
    this.loginButtonEventListener();
  }

  loadAccounts() {
    this.userAccounts = [
      {
        firstName: 'edwin',
        lastName: 'sal',
        email: 'salsal@gmail.com',
        password: 'salsal',
        win: 0,
        lost: 0,
        tie: 0
      },
      {
        firstName: 'robert',
        lastName: 'duran',
        email: 'nba@gmail.com',
        password: 'robertoxd',
        win: 0,
        lost: 0,
        tie: 0
      },
      {
        firstName: 'jinGi',
        lastName: 'kulafi',
        email: 'biryani@gmail.com',
        password: 'ilove123',
        win: 0,
        lost: 0,
        tie: 0
      }
    ];
  }

  login(email, password) {
    this.userAccounts.forEach((account) => {
      if(email === account.email && password === account.password) {
        console.log('Logged in succesfully')

      } else {
        console.log(`User email: ${email} is not matched with ${account.email} \nUser password ${password} is not matched with ${account.password}`);
      }
    });
  }

  loginButtonEventListener() {
    const loginButtonElement = document.querySelector('.js-login-button');
    const emailInputElement = document.querySelector('.js-email-input');
    const passwordInputElement = document.querySelector('.js-password-input');

    loginButtonElement.addEventListener('click', () => {
      const email = emailInputElement.value;
      const password = passwordInputElement.value;

      this.login(email, password);
    });

  }
}

const account = new Account();