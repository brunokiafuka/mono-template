import { NAV_ROUTES } from "./routesNames";

/**
 * Holds types for screens belonging to tab navigator
 * Stacks in this case
 */
export type TabParamList = {
  [NAV_ROUTES.HomeTab]: undefined;
  [NAV_ROUTES.NewBookingTab]: undefined;
  [NAV_ROUTES.SettingsTab]: undefined;
};

/**
 * Holds types for screens belonging to Home stack
 */
export type HomeStackParamList = {
  [NAV_ROUTES.HomeScreen]: undefined;
};

export type EntryStacksParamList = {
  [NAV_ROUTES.Tabs]: undefined;
};
