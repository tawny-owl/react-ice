(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/react-ice.js":[function(require,module,exports){
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

},{}]},{},["./src/react-ice.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvWmFpL0Rlc2t0b3AvTXlQcm9qZWN0cy9pY2Vjb21tL3JlYWN0LWljZS9zcmMvcmVhY3QtaWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxJQUFJLENBQUM7O0FBRVQsSUFBSSxhQUFhLEdBQUc7QUFDcEIsRUFBRSxrQkFBa0IsRUFBRSxXQUFXOztHQUU5QjtBQUNILEVBQUUsb0JBQW9CLEVBQUUsV0FBVzs7R0FFaEM7RUFDRCxXQUFXLEVBQUUsU0FBUyxNQUFNLEVBQUU7SUFDNUIsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDOztJQUVqQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLE9BQU8sRUFBRTtNQUNqQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzVDLENBQUMsQ0FBQztJQUNILElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsSUFBSSxFQUFFO01BQ2xDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEQsS0FBSyxDQUFDLENBQUM7O0lBRUgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxJQUFJLEVBQUU7TUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztNQUM1QixLQUFLLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25ELEtBQUssQ0FBQyxDQUFDOztHQUVKO0VBQ0QsVUFBVSxFQUFFLFNBQVMsSUFBSSxFQUFFO0lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDcEI7RUFDRCxrQkFBa0IsRUFBRSxTQUFTLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDekMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtNQUNwQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7S0FDbkM7QUFDTCxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7O0lBRXZCLElBQUksS0FBSyxLQUFLLFdBQVcsRUFBRTtNQUN6QixZQUFZLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO01BQzlDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hDO0lBQ0QsSUFBSSxLQUFLLEtBQUssT0FBTyxFQUFFO01BQ3JCLFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQzVCO0lBQ0QsSUFBSSxLQUFLLEtBQUssWUFBWSxFQUFFO01BQzFCLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQ2xELFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5QyxLQUFLOztBQUVMLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDOztJQUVsQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQ3RCO0VBQ0Qsa0JBQWtCLEVBQUUsV0FBVztJQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztBQUNqQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztJQUVuQixPQUFPLEtBQUssQ0FBQztHQUNkO0VBQ0QsZUFBZSxFQUFFLFdBQVc7SUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUNyQyxHQUFHOztBQUVILENBQUMsQ0FBQzs7QUFFRixNQUFNLENBQUMsYUFBYSxHQUFHLGFBQWEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGNvbW07XG5cbnZhciBSZWFjdEljZU1peGluID0ge1xuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCkge1xuXG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcblxuICB9LFxuICBpY19pbml0aWF0ZTogZnVuY3Rpb24oYXBpS2V5KSB7XG4gICAgY29tbSA9IG5ldyBJY2Vjb21tKGFwaUtleSk7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGNvbW0ub24oJ2xvY2FsJywgZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgX3RoaXMudXBkYXRlSWNlY29tbVN0YXRlKCdsb2NhbCcsIG9wdGlvbnMpO1xuICAgIH0pO1xuICAgIGNvbW0ub24oJ2Nvbm5lY3RlZCcsIGZ1bmN0aW9uKHBlZXIpIHtcbiAgICAgIF90aGlzLnVwZGF0ZUljZWNvbW1TdGF0ZSgnY29ubmVjdGVkJywgcGVlcik7XG4gICAgfSk7XG5cbiAgICBjb21tLm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24ocGVlcikge1xuICAgICAgY29uc29sZS5sb2coJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgX3RoaXMudXBkYXRlSWNlY29tbVN0YXRlKCdkaXNjb25uZWN0JywgcGVlcik7XG4gICAgfSk7XG5cbiAgfSxcbiAgaWNfY29ubmVjdDogZnVuY3Rpb24ocm9vbSkge1xuICAgIGNvbW0uY29ubmVjdChyb29tKTtcbiAgfSxcbiAgdXBkYXRlSWNlY29tbVN0YXRlOiBmdW5jdGlvbihldmVudCwgdmFsdWUpIHtcbiAgICB2YXIgaWNlY29tbVN0YXRlID0ge307XG4gICAgaWYgKHRoaXMuc3RhdGUgJiYgdGhpcy5zdGF0ZS5pY2Vjb21tKSB7XG4gICAgICBpY2Vjb21tU3RhdGUgPSB0aGlzLnN0YXRlLmljZWNvbW07XG4gICAgfVxuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoZXZlbnQgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICBpY2Vjb21tU3RhdGUucGVlcnMgPSBpY2Vjb21tU3RhdGUucGVlcnMgfHwgW107XG4gICAgICBpY2Vjb21tU3RhdGUucGVlcnMucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGlmIChldmVudCA9PT0gJ2xvY2FsJykge1xuICAgICAgaWNlY29tbVN0YXRlLmxvY2FsID0gdmFsdWU7XG4gICAgfVxuICAgIGlmIChldmVudCA9PT0gJ2Rpc2Nvbm5lY3QnKSB7XG4gICAgICB2YXIgcGVlckluZGV4ID0gaWNlY29tbVN0YXRlLnBlZXJzLmluZGV4T2YodmFsdWUpO1xuICAgICAgaWNlY29tbVN0YXRlLnBlZXJzLnNwbGljZShwZWVySW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUuaWNlY29tbSA9IGljZWNvbW1TdGF0ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9LFxuICB1cGRhdGVJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgc3RhdGUuaWNlY29tbSA9IHt9O1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbn07XG5cbndpbmRvdy5SZWFjdEljZU1peGluID0gUmVhY3RJY2VNaXhpbjsiXX0=
