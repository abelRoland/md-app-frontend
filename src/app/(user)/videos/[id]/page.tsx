export default async function Page({ params }: { params: { id: string } }) {
  return <h1>{`Video ID: ${params.id}`}</h1>
}
