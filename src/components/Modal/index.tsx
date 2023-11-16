import React, { FC, ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export interface TModalProps {
  trigger?: ReactNode;
  content?: ReactNode;
  title?: string;
}

const Modal: FC<TModalProps> = (props) => {
  const { trigger, content, title } = props;

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            className="DialogOverlay  fixed inset-0"
            style={{
              animation:
                "150ms cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running k-eyOShd",
            }}
          />
          <Dialog.Content className="DialogContent bg-white shadow-2xl h-screen fixed top-0 left-[5rem] w-[30rem] p-4 border-r">
            <Dialog.Title className="DialogTitle pb-4">{title}</Dialog.Title>
            {/* <Dialog.Description className="DialogDescription">
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description> */}
            {content}
            {/* <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                gnfgngn
              </button>
            </Dialog.Close> */}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Modal;
