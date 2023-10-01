Here is the code for the file `nextjs_app/pages/_app.js`:

```javascript
import React from 'react';
import App from 'next/app';

async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/or4cl3ai/Aiden_t5",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
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
```

This code imports the necessary dependencies and defines the `query` function for making API requests to the inference endpoint. It also extends the `App` component from Next.js and renders the `Component` with the `pageProps`.