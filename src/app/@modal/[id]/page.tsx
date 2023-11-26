import CardInfo from '@/components/CardInfo/CardInfo';
import Modal from '@/components/Modal/Modal';
import CardDescriptionProps from '@/model/app/id/page';

const CardModal = ({ params }: CardDescriptionProps) => {
  return (
    <>
      <Modal>
        <CardInfo cardId={params.id} />
      </Modal>
    </>
  );
};

export default CardModal;
