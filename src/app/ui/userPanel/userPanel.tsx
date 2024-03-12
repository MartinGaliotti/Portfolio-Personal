const UserPanel = async () => {
  const simulacion = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return "simulacion";
  };

  const ejemplo = await simulacion();

  return <div>{ejemplo}</div>;
};

export default UserPanel;
