const xpaths = {
    LoginInput: `//input[@name='email']`,
    PasswordInput: `//input[@name='password']`,
    LoginButton: `//button[normalize-space()='Sign In']`,
    LoginPendoButton: `//p[@class='MuiTypography-root MuiTypography-body1 css-1p9zxns']`,

    SessionMenuDropdown: `//div[@class='MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-129nnic']`,
    SessionMenuLogoutLink: `//p[normalize-space()='Logout']`,

    NewPasswordInput: `//form[@id="loginForm"]/div/input[@id="password"]`,
    NewPasswordConfirmInput: `//form[@id="loginForm"]/div/input[@id="confirm_password"]`,
    ResetPasswordButton: `//form[@id="loginForm"]/button[.="Reset Password"]`,

    SectionLogin: `//section[@id="content"]//header/strong[.="Please, log in"]`,
    TermsAcceptedInput: `//input[@name='terms_accepted']`,
    SubmitButton: `//button[@type='submit']`,
    LightboxDiv: `//div[@id="lightbox"]`,

    VisibleState: `{state: "visible"}`,
}

module.exports = xpaths

