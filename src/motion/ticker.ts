// One requestAnimationFrame loop shared by every playing animation. It stops
// itself when nothing is subscribed, and browsers pause it in background tabs.

type Tick = (now: number) => void;

const subscribers = new Set<Tick>();
let raf = 0;

const loop = (now: number) => {
  subscribers.forEach((tick) => tick(now));
  raf = subscribers.size ? requestAnimationFrame(loop) : 0;
};

export const subscribeTick = (tick: Tick) => {
  subscribers.add(tick);
  if (!raf) raf = requestAnimationFrame(loop);
  return () => {
    subscribers.delete(tick);
  };
};

// While the first-visit welcome is on screen, other animations wait for it.
let welcomeActive = false;
const welcomeListeners = new Set<() => void>();

export const setWelcomeActive = (active: boolean) => {
  welcomeActive = active;
  welcomeListeners.forEach((l) => l());
};
export const getWelcomeActive = () => welcomeActive;
export const subscribeWelcome = (listener: () => void) => {
  welcomeListeners.add(listener);
  return () => {
    welcomeListeners.delete(listener);
  };
};
