import React, { PropTypes } from "react";
import "./index.css";
import Rx from "rxjs/Rx";
import {
  compose,
  lifecycle,
  getContext,
  withHandlers,
  withState,
  mapProps
} from "recompose";

const DraggableContainer = ({
  fullPageEnabled,
  positionBottom,
  setPosition,
  children
}) => {
  const handleMobileKeyboard = () => setPosition(window.innerHeight / 4);

  return (
    <div
      className="event__wrapper"
      id="wrapper"
      style={{ bottom: `${positionBottom}px` }}
      onFocus={handleMobileKeyboard}
    >
      {children}
    </div>
  );
};

/**
 * TODO
 * - This should be moved to other locations and refactored if it will be used
 * - Fix scroll inside list (mobile)
 */

let uiUpSubscription = null;
let startUiDownPosition = null;
let elementStartPosition = null;

const removeSubscription = subscription =>
  subscription ? subscription.unsubscribe() : null;

const getBottomPosition = ({ style }) => Number(style.bottom.replace("px", ""));

const getYPosition = e => (e.y ? e.y : e.changedTouches[0].clientY);

function setClassName(el, className) {
  el.className = className;
}

const removeAnimation = el =>
  el.className.indexOf("event__wrapper--animate") > -1
    ? setClassName(el, "event__wrapper")
    : null;

const isNearBottom = el =>
  getBottomPosition(el) < window.innerHeight / 3 / 2 ? 50 : null;

const isNearMiddle = el =>
  getBottomPosition(el) < window.innerHeight / 3 * 2
    ? window.innerHeight / 2
    : null;

const setFullPageIfEnabled = enabled =>
  enabled ? window.innerHeight : window.innerHeight / 2;

export const DraggableContainerUI = compose(
  withState("positionBottom", "setPosition", 50),
  lifecycle({
    componentDidMount() {
      const { setPosition, fullPageEnabled, startHeight } = this.props;
      const wrapperElement = document.getElementById("wrapper");

      const uiDown$ = Rx.Observable.merge(
        Rx.Observable.fromEvent(wrapperElement, "mousedown"),
        Rx.Observable.fromEvent(wrapperElement, "touchstart")
      );

      const uiMove$ = Rx.Observable.merge(
        Rx.Observable.fromEvent(document, "mousemove"),
        Rx.Observable.fromEvent(document, "touchmove")
      );

      const uiUp$ = Rx.Observable.merge(
        Rx.Observable.fromEvent(document, "mouseup"),
        Rx.Observable.fromEvent(document, "touchend")
      );

      const onDrag = uiDown$
        .filter(e => {
          return e.target.className === "event__top-bar";
        })
        .switchMap(e => {
          e.preventDefault();
          removeAnimation(wrapperElement);
          startUiDownPosition = getYPosition(e);
          elementStartPosition = getBottomPosition(wrapperElement);

          uiUpSubscription = uiUp$.subscribe(() => {
            setClassName(
              wrapperElement,
              `${wrapperElement.className} event__wrapper--animate`
            );

            removeSubscription(uiUpSubscription);

            setPosition(
              isNearBottom(wrapperElement) ||
                isNearMiddle(wrapperElement) ||
                setFullPageIfEnabled(fullPageEnabled)
            );
          });

          return uiMove$.takeUntil(uiUp$);
        });

      onDrag.subscribe(e => {
        setPosition(
          elementStartPosition + (startUiDownPosition - getYPosition(e))
        );
      });

      // Ugly solution for initial animation if present. FIX!!!
      if (startHeight) {
        setClassName(
          wrapperElement,
          `${wrapperElement.className} event__wrapper--animate`
        );

        setTimeout(() => setPosition(startHeight));
      }
    },
    componentWillUnmount() {
      removeSubscription(uiUpSubscription);
    }
  })
);

export default DraggableContainerUI(DraggableContainer);
