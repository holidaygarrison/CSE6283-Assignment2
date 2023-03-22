describe('Test BMI Calculator', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Test Lower Extremes', () => {
		cy.get('#Weight').type('50')
		cy.get('#Height').type('20')
		cy.contains('Submit').click()

		cy.contains('BMI:90.0')
	})

	it('Test Expected Weight', () => {
		cy.get('#Weight').type('150')
		cy.get('#Height').type('72')
		cy.contains('Submit').click()

		cy.contains('BMI:20.8')
	})

	it('Test Higher Extremes', () => {
		cy.get('#Weight').type('1000')
		cy.get('#Height').type('96')
		cy.contains('Submit').click()

		cy.contains('BMI:78.1')
	})
})
