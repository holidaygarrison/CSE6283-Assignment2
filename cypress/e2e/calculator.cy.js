describe('Test BMI Calculator', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Test Lower Extremes', () => {
		cy.window().then(win => win.CalcBMI('50.0', '20.0')).should('eq', '90.0')
	})

	it('Test Expected', () => {
		cy.window().then(win => win.CalcBMI('150', '72')).should('eq', '20.8')
	})

	it('Test Higher Extremes', () => {
		cy.window().then(win => win.CalcBMI('1000', '96')).should('eq', '78.1')
	})
})
