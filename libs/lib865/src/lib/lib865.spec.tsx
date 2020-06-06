import React from 'react';
import { render } from '@testing-library/react';

import Lib865 from './lib865';

describe(' Lib865', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib865 />);
    expect(baseElement).toBeTruthy();
  });
});
