import {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  ReactNode,
  ForwardedRef,
  ReactElement,
  RefObject,
} from "react";
import { throttle } from "lodash";

interface LayoutProps {
  children?: ReactNode;
}
export interface ChildProps {
  init: () => void;
}

const ScrollReveal = forwardRef(
  (props: LayoutProps, ref: ForwardedRef<ChildProps>) => {
    const [viewportHeight, setViewportheight] = useState<number>(
      window.innerHeight
    );
    const [revealEl, setRevealEl] = useState<Array<Element | null>>([]);

    const checkComplete = () => {
      return (
        revealEl.length <=
        document.querySelectorAll("[class*=reveal-].is-revealed").length
      );
    };

    const elementIsVisible = (offset: number, el?: Element | null) => {
      return (el?.getBoundingClientRect().top ?? 0) <= viewportHeight - offset;
    };

    const revealElements = () => {
      if (checkComplete()) return;
      for (let i = 0; i < revealEl.length; i++) {
        let el = revealEl[i];
        let revealDelay = 200;
        let revealOffset = Number(
          el?.getAttribute("data-reveal-offset")
            ? el.getAttribute("data-reveal-offset")
            : "200"
        );
        let listenedEl = el?.getAttribute("data-reveal-container")
          ? el.closest(el?.getAttribute("data-reveal-container") ?? "")
          : el;
        if (
          elementIsVisible(revealOffset, listenedEl) &&
          !el?.classList.contains("is-revealed")
        ) {
          setTimeout(function () {
            el?.classList.add("is-revealed");
          }, revealDelay);
        }
      }
    };

    const initSet = () => {
      setRevealEl(Array.from(document.querySelectorAll("[class*=reveal-]")));
    };
    useImperativeHandle(ref, () => ({
      init: initSet,
    }));

    useEffect(() => {
      if (typeof revealEl !== "undefined" && revealEl.length > 0) {
        if (!checkComplete()) {
          window.addEventListener("scroll", handleScroll);
          window.addEventListener("resize", handleResize);
        }
        revealElements();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [revealEl]);

    const handleListeners = () => {
      if (!checkComplete()) return;
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };

    const handleScroll = throttle(() => {
      handleListeners();
      revealElements();
    }, 60);

    const handleResize = throttle(() => {
      setViewportheight(window.innerHeight);
    }, 60);

    useEffect(() => {
      handleListeners();
      revealElements();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [viewportHeight]);

    return <>{props?.children}</>;
  }
);

export default ScrollReveal as (
  props: LayoutProps & { ref: RefObject<ChildProps> }
) => ReactElement;
