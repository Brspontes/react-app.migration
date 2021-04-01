import { Component, createRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal";
import { Input } from "../Input";

interface modalEditProps {
  isOpen: boolean;
  onRequestClose: () => void;
  handleUpdateFood: (food: any) => void;
  editingFood: any;
}

export function ModalEditFood({
  isOpen,
  onRequestClose,
  handleUpdateFood,
  editingFood,
}: modalEditProps) {
  async function handleSubmit() {
    //handleUpdateFood();
    onRequestClose();
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
