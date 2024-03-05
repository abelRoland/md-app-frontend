import { FormEvent } from 'react'
import { UserType } from './constants'
import Airtable, { FieldSet, Record as AirtableRecord } from 'airtable'
import { TipRecords } from '@/lib/global'

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

export async function retrieveRecords(setRecords: Function) {
  let base = new Airtable({
    apiKey: process.env.AIRTABLE_PRIVATE_KEY,
  }).base(process.env.AIRTABLE_BASE_ID as string)

  return new Promise<void>((resolve, reject) => {
    base(process.env.AIRTABLE_TABLE_NAME as string)
      .select({ maxRecords: 30 })
      .eachPage(
        (
          data: ReadonlyArray<AirtableRecord<FieldSet>>,
          fetchNextPage: () => void
        ) => {
          const formattedData: TipRecords[] = data.map((record) => ({
            id: record.id,
            fields: record.fields as TipRecords['fields'],
          }))
          setRecords((prevRecords: TipRecords[]) => [
            ...prevRecords,
            ...formattedData,
          ])
          fetchNextPage()
        },
        (error) => {
          if (error) {
            reject(error)
          } else {
            resolve()
          }
        }
      )
  })
}

export async function fetchTip(id: string): Promise<TipRecords | null> {
  if (!id) return null

  try {
    const base = new Airtable({
      apiKey: process.env.AIRTABLE_PRIVATE_KEY,
    }).base(process.env.AIRTABLE_BASE_ID as string)

    const record = await base(process.env.AIRTABLE_TABLE_NAME as string).find(
      id
    )

    if (record) {
      return {
        id: record.id,
        fields: {
          tip_kind: record.fields.tip_kind as string,
          tip_title: record.fields.tip_title as string,
          tip_description: record.fields.tip_description as string,
        },
      }
    } else {
      return null
    }
  } catch (error) {
    console.error('Error fetching tip:', error)
    return null
  }
}
