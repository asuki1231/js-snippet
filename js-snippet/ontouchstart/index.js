// window.ontouchstartが存在するかどうかでPC/SP判定
// タッチパネルのあるPCなどはどうなるか要検証

const isSupported = !!(
  "ontouchstart" in window ||
  (navigator.pointerEnabled && navigator.maxTouchPoints > 0)
);
