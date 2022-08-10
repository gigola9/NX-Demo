import { getDiv } from '../support/app.po';

describe('cycle', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {

    getDiv().contains('ღილაკი');
    // getDiv().should((t) => expect(t.length).equal(1));
  });
});
