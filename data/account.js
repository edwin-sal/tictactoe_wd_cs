class Account {
  userAccounts = [];

  constructor() {
    this.loadAccounts();
  }

  loadAccounts() {
    this.userAccounts = [
      {
        id: this.generateId(),
        firstName: 'edwin',
        lastName: 'sal',
        email: 'salsal@gmail.com',
        password: 'salsal',
        win: 0,
        lost: 0,
        tie: 0
      },
      {
        id: this.generateId(),
        firstName: 'robert',
        lastName: 'duran',
        email: 'nba@gmail.com',
        password: 'robertoxd',
        win: 0,
        lost: 0,
        tie: 0
      },
      {
        id: this.generateId(),
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
    this.userAccounts.push(accountDetails);
    console.log(this.userAccounts);
  }

  generateId() {
    const characters = {
      numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    };

    const ID_LENGTH = 21;
    let id = '';

    for(let i = 0; i < ID_LENGTH; i++) {
      // randomIndex is used to select the character to be added in the added will be number or lower, and upper case letters
      // randomCharIndex is used to select which character from the specific property will be added
      let randomIndex = Math.floor(Math.random() * 3);
      let randomCharIndex;

      if(randomIndex === 0) {
        randomCharIndex = Math.floor(Math.random() * 10);
        id += characters.numbers[randomCharIndex];

      } else if(randomIndex === 1) {
        randomCharIndex = Math.floor(Math.random() * 26);
        id += characters.lowerCase[randomCharIndex];

      } else if(randomIndex === 2) {
        randomCharIndex = Math.floor(Math.random() * 26);
        id += characters.upperCase[randomCharIndex];
      }
    }

    console.log(id);
    return id;
  }
}



export const account = new Account();
account.generateId();
console.log(account.userAccounts);