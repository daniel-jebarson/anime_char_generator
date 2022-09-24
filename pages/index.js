import Head from "next/head";
// import Image from "next/image";
import { Box, Image, Container } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar";
import ThemeSwitcher from "../components/ThemeSwitcher";
export default function Home() {
  return (
    <div>
      <ThemeSwitcher />

      <SearchBar />
    </div>
  );
}
