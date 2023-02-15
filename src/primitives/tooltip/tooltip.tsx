import {FC, PropsWithChildren} from "react";

import clsx from "clsx";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import {tw} from "../../utils/tw";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _Content: FC<PropsWithChildren<any>> = tw(TooltipPrimitive.Content)``;

export const Provider = (props: PropsWithChildren) => {
  const {children} = props;

  return <TooltipPrimitive.Provider>{children}</TooltipPrimitive.Provider>;
};

interface IRootProps {
  children: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  side?: "top" | "right" | "bottom" | "left";
  onOpenChange?: (open: boolean) => void;
  sideOffset?: number;
  tabIndex?: number;
  alignOffset?: number;
  align?: "start" | "center" | "end";
  delayDuration?: number;
}

export const Root = (props: PropsWithChildren<IRootProps>) => {
  const {
    content,
    children,
    sideOffset = 4,
    tabIndex,
    side,
    alignOffset,
    align,
    defaultOpen,
    delayDuration = 200,
    onOpenChange,
    open,
  } = props;

  return (
    <TooltipPrimitive.Root
      defaultOpen={defaultOpen}
      open={open}
      delayDuration={delayDuration}
      onOpenChange={onOpenChange}
    >
      {/* @ts-ignore */}
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <_Content
        sideOffset={sideOffset}
        align={align}
        side={side}
        tabIndex={tabIndex}
        alignOffset={alignOffset}
        className={clsx(
          side === "top" && "-mt-7",
          side === "right" && "ml-2",
          "relative z-40 rounded-md bg-gray-dark px-2 py-1 text-xs font-semibold text-white shadow-lg",
        )}
      >
        {content}
      </_Content>
    </TooltipPrimitive.Root>
  );
};
