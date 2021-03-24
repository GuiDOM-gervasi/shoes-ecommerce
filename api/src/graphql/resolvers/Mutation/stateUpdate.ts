import Cart from "#root/db/models/carts";

const updateStateResolver = async (parent, { userId, state }) => {
	
    await Cart.update({
        state,
    },{
		where : {
            userId
        },
	});

    return `Update state to ${state}, successfully`
};

export default updateStateResolver;