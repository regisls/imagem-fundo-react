export default (props) => {
  // Para retornar algum elemento filho específico
  if (props.test) {
    return props.children;
  } else {
    return false;
  }
};
