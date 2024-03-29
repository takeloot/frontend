import {PropsWithChildren, ReactNode} from "react";

import {Cross1Icon} from "@radix-ui/react-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import {tw} from "../../utils/tw";

const _Close = tw(
  DialogPrimitive.Close,
)`absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const _Overlay = tw(
  DialogPrimitive.Overlay,
)`radix-state-closed:animate-fade-out radix-state-open:animate-fade-in fixed inset-0 z-20 bg-black/50`;

const _Content = tw(
  DialogPrimitive.Content,
)`radix-state-closed:animate-fade-out radix-state-open:animate-fade-in fixed z-50 rounded-lg p-4 w-3/5 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-surface border border-gray focus:outline-none focus-visible:ring focus-visible:ring-highlight`;

const _Title = tw(DialogPrimitive.Title)`text-base font-semibold text-primitive-type-bold`;

const _Description = tw(DialogPrimitive.Description)`mt-2 text-sm font-normal text-primitive-type`;

const _Action = tw(
  DialogPrimitive.Close,
)`inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium bg-primary text-white hover:bg-primary-bold border border-transparent focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const _Cancel = tw(
  DialogPrimitive.Close,
)`inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium bg-primitive-faint hover:bg-primitive text-primitive-type-bold border border-primitive-edge focus-visible:border-transparent focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

export const Action = (props: PropsWithChildren) => {
  const {children} = props;

  return <_Action>{children}</_Action>;
};

export const Cancel = (props: PropsWithChildren) => {
  const {children} = props;

  return <_Cancel>{children}</_Cancel>;
};

export const Description = (props: PropsWithChildren) => {
  const {children} = props;

  return <_Description>{children}</_Description>;
};

export const Title = (props: PropsWithChildren) => {
  const {children} = props;

  return <_Title>{children}</_Title>;
};

interface IRootProps extends PropsWithChildren, Pick<DialogPrimitive.DialogProps, "onOpenChange" | "open"> {
  trigger?: ReactNode;
  showCloseIcon?: boolean;
}

const Root = (props: IRootProps) => {
  const {onOpenChange, open, trigger, children, showCloseIcon = true} = props;

  return (
    <DialogPrimitive.Root {...{onOpenChange, open}}>
      {/* @ts-ignore */}
      {trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}
      <_Overlay />
      <_Content>
        {children}
        {showCloseIcon && (
          <_Close>
            <Cross1Icon className="h-4 w-4 text-cloud-dark hover:text-cloud" />
          </_Close>
        )}
      </_Content>
    </DialogPrimitive.Root>
  );
};

export {Root};
