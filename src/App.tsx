import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isModalTransactionOpen, setIsModalTransactionOpen] = useState(false);

  function handleOpenModalTransactionOpen() {
    setIsModalTransactionOpen(true);
  }

  function handleCloseModalTransaction() {
    setIsModalTransactionOpen(false);
  }
  return (
    <>
      <GobalStyle />
      <Header onOpenModalTransactionOpen={handleOpenModalTransactionOpen} />
      <Dashboard />
      <NewTransactionModal
        onRequestClose={handleCloseModalTransaction}
        isOpen={isModalTransactionOpen}
      />
    </>
  );
}
