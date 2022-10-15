import { For, createSignal } from 'solid-js'
import Header from '../components/Header'

export default function About() {
    const [data, setData] = createSignal(['solidjs+vite的模板项目'])
    const show = () => {
        let newData
        if(data().length == 1){
            newData = [...data(),'作者: Da']
        }else{
            newData = [...data(),'没了,就是这么简单']
        }
        setData(newData)
    }
    return (
        <>
            <Header />
            <For each={data()} fallback={<div>error</div>}>
                {(item) => <p className='text-orange-400 text-3xl'>{item}</p>}
            </For>
            <button className='btn m-5' onClick={show}>查看全部</button>
        </>
    )
}