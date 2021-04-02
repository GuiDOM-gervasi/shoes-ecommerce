export interface form {
  email: string;
  password: string;
  error: boolean;
}

export function validateChange(e: any, form: form, error: boolean) {
  switch (e.target.name) {
    default:
      return { ...form, [e.target.name]: e.target.value, error };
  }
}

export const check = (e: any, form: form) => {
  const span = document.querySelector(".span_" + e.target.name);
  if (!e.target.value) {
    if (span) span.innerHTML = "Todos los campos son obligatorios";
    return true;
  } else {
    if (span) span.innerHTML = "";
    for (const prop in form) {
      if ((Array.isArray(form[prop]) || typeof form[prop] === 'string') && !form[prop].length) return true;
      if (typeof form[prop] === 'number' && !form[prop]) return true;
    }
    return false;
  }
};
