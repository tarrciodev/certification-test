import { prisma } from "../../config/prisma";

interface Skill {
    name: string;
    description: string;
}
export async function createSkillsService(data: Skill) {
    const skillExists = await prisma.skill.findUnique({
        where: {
            name: data.name,
        },
    });
    if (skillExists) {
        throw new Error("Skill already exists");
    }
    const createdSkill = await prisma.skill.create({
        data,
    });
    return createdSkill;
}
