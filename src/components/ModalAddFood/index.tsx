import { Component, createRef, FormEvent, useState } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal";
import { Input } from "../Input";

interface modalAddProps {
  isOpen: boolean,
  onRequestClose: () => void,
  handleAddFood: (food: any) => void
}

export function ModalAddFood({
  isOpen,
  onRequestClose,
  handleAddFood,
}: modalAddProps) {

  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')

  async function handleSubmit() {
    handleAddFood({
      image,
      name,
      price,
      description
    });
    onRequestClose();
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setImage(event.target.value)}/>

        <Input name="name" placeholder="Ex: Moda Italiana" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} />
        <Input name="price" placeholder="Ex: 19.90" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(event.target.value))} />

        <Input name="description" placeholder="Descrição" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}/>
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
