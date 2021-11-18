export class StateService {
    static tasks = [
        {
            id: 1,
            title: 'Doctors appointment',
            date: '5th Feb at 2:30pm',
            shouldSendReminder: true
        },
        {
            id: 2,
            title: 'School meeting',
            date: '6th Feb at 1:30pm',
            shouldSendReminder: true
        },
        {
            id: 3,
            title: 'Food shopping',
            date: '11th Feb at 10:00am',
            shouldSendReminder: false
        }
    ]

    static getTasks() {
        return StateService.tasks
    }
}