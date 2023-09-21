export const EVENT_TYPE_INPUT_CHANGE = 'Изменение input';
export const EVENT_TYPE_SUBMIT = 'Отправка данных';
export const EVENT_TYPE_SUBMIT_RESPONSE = 'Ответ сервера';

export const createEvent = (type, data, name) => ({
  time: Number(new Date()),
  type,
  data,
  name,
});
