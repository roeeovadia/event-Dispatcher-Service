angular.module('eventDispatcher', [])
.service("EventDispetcher", [
function EventDispetcher() {
	var events = {};

	this.register = function (eventType, callback) {
		events[eventType] = events[eventType] || [];
		events[eventType].push(callback);
	};

	this.fire = function (eventType, eventData) {
		if (!events[eventType]) {
			return;
		}

		for (var i = 0; i < events[eventType].length; i++) {
			events[eventType][i](eventData);
		}
	};

	this.unregister = function (eventType, callback) {
		if (!events[eventType]) {
			return;
		}
		var index = events[eventType].indexOf(callback);
		events[eventType].splice(index, 1);
	};
}]);
