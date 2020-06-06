import React from 'react';
import { render } from '@testing-library/react';

import Lib686 from './lib686';

describe(' Lib686', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib686 />);
    expect(baseElement).toBeTruthy();
  });
});
