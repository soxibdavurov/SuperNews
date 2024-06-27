'use client'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter()
  const deleteImage = async (publicId: string) => {
    const res = await fetch('/api/removeImage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ publicId }),
    })
  }

  const handleDelete = async () => {
    const confirmed = confirm('Are you sure to delete this post?')

    if (confirmed) {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (res.ok) {
          console.log('Post deleted')
          const post = await res.json()
          const { publicId } = post
          await deleteImage(publicId)

          toast.success('Post deleted successfully')
          router.refresh()
        }
      } catch (error) {
        toast.error('Something went wrong')
        console.log(error)
      }
    }
  }

  return (
    <button onClick={handleDelete} className="text-red-600">
      Delete
    </button>
  )
}
