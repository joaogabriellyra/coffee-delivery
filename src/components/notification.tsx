import { useEffect } from 'react'

interface NotificationProps {
  message: string
  onClose: () => void
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-[#8047F8] text-white px-6 py-3 rounded-lg shadow-lg text-lg animate-fade-in-out">
        {message}
      </div>
    </div>
  )
}

export default Notification
