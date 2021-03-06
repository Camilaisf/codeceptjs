const { I } = inject();

module.exports = {

  buttons: {
    save: '~salvar'
  },

  fields: {
    code: {ios:'(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[1]', android: '~codigo'},
    name: {ios:'(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[2]', android: '~aluno'},
    search: {ios:'(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[3]',android: '~search'}
  },

  registerStudent(code, name) {
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.name, name)
    I.tap(this.buttons.save)
  },

  searchStudent(search,check) {
    I.fillField(this.fields.search, search)

    I.runOnAndroid(() => {
      I.seeElement('//android.view.ViewGroup[@content-desc="'+ check + '"]')
    })

    I.runOnIOS(() => {
      I.seeElement('(//XCUIElementTypeOther[@name="'+ check +'"])[2]')
    })

  },

  checkLoginSuccess() {
    I.waitForElement(this.buttons.save, 5 )
    I.seeElement(this.buttons.save)
  } 
}
