import { Meteor } from 'meteor/meteor';
import SpotifyOAuthInit from '../imports/api/oauth-spotify';
import './methods/homeMethods';
import './methods/accountMethods';
import './methods/groupMethods';
import './publication';

SyncedCron.add({
  name: 'Update recently played for all users',
  schedule: function(parser) {
    return parser.text('every 1 hour');
  },
  job: function() {
    Meteor.call('getGroupRecentlyPlayed');
  }
});

Meteor.startup(() => {
  Meteor.users.deny({
    update() {
      return true;
    }
  });
  SpotifyOAuthInit();
  SyncedCron.start();
});
