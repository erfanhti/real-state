import { Schema, model, models } from "mongoose";

const advertisementSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: Number, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ["apartment", "villa", "store", "field"],
    },
    realState: { type: String, required: true },
    constructionDate: { type: Date, required: true },
    rules: { type: [String], default: [] },
    amenities: { type: [String], default: [] },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User_RealState",
    },
    published: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const Advertisement =
  models.Advertisement || model("Advertisement", advertisementSchema);

export default Advertisement;
