"use server";

import prisma from '@/lib/prisma';
import { currentUser } from "@clerk/nextjs";

class UserNotFoundErr extends Error{}

export async function GetFormStats(){
    const user = await currentUser()
    if (!user) {
        throw new UserNotFoundErr
    }

    const stats = await prisma.form.aggregate({
        where: {
            userId: user.id,
        },
        _sum: {
            visits: true,
            submissions: true
            
        }
    })

    const visits = stats._sum.

}