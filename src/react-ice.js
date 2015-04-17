var comm;

var ReactIceMixin = {
  getInitialState: function() {
    return updateInitialState();
  },
  componentWillUnmount: function() {
    comm.leave();
  },
  ic_initiate: function(apiKey) {
    comm = new Icecomm(apiKey);
    var _this = this;

    comm.on('local', function(options) {
      _this._ic_updateIcecommState('local', options);
    });
    comm.on('connected', function(peer) {
      console.log(_this);
      _this._ic_updateIcecommState('connected', peer);
    });

    comm.on('disconnect', function(peer) {
      _this._ic_updateIcecommState('disconnect', peer);
    });

  },
  ic_connect: function(room) {
    comm.connect(room);
  },
  ic_leave: function() {
    comm.leave();
  },
  _ic_updateIcecommState: function(event, value) {
    var state = this.state;
    state.icecomm = updateIcecommState(this.state.icecomm, event, value);
    this.setState(state);
  }
};

function updateInitialState() {
  var state = this.state || {};
  state.icecomm = {};
  return state;
}

function updateIcecommState(icecommState, event, value) {
  if (event === 'connected') {
    icecommState.peers = icecommState.peers || [];
    value = addGetVideo(value);
    icecommState.peers.push(value);
  }
  if (event === 'local') {
    value = addGetVideo(value);
    icecommState.local = value;
  }
  if (event === 'disconnect' && icecommState.peers) {
    var peerIndex = icecommState.peers.indexOf(value);
    icecommState.peers.splice(peerIndex, 1);
  }

  return icecommState;
}

function addGetVideo(peer) {
  peer.getVideo = function() {
    return (<video src={peer.stream} autoPlay muted></video>);
  }
  return peer;
}

window.ReactIceMixin = ReactIceMixin;