import {FC, ReactNode, createContext, useState} from "react";

import {ConfirmationDialog} from "_app/components";

interface IDialogConfig {
  actionCallback: (_: boolean) => boolean;
  title: string;
  message: string;
}

interface IProps {
  children: ReactNode;
}

export const ConfirmationDialogContext = createContext({});

export const ConfirmationDialogProvider: FC<IProps> = ({children}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogConfig, setDialogConfig] = useState<IDialogConfig | null>({
    title: "Confirmation",
    message: "Are you sure?",
    actionCallback: () => false,
  });

  const openDialog = ({title, message, actionCallback}: IDialogConfig) => {
    setDialogOpen(true);
    setDialogConfig({title, message, actionCallback});
  };

  const resetDialog = () => {
    setDialogOpen(false);
    setDialogConfig(null);
  };

  const onConfirm = () => {
    resetDialog();
    dialogConfig && dialogConfig.actionCallback(true);
  };

  const onDismiss = () => {
    resetDialog();
    dialogConfig && dialogConfig.actionCallback(false);
  };

  return (
    <ConfirmationDialogContext.Provider value={{openDialog}}>
      <ConfirmationDialog
        open={dialogOpen}
        title={dialogConfig?.title || ""}
        message={dialogConfig?.message || ""}
        confirmText="Yes"
        dismissText="No"
        onConfirm={onConfirm}
        onDismiss={onDismiss}
      />
      {children}
    </ConfirmationDialogContext.Provider>
  );
};
