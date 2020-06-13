import React from 'react';
import { render } from '@testing-library/react';

import Lib663 from './lib663';

describe(' Lib663', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib663 />);
    expect(baseElement).toBeTruthy();
  });
});
