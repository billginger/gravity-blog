import mongoose from 'mongoose';

type SettingType = mongoose.Document & {
  secret: string;
};

const settingSchema = new mongoose.Schema({
  secret: String
}, {
  versionKey: false,
  timestamps: true
});

const Setting = mongoose.model<SettingType>('Setting', settingSchema);

export { SettingType, Setting };
