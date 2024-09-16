import { CardComponent } from "@/components/CardComponent";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <CardComponent
        title="Giải mã giấc mơ"
        onClose={onClose}
        className="bg-white w-1/3 "
      >
        <div className="px-[34px] py-6">
          <p className="mt-4">This is the content of the modal.</p>
        </div>
      </CardComponent>
    </div>
  );
};

export default Modal;
