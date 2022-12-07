module.exports = [ 
     { 
        userType: 'valid',
        username: 'standard_user',
        password: 'secret_sauce'
    },
    {
        userType: 'problematic',
        username: 'problem_user',
        password: 'secret_sauce'
    },
    {
        userType: 'valid_performance',
        username: 'performance_glitch_user',
        password: 'secret_sauce'
    },
    {
        userType: 'LockedOut',
        username: 'locked_out_user',
        password: 'secret_sauce',
        errorMsg: 'Sorry, this user has been locked out.'
    }
]