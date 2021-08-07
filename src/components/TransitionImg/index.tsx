import { useState, useRef, useEffect } from "react";
import type { ImgHTMLAttributes } from "react";
import classNames from "classnames";

export interface TransitionImgProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  /** 容器 className */
  className?: string;
}

const TransitionImg = ({
  className,
  src,
  width,
  height,
  alt,
  ...props
}: TransitionImgProps) => {
  const [loaded, setLoaded] = useState(false);

  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (image.current) handlePlaceholder(image.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const placeholderSrc = (w: number | string, h: number | string) => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`;
  };

  const handlePlaceholder = (img: HTMLImageElement) => {
    const placeholder = document.createElement("img");
    if (!loaded) {
      img.style.display = "none";
      img.before(placeholder);
      placeholder.src = placeholderSrc(
        img.getAttribute("width") || 0,
        img.getAttribute("height") || 0
      );
      placeholder.width = Number(img.getAttribute("width") || 0);
      placeholder.height = Number(img.getAttribute("height") || 0);
      placeholder.style.opacity = "0";
      // img.className && placeholder.classList.add(img.className);
      placeholder.remove();
      img.style.display = "";
    }
  };

  function onLoad() {
    setLoaded(true);
  }

  return (
    <img
      {...props}
      ref={image}
      className={classNames("transition-img", className)}
      src={src}
      width={width}
      height={height}
      alt={alt}
      onLoad={onLoad}
    />
  );
};

export default TransitionImg;
