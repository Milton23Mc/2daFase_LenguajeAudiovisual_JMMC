type EventHandler = (...args: any[]) => void;

export class EventEmitter {
  private events: { [eventName: string]: EventHandler[] } = {};

  on(eventName: string, handler: EventHandler) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(handler);
  }

  emit(eventName: string, ...args: any[]) {
    const handlers = this.events[eventName];
    if (handlers) {
      for (const handler of handlers) {
        handler(...args);
      }
    }
  }

  off(eventName: string, handler: EventHandler) {
    const handlers = this.events[eventName];
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
    }
  }
}