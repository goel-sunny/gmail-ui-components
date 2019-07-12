import { ESettingActions, SettingsActions } from '../actions/settings.action';

import { Inital_ISettings, ISettings } from '../states/settings.state';

export const settingReducers = (state = Inital_ISettings, action: SettingsActions
): ISettings => {

    switch (action.type) {
        case ESettingActions.setGeneralSettings: {
            return {
                ...state,
                generalSettings: action.generalSettings
            }
        };
        case ESettingActions.setLabelSettings: {
            return {
                ...state,
                labelSettings: action.labelSettings
            }
        };

        case ESettingActions.setInboxlSettings: {
            return {
                ...state,
                inboxSettings: action.inboxSettings
            }
        };

        default:
            return state;
    }

}