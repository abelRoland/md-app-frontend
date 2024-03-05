import { useState } from 'react'
import styles from './profile.module.css'
import { useUser } from '@/hooks/use-user'
import { ProfileProps } from '@/lib/constants'
import { handleFormDataChange, handleSubmit } from '@/lib/actions'

export default function Profile({ user }: ProfileProps) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    age: user.age,
    gender: user.gender,
  })
  const [message, setMessage] = useState('')
  const { setUser } = useUser()

  return (
    <div className={styles.contentContainer}>
      <h1 className={styles.header}>Edit your Profile</h1>
      {message && <p className={styles.message}>{message}</p>}
      <form
        onSubmit={(event) =>
          handleSubmit(event, user, formData, setMessage, setUser)
        }
        className={styles.formContainer}
      >
        <label htmlFor="name" className={styles.formHeaders}>
          User name
        </label>
        <input
          type="text"
          required
          id="name"
          name="name"
          className={styles.input}
          value={formData.name}
          onChange={(e) =>
            handleFormDataChange(e, formData, setFormData, 'name')
          }
        />
        <label className={styles.formHeaders} htmlFor="email">
          User email
        </label>
        <input
          type="text"
          required
          id="email"
          name="email"
          className={styles.input}
          value={formData.email}
          onChange={(e) =>
            handleFormDataChange(e, formData, setFormData, 'email')
          }
        />
        <label className={styles.formHeaders} htmlFor="number">
          Age
        </label>
        <input
          type="number"
          required
          id="number"
          name="age"
          className={styles.input}
          value={formData.age}
          onChange={(e) =>
            handleFormDataChange(e, formData, setFormData, 'age')
          }
        />
        <label className={styles.formHeaders}>Gender</label>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="maleGender"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={(e) =>
              handleFormDataChange(e, formData, setFormData, 'gender')
            }
          />
          <span className={styles.genderText}>Male</span>
          <input
            type="radio"
            id="femaleGender"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={(e) =>
              handleFormDataChange(e, formData, setFormData, 'gender')
            }
          />
          <span className={styles.genderText}>Female</span>
          <input
            type="radio"
            id="nonBinaryGender"
            name="gender"
            value="non-binary"
            checked={formData.gender === 'non-binary'}
            onChange={(e) =>
              handleFormDataChange(e, formData, setFormData, 'gender')
            }
          />
          <span className={styles.genderText}>Non-binary</span>
          <input
            type="radio"
            id="notDeclaredGender"
            name="gender"
            value="not-declared"
            checked={formData.gender === 'not-declared'}
            onChange={(e) =>
              handleFormDataChange(e, formData, setFormData, 'gender')
            }
          />
          <span className={styles.genderText}>Not-declared</span>
        </div>

        <input className={styles.button} type="submit" value="Send Request" />
      </form>
    </div>
  )
}
