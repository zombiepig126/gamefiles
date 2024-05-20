/* mp-start */

var _params = gadgets.util.getUrlParameters();
if (_params['exp_rpc_js'] != 1) {
  var url = _params['parent'] + '/ig/ifpc_relay';
  gadgets.rpc.setRelayUrl('..', url, true);
}
/* mp-end */
</script><style type="text/css">#button {
  display:none;
}
.imgb_vis {
  animation: imgb-animation 7s linear;
}
@keyframes imgb-animation {
  10% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(100px);
  }
  90% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}</style></head><body dir="ltr"><script>
		var gameConfig = {
			swfUrl: "https://cdn.jsdelivr.net/gh/zombiepig126/gamefiles@main/bindingofissacdemo.swf"		
		}