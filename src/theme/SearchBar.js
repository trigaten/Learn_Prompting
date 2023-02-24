import "@kailualabs/multimodal-search/styles.css";
import React from "react";

import { SearchModal } from "@kailualabs/multimodal-search";

export default function SearchBarWrapper() {
  return (
    <SearchModal apiKey="learn-prompting-demo" catalogId="learn-prompting" />
  );
}
