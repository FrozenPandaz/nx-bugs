import React from 'react';
import { render } from '@testing-library/react';

import Lib587 from './lib587';

describe(' Lib587', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib587 />);
    expect(baseElement).toBeTruthy();
  });
});
