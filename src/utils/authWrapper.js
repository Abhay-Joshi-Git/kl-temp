import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

export const userIsAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state => state.authentication.isAuthenticated !== false,
  redirectPath: '/login',
  wrapperDisplayName: 'UserIsAuthenticated'
});

// It is for when dont want to apply protection on any page
const locationHelper = locationHelperBuilder({});

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state =>
    state.authentication.isAuthenticated === false,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
  allowRedirectBack: false
});
