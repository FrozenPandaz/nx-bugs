import React from 'react';
import { render } from '@testing-library/react';

import Lib795 from './lib795';

describe(' Lib795', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib795 />);
    expect(baseElement).toBeTruthy();
  });
});
