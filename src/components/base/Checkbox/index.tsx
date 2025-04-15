import { FC, ComponentPropsWithoutRef } from "react";

import * as RadixCheckbox from "@radix-ui/react-checkbox";
import cn from "classnames";

import { Check } from "@/components/base/Icons";

import Styles from "./Checkbox.module.scss";

type CheckboxRootProps = ComponentPropsWithoutRef<typeof RadixCheckbox.Root>;

export interface CheckboxProps extends CheckboxRootProps {
  label?: string;
}

const Checkbox: FC<CheckboxProps> = ({ label, className = "", ...props }) => {
  return (
    <label className={Styles.wrapper}>
      <RadixCheckbox.Root {...props} className={cn(Styles.checkbox, className)}>
        <RadixCheckbox.Indicator className={Styles.indicator}>
          <Check />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {label && <div className={Styles.label}>{label}</div>}
    </label>
  );
};

export default Checkbox;
