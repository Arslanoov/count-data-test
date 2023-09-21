import { delay } from '@/utils/delay';

export const getForm = async () => {
  await delay(1000);

  try {
    return JSON.parse(localStorage.getItem('form'));
  } catch (e) {
    return {};
  }
};

export const saveForm = async (values = {}) => {
  let nonce = 1;
  const currentForm = await getForm();
  if (currentForm.nonce) {
    nonce = currentForm.nonce + 1;
  }

  if (values.sum % 2 !== 0) {
    return {
      success: false,
      message: 'Сумма должна быть четной',
    };
  }

  localStorage.setItem('form', JSON.stringify({
    ...values,
    nonce,
  }));

  return { success: true };
};
