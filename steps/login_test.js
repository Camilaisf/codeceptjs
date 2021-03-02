Feature('login');

const { I, login_page, home_page} = inject()

BeforeSuite (() =>
{
    console.log('')
})

Before (() => {
    console.log('')
})

AfterSuite (() => {
    console.log('')
})

After (() => {
    console.log('')
})

Scenario('Login with success', () => {

    login_page.doLogin('teste@teste.com','123456')
    home_page.checkLoginSuccess()

});

Scenario('Login with error', () => {

    login_page.doLogin('','')
    login_page.checkLoginError()
});

