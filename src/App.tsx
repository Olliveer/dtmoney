import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GobalStyle } from "./styles/global";
import { TransactionProvider } from "./contexts/TransactionsContext";

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
    <TransactionProvider>
      <GobalStyle />
      <Header onOpenModalTransactionOpen={handleOpenModalTransactionOpen} />
      <Dashboard />
      <NewTransactionModal
        onRequestClose={handleCloseModalTransaction}
        isOpen={isModalTransactionOpen}
      />
    </TransactionProvider>
  );
}
