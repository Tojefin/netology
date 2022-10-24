import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeadPage from '../src/components/HeadPage'
import NotFoundPage from '../src/components/NotFoundPage'
import CreatePost from '../src/components/CreatePost'
import DisplayPage from '../src/components/DisplayPage'
import EditPage from '../src/components/EditPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeadPage />} />
        <Route path="/posts/new" element={<CreatePost />} />
        <Route path="/posts/:id" element={<DisplayPage />} />
        <Route path="/posts/:id/edit" element={<EditPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}