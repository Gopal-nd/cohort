## How to deploy your application on server

1. create a aws account

### services on aws 
1. ec2  -> a lunix machien

-> we can connect with ssh in the local device
-> them clone the project form git and install package and them run on port
-> you can access with the public ip and port



### what is ?
1. .pretterrc file
2. .pretterrcignore
3. .env
4. .env.example
5. .gitkeep
6. api-error.js -> creating the own customized errors  (Error Class)
7. api-response.js -> constructor
```
class ApiResponse {
    constructor(statusCode, data, message='success'){
        this.statusCode = statusCode;
        this.data = data
        this.message = message
        this.success = true || statusCode <400
    }
}
export {ApiResponse}
```

8. Constance.js ->
```
export const UserRoleEnum ={
    ADMIN:'admin',
    PROJECT_ADMIN:'project_admin',
    MEMBER:'member'
}

export const AvailableUserRoles = Objects.values(userRoleEnum)

export const TaskStatusEnum = {
    TODO:'todo',
    IN_PROGRESS:'in_progress',
    DONE:'done
}
export const AvailableTasks =  Objects.values(TaskStatusEnum)

```

9. async-handle.js 

```
const asyncHandler = (requestHandler) =>{
    return (req,res,next)=>{
        Promise.resolver(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}
export asyncHandler
```

10. node error [errors]('https://nodejs.org/api/errors.html')

11. mongodb hooks  pre and post && userSchem.methods.isPasswordcorrect we can make the custom prototypes and functions

 Userschem.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10)
    next()
 })

 userSchema.methods.isPasswordCorrect = async function(password){
    retrun await bcrypt.compare(password,this.password)
 }


userSchema.methods.generateAccessToken = function(){
  retrun  jwt.sign({_id:this._id,email:this.email,role:this.role}, process.env.ACCECSS_TOKEN_SECRET,{expiresIn:'1d'},{secure:true})
}

userSchema.methods.generateRefreshToken = function(){
  retrun  jwt.sign({_id:this._id}, process.env.ACCECSS_REFRESH_SECRET,{expiresIn:'1d'},{secure:true})
}
 // this can be made