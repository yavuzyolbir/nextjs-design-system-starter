import { FC, ComponentPropsWithoutRef, ReactNode } from "react";

import * as RadixCheckbox from "@radix-ui/react-checkbox";
import cn from "classnames";

import { Check } from "@/components/base/Icons";

import Styles from "./Checkbox.module.scss";

type CheckboxRootProps = ComponentPropsWithoutRef<typeof RadixCheckbox.Root>;

export interface CheckboxProps extends CheckboxRootProps {
  children?: ReactNode;
}

const Checkbox: FC<CheckboxProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <label className={cn({ [Styles.wrapper]: children })}>
      <RadixCheckbox.Root {...props} className={cn(Styles.checkbox, className)}>
        <RadixCheckbox.Indicator className={Styles.indicator}>
          <Check />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {children && <div className={Styles.label}>{children}</div>}
    </label>
  );
};

export default Checkbox;
