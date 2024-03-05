export default async function Page({ params }: { params: { id: string } }) {
    return <h1>{`Link ID: ${params.id}`}</h1>;
  }