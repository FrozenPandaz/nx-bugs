import React from 'react';
import { render } from '@testing-library/react';

import Lib641 from './lib641';

describe(' Lib641', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib641 />);
    expect(baseElement).toBeTruthy();
  });
});
