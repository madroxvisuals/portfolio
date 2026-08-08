export interface ContactFormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const CONTACT_FORM_FIELDS = {
    NAME: 'name',
    EMAIL: 'email',
    SUBJECT: 'subject',
    MESSAGE: 'message',
} as const;
