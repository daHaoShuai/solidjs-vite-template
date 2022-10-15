import { lazy } from 'solid-js'
import { Router, Routes, Route } from '@solidjs/router'

const Home = lazy(() => import('./src/pages/Home'))
const About = lazy(() => import('./src/pages/About'))


export default function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' component={Home}></Route>
                <Route path='/about' component={About}></Route>
            </Routes>
        </Router>
    )
}