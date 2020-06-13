import React from 'react';
import { render } from '@testing-library/react';

import Lib475 from './lib475';

describe(' Lib475', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib475 />);
    expect(baseElement).toBeTruthy();
  });
});
