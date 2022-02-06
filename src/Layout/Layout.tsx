import React from "react";
import { Header } from "../Components/Header/Header";
import {Services} from '../Components/Services/Services'
import {Reviews} from '../Components/Reviews/Reviews'
import {Footer} from '../Components/Footer/Footer'
export const Layout = () => {
  return (
    <div>
      <Header />
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
};
