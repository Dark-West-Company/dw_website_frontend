import mitt from 'mitt';

export const eventBus = mitt();

export const events = {
  SHEET_DATA_CHANGED: 'sheetDataChanged',
  FIELD_UPDATED: 'fieldUpdated',
  RELOAD_USER_DATA: 'reloadUserData',
  // Add more event names as needed
};
