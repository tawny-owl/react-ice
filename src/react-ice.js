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
      _this.updateIcecommState('local', options);
    });
    comm.on('connected', function(peer) {
      _this.updateIcecommState('connected', peer);
    });

    comm.on('disconnect', function(peer) {
      console.log('disconnected');
      _this.updateIcecommState('disconnect', peer);
    });

  },
  ic_connect: function(room) {
    comm.connect(room);
  },
  updateIcecommState: function(event, value) {
    var icecommState = {};
    if (this.state && this.state.icecomm) {
      icecommState = this.state.icecomm;
    }
    var state = this.state;

    if (event === 'connected') {
      icecommState.peers = icecommState.peers || [];
      icecommState.peers.push(value);
    }
    if (event === 'local') {
      icecommState.local = value;
    }
    if (event === 'disconnect') {
      var peerIndex = icecommState.peers.indexOf(value);
      icecommState.peers.splice(peerIndex, 1);
    }

    this.state.icecomm = icecommState;

    this.setState(state);
  },
  updateInitialState: function() {
    var state = this.state || {};
    state.icecomm = {};

    return state;
  },
  getInitialState: function() {
    return this.updateInitialState();
  }

};

window.ReactIceMixin = ReactIceMixin;