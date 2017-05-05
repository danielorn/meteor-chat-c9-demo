import { Template } from 'meteor/templating';
import { Messages } from '../imports/api/messages.js';

import './main.html';

Template.messages.helpers({
  messages: function() { 
    return Messages.find({}, {sort: {time: -1 }});
  }
});

Template.input.events = {
 'keydown input#message': function(event) {
    if (event.which == 13) {  // 13 is the enter key event
      var name  =  'Anonymous' ;
      var message = event.target;
      if (message.value != '')  {
        Messages.insert({name: name, message: message.value, time:  Date.now()});
        message.value = '' ;
      }
    }
  } 
}