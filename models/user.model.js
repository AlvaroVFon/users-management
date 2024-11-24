import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role',
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    loginAttemps: {
      type: Number,
      default: 0,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    updatedAt: {
      type: Date,
      default: null,
    },
  },
  {
    methods: {
      toPublicObject() {
        return {
          id: this._id,
          name: this.name,
          email: this.email,
          role: this.role,
          isVerified: this.isVerified,
          createdAt: this.createdAt,
          updatedAt: this.updatedAt,
        };
      },
    },
  },
);

export const User = model('User', userSchema);
