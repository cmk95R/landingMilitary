'use client'

import { X } from 'lucide-react'

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#1e1e1e] p-8 rounded-xl shadow-2xl w-full max-w-md border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  )
}