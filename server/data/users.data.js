import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Administrator',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'john Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];

export default users;
