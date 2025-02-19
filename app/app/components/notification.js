"use client";

export default function Notification({ message }) {
  return <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-blue-300 text-white px-4 py-2 rounded shadow-lg z-50">{message}</div>;
}
