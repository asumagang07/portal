import React, { FC, ReactNode, useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { SideBarContext } from "../../contexts/SideBarContext/SideBarProvider";
import cn from "classnames";

export interface TModalProps {
  trigger?: ReactNode;
  content?: ReactNode;
  title?: string;
}

const Modal: FC<TModalProps> = (props) => {
  const { trigger, content, title } = props;

  const { sidebar_expanded } = useContext(SideBarContext);

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            className={cn(
              "DialogOverlay  fixed inset-0 ",
              sidebar_expanded ? "left-[4rem]" : "left-[15rem]"
            )}
            style={{
              animation:
                "150ms cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running k-eyOShd",
              backgroundColor: "rgba(156, 156, 156, 0.2)",
            }}
          />
          <Dialog.Content
            className={cn(
              "DialogContent bg-white shadow-2xl h-screen fixed top-0  w-[30rem] p-4 border-r",
              sidebar_expanded ? "left-[4rem]" : "left-[15rem]"
            )}
          >
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
