let usersActivity = [
    {user:"op",activityCount:313},
    {user:"Alic",activityCount:45},
    {user:"Bob",activityCount:72},
    {user:"Charlice",activityCount:33},

]


let mostActiveOne = usersActivity.reduce((acc, user)=>user.activityCount>acc.activityCount?user:acc)
console.log(mostActiveOne.user)