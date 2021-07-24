import { ReactiveController, ReactiveControllerHost } from "lit";

export class ClockController implements ReactiveController {
	private readonly host: ReactiveControllerHost;
	private intervalId = 0 as unknown as ReturnType<typeof setTimeout>;
	date = new Date();

	constructor(host: ReactiveControllerHost) {
		this.host = host;
		host.addController(this);
	}

	hostConnected() {
		this.intervalId = setInterval(() => this.tick(), 1000);
	}

	hostDisconnected() {
		clearInterval(this.intervalId);
	}

	private tick() {
		this.date = new Date();
		this.host.requestUpdate();
	}
}

// Vanilla
// export class ClockController {
// 	interval = 0;
// 	host;
// 	date = new Date();
  
// 	constructor(host) {
// 	  this.host = host;
// 	  host.addController(this);
// 	}
  
// 	hostConnected() {
// 	  this.interval = setInterval(() => this.tick(), 1000);
// 	}
  
// 	_ick() {
// 	  this.date = new Date();
// 	}
  
// 	hostDisconnected() {
// 	  clearInterval(this.interval);
// 	}
// }
