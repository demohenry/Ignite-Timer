import { Routes, Route } from 'react-router-dom'
import { DefautlLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { History } from '../pages/History'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefautlLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
      </Route>
    </Routes>
  )
}
