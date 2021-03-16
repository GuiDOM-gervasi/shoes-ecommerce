export interface form {
  name: string;
  description: string;
  price: number;
  brandId: string;
  CategoriesId: string[];
  ModelsId: string[];
}

export function validateChange(e: any, form: form) {
  switch (e.target.name) {
    case "price":
      return { ...form, price: Number(e.target.value) };

    case "CategoriesId":
    case "ModelId":
      return {
        ...form,
        [e.target.name]: [...form[e.target.name], e.target.value],
      };

    default:
      return { ...form, [e.target.name]: e.target.value };
  }
}

export const check = (e: any) => {
  const span = document.querySelector(".span_" + e.target.name);
  if (!e.target.value) {
    if (span) span.innerHTML = "Todos los campos son obligatorios";
  } else {
    if (span) span.innerHTML = "";
  }
};
