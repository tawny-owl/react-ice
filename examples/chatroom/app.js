var Chatroom = React.createClass({
  mixins: [ReactIceMixin],
  componentWillMount: function() {
    this.ic_initiate('3kB4PpZaNNFN4r3xhmOVgcPn2D8rzcOTtQFh4gRwmAsaGTPwlm');
  },
  _connect: function() {
    this.ic_connect('test');
  },
  render: function() {
    var localVideo;
    var remoteVideos;
    if (this.state.icecomm.local) {
      localVideo = (<video src={this.state.icecomm.local.stream} autoPlay muted></video>);
    }
    if (this.state.icecomm.peers) {
      remoteVideos = [];
      for (var i = 0; i < this.state.icecomm.peers.length; i++) {
        remoteVideos.push(
          <video src={this.state.icecomm.peers[i].stream} autoPlay muted></video>
          )
      }
    }
    console.log(this.state.icecomm.peers);
    console.log(remoteVideos);
    return (
      <div>
      <div>Hi</div>
      {localVideo}
      {remoteVideos}
      <button onClick={this._connect}></button>
      </div>
    );
  }
});

React.render(<Chatroom/>, document.body);