// ================================================================================

// export const updateNoteSchema = {
//   [Segments.PARAMS]: Joi.object({
//     noteId: Joi.string().custom(objectIdValidator).required(),
//   }),
//   [Segments.BODY]: Joi.object({
//     title: Joi.string().min(1),
//     content: Joi.string().allow(''),
//     tag: Joi.string().valid(...TAGS),
//   }).min(1),
// };

// isValidObjectId(value) — це утиліта з Mongoose, яка перевіряє,
// чи рядок відповідає формату MongoDB ObjectId.
import { isValidObjectId } from 'mongoose';

// Кастомний валідатор для ObjectId
// Перевіряє корректність ID
export const objectIdValidator = (value, helpers) => {
  // Якщо isValidObjectId повертає false,
  // ми викликаємо helpers.message('Invalid id format'), щоб створити помилку в Joi.
  // Якщо все гаразд, функція просто повертає значення далі.
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};
