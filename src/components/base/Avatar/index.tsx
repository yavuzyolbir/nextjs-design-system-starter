import { FC } from "react";

import * as RadixAvavatar from "@radix-ui/react-avatar";

import Styles from "./Avatar.module.scss";

export interface AvatarProps {
  image: string;
  name: string;
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Avatar: FC<AvatarProps> = ({ image, name }) => {
  return (
    <RadixAvavatar.Root className={Styles.root}>
      <RadixAvavatar.Image src={image} alt={name} className={Styles.imagae} />
      <RadixAvavatar.Fallback delayMs={600} className={Styles.fallback}>
        {getInitials(name)}
      </RadixAvavatar.Fallback>
    </RadixAvavatar.Root>
  );
};

export default Avatar;
