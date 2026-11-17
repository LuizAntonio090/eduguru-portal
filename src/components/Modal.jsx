import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
export default function Modal({ title, children, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const dialog = ref.current
    const previouslyFocused = document.activeElement
    dialog.showModal()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = overflow
      previouslyFocused?.focus()
    }
  }, [])
  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="modal-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal-heading">
        <span className="eyebrow">POR DENTRO DO EDUGURU</span>
        <button className="icon-button" onClick={onClose} aria-label="Fechar detalhes">
          <X size={22} />
        </button>
      </div>
      <h2 id="modal-title">{title}</h2>
      {children}
    </dialog>
  )
}
