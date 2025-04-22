import type { Meme } from "@/config/defaultMemeList.ts";

import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Input,
  Button,
  addToast,
} from "@heroui/react";
import { Formik, FormikHelpers } from "formik";

import { validationSchema } from "@/validation";

type EditModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  item: Meme;
  onSave: (updatedMeme: Meme) => void;
};

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onOpenChange,
  item,
  onSave,
}) => {
  const initialValues: Meme = {
    id: item.id,
    name: item.name,
    image: item.image,
    likes: item.likes,
  };

  const handleSubmit = (
    values: Meme,
    { setSubmitting }: FormikHelpers<Meme>,
  ) => {
    onSave({ ...item, ...values });
    addToast({
      title: "Saved successfully",
    });
    setSubmitting(false);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Edit Meme</ModalHeader>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                errors,
                values,
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <ModalBody>
                    <Input
                      isReadOnly
                      label="ID"
                      name="id"
                      value={values.id.toString()}
                      onChange={handleChange}
                    />
                    <Input
                      errorMessage={touched.name && errors.name}
                      isInvalid={touched.name && !!errors.name}
                      label="Name"
                      name="name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Input
                      errorMessage={touched.image && errors.image}
                      isInvalid={touched.image && !!errors.image}
                      label="Image URL"
                      name="image"
                      value={values.image}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Input
                      errorMessage={touched.likes && errors.likes}
                      isInvalid={touched.likes && !!errors.likes}
                      label="Likes"
                      name="likes"
                      type="number"
                      value={values.likes.toString()}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" type="submit">
                      Save
                    </Button>
                  </ModalFooter>
                </form>
              )}
            </Formik>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
