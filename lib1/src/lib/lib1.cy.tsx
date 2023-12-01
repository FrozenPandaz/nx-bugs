import * as React from 'react';
import Lib1, { Lib1Props } from './lib1';

describe(Lib1.name, () => {
  let props: Lib1Props;

  beforeEach(() => {
    props = {};
  });

  it('renders', () => {
    cy.mount(<Lib1 {...props} />);
  });
});
