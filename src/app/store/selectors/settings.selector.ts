import { createSelector, createFeatureSelector } from '@ngrx/store';

import { ISettings, IGeneralSettings, IInboxSettings, ILabelSettings } from '../states/settings.state';


export const generalSettingsList = createFeatureSelector<ISettings, IGeneralSettings>('generalSettings');

export const inboxSettingsList = createFeatureSelector<ISettings, IInboxSettings>('inboxSettings');

export const labelSettingsList = createFeatureSelector<ISettings, ILabelSettings>('labelSettings');