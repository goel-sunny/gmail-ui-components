import { Action } from '@ngrx/store';
import { IGeneralSettings, IInboxSettings, ILabelSettings } from '../states/settings.state';

export enum ESettingActions {
    setGeneralSettings = '[Settings] Set General Settings',
    setInboxlSettings = '[Settings] Set Inbox Settings',
    setLabelSettings = '[Settings] Set Label Settings'
}

export class SetGeneralSettings implements Action {
    public readonly type = ESettingActions.setGeneralSettings;

    constructor(public generalSettings: IGeneralSettings) {

    }
}

export class SetInboxSettings implements Action {
    public readonly type = ESettingActions.setInboxlSettings;

    constructor(public inboxSettings: IInboxSettings) {

    }
}

export class SetLabelSettings implements Action {
    public readonly type = ESettingActions.setLabelSettings;

    constructor(public labelSettings: ILabelSettings) {

    }
}

export type SettingsActions = SetGeneralSettings | SetLabelSettings | SetInboxSettings;
