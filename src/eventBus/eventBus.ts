declare global {
    interface Window {
      eventBus: EventBusTypes;
    }
  }
  export interface EventBusTypes {
    on(event: string, callback: (data: any) => void): void;
    emit(event: string, data: any): void;
    remove(event: string, callback: (data: any) => void);
  }
  const eventBus: EventBusTypes = {
    on(event: string, callback: (data: any) => void) {
      window.addEventListener(event, (e: Event) => {
        callback((e as CustomEvent).detail);
      });
    },
    remove(event: string, callback: (data: any) => void) {
      window.removeEventListener(event, callback as EventListener);
    },
    emit(event: string, data: any) {
      window.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
  };
  window.eventBus = eventBus;
  export default eventBus;