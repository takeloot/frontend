import React, {FC, Fragment, useState} from "react";

import {useTranslation} from "next-i18next";
import {Dialog, Transition} from "@headlessui/react";

interface IAlphaPreviewModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const AlphaPreview: FC = () => {
  const {t} = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div
        onClick={openModal}
        className="absolute right-4 bottom-4 rounded-lg bg-blue px-4 py-2 text-white hover:cursor-pointer hover:bg-blue-dark"
      >
        {t("alpha_preview")}
      </div>
      <AlphaPreviewModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

const AlphaPreviewModal: FC<IAlphaPreviewModalProps> = ({isOpen, closeModal}) => {
  const {t} = useTranslation("common");

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-surface p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-cloud">
                  {t("alpha_preview")}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="pb-2 text-sm text-gray-500">{t("alpha_preview_desc_1")}</p>
                  <p className="text-sm text-gray-500">{t("alpha_preview_desc_2")}</p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-blue px-4 py-2 text-sm font-medium text-cloud duration-200 focus:outline-none hover:bg-blue-dark"
                    onClick={closeModal}
                  >
                    {t("got_it_thanks")}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
