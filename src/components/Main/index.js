import React from "react";
import Auth from '../Auth';
import Header from "../Header";
import "./style.css";

export default function Main() {
  return (
    <main>
      <Header />
      <Auth />
    </main>
  );
}
