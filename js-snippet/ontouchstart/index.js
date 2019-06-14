//window.ontouchstartが存在するかどうかでPC/SP判定

const isSupported = !!(
  "ontouchstart" in window ||
  (navigator.pointerEnabled && navigator.maxTouchPoints > 0)
);
