interface IUserProfileProps {
  params: {
    user: string
  }
}
export default function UserProfilePage({ params }: IUserProfileProps) {
  return (
    <div>
      <h1>UserProfilePage: {params.user}</h1>
    </div>
  )
}
