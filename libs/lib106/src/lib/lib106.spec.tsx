import React from 'react';
import { render } from '@testing-library/react';

import Lib106 from './lib106';

describe(' Lib106', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib106 />);
    expect(baseElement).toBeTruthy();
  });
});
