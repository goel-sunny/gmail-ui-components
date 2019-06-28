export interface GridDetailInterface {
    starred: boolean;
    important: boolean;
    contactInfo: string;
    description: MailInfo;
    recieveTime: string;
}

interface MailInfo {
    subject: string;
    content: string;
}