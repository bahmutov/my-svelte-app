/// <reference types="cypress" />

import { answer } from './utils';

it('counts', () => {
	cy.visit('/');
	cy.contains('[data-cy=count]', '0');
	cy.get('[aria-label="Increase the counter by one"]').click();
	cy.contains('[data-cy=count]', '1');
	cy.get('[aria-label="Increase the counter by one"]').click();
	cy.contains('[data-cy=count]', '2');
	cy.get('[aria-label="Decrease the counter by one"]').click();
	cy.contains('[data-cy=count]', '1');
});
