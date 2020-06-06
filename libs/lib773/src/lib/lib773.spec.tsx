import React from 'react';
import { render } from '@testing-library/react';

import Lib773 from './lib773';

describe(' Lib773', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib773 />);
    expect(baseElement).toBeTruthy();
  });
});
