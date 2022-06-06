import { users } from "./users";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
        await prisma.user.createMany({
            data:users,
        })
}

main()
.catch(e=>{
    console.log(e);
    process.exit(1)
}).finally(()=>{
    prisma.$disconnect();
})