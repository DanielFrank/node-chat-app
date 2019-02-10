var expect = require('expect');
var {Users} = require('./users');

describe('Uers', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        },{
            id: '2',
            name: 'Jen',
            room: 'React Course'
        },{
            id: '3',
            name: 'Bill',
            room: 'Node Course'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Joe',
            room: 'The test room'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);

    });

    it('should return names for "Node Course" room', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Bill']);
    });

    it('should return names for "React Course" room', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '199';
        var user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        var userId = '2999';
        var user = users.getUser(userId);
        expect(user).toNotExist();
    });



});

