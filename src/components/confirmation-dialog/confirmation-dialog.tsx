import React, {FC, Fragment} from "react";

import {Dialog, Transition} from "@headlessui/react";

import {Button} from "_app/primitives";

interface IProps {
  open: boolean;
  title: string;
  message: string;
  confirmText: string;
  dismissText: string;
  onConfirm: () => void;
  onDismiss: () => void;
}

export const ConfirmationDialog: FC<IProps> = ({
  open,
  title,
  message,
  confirmText,
  dismissText,
  onConfirm,
  onDismiss,
}) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onDismiss}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="transition-all w-full max-w-md transform overflow-hidden rounded-lg bg-surface p-6 text-left align-middle shadow-xl">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white">
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-cloud">{message}</p>
                </div>

                <div className="mt-4">
                  <Button
                    color="destructive"
                    onClick={onConfirm}
                    
                    // TODO: replace margin with <ButtonGroup /> primitive later
                    className="mr-4"
                  >
                    {confirmText}
                  </Button>
                  <Button
                    color="secondary"
                    onClick={onDismiss}
                  >
                    {dismissText}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
