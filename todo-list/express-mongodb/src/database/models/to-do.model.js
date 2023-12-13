const MODEL_NAME = 'ToDo';

/**
 * Add User model into DAO
 * @param {object} dao - Data Access Object instance
 * @param {object} dao.db - connection object
 * @param {object} dao.models - models object
 * @param {object} dao.mongoose - mongoose lib singleton object
 */
module.exports = ({ db, models, mongoose }) => {
  const schema = new mongoose.Schema({
    label: {
      type: String, required: true, trim: true, unique: true 
    },
    finished: {
      type: Boolean, required: true, default: false, 
    },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: Date.now }
  });

  models[MODEL_NAME] = new mongoose.model(MODEL_NAME, schema, MODEL_NAME);
};
