/// <reference types="cypress" />

import { answer } from './utils';
import 'cypress-cdp';

it('counts', () => {
	cy.visit('/');
	cy.contains('[data-cy=count]', '0');
	const incrementSelector = '[aria-label="Increase the counter by one"]';
	const decrementSelector = '[aria-label="Decrease the counter by one"]';
	cy.hasEventListeners(incrementSelector, { type: 'click' });
	// cy.wait(1000);
	cy.get(incrementSelector).click();
	cy.contains('[data-cy=count]', '1');
	cy.get(incrementSelector).click();
	cy.contains('[data-cy=count]', '2');
	cy.get(decrementSelector).click();
	cy.contains('[data-cy=count]', '1');
});
