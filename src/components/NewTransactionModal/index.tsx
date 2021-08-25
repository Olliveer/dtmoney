import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { TransactionContext } from "../../TransactionsContext";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose(): void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ title, amount, category, type });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    onRequestClose();
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Titulo"
        />

        <input
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          type="number"
          placeholder="Valor"
        />
        <TransactionTypeContainer>
          <RadioBox
            isActive={type === "deposit"}
            type="button"
            onClick={() => setType("deposit")}
            activeColor="green"
          >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            isActive={type === "withdraw"}
            type="button"
            onClick={() => setType("withdraw")}
            activeColor="red"
          >
            <img src={outcomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          type="text"
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
