import React from 'react';
import { render } from '@testing-library/react';

import Lib695 from './lib695';

describe(' Lib695', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib695 />);
    expect(baseElement).toBeTruthy();
  });
});
