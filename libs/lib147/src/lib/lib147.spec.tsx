import React from 'react';
import { render } from '@testing-library/react';

import Lib147 from './lib147';

describe(' Lib147', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib147 />);
    expect(baseElement).toBeTruthy();
  });
});
