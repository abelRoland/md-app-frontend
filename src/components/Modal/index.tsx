import styles from './modal.module.css'
import Loading from '../Loading'

type ModalProps = {
  open: boolean
  onClick: React.MouseEventHandler<HTMLDivElement>
  message: string
  loading: boolean
}

export default function Modal({ open, onClick, message, loading }: ModalProps) {
  return (
    <div
      className={
        open ? styles.modalBackgroundOpen : styles.modalBackgroundClosed
      }
      onClick={onClick}
    >
      {loading ? (
        <Loading />
      ) : (
        <div className={open ? styles.modalOpen : styles.modalClosed}>
          <p>{message}</p>
        </div>
      )}
    </div>
  )
}
