import Rx from "rxjs/Rx";
import { compose, lifecycle, withState } from "recompose";
import { Animated } from "react-primitives";

const WRAPPER_ID = "wrapper";

/**
 * Helper functions
 */

const getBottomPosition = ({ style }) => Number(style.bottom.replace("px", ""));

const getTouchesY = e =>
  e.changedTouches ? e.changedTouches[0].clientY : window.innerHeight;

const getYPosition = e => (e.y ? e.y : getTouchesY(e));

function setClassName(el, className) {
  el.className = className;
}

const removeAnimation = el =>
  el.className.indexOf("event__wrapper--animate") > -1
    ? setClassName(el, "event__wrapper")
    : null;

const isNearBottom = el =>
  getBottomPosition(el) < window.innerHeight / 3 / 2 ? "0" : null;

const isNearMiddle = el =>
  getBottomPosition(el) < window.innerHeight / 3 * 2
    ? window.innerHeight / 2
    : null;

const setFullPageIfEnabled = enabled =>
  enabled ? window.innerHeight - 50 : window.innerHeight / 2;

/**
 * Container
 * TODO
 * - Have to fix animation, not working now.
 * - Dont rely on DOM
 */

const DraggableInteractions = compose(
  withState("positionBottom", "setPosition", new Animated.Value(0)),
  lifecycle({
    componentDidMount() {
      const { setPosition, fullPageEnabled, startHeight } = this.props;
      const wrapperElement = document.getElementById(WRAPPER_ID);
      const startPosition = { down: null, element: null };

      const uiDown$ = Rx.Observable
        .merge(
          Rx.Observable.fromEvent(wrapperElement, "mousedown"),
          Rx.Observable.fromEvent(wrapperElement, "touchstart")
        )
        .filter(e => e.target.draggable === true)
        .map(e => {
          e.preventDefault();
          startPosition.down = getYPosition(e);
          startPosition.element = getBottomPosition(wrapperElement);
        });

      const uiMove$ = Rx.Observable.merge(
        Rx.Observable.fromEvent(document, "mousemove"),
        Rx.Observable.fromEvent(document, "touchmove")
      );

      const uiUp$ = Rx.Observable
        .merge(
          Rx.Observable.fromEvent(document, "mouseup"),
          Rx.Observable.fromEvent(document, "touchend")
        )
        .map(() =>
          setPosition(
            isNearBottom(wrapperElement) ||
              isNearMiddle(wrapperElement) ||
              setFullPageIfEnabled(fullPageEnabled)
          )
        );

      uiDown$
        .switchMap(() => uiMove$.takeUntil(uiUp$))
        .subscribe(e =>
          setPosition(
            new Animated.Value(
              startPosition.element + (startPosition.down - getYPosition(e))
            )
          )
        );

      if (startHeight) setPosition(startHeight);
    }
  })
);

export default DraggableInteractions;
