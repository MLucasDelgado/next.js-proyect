import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma'

export const GET = async (request, { params }) => {
    try {
        const findTask = await prisma.task.findUnique({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json(findTask)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}

export const PUT = async(request, { params }) => {
    const data = await request.json()
    const taskUpdated = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: {
            title: data.title,
            description: data.description
            // tambien puede ser data: data, ya que las propiedades se encuentran dentro de data.
        }
    })
    return NextResponse.json(taskUpdated)
}

export const DELETE = async (request, { params }) => {
    try {
        const deleteTask = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json(deleteTask)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}