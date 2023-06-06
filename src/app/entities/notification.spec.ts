import { Content } from "./content"
import { Notification } from './notification';

describe("Notification content", () => {
    it('it should be able to create a notification content', () => {
        const notification = new Notification({
            content: new Content('nova solicitação de amiade'),
            category: 'nova solicitação de amiade',
            recepientId: 'example-recipient-id',

        })
        expect(notification).toBeTruthy();
    })

})

