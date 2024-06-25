import { account } from "../data/account.js";

renderSignUpPage();
signUpButtonEventListener();

function renderSignUpPage() {
  const signUpPageHTML = 
  `
    <header>
      <a href="index.html">!TicTacToe</a>
    </header>
    <main>
      <div id="sign-up">
        <h1 id="main-heading">Sign up with a new Account</h1>
        <form action="">
          <div class="name-input">
            <input type="text" id="first-name" placeholder="Enter your first name" class="input-field js-first-name-input">
            <input type="text" id="last-name" placeholder="Enter your last name" class="input-field js-last-name-input">
          </div>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            class="input-field js-email-input"
          />
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            class="input-field js-password-input"
          />
          <button type="button" class="js-signup-button">Sign up</button>
        </form>
        <footer>
          <p>
            Already have an account?<strong><a href="./login.html" id="myLink">Login</a></strong>
          </p>
        </footer>
      </div>
    </main>
  `;

  document.body.innerHTML = signUpPageHTML;
}

function signUpButtonEventListener() {
  const signUpElement = document.querySelector('.js-signup-button');
  const firstNameElement = document.querySelector('.js-first-name-input');
  const lastNameElement = document.querySelector('.js-last-name-input');
  const emailElement = document.querySelector('.js-email-input');
  const passwordElement = document.querySelector('.js-password-input');

  signUpElement.addEventListener('click', () => {
    console.log(`fName: ${firstNameElement.value} \nlName: ${lastNameElement.value} \nemail: ${emailElement.value} \npassword: ${passwordElement.value}`);

    // Insert account details into the userAccounts array
    const accountDetails = {
      firstName: firstNameElement.value,
      lastName: lastNameElement.value,
      email: emailElement.value,
      password: passwordElement.value
    };

    account.signUp(accountDetails);

    // Clear input fields
    firstNameElement.value = '';
    lastNameElement.value = '';
    emailElement.value = '';
    passwordElement.value = '';
  });
}