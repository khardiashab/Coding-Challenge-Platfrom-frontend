// ConfirmDialog.tsx
import useEscapeKey from '@/hooks/useEscapeKey';
import React, { useEffect } from 'react';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  heading: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  position?: string;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({

  isOpen,
  onClose,
  onConfirm,
  heading,
  description,
  cancelText = 'Cancel',
  confirmText = 'Yes',
  position = 'top-center',
}) => {
  const classes = {
    container: `fixed z-50 ${position} w-full h-full flex items-center justify-center`,
    dialog: 'bg-gray-800 rounded-lg shadow-lg p-4 w-96',
    heading: 'text-lg font-bold text-white mb-2',
    description: 'text-gray-400 text-sm mb-4',
    buttons: 'flex justify-end',
    cancel: 'bg-gray-600 hover:bg-gray-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded',
    confirm: 'bg-red-600 hover:bg-red-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded ml-2',
  };

  
  useEscapeKey(onClose);

  return (
    <div
      className={classes.container}
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <div className={classes.dialog}>
        <h2 className={classes.heading}>{heading}</h2>
        <p className={classes.description}>{description}</p>
        <div className={classes.buttons}>
          <button className={classes.cancel} onClick={onClose}>
            {cancelText}
          </button>
          <button className={classes.confirm} onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;