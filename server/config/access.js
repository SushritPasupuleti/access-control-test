const AccessControl = require('accesscontrol');
const ac = new AccessControl();

let grants = [
    //admin posts
    {
        role: 'admin',
        resource: 'posts',
        action: 'create:any',
    },
    {
        role: 'admin',
        resource: 'posts',
        action: 'read:any',
    },
    {
        role: 'admin',
        resource: 'posts',
        action: 'update:any',
    },
    {
        role: 'admin',
        resource: 'posts',
        action: 'delete:any',
    },
    //admin users
    {
        role: 'admin',
        resource: 'users',
        action: 'create:any',
    },
    {
        role: 'admin',
        resource: 'users',
        action: 'read:any',
    },
    {
        role: 'admin',
        resource: 'users',
        action: 'update:any',
    },
    {
        role: 'admin',
        resource: 'users',
        action: 'delete:any',
    },
    //user post
    {
        role: 'users',
        resource: 'posts',
        action: 'create:own',
    },
    {
        role: 'users',
        resource: 'posts',
        action: 'read:any',
    },
    {
        role: 'users',
        resource: 'posts',
        action: 'update:own',
    },
    {
        role: 'users',
        resource: 'posts',
        action: 'delete:own',
    },
]