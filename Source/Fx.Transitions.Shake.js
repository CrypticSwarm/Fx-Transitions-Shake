/*
---
script: Fx.Transitions.Shake.js

description: Tweaks Fx to allow transitions to end on something other than the final value.  Think bounce in place type transitions. Also provides one such transition: shake.

license: MIT-style

authors:
- Perrin Westrich

requires:
- core/1.2.4: Fx.Transitions

provides: [Fx.Transitions.Shake]

---
*/
Fx.implement({

	step: function(){
		var time = $time(),
			deltaTime = Math.min(1, (time - this.time) / this.options.duration);
		this.set(this.compute(this.from, this.to, this.transition(deltaTime)));
		if (deltaTime === 1) this.complete();
	}

});

Fx.Transitions.shake = function(times){
		return function(x){
			return Math.sin(x*times*2*Math.PI);
		};
};
