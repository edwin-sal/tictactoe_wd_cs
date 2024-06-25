import { account } from "../data/account.js";

renderLoginPage();
loginButtonEventListener();

function renderLoginPage() {
  const loginPageHTML =
  `
    <header>
      <a href="index.html">!TicTacToe</a>
    </header>
    <main>
      <div id="login">
        <h1 id="main-heading">Login with your Account</h1>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          class="input-field js-email-input"
          autocomplete="current-email"
        />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          class="input-field js-password-input"
          autocomplete="current-password"
        />
        <button class="js-login-button">Login</button>
        <footer>
          <p>
            Not a member yet?
            <strong><a href="./signup.html" id="myLink">Sign up</a></strong>
          </p>
        </footer>
      </div>
    </main>
  `;

  document.body.innerHTML = loginPageHTML;
}

function loginButtonEventListener() {
  const loginButtonElement = document.querySelector('.js-login-button');
  const emailInputElement = document.querySelector('.js-email-input');
  const passwordInputElement = document.querySelector('.js-password-input');

  loginButtonElement.addEventListener('click', () => {
    const email = emailInputElement.value;
    const password = passwordInputElement.value;

    account.login(email, password);

    console.log('login clicked');
  });
}