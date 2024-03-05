import { FormEvent } from 'react'
import { UserType } from './constants'

export async function fetchMedias(mediaKind: string) {
  let path = `/medias/?${mediaKind}`
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path)
  const json = await res.json()
  return json
}

export async function fetchUsers() {
  let path = '/users'
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path)
  const json = await res.json()
  return json
}

export const handleFormDataChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  formData: any,
  setFormData: React.Dispatch<React.SetStateAction<any>>,
  field: string
) => {
  setFormData({ ...formData, [field]: e.target.value })
}

export async function updateUser(userId: string, formData: FormData) {
  const userData = Object.fromEntries(formData)

  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  }

  try {
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
      throw new Error('Failed to update user.')
    }
    const data = await response.json()
    return { message: 'User updated successfully', data }
  } catch (error) {
    console.error('Failed to update user:', error)
    throw error
  }
}

export const handleSubmit = async (
  event: FormEvent<HTMLFormElement>,
  user: UserType,
  formData: any,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setUser: React.Dispatch<React.SetStateAction<UserType>>
) => {
  event.preventDefault()

  const formDataObject = new FormData(event.target as HTMLFormElement)
  const userId = user._id

  try {
    const response = await updateUser(userId, formDataObject)
    setMessage(response.message)
    setUser(response.data)
  } catch (error) {
    console.error('Failed to update user:', error)
    setMessage('Failed to update user.')
  }
}
