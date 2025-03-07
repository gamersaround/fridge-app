import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  notificationsEnabled: boolean;
  notificationDays: number;
  darkMode: boolean;
  language: string;
}

const initialState: SettingsState = {
  notificationsEnabled: true,
  notificationDays: 3,
  darkMode: false,
  language: 'en',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleNotifications: (state) => {
      state.notificationsEnabled = !state.notificationsEnabled;
    },
    setNotificationDays: (state, action: PayloadAction<number>) => {
      state.notificationDays = action.payload;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { 
  toggleNotifications, 
  setNotificationDays, 
  toggleDarkMode, 
  setLanguage 
} = settingsSlice.actions;

export default settingsSlice.reducer;