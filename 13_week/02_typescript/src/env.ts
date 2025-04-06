import {z} from 'zod'


const envSchema = z.object({
    PORT:z.string().optional()
})

function createEnv(env:NodeJS.ProcessEnv){
    const validateion = envSchema.safeParse(env)
    if(!validateion.success) throw new Error(validateion.error.message)
        return validateion.data

}


export const env = createEnv(process.env)