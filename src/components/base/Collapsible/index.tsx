import { FC, ReactNode } from "react";
import * as RadixCollapsible from "@radix-ui/react-collapsible";

import Styles from "./Collapsible.module.scss";

export interface CollapsibleProps extends RadixCollapsible.CollapsibleProps {
  trigger: ReactNode;
  children: ReactNode;
}

const Collapsible: FC<CollapsibleProps> = ({ trigger, children, ...props }) => {
  return (
    <RadixCollapsible.Root {...props}>
      <RadixCollapsible.Trigger className={Styles.trigger} asChild>
        {trigger}
      </RadixCollapsible.Trigger>
      <RadixCollapsible.Content className={Styles.content}>
        <div className={Styles.contentInner}>{children}</div>
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
};

export default Collapsible;
