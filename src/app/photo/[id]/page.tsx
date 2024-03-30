interface IPhotoIdPageProps {
  params: {
    id: number
  }
}
export default function PhotoIdPage({ params }: IPhotoIdPageProps) {
  return (
    <div>
      <h1>PhotoIdPage: {params.id}</h1>
    </div>
  )
}
