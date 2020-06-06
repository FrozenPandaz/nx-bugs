import React from 'react';
import { render } from '@testing-library/react';

import Lib340 from './lib340';

describe(' Lib340', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib340 />);
    expect(baseElement).toBeTruthy();
  });
});
