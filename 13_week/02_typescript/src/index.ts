import fs from 'fs'
// npm i @types/node -D
// npm i typescript -D


import http from 'http'
// Note: Importing a TypeScript file directly requires 'allowImportingTsExtensions' to be enabled in tsconfig.json
// or use a bundler/build tool that supports TypeScript imports
import {env} from './env.ts'

async function main() {
    try {
        const PORT = +(env.PORT ?? 8000)
    } catch (error) {
        
    }
}