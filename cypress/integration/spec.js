/// <reference types="cypress" />

import { answer } from './utils';
import 'cypress-cdp';

it('counts', () => {
	cy.visit('/');
	cy.contains('[data-cy=count]', '0');
	cy.hasEventListeners('#add1', { type: 'click' });
	// cy.wait(1000);
	cy.get('[aria-label="Increase the counter by one"]').click();
	cy.contains('[data-cy=count]', '1');
	cy.get('[aria-label="Increase the counter by one"]').click();
	cy.contains('[data-cy=count]', '2');
	cy.get('[aria-label="Decrease the counter by one"]').click();
	cy.contains('[data-cy=count]', '1');
});
