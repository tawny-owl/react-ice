var Chatroom = React.createClass({
  mixins: [ReactIceMixin],
  componentWillMount: function() {
    this.ic_initiate('3kB4PpZaNNFN4r3xhmOVgcPn2D8rzcOTtQFh4gRwmAsaGTPwlm');
  },
  _connect: function() {
    this.ic_connect('custom room');
  },
  render: function() {
    var localVideo;
    var remoteVideos = [];
    if (this.state.icecomm.local) {
      localVideo = this.state.icecomm.local.getJSXVideo();
    }
    if (this.state.icecomm.peers) {
      for (var i = 0; i < this.state.icecomm.peers.length; i++) {
        remoteVideos.push(this.state.icecomm.peers[i].getJSXVideo());
      }
    }
    return (
      <div>
      {localVideo}
      {remoteVideos}
      <button onClick={this._connect}>Connect</button>
      </div>
    );
  }
});

React.render(<Chatroom/>, document.body);