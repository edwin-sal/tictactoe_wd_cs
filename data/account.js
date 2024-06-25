class Account {
  userAccounts = [];

  constructor() {
    this.loadAccounts();
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

  signUp(accountDetails) {
    console.log(this.userAccounts);
    this.userAccounts.push({
      firstName: accountDetails.firstName,
      lastName: accountDetails.lastName,
      email: accountDetails.email,
      password: accountDetails.password,
      win: 0,
      lost: 0,
      tie: 0
    });

    console.log(this.userAccounts);
  }
}

export const account = new Account();