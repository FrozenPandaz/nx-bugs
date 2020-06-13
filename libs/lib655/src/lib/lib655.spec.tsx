import React from 'react';
import { render } from '@testing-library/react';

import Lib655 from './lib655';

describe(' Lib655', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib655 />);
    expect(baseElement).toBeTruthy();
  });
});
