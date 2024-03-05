import React from 'react'
import { Field, Form } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import arrayMutators from 'final-form-arrays'
const Finalformcomponent = () => {
    const handlesubmit = () => {

    }
    return (
        <>

            <Form
                onSubmit={handlesubmit}
                initialValues={{ item: [{ field: "test" }] }}
                mutators={{
                    ...arrayMutators,}}
                render={({ handlesubmit, values }) => (
                    <form onSubmit={() => handlesubmit()}>
                        {console.log(values, 'fiuwheu')}
                        <FieldArray name="answer">
                            {({ fields }) => (
                                fields.map((name, index) => {
                                    return (
                                        <>
                                            {index + 1}
                                            <Field name={`${name}.field`}>
                                                {({ input, meta }) => (
                                                    <input
                                                        {...input}
                                                        type="text"
                                                        placeholder='test field'
                                                    />
                                                )}
                                            </Field>
                                            <button onClick={(e) => {
                                                e.preventDefault()
                                                fields.push({ field: null })
                                            }}>add field</button>
                                            {fields?.length > 1 && <button onClick={(e) => {
                                                e.preventDefault()
                                                fields.remove(index)
                                            }}>remove</button>}
                                        </>
                                    )
                                })
                            )}
                        </FieldArray>

                    </form>
                )}
            />
        </>
    )
}

export default Finalformcomponent