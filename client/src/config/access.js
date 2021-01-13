const grants = [
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
        role: 'user',
        resource: 'posts',
        action: 'create:own',
    },
    {
        role: 'user',
        resource: 'posts',
        action: 'read:any',
    },
    {
        role: 'user',
        resource: 'posts',
        action: 'update:own',
    },
    {
        role: 'user',
        resource: 'posts',
        action: 'delete:own',
    },
]

module.exports.Grants = grants;