import mongoose from 'mongoose';

type SettingType = {
  secret: string;
};

const settingSchema = new mongoose.Schema({
  secret: String
}, {
  versionKey: false,
  timestamps: true
});

const Setting = mongoose.model('Setting', settingSchema);

export { SettingType, Setting };
