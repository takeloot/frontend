import React, {ElementType, MouseEvent, ReactNode, createElement, forwardRef} from "react";

import {Icon} from "react-feather";
import Link, {LinkProps} from "next/link";
import clsx from "clsx";

import {Tooltip} from "_app/primitives";

export type IButtonBaseProps = {
  color?: keyof typeof variantClassName;
  size?: "base" | "lg" | "icon";
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void;
  StartIcon?: Icon | ElementType;
  EndIcon?: Icon;
  shallow?: boolean;
  tooltip?: string;
};

export type IButtonProps = IButtonBaseProps &
  (
    | (Omit<JSX.IntrinsicElements["a"], "href" | "onClick" | "ref"> & LinkProps)
    | (Omit<JSX.IntrinsicElements["button"], "onClick" | "ref"> & {href?: never})
  );

const variantClassName = {
  primary:
    "border border-transparent text-white bg-blue hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue",
  secondary: "text-cloud bg-gray-light hover:bg-gray focus:outline-none focus:ring-gray-light focus:ring-2 focus:ring-offset-1",
  destructive:
    "text-cloud bg-red-light hover:bg-red focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red",
};

const variantDisabledClassName = {
  primary: "border border-transparent bg-blue bg-opacity-50 text-cloud/30",
  secondary: "text-cloud/30 bg-gray-light opacity-50",
  destructive: "text-cloud/30 bg-red bg-opacity-50 opacity-30",
};

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, IButtonProps>(function Button(
  props: IButtonProps,
  forwardedRef,
) {
  const {
    loading = false,
    color = "primary",
    size = "base",
    type = "button",
    StartIcon,
    EndIcon,
    shallow,
    ...passThroughProps
  } = props;
  const disabled = props.disabled || loading;
  const isLink = typeof props.href !== "undefined";
  const elementType = isLink ? "div" : "button";
  const element = createElement(
    elementType,
    {
      ...passThroughProps,
      disabled,
      type: !isLink ? type : undefined,
      ref: forwardedRef,
      className: clsx(
        "inline-flex items-center text-sm font-medium relative rounded-lg duration-200 hover:duration-200",
        size === "base" && "h-9 px-4 py-2.5",
        size === "lg" && "h-[36px] px-4 py-2.5",
        size === "icon" && "flex justify-center min-h-[36px] min-w-[36px] ",
        disabled ? variantDisabledClassName[color] : variantClassName[color],
        loading ? "cursor-wait" : disabled ? "cursor-not-allowed" : "",
        props.className,
      ),
      onClick: disabled
        ? (e: MouseEvent<HTMLElement, MouseEvent>) => {
          e.preventDefault();
        }
        : props.onClick,
    },
    <>
      {StartIcon && (
        <StartIcon className={clsx("inline-flex", size === "icon" ? "h-4 w-4 " : "mr-2 h-4 w-4 stroke-[1.5px]")} />
      )}
      {props.children}
      {loading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <svg
            className={clsx(
              "mx-4 h-5 w-5 animate-spin",
              color === "primary" ? "text-white" : "text-white",
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-30" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-90"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
      {EndIcon && <EndIcon className="-mr-1 inline h-5 w-5 ltr:ml-2 rtl:mr-2" />}
    </>,
  );

  return props.href ? (
    <Wrapper tooltip={props.tooltip}>
      <Link passHref href={props.href} shallow={shallow && shallow}>
        {element}
      </Link>
    </Wrapper>
  ) : (
    <Wrapper tooltip={props.tooltip}>{element}</Wrapper>
  );
});

const Wrapper = ({children, tooltip}: {tooltip?: string; children: ReactNode}) => {
  if (!tooltip) {
    return <>{children}</>;
  }

  return <Tooltip.Root content={tooltip}>{children}</Tooltip.Root>;
};
