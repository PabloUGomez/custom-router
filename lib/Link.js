import { jsx as _jsx } from "react/jsx-runtime";
import { EVENTS } from "./consts";
export function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}
export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainClick = event.button === 0;
    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    const isManageableClick = target === undefined || target === "_self";
    if (isMainClick && !isModifiedClick && isManageableClick) {
      event.preventDefault();
      navigate(to);
    }
  };
  return _jsx("a", {
    onClick: handleClick,
    href: to,
    target: target,
    ...props,
  });
}
