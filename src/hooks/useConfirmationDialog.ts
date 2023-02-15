import {useContext} from "react";

import {ConfirmationDialogContext} from "_app/core/providers/confirmation-dialog-provider";

export const useConfirmationDialog = () => {
  // @ts-ignore: work in progress, will be fixed later
  const {openDialog} = useContext(ConfirmationDialogContext);

  const getConfirmation = ({...options}) =>
    new Promise((res) => {
      openDialog({actionCallback: res, ...options});
    });

  return {getConfirmation};
};
