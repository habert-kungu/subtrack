import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    price: {
      type: Number,
      required: [true, "Subscription price  is required"],
      trim: true,
      minLength: [0, "Price must be grater than zero"],
    },
    currency: {
      type: String,
      enum: ["USD", "KES", "GBP"],
      default: "USD",
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
    },
    category: {
      type: String,
      enum: [
        "sports",
        "news",
        "entertainment",
        "finance",
        "technology",
        "politics",
        "other ",
      ],
    },
    paymentMethod: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "cancelled", "expired"],
      default: "active",
    },
    startDate: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => value <= new Date(),
        message: "Start date must be in the past ",
      },
    },
    //validate the value passed in the renewal date
    renewalDate: {
      type: Date,
      validate: {
        validator: (value) => value > this.Date(),
        message: "Renewal date must be after the start date ",
      },
    },
    //referrences pointing to other models in the database
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true },
);

//culculating the renewal date if missing
subscriptionSchema.pre("save", function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(
      this.renewalDate.getDate() + renewalPeriods[this.frequency],
    );
  }
  //update if expired
  if (this.renewalDate < new Date()) {
    this.status = "expired";
  }
  next();
});
//model of the schema
const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;