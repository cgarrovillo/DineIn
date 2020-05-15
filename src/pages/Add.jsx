import React from 'react'

export default function Add() {
    return (
        <section className="center fullpage" id="add">
            <h2>Add a Menu</h2>
            <p>Found a restaurant with no online prices?
            Add them below and help others make informed decisions.
            </p>
            <form>
                <input type="file" capture="environment" accept="image/*" id="file" />
                <label htmlFor="file" className="clr--primary">Upload a photo...</label>
            </form>
        </section >
    )
}