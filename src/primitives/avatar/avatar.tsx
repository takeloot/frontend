import cx from "clsx";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import {tw} from "../../utils/tw";

export enum EVariant {
  Circle,
}

const _Root = tw(AvatarPrimitive.Root)`relative inline-flex h-10 w-10`;

const _Image = tw(AvatarPrimitive.Image)`h-full w-full object-cover`;

const _OnlineBubble = tw.span`block h-2 w-2 rounded-full bg-green-dark`;

const _OnlineBubbleWrapper = tw.div`absolute bottom-0 right-0 h-2 w-2`;

const _Initials = tw.span`text-sm font-medium uppercase text-primitive-type transition-colors`;

const _Fallback = tw(
  AvatarPrimitive.Fallback,
)`flex h-full w-full items-center justify-center bg-primitive transition-colors`;

interface IRootProps extends Pick<AvatarPrimitive.AvatarImageProps, "alt" | "src"> {
  variant?: EVariant;
  renderInvalidUrls?: boolean;
  online?: boolean;
  initials?: `${string}${string}`;
  fallbackDelayMs?: number;
}

const Root = (props: IRootProps) => {
  const {variant = EVariant.Circle, online, initials, src, alt, fallbackDelayMs = 600} = props;

  return (
    <_Root>
      <_Image
        src={src}
        alt={alt}
        className={cx(
          {
            [EVariant.Circle]: "rounded-full",
          }[variant],
        )}
      />
      {online && (
        <_OnlineBubbleWrapper
          className={cx(
            {
              [EVariant.Circle]: "-translate-x-1/2 -translate-y-1/2",
            }[variant],
          )}
        >
          <_OnlineBubble />
        </_OnlineBubbleWrapper>
      )}
      <_Fallback
        className={cx(
          {
            [EVariant.Circle]: "rounded-full",
          }[variant],
        )}
        delayMs={fallbackDelayMs}
      >
        <_Initials>{initials}</_Initials>
      </_Fallback>
    </_Root>
  );
};

Root.variant = EVariant;
export {Root};
