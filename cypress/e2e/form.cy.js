describe('Test BMI Calculator', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Test Lower Extremes', () => {
		cy.get('#Weight').type('10')
		cy.get('#Height').type('20')
		cy.contains('Submit').click()

		cy.contains('BMI:18.0')
		cy.contains('Underweight')
	})

	it('Test Expected', () => {
		cy.get('#Weight').type('150')
		cy.get('#Height').type('72')
		cy.contains('Submit').click()

		cy.contains('BMI:20.8')
		cy.contains('Normal Weight')
	})

	it('Test High Extremes', () => {
		cy.get('#Weight').type('200')
		cy.get('#Height').type('72')
		cy.contains('Submit').click()

		cy.contains('BMI:27.8')
		cy.contains('Overweight')
	})

	it('Test Higher Extremes', () => {
		cy.get('#Weight').type('1000')
		cy.get('#Height').type('96')
		cy.contains('Submit').click()

		cy.contains('BMI:78.1')
		cy.contains('Obese')
	})
})
