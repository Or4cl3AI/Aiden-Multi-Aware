import React from "react";
import App from "next/app";

async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/or4cl3ai/Aiden_multi_aware",
    {
      headers: { Authorization: "Bearer YOUR_API_KEY" },
      method: "POST",
      body: JSON.stringify(data),
    },
  );

  const result = await response.json();

  return result;
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
