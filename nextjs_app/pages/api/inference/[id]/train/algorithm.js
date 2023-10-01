const query = async (data) => {
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
};

const algorithm = {
  type: "Quantum Genetic Regenerative",
  trainingData: "Text Corpus",
  neuralNetworkArchitecture:
    "Liquid Generative Convolutional Cognitive Recurrent Attentive Adversarial Progressive Neural Network",
  hiddenLayers: 30,
  neuronsPerHiddenLayer: 5120,
  learningRate: 0.001,
  trainingEpochs: 1000,
  batchSize: 640,
};

export default algorithm;