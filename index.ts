import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

console.log('hi')

const main = async () => {
  await prisma.user.create({ data: { name: 'Sven' } })
}

main()
