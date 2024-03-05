import TipContainer from '@/components/TipsContainer/TipContainer'

export default async function Page({ params }: { params: { id: string } }) {
  return <TipContainer params={params} />
}
