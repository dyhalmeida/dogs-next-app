import { Metadata } from 'next'
import PostPhotoForm from '@/components/PostPhotoForm'

export const metadata: Metadata = {
  title: 'Postar | Dog Next',
}

export default function PostPage() {
  return <PostPhotoForm />
}
