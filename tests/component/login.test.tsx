// import { render, screen } from '@testing-library/react';
// import Login from '../../src/app/login/page';
// import theme from 'styles/theme';
// import { ThemeProvider } from 'styled-components';

// describe('Login', () => {
//   it('should render the title', () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <Login />
//       </ThemeProvider>
//     );
//     const title = screen.getByText('NextJS Boilerplate');
//     expect(title).toBeInTheDocument();
//     expect(title).toMatchSnapshot();
//   });

//   it('should render the subtitle', () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <Login />
//       </ThemeProvider>
//     );
//     const subtitle = screen.getByText('Made with', { exact: false });
//     expect(subtitle).toBeInTheDocument();
//     expect(subtitle).toMatchSnapshot();
//   });

//   it('should render the logo', () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <Login />
//       </ThemeProvider>
//     );
//     const logo = screen.getByAltText('Logo');
//     expect(logo).toBeInTheDocument();
//     expect(logo).toMatchSnapshot();
//   });
// });
