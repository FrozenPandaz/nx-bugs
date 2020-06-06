import React from 'react';
import { render } from '@testing-library/react';

import Lib225 from './lib225';

describe(' Lib225', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib225 />);
    expect(baseElement).toBeTruthy();
  });
});
