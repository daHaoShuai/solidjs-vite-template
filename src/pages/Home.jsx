import Header from '../components/Header'
import { createSignal } from 'solid-js'

export default function Home() {
    const [count, setCount] = createSignal(0)
    return (
        <>
            <Header />
            <div className='flex flex-col'>
                <p className='text-orange-400'>
                    count 的值为 {count()}
                </p>
                <br />
                <button className='btn' onClick={() => setCount(count() + 1)}>count + 1</button>
            </div>
        </>
    )
}