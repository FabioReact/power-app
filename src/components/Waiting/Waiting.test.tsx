import { render, screen } from '@testing-library/react';
import Waiting from './Waiting';
import '@testing-library/jest-dom';

describe('Waiting Component', () => {
  //   it('should render a title with Waiting content', () => {
  //     render(<Waiting />);
  //     const title = screen.getByRole('heading', { name: 'Waiting', level: 1 });
  //     expect(title).toBeInTheDocument();
  //   });

  it('should render "Loading..." if loading state is true', () => {
    render(
      <Waiting loading={true}>
        <h1>Exemple</h1>
      </Waiting>,
    );
    const loader = screen.getByRole('status');
    const children = screen.queryByRole('heading', { name: /exemple/i, level: 1 });
    expect(loader).toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });

  it('should render child component if loading state is false', () => {
    render(
      <Waiting loading={false}>
        <h1>Exemple</h1>
      </Waiting>,
    );
    const children = screen.getByRole('heading', { name: /exemple/i, level: 1 });
    const loader = screen.queryByRole('status');
    expect(children).toBeInTheDocument();
    expect(loader).not.toBeInTheDocument();
  });
});
