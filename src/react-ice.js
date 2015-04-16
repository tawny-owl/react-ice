var EventEmitter = require('events').EventEmitter;
var comm;


var ReactIceMixin = {
  componentWillMount: function() {

  },
  componentWillUnmount: function() {

  },
  ic_initiate: function(apiKey) {
    comm = new Icecomm(apiKey);
    var _this = this;
    comm.on('local', function(options) {
      console.log('on local called');
      console.log(_this.updateIcecommState);
      _this.updateIcecommState('local', options);
    });
    comm.on('connected', function(peer) {
      _this.updateIcecommState('peers', peer);
    });

  },
  ic_connect: function(room) {
    comm.connect(room);
  },
  updateIcecommState: function(event, value) {
    var icecommState = this.state || this.state.icecomm || {};
    var state = this.state;

    if (event === 'peers') {
      icecommState[event] = icecommState[event] || [];
      icecommState[event].push(value);
    }
    if (event === 'local') {
      icecommState[event] = value;
    }

    state.icecomm = icecommState;

    this.setState(state);
  },
  getInitialState: function() {
    return this.updateIcecommState();
  }

};

window.ReactIceMixin = ReactIceMixin;