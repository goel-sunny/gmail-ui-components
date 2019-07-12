export interface ISettings {
    generalSettings: IGeneralSettings;
    labelSettings: ILabelSettings;
    inboxSettings: IInboxSettings;
}

export interface IGeneralSettings {
    language: ILanguage;  // for Internationalisation.
    phoneNo: IphoneNo;
    paggingSize: number;
    defaultReplyBehaviour: EDefaultReplyBehaviour;
    hoverActions: boolean; // display hover actions  
    dynamicEmails: boolean;
    smartCompose: boolean; // add AI while composing
}

export interface ILabelSettings {
    inbox: boolean;
    starred: boolean;
    snoozed: boolean;
    important: boolean;
    sent: boolean;
    chats: boolean;
    draft: boolean;
    allMails: boolean;
    spam: boolean;
    trash: boolean;
    newLabels: CreateNewLabels[]
}

export interface IInboxSettings {
    inboxType: EInboxType;
    categories: ICategoriesType;
    importanceMarker: IImportanceMarker;
    filterMailOverride: boolean;
}

// for Internationalisation.
export interface ILanguage {
    displayLanguage: string;
    enableInputTools: boolean;
    rtoLEdiiting: boolean;
    ltorEditing: boolean
}

// for country code specification
export interface IphoneNo {
    countryCode: string;
}

// Default reply behaviour when click on reply button
export enum EDefaultReplyBehaviour {
    REPLY = 0,
    REPLYALL
}

export interface CreateNewLabels {
    name: string;
    visible: boolean;
}


// inbox type
export enum EInboxType {
    DEFAULT = 1,
    IMPORTANT_FIRST,
    UNREAD_FIRST,
    STARRED_FIRST,
    PRIORITY_INBOX
}

// tabular categories
export interface ICategoriesType {
    primary: boolean;
    social: boolean;
    promotions: boolean;
    updates: boolean;
    forums: boolean;
    includeStarredPrimary: boolean;
}

// importance Marker
export interface IImportanceMarker {
    visibleMarker: boolean;
    pastActionVisibility: boolean;
}


// Initial state
export const Inital_ISettings: ISettings = {
    generalSettings: null,
    labelSettings: null,
    inboxSettings: null
}
