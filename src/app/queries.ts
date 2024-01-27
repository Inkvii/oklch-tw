export async function getPetQuery(status: string | undefined) {
  const fetcher = await fetch(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)
  if (!fetcher.ok) throw new Error(fetcher.statusText)
  return (await fetcher.json()) as PetModel[]
}

type PetModel = {
  id: string
  category?: {
    id?: number
    name?: string
  }
  name: string
  photoUrls: string[]
  tags?: {
    id?: number
    name?: string
  }[]
  status: "available" | "pending" | "sold"
}
