import { useState } from "react";
import Modal from "react-modal";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

type HeaderProps = {
  onOpenModalTransactionOpen(): void;
};

export function Header({ onOpenModalTransactionOpen }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenModalTransactionOpen}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
