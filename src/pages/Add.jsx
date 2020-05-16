import React, { useRef, useState } from 'react'

import { storage } from '../services/firebase'

export default function Add() {
    const [status, setStatus] = useState('Upload a menu')
    // const [resto, setResto] = useState('')

    //Create a ref to access a DOM element
    const fileInput = useRef(null) //<input type='text' />
    const form = useRef(null) // <form></form>

    //Used by the onChange prop to handle changeEvents, like addEventListener('change', )
    function handleUploads() {
        if (form.current.requestSubmit) {
            form.current.requestSubmit()
        }
        else {
            if (form.current.reportValidity()) {
                handleSubmit()
            }
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        setStatus('Uploading...')
        const resto = document.getElementById('resto').value
        console.log(resto)
        //Reference to the node accessible at 'current' attribute of ref
        const files = fileInput.current.files

        //Create a shallow-copied Array from files
        const filesArray = Array.from(files)
        filesArray.map(img => {
            const storageRef = storage.ref()
            const fileRef = storageRef.child(`menus/${resto}/${img.name}`)
            fileRef.put(img).then((snapshot) => {
                console.log(snapshot)
                setStatus('Added!')


            })
        })
    }

    return (
        <section className="center fullpage" id="add">
            <h2>Add a Menu</h2>
            <p>Found a restaurant with no online prices?
            Add them below and help others make informed decisions.
            </p>
            <p>
                To start, enter the name of the restaurant you want to add below
            </p>
            <form name="form" id="form" onSubmit={handleSubmit} ref={form}>
                <input type="text" placeholder="Restaurant" id="resto" required />
                <input type="file" accept="image/*" id="file" multiple
                    ref={fileInput} onChange={handleUploads} required
                />
                <label htmlFor="file" className="clr--primary">{status}</label>
                {/* <button type="submit">Submit</button> */}
            </form>
        </section >
    )
}