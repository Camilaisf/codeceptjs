Feature('students');

const { I, login_page, home_page} = inject()

Scenario('Add student with success', () => {
    login_page.doLogin('teste@teste.com','123456')
    home_page.registerStudent('9091', 'Fernanda Silva')
    home_page.searchStudent('Fernanda Silva', '9091')
});
