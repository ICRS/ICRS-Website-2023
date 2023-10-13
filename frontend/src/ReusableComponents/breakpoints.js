import { createTheme } from '@mui/material/styles';

// Create a Material-UI theme to access the breakpoints
const theme = createTheme();

// Breakpoints for Material-UI theme
const breakpoints = {
  sm: theme.breakpoints.values.sm,
  md: theme.breakpoints.values.md,
  lg: theme.breakpoints.values.lg,
  xl: theme.breakpoints.values.xl,
};

export default breakpoints;
