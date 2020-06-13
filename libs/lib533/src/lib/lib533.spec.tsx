import React from 'react';
import { render } from '@testing-library/react';

import Lib533 from './lib533';

describe(' Lib533', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib533 />);
    expect(baseElement).toBeTruthy();
  });
});
