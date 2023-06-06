import { Content } from "../entities/content";

export interface INotificationProps { 
    recepientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}