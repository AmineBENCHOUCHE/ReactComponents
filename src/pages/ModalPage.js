import { useState } from "react";
import Button from "../components/Button";

import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }
  function handleClose() {
    setShowModal(false);
  }
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        {" "}
        I accept{" "}
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar} showModal={showModal}>
      <p className="font-semibold text-xl">
        Here is some important information that I'd like to review
      </p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nemo
        fugit repellendus, iure deserunt labore sunt illo quod optio eligendi
        corporis, odit quisquam minus unde maxime distinctio cumque consequuntur
        pariatur et, maiores porro sit molestiae soluta numquam. Animi enim
        placeat vitae expedita, accusamus id eos repudiandae quibusdam neque
        nulla officiis laudantium optio rerum explicabo laboriosam excepturi
        inventore veritatis! Molestiae culpa error asperiores vero beatae
        molestias natus, nihil quam nesciunt. Cupiditate at omnis iusto
        molestias quis rem soluta amet dolore. Asperiores error cupiditate
        facere ea inventore deleniti voluptate earum iure! Quidem, ipsum! Vitae
        fugiat animi tempore esse perferendis dolorum similique quas!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nemo
        fugit repellendus, iure deserunt labore sunt illo quod optio eligendi
        corporis, odit quisquam minus unde maxime distinctio cumque consequuntur
        pariatur et, maiores porro sit molestiae soluta numquam. Animi enim
        placeat vitae expedita, accusamus id eos repudiandae quibusdam neque
        nulla officiis laudantium optio rerum explicabo laboriosam excepturi
        inventore veritatis! Molestiae culpa error asperiores vero beatae
        molestias natus, nihil quam nesciunt. Cupiditate at omnis iusto
        molestias quis rem soluta amet dolore. Asperiores error cupiditate
        facere ea inventore deleniti voluptate earum iure! Quidem, ipsum! Vitae
        fugiat animi tempore esse perferendis dolorum similique quas!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nemo
        fugit repellendus, iure deserunt labore sunt illo quod optio eligendi
        corporis, odit quisquam minus unde maxime distinctio cumque consequuntur
        pariatur et, maiores porro sit molestiae soluta numquam. Animi enim
        placeat vitae expedita, accusamus id eos repudiandae quibusdam neque
        nulla officiis laudantium optio rerum explicabo laboriosam excepturi
        inventore veritatis! Molestiae culpa error asperiores vero beatae
        molestias natus, nihil quam nesciunt. Cupiditate at omnis iusto
        molestias quis rem soluta amet dolore. Asperiores error cupiditate
        facere ea inventore deleniti voluptate earum iure! Quidem, ipsum! Vitae
        fugiat animi tempore esse perferendis dolorum similique quas!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nemo
        fugit repellendus, iure deserunt labore sunt illo quod optio eligendi
        corporis, odit quisquam minus unde maxime distinctio cumque consequuntur
        pariatur et, maiores porro sit molestiae soluta numquam. Animi enim
        placeat vitae expedita, accusamus id eos repudiandae quibusdam neque
        nulla officiis laudantium optio rerum explicabo laboriosam excepturi
        inventore veritatis! Molestiae culpa error asperiores vero beatae
        molestias natus, nihil quam nesciunt. Cupiditate at omnis iusto
        molestias quis rem soluta amet dolore. Asperiores error cupiditate
        facere ea inventore deleniti voluptate earum iure! Quidem, ipsum! Vitae
        fugiat animi tempore esse perferendis dolorum similique quas!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nemo
        fugit repellendus, iure deserunt labore sunt illo quod optio eligendi
        corporis, odit quisquam minus unde maxime distinctio cumque consequuntur
        pariatur et, maiores porro sit molestiae soluta numquam. Animi enim
        placeat vitae expedita, accusamus id eos repudiandae quibusdam neque
        nulla officiis laudantium optio rerum explicabo laboriosam excepturi
        inventore veritatis! Molestiae culpa error asperiores vero beatae
        molestias natus, nihil quam nesciunt. Cupiditate at omnis iusto
        molestias quis rem soluta amet dolore. Asperiores error cupiditate
        facere ea inventore deleniti voluptate earum iure! Quidem, ipsum! Vitae
        fugiat animi tempore esse perferendis dolorum similique quas!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nemo
        fugit repellendus, iure deserunt labore sunt illo quod optio eligendi
        corporis, odit quisquam minus unde maxime distinctio cumque consequuntur
        pariatur et, maiores porro sit molestiae soluta numquam. Animi enim
        placeat vitae expedita, accusamus id eos repudiandae quibusdam neque
        nulla officiis laudantium optio rerum explicabo laboriosam excepturi
        inventore veritatis! Molestiae culpa error asperiores vero beatae
        molestias natus, nihil quam nesciunt. Cupiditate at omnis iusto
        molestias quis rem soluta amet dolore. Asperiores error cupiditate
        facere ea inventore deleniti voluptate earum iure! Quidem, ipsum! Vitae
        fugiat animi tempore esse perferendis dolorum similique quas!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nemo
        fugit repellendus, iure deserunt labore sunt illo quod optio eligendi
        corporis, odit quisquam minus unde maxime distinctio cumque consequuntur
        pariatur et, maiores porro sit molestiae soluta numquam. Animi enim
        placeat vitae expedita, accusamus id eos repudiandae quibusdam neque
        nulla officiis laudantium optio rerum explicabo laboriosam excepturi
        inventore veritatis! Molestiae culpa error asperiores vero beatae
        molestias natus, nihil quam nesciunt. Cupiditate at omnis iusto
        molestias quis rem soluta amet dolore. Asperiores error cupiditate
        facere ea inventore deleniti voluptate earum iure! Quidem, ipsum! Vitae
        fugiat animi tempore esse perferendis dolorum similique quas!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nemo
        fugit repellendus, iure deserunt labore sunt illo quod optio eligendi
        corporis, odit quisquam minus unde maxime distinctio cumque consequuntur
        pariatur et, maiores porro sit molestiae soluta numquam. Animi enim
        placeat vitae expedita, accusamus id eos repudiandae quibusdam neque
        nulla officiis laudantium optio rerum explicabo laboriosam excepturi
        inventore veritatis! Molestiae culpa error asperiores vero beatae
        molestias natus, nihil quam nesciunt. Cupiditate at omnis iusto
        molestias quis rem soluta amet dolore. Asperiores error cupiditate
        facere ea inventore deleniti voluptate earum iure! Quidem, ipsum! Vitae
        fugiat animi tempore esse perferendis dolorum similique quas!
      </p>
    </div>
  );
};
export default ModalPage;
