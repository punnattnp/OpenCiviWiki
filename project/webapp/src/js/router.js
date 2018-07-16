import { AppRouter } from 'backbone.marionette';
import AppController from './controller';

const Router = AppRouter.extend({
  initialize(options) {
    this.controller = new AppController(options);
  },

  appRoutes: {
    '': 'viewMainFeed',
    'profile/(:username)': 'viewProfile',
    'settings(/)': 'viewSettings',
    'setup(/)': 'viewSetup',
    'thread/:threadId': 'viewThread',
    '*invalidRoute': 'showErrorPage',
  },
});

export default Router;

// '/invite': 'invite',
// '/settings' : 'settings',
