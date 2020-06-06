import React from 'react';
import { render } from '@testing-library/react';

import Lib278 from './lib278';

describe(' Lib278', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib278 />);
    expect(baseElement).toBeTruthy();
  });
});
