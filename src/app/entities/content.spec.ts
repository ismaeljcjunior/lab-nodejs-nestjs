import { Content } from "./content"

test('it should be able to create a notification content', () => {
    const content = new Content('Voce recebeu uma notificaçao')

    expect(content).toBeTruthy();
})