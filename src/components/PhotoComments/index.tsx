'use client'

import React from 'react'
import styles from './PhotoComments.module.css'
import { IComment } from '@/server-actions/photos/get-photo'

type IPhotoComments = {
  single: boolean
  id: number
  comments: IComment[]
}

const PhotoComments = (props: IPhotoComments) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const commentsSection = React.useRef<HTMLUListElement>(null)

  React.useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight
    }
  }, [comments])

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
      >
        {props.comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PhotoComments
