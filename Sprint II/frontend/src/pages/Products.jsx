import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import ProductsCalendar from "../components/products/ProductsCalendar";
import ProductsDescription from "../components/products/ProductsDescription";
import ProductsFeatures from "../components/products/ProductsFeatures";
import ProductsHeader from "../components/products/ProductsHeader";
import ProductsImg from "../components/products/ProductsImg";
import ProductsLocation from "../components/products/ProductsLocation";
import ProductsPolitics from "../components/products/ProductsPolitics";

const Products = () => {
  return (
    <>
      <Header />
      <ProductsHeader/>
      <ProductsImg/>
      <ProductsDescription/>
      <ProductsFeatures/>
      <ProductsCalendar/>
      <ProductsLocation/>
      <ProductsPolitics/>
      <Footer />
    </>
  );
};

export default Products;
