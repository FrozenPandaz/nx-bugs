import React from 'react';
import { render } from '@testing-library/react';

import Lib496 from './lib496';

describe(' Lib496', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib496 />);
    expect(baseElement).toBeTruthy();
  });
});
