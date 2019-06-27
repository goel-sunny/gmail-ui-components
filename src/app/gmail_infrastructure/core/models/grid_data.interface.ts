export interface GridDetailInterface {
    contactInfo: string;
    description: MailInfo;
    recieveTime: string;
    actionEnable: boolean;

}

interface MailInfo {
    subject: string;
    content: string;
}