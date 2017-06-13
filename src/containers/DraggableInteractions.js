import Rx from "rxjs/Rx";
import { compose, lifecycle, withState } from "recompose";

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
  getBottomPosition(el) < window.innerHeight / 3 / 2 ? 50 : null;

const isNearMiddle = el =>
  getBottomPosition(el) < window.innerHeight / 3 * 2
    ? window.innerHeight / 2
    : null;

const setFullPageIfEnabled = enabled =>
  enabled ? window.innerHeight : window.innerHeight / 2;

/**
 * Container
 */

const DraggableInteractions = compose(
  withState("positionBottom", "setPosition", 50),
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
        .filter(e => e.target.className === "event__top-bar")
        .map(e => {
          e.preventDefault();
          removeAnimation(wrapperElement);
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
        .map(() => {
          setClassName(
            wrapperElement,
            `${wrapperElement.className} event__wrapper--animate`
          );

          setPosition(
            isNearBottom(wrapperElement) ||
              isNearMiddle(wrapperElement) ||
              setFullPageIfEnabled(fullPageEnabled)
          );
        });

      uiDown$
        .switchMap(() => uiMove$.takeUntil(uiUp$))
        .subscribe(e =>
          setPosition(
            startPosition.element + (startPosition.down - getYPosition(e))
          )
        );

      if (startHeight) setTimeout(() => setPosition(startHeight));
    }
  })
);

export default DraggableInteractions;
