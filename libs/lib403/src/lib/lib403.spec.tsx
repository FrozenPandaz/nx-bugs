import React from 'react';
import { render } from '@testing-library/react';

import Lib403 from './lib403';

describe(' Lib403', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib403 />);
    expect(baseElement).toBeTruthy();
  });
});
