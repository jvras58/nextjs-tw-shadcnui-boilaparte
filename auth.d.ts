// auth.d.ts
import { Session, JWT } from "@auth/core/types";

declare module "@auth/core/types" {  
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
    };
  }

  interface JWT {
    id: string;
    email: string;
    name: string;
  }
}
