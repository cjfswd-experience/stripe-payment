declare global {
    namespace NodeJS  {
        interface ProcessEnv {
            NEXT_PUBLIC_STRIPE: string;
            PRIVATE_STRIPE: string;
        }
    }
}

export {}