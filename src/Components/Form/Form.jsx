import { Input } from './Exports'
import { useState } from 'react'

function Form() {
    const [title, setTitle] = useState("")
    const [notes, setNotes] = useState([])
    const submitHandler = (e) => {
        e.preventDefault();
        const newNote = {
            title,
            id: Date.now()
        };
        setTitle("")
        setNotes((prevNotes) => [...prevNotes, newNote])
    }
    return (
        <>
            <form class="flex justify-center my-5" onSubmit={submitHandler}>
                <Input title={title} onChange={(e) => { setTitle(e.target.value) }} />
                <button type="submit">save</button>
            </form>
            {notes?.map(item =>
                <div key={item.id}>
                    {item.title}
                </div>)}
        </>
    )
}

export default Form
