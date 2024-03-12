import VideoContainer from '@/components/VideosContainer/VideoContainer'

export default async function Page({ params }: { params: { id: string } }) {
  return <VideoContainer params={params} />
}
