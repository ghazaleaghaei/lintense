import { Input } from './Exports'
import { useState } from 'react'

function Form() {
    const [title, setTitle] = useState("")
    const submitHandler=(e)=>{e.preventDefault()}
    return (
        <form class="flex justify-center my-5" onSubmit={submitHandler}>
            <Input title={title} onChange={(e) => { setTitle(e.target.value) }} />
        </form>
    )
}

export default Form
