describe('Test Underweight', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Test Mid Point', () => {
		cy.window().then(win => win.CatBMI('15.0')).should('eq', 'Underweight')
	})

	it('Test Upper Boundary', () => {
		cy.window().then(win => win.CatBMI('18.5')).should('not.eq', 'Underweight')
	})

	it('Test Upper Off Boundary', () => {
		cy.window().then(win => win.CatBMI('18.4')).should('eq', 'Underweight')
	})
})

describe('Test Normal Weight', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Test Lower Boundary', () => {
		cy.window().then(win => win.CatBMI('18.5')).should('eq', 'Normal Weight')
	})

	it('Test Lower OFf Boundary', () => {
		cy.window().then(win => win.CatBMI('18.4')).should('not.eq', 'Normal Weight')
	})

	it('Test Mid Point', () => {
		cy.window().then(win => win.CatBMI('20.0')).should('eq', 'Normal Weight')
	})

	it('Test Upper Boundary', () => {
		cy.window().then(win => win.CatBMI('24.9')).should('eq', 'Normal Weight')
	})

	it('Test Upper Off Boundary', () => {
		cy.window().then(win => win.CatBMI('25.0')).should('not.eq', 'Normal Weight')
	})
})

describe('Test Overweight', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Test Lower Boundary', () => {
		cy.window().then(win => win.CatBMI('25.0')).should('eq', 'Overweight')
	})

	it('Test Lower Off Boundary', () => {
		cy.window().then(win => win.CatBMI('24.9')).should('not.eq', 'Overweight')
	})

	it('Test Mid Point', () => {
		cy.window().then(win => win.CatBMI('28.0')).should('eq', 'Overweight')
	})

	it('Test Upper Bound', () => {
		cy.window().then(win => win.CatBMI('29.9')).should('eq', 'Overweight')
	})

	it('Test Upper Off Bound', () => {
		cy.window().then(win => win.CatBMI('30.0')).should('not.eq', 'Overweight')
	})
})

describe('Test Obese', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Test Lower Boundary', () => {
		cy.window().then(win => win.CatBMI('30.0')).should('eq', 'Obese')
	})

	it('Test Lower Off Boundary', () => {
		cy.window().then(win => win.CatBMI('29.9')).should('not.eq', 'Obese')
	})

	it('Test Mid Point', () => {
		cy.window().then(win => win.CatBMI('35')).should('eq', 'Obese')
	})
})
