import { FinalProduct } from "#root/db/models/finalproduct";

const updateStock = async (parent, args, context, info) => {
  const { modelId, productId, input } = args;
  await FinalProduct.update(
    { stock: input },
    {
      where: {
        modelId,
        productId,
      },
    }
  );
  return "was modified or added stock !!";
};

export default updateStock;
