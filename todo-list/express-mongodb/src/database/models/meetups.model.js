const MODEL_NAME = "Meetups";

/**
 * Add User model into DAO
 * @param {object} dao - Data Access Object instance
 * @param {object} dao.db - connection object
 * @param {object} dao.models - models object
 * @param {object} dao.mongoose - mongoose lib singleton object
 */
module.exports = ({ db, models, mongoose }) => {
  const schema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    image: {
      type: String,
      required: false,
      maxLength: 64,
    },
    address: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 64,
    },
    description: {
      type: String,
      required: false,
      maxLength: 256,
    },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: Date.now },
  });

  models[MODEL_NAME] = new mongoose.model(MODEL_NAME, schema, MODEL_NAME);
};
