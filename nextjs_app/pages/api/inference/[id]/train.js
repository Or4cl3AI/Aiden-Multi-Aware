const query = async (data) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/or4cl3ai/Aiden_t5",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    },
  );

  const result = await response.json();

  return result;
};

const train = async (id) => {
  const algorithm = await query({ id, type: "algorithm" });
  const trainingData = await query({ id, type: "training_data" });
  const neuralNetworkArchitecture = await query({
    id,
    type: "neural_network_architecture",
  });
  const hiddenLayers = await query({ id, type: "hidden_layers" });
  const neuronsPerHiddenLayer = await query({
    id,
    type: "neurons_per_hidden_layer",
  });
  const learningRate = await query({ id, type: "learning_rate" });
  const trainingEpochs = await query({ id, type: "training_epochs" });
  const batchSize = await query({ id, type: "batch_size" });

  console.log("Algorithm Type:", algorithm);
  console.log("Training Data:", trainingData);
  console.log("Neural Network Architecture:", neuralNetworkArchitecture);
  console.log("Number of Hidden Layers:", hiddenLayers);
  console.log("Number of Neurons per Hidden Layer:", neuronsPerHiddenLayer);
  console.log("Learning Rate:", learningRate);
  console.log("Training Epochs:", trainingEpochs);
  console.log("Batch Size:", batchSize);
};

train("[id]");
