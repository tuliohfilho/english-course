export const getEnv = 
    (env: string): string => process.env[env] || '';