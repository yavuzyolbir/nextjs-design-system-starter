import NextImage, { ImageProps as NextImageProps } from "next/image";
import React from "react";
import cn from "classnames";

type ImageProps = NextImageProps & {};

const Image: React.FC<ImageProps> = ({
  alt,
  src,
  width,
  height,
  className = "",
  ...props
}) => {
  return (
    <NextImage
      alt={alt}
      src={src}
      width={width}
      height={height}
      className={cn(className)}
      {...props}
    />
  );
};

export default Image;
